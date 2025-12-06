import { CITY_RULES } from '../constants';
import { AnalysisResult, BinDefinition, Language, GeneralRule } from '../types';
import { identifyImageWithGemini, findBestMatchWithGemini } from './geminiService';
import { GENERAL_RULES } from '../data_general_rules';

// Helper to map specific city data strings (like Linz's German names) to canonical bin IDs
const normalizeBinKey = (key: string): string => {
  const k = key.toLowerCase().trim();

  // Canonical keys already
  if (['plastic', 'paper', 'glass', 'bio', 'metal', 'rest', 'asz'].includes(k)) return k;

  // Map German descriptions found in data_linz.ts (and potentially others) to canonical keys
  if (k === 'restabfall' || k === 'restmüll') return 'rest';
  if (k === 'asz' || k === 'recycling center' || k === 'altstoffsammelzentrum') return 'asz';
  if (k.includes('gelbe tonne') || k.includes('gelber sack') || k.includes('yellow bag') || k.includes('kunststoff')) return 'plastic';
  if (k.includes('altpapier') || k.includes('waste paper') || k.includes('papier') || k === 'karton') return 'paper';
  if (k.includes('altglas') || k.includes('glass waste') || k.includes('glas')) return 'glass';
  if (k.includes('biotonne') || k.includes('bioabfall') || k.includes('organic')) return 'bio';
  if (k.includes('metall') || k.includes('metal')) return 'metal';

  return k;
};

// Heuristic to find a relevant general rule tip based on the item name and the found bins
const findHelpfulTip = (itemName: string, bins: BinDefinition[]): GeneralRule | undefined => {
  const lowerItem = itemName.toLowerCase();
  
  // Helper to check if item matches any keywords of a rule
  const matchesRule = (ruleId: string): boolean => {
    const rule = GENERAL_RULES.find(r => r.id === ruleId);
    if (!rule || !rule.keywords) return false;
    return rule.keywords.some(k => lowerItem.includes(k));
  };

  // 1. High Priority: Hazardous / Special Items based on keywords
  // These should trigger even if the bin might be generic
  if (matchesRule('batteries')) return GENERAL_RULES.find(r => r.id === 'batteries');
  if (matchesRule('medicines')) return GENERAL_RULES.find(r => r.id === 'medicines');
  if (matchesRule('lightbulbs') && !lowerItem.includes('shade') && !lowerItem.includes('schirm')) return GENERAL_RULES.find(r => r.id === 'lightbulbs');
  if (matchesRule('oil')) return GENERAL_RULES.find(r => r.id === 'oil');
  if (matchesRule('electronics')) return GENERAL_RULES.find(r => r.id === 'electronics');
  if (matchesRule('clothing')) return GENERAL_RULES.find(r => r.id === 'clothing');

  // 2. Medium Priority: Based on the Bin Type determined
  if (bins.length > 0) {
    const mainBin = bins[0]; // Usually the first one is the primary
    const binIcon = mainBin.icon;

    if (binIcon === 'plastic' || binIcon === 'metal') {
      // Check for Pfand (Deposit) - mainly for bottles and cans
      if (matchesRule('pfand')) {
         const pfand = GENERAL_RULES.find(r => r.id === 'pfand');
         if (pfand) return pfand;
      }

      // Explicitly show Plastic tip for plastic bin items, as requested
      if (binIcon === 'plastic') {
        return GENERAL_RULES.find(r => r.id === 'plastic');
      }
    }
    
    if (binIcon === 'glass') {
      return GENERAL_RULES.find(r => r.id === 'glass');
    }
    if (binIcon === 'bio') {
      return GENERAL_RULES.find(r => r.id === 'organic');
    }
    if (binIcon === 'paper') {
      if (matchesRule('boxes')) {
        return GENERAL_RULES.find(r => r.id === 'boxes');
      }
    }
  }

  // 3. Fallback: Check keywords if no specific bin logic triggered (e.g. for ambiguous bins)
  if (matchesRule('plastic')) return GENERAL_RULES.find(r => r.id === 'plastic');

  return undefined;
};

export const findBinForItem = async (cityKey: string, itemName: string, language: Language): Promise<AnalysisResult | null> => {
  const city = CITY_RULES[cityKey];
  if (!city) return null;

  const mappings = city.mappings[language];
  if (!mappings) return null;

  // Normalize input item name
  const normalizedItem = itemName.toLowerCase().trim();

  // 1. Prepare Case-Insensitive Lookup
  const lowerCaseMap = new Map<string, string>();
  const allKeys = Object.keys(mappings);
  for (const key of allKeys) {
    lowerCaseMap.set(key.toLowerCase(), key);
  }

  // Helper to resolve bin definitions from keys (handling normalization)
  const resolveBins = (keys: string[]): BinDefinition[] => {
    return keys
      .map(k => {
        const normalizedKey = normalizeBinKey(k);
        return city.bins[normalizedKey];
      })
      .filter((b): b is BinDefinition => !!b); // Type guard to remove undefined
  };

  let result: AnalysisResult | null = null;

  // 2. Exact Match (Case-Insensitive)
  const exactKey = lowerCaseMap.get(normalizedItem);
  if (exactKey) {
    const rawBinKeys = mappings[exactKey];
    const bins = resolveBins(rawBinKeys);
    if (bins.length > 0) {
      result = { bins, matchedItemName: exactKey };
    }
  }

  // 3. Singular/Plural Heuristic (Simple)
  if (!result && normalizedItem.length > 3) {
      let singularKey: string | null = null;
      if (normalizedItem.endsWith('s')) {
          singularKey = lowerCaseMap.get(normalizedItem.slice(0, -1)) || null;
      }
      if (!singularKey && normalizedItem.endsWith('es')) {
          singularKey = lowerCaseMap.get(normalizedItem.slice(0, -2)) || null;
      }

      if (singularKey) {
        const rawBinKeys = mappings[singularKey];
        const bins = resolveBins(rawBinKeys);
        if (bins.length > 0) {
           result = { bins, matchedItemName: singularKey };
        }
      }
  }

  // 4. AI Semantic Match
  if (!result) {
    const aiMatches = await findBestMatchWithGemini(normalizedItem, allKeys);

    if (aiMatches && aiMatches.length > 0) {
      if (aiMatches.length === 1) {
        const bestKey = aiMatches[0];
        const rawBinKeys = mappings[bestKey];
        const bins = resolveBins(rawBinKeys);
        
        if (bins.length > 0) {
          result = {
            bins,
            matchedItemName: bestKey,
            confidence: 0.8
          };
        }
      } else {
        return {
          matchedItemName: normalizedItem,
          alternatives: aiMatches
        };
      }
    }
  }

  // 5. Post-Processing: Sort Bins and Attach Tips
  if (result && result.bins) {
    // Sort Bins: Ensure ASZ (Recycling Center) is always last if multiple bins exist
    result.bins.sort((a, b) => {
      if (a.icon === 'asz' && b.icon !== 'asz') return 1;
      if (a.icon !== 'asz' && b.icon === 'asz') return -1;
      return 0;
    });

    const tip = findHelpfulTip(result.matchedItemName, result.bins);
    if (tip) {
      result.helpfulTip = tip;
    }
  }

  return result;
};

export const processImage = async (file: File, cityKey: string, language: Language): Promise<AnalysisResult | null> => {
  const base64Str = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

  const identifiedItem = await identifyImageWithGemini(base64Str, language);
  if (!identifiedItem) return null;

  return await findBinForItem(cityKey, identifiedItem, language);
};