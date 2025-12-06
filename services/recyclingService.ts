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
  
  // 1. High Priority: Hazardous / Special Items based on keywords
  
  // Clothing & Textiles
  if (['cloth', 'kleidung', 'textil', 'shoe', 'schuh', 'shirt', 'hose', 'dress', 'jack', 'coat', 'garment', 'sneaker', 'boot'].some(k => lowerItem.includes(k))) {
    return GENERAL_RULES.find(r => r.id === 'clothing');
  }

  // Medicines
  if (['medicin', 'medikament', 'arznei', 'pill', 'pharmacy', 'apotheke', 'drug', 'tablet'].some(k => lowerItem.includes(k))) {
    return GENERAL_RULES.find(r => r.id === 'medicines');
  }

  // Lightbulbs
  if (['bulb', 'birne', 'lamp', 'leucht', 'light', 'licht', 'neon', 'led'].some(k => lowerItem.includes(k)) && !lowerItem.includes('shade') && !lowerItem.includes('schirm')) {
    return GENERAL_RULES.find(r => r.id === 'lightbulbs');
  }

  // Batteries
  if (lowerItem.includes('battery') || lowerItem.includes('batterie') || lowerItem.includes('akku')) {
    return GENERAL_RULES.find(r => r.id === 'batteries');
  }
  // Oil / Fat
  if (lowerItem.includes('oil') || lowerItem.includes('öl') || lowerItem.includes('fat') || lowerItem.includes('fett')) {
    return GENERAL_RULES.find(r => r.id === 'oil');
  }
  // Electronics
  if (['electric', 'elektro', 'phone', 'handy', 'computer', 'tv', 'cable', 'kabel', 'printer', 'drucker', 'device', 'gerät'].some(k => lowerItem.includes(k))) {
    return GENERAL_RULES.find(r => r.id === 'electronics');
  }

  // 2. Medium Priority: Based on the Bin Type determined
  if (bins.length > 0) {
    const mainBin = bins[0]; // Usually the first one is the primary
    const binIcon = mainBin.icon;

    if (binIcon === 'plastic' || binIcon === 'metal') {
      // Check for Pfand (Deposit) - mainly for bottles and cans
      if (['bottle', 'flasche', 'can', 'dose'].some(k => lowerItem.includes(k))) {
         const pfand = GENERAL_RULES.find(r => r.id === 'pfand');
         if (pfand) return pfand;
      }

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
      // Only show box tip if it looks like a box, otherwise generic paper rule? 
      // The 'boxes' rule specifically talks about folding boxes.
      if (lowerItem.includes('box') || lowerItem.includes('karton') || lowerItem.includes('pizza') || lowerItem.includes('packet')) {
        return GENERAL_RULES.find(r => r.id === 'boxes');
      }
    }
  }

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

  // 5. Attach Helpful Tip if result found
  if (result && result.bins) {
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