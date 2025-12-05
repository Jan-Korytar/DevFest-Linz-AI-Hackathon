export interface BinDefinition {
  name: string;
  color: string;
  description?: string;
}

export interface CityRules {
  name: string;
  bins: {
    [key: string]: BinDefinition;
  };
  mappings: {
    [item: string]: string[]; // item name -> array of bin keys (e.g., "banana" -> ["bio"])
  };
}

export interface RecyclingData {
  [cityKey: string]: CityRules;
}

export type CityKey = 'vienna' | 'graz' | 'linz' | 'salzburg';

export interface AnalysisResult {
  bins?: BinDefinition[]; // Changed from bin to bins array to support multiple destinations
  matchedItemName: string;
  confidence?: number;
  alternatives?: string[]; // For ambiguous results
}