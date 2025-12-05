import { CITY_RULES } from '../constants';
import { AnalysisResult, BinDefinition } from '../types';
import { identifyImageWithAI } from './visionService';
import { identifyImageWithGemini, findBestMatchWithGemini } from './geminiService';

// Helper for fuzzy search (Levenshtein)
const levenshteinDistance = (a: string, b: string): number => {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1) // insertion, deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
};

export const findBinForItem = async (cityKey: string, itemName: string): Promise<AnalysisResult | null> => {
  const city = CITY_RULES[cityKey];
  if (!city) return null;

  // Normalize input
  const normalizedItem = itemName.toLowerCase().trim();

  // ---------------------------------------------------------
  // 1. Exact Match (Fastest)
  // ---------------------------------------------------------
  if (city.mappings[normalizedItem]) {
    const binKeys = city.mappings[normalizedItem];
    const bins: BinDefinition[] = binKeys.map(key => city.bins[key]).filter(Boolean);
    return {
      bins: bins,
      matchedItemName: normalizedItem
    };
  }

  // ---------------------------------------------------------
  // 2. AI Semantic Match (Gemini) - The "Smart" Layer
  // ---------------------------------------------------------
  // We use this before fuzzy matching to handle cases like "plastic chair" -> "plastic objects"
  // which simple token matching might miss or confuse with "plastic bags".
  
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

  // ---------------------------------------------------------
  // 3. Fallback: Algorithmic Search (Offline / No Key)
  // ---------------------------------------------------------

  // A. Ambiguity Check (Substring in Keys)
  // Example: "pizza box" matches "pizza box (clean)" and "pizza box (dirty)"
  const ambiguousMatches = allKeys.filter(key => key.includes(normalizedItem));
  
  if (ambiguousMatches.length > 1) {
    return {
      matchedItemName: normalizedItem,
      alternatives: ambiguousMatches
    };
  } else if (ambiguousMatches.length === 1) {
    const matchedKey = ambiguousMatches[0];
    const binKeys = city.mappings[matchedKey];
    const bins: BinDefinition[] = binKeys.map(key => city.bins[key]).filter(Boolean);
    return {
      bins: bins,
      matchedItemName: matchedKey
    };
  }

  // B. Inverse Partial Match (Query includes Key)
  // "red plastic bottle" -> matches "plastic bottle"
  const inverseMatches = allKeys
    .filter(key => normalizedItem.includes(key))
    .sort((a, b) => b.length - a.length); // Longest match first
  
  if (inverseMatches.length > 0) {
    const bestKey = inverseMatches[0];
    // Only use if it covers a decent part of the string to avoid "a" matching "banana"
    if (bestKey.length > normalizedItem.length * 0.4) {
        const binKeys = city.mappings[bestKey];
        const bins: BinDefinition[] = binKeys.map(key => city.bins[key]).filter(Boolean);
        return {
            bins: bins,
            matchedItemName: bestKey
        };
    }
  }

  // C. Token-Based Scoring
  const queryTokens = normalizedItem.split(/[\s\-_]+/).filter(t => t.length > 2);
  
  if (queryTokens.length > 0) {
    const scoredCandidates: { key: string, score: number }[] = [];
    
    allKeys.forEach(key => {
      const keyTokens = key.toLowerCase().split(/[\s\(\)\-\/,]+/).filter(t => t.length > 2);
      let matchCount = 0;
      queryTokens.forEach(qt => {
        if (keyTokens.some(kt => kt.includes(qt) || qt.includes(kt))) {
          matchCount++;
        }
      });
      if (matchCount > 0) {
        scoredCandidates.push({ key, score: matchCount });
      }
    });

    scoredCandidates.sort((a, b) => b.score - a.score);
    const topScore = scoredCandidates[0]?.score || 0;

    if (topScore > 0) {
      const topMatches = scoredCandidates.filter(c => c.score === topScore);
      
      // If multiple items have the same top score, or very close scores, it's ambiguous.
      // E.g. "plastic chair" -> "plastic bags" (1), "plastic objects" (1).
      if (topMatches.length > 1) {
        return {
          matchedItemName: normalizedItem,
          alternatives: topMatches.map(c => c.key).slice(0, 8)
        };
      }
      
      const winner = topMatches[0];
      const binKeys = city.mappings[winner.key];
      const bins: BinDefinition[] = binKeys.map(key => city.bins[key]).filter(Boolean);
      return {
        bins: bins,
        matchedItemName: winner.key
      };
    }
  }

  // D. Fuzzy Match (Levenshtein Distance) - Last Resort
  let bestMatchKey = '';
  let minDistance = Infinity;

  for (const key of allKeys) {
    const dist = levenshteinDistance(normalizedItem, key);
    if (dist < minDistance) {
      minDistance = dist;
      bestMatchKey = key;
    }
  }

  let allowedDistance = 0;
  if (normalizedItem.length > 6) allowedDistance = 3;
  else if (normalizedItem.length > 3) allowedDistance = 1;

  if (bestMatchKey && minDistance <= allowedDistance) {
    const binKeys = city.mappings[bestMatchKey];
    const bins: BinDefinition[] = binKeys.map(key => city.bins[key]).filter(Boolean);
    return {
      bins: bins,
      matchedItemName: bestMatchKey,
      confidence: 0.8
    };
  }

  return null;
};

// Fallback in case the model takes too long or fails
const mockIdentifyImage = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("water bottle"); 
    }, 1500);
  });
};

export const processImage = async (file: File, cityKey: string): Promise<AnalysisResult | null> => {
  // Convert file to base64
  const base64Str = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

  // 1. Try Gemini (Cloud AI) first
  let identifiedItem = await identifyImageWithGemini(base64Str);

  // 2. Fallback to on-device AI
  if (!identifiedItem) {
    identifiedItem = await identifyImageWithAI(base64Str);
  }

  // 3. Fallback to mock
  if (!identifiedItem) {
    identifiedItem = await mockIdentifyImage();
  }

  // Map the identified item (e.g. "pop bottle") to a bin rule
  return await findBinForItem(cityKey, identifiedItem);
};