import { CITY_RULES } from '../constants';
import { AnalysisResult, BinDefinition, Language, GeneralRule } from '../types';
import { identifyImageWithGemini, findBestMatchWithGemini, findRelevantGeneralRule } from './geminiService';
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

export const findBinForItem = async (cityKey: string, itemName: string, language: Language): Promise<AnalysisResult | null> => {
  // Backend Input Validation
  const normalizedItem = itemName.trim().toLowerCase();
  if (normalizedItem.length < 2 || normalizedItem.length > 100) {
    console.warn("Input validation failed: Length must be between 2 and 100 characters.");
    return null;
  }

  const city = CITY_RULES[cityKey];
  if (!city) return null;

  const mappings = city.mappings[language];
  if (!mappings) return null;

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
            confidence: 0.95
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

    // Use Gemini to match the most relevant general rule/tip
    // We send English titles/descriptions to the model for better matching
    const ruleData = GENERAL_RULES.map(r => ({
        id: r.id,
        title: r.title.en,
        description: r.description.en
    }));

    const tipId = await findRelevantGeneralRule(result.matchedItemName, ruleData);
    
    if (tipId) {
        result.helpfulTip = GENERAL_RULES.find(r => r.id === tipId);
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