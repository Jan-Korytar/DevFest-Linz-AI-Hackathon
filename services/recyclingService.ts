import { CITY_RULES } from '../constants';
import { AnalysisResult, BinDefinition } from '../types';
import { identifyImageWithAI } from './visionService';
import { identifyImageWithGemini } from './geminiService';

// Helper for fuzzy search
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

export const findBinForItem = (cityKey: string, itemName: string): AnalysisResult | null => {
  const city = CITY_RULES[cityKey];
  if (!city) return null;

  // Normalize input
  const normalizedItem = itemName.toLowerCase().trim();

  // 1. Exact Match
  if (city.mappings[normalizedItem]) {
    const binKeys = city.mappings[normalizedItem];
    const bins: BinDefinition[] = binKeys.map(key => city.bins[key]).filter(Boolean);
    return {
      bins: bins,
      matchedItemName: normalizedItem
    };
  }

  // 2. Ambiguity Check (Does the input match multiple distinct keys?)
  // Example: "pizza box" matches "pizza box (clean)" and "pizza box (dirty)"
  const ambiguousMatches = Object.keys(city.mappings).filter(key => key.includes(normalizedItem));
  
  // Filter out duplicates if logic creates any, though keys are unique
  if (ambiguousMatches.length > 1) {
    return {
      matchedItemName: normalizedItem,
      alternatives: ambiguousMatches
    };
  }
  
  // If exactly one match found via "Query matches part of Key"
  if (ambiguousMatches.length === 1) {
    const matchedKey = ambiguousMatches[0];
    const binKeys = city.mappings[matchedKey];
    const bins: BinDefinition[] = binKeys.map(key => city.bins[key]).filter(Boolean);
    return {
      bins: bins,
      matchedItemName: matchedKey // Return the full proper name
    };
  }

  // 3. Inverse Partial Match (Query includes Key)
  // Example: "large plastic bottle" contains "plastic bottle"
  const matchedKey = Object.keys(city.mappings)
    .filter(key => normalizedItem.includes(key))
    .sort((a, b) => b.length - a.length)[0];
  
  if (matchedKey) {
    const binKeys = city.mappings[matchedKey];
    const bins: BinDefinition[] = binKeys.map(key => city.bins[key]).filter(Boolean);
    return {
      bins: bins,
      matchedItemName: matchedKey // Return the recognized part
    };
  }

  // 4. Fuzzy Match (Levenshtein Distance) - "Did you mean...?" logic
  const keys = Object.keys(city.mappings);
  let bestMatchKey = '';
  let minDistance = Infinity;

  for (const key of keys) {
    const dist = levenshteinDistance(normalizedItem, key);
    // Optimization: if dist is very large already, ignore
    if (dist < minDistance) {
      minDistance = dist;
      bestMatchKey = key;
    }
  }

  // Determine threshold based on string length to avoid false positives on short words
  // Length <= 3: dist 0 (must be exact, handled above)
  // Length 4-6: dist <= 2 (allows typos like 'botle')
  // Length > 6: dist <= 4 (allows more variance for 'closest thing')
  let allowedDistance = 0;
  if (normalizedItem.length > 6) allowedDistance = 4;
  else if (normalizedItem.length > 3) allowedDistance = 2;

  if (bestMatchKey && minDistance <= allowedDistance) {
    const binKeys = city.mappings[bestMatchKey];
    const bins: BinDefinition[] = binKeys.map(key => city.bins[key]).filter(Boolean);
    return {
      bins: bins,
      matchedItemName: bestMatchKey, // Return the corrected name from DB so the UI says "Plastic Bottle" instead of "plstic botle"
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
  return findBinForItem(cityKey, identifiedItem);
};