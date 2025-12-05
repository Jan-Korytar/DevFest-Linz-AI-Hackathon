import { CITY_RULES } from '../constants';
import { AnalysisResult, BinDefinition } from '../types';
import { identifyImageWithGemini, findBestMatchWithGemini } from './geminiService';

export const findBinForItem = async (cityKey: string, itemName: string): Promise<AnalysisResult | null> => {
  const city = CITY_RULES[cityKey];
  if (!city) return null;

  // Normalize input
  const normalizedItem = itemName.toLowerCase().trim();

  // ---------------------------------------------------------
  // 1. Exact Match (with singular fallback)
  // ---------------------------------------------------------
  
  // Direct match
  if (city.mappings[normalizedItem]) {
    const binKeys = city.mappings[normalizedItem];
    const bins: BinDefinition[] = binKeys.map(key => city.bins[key]).filter(Boolean);
    return {
      bins: bins,
      matchedItemName: normalizedItem
    };
  }

  // Singular check (e.g. "bottles" -> "bottle")
  // Simple heuristic: remove trailing 's' or 'es'
  if (normalizedItem.length > 3) {
      let singularItem: string | null = null;
      if (normalizedItem.endsWith('s') && city.mappings[normalizedItem.slice(0, -1)]) {
          singularItem = normalizedItem.slice(0, -1);
      } else if (normalizedItem.endsWith('es') && city.mappings[normalizedItem.slice(0, -2)]) {
          singularItem = normalizedItem.slice(0, -2);
      }

      if (singularItem) {
        const binKeys = city.mappings[singularItem];
        const bins: BinDefinition[] = binKeys.map(key => city.bins[key]).filter(Boolean);
        return {
            bins: bins,
            matchedItemName: singularItem
        };
      }
  }

  // ---------------------------------------------------------
  // 2. AI Semantic Match (Gemini Flash Lite)
  // ---------------------------------------------------------
  
  // Get all available keys for context
  const allKeys = Object.keys(city.mappings);
  
  // Call Gemini
  const aiMatches = await findBestMatchWithGemini(normalizedItem, allKeys);

  if (aiMatches && aiMatches.length > 0) {
    if (aiMatches.length === 1) {
      // Single confident match
      const bestKey = aiMatches[0];
      const binKeys = city.mappings[bestKey];
      const bins: BinDefinition[] = binKeys.map(key => city.bins[key]).filter(Boolean);
      return {
        bins: bins,
        matchedItemName: bestKey,
        confidence: 0.95
      };
    } else {
      // Multiple semantic candidates
      return {
        matchedItemName: normalizedItem,
        alternatives: aiMatches
      };
    }
  }

  return null;
};

export const processImage = async (file: File, cityKey: string): Promise<AnalysisResult | null> => {
  // Convert file to base64
  const base64Str = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

  // Only use Gemini (Cloud AI)
  const identifiedItem = await identifyImageWithGemini(base64Str);

  if (!identifiedItem) {
    return null;
  }

  // Map the identified item to a bin rule
  return await findBinForItem(cityKey, identifiedItem);
};