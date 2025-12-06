export type Language = 'en' | 'de';

export interface LocalizedString {
  en: string;
  de: string;
}

export type BinIconType = 'plastic' | 'paper' | 'glass' | 'bio' | 'metal' | 'rest' | 'asz' | 'shirt' | 'bottle' | 'default';

export interface BinDefinition {
  name: LocalizedString;
  color: string;
  icon: BinIconType;
  description?: LocalizedString;
  detailedInstructions?: LocalizedString;
}

export interface CityRules {
  name: string;
  officialWebsite: string;
  bins: {
    [key: string]: BinDefinition;
  };
  mappings: {
    en: { [item: string]: string[] };
    de: { [item: string]: string[] };
  };
}

export interface RecyclingData {
  [cityKey: string]: CityRules;
}

export type CityKey = 'vienna' | 'graz' | 'linz' | 'salzburg';

export interface GeneralRule {
  id: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
  keywords?: string[];
}

export interface AnalysisResult {
  bins?: BinDefinition[];
  matchedItemName: string;
  confidence?: number;
  alternatives?: string[];
  helpfulTip?: GeneralRule;
}