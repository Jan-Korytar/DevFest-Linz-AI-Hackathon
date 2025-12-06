import { RecyclingData, Language } from './types';
import { VIENNA_RULES } from './data_vienna';
import { LINZ_RULES } from './data_linz';

export const CITY_RULES: RecyclingData = {
  vienna: VIENNA_RULES,
  linz: LINZ_RULES
};

export const CITIES = Object.keys(CITY_RULES).map(key => ({
  id: key,
  name: CITY_RULES[key].name
}));

export const UI_STRINGS: Record<string, Record<Language, string>> = {
  titleLine1: {
    en: "What are you",
    de: "Was möchtest du"
  },
  titleLine2: {
    en: "throwing away?",
    de: "entsorgen?"
  },
  placeholder: {
    en: "e.g. plastic bottle, newspaper...",
    de: "z.B. Plastikflasche, Zeitung..."
  },
  subtitle: {
    en: "Sort waste correctly in seconds.",
    de: "Müll richtig trennen in Sekunden."
  },
  identifying: {
    en: "Identifying item...",
    de: "Analysiere Gegenstand..."
  },
  checkingRules: {
    en: "Checking local rules for",
    de: "Prüfe Regeln für"
  },
  thisGoesIn: {
    en: "This goes in",
    de: "Das gehört in"
  },
  goesIn: {
    en: "goes in",
    de: "kommt in"
  },
  either: {
    en: "either",
    de: "entweder"
  },
  the: {
    en: "the",
    de: "die"
  },
  or: {
    en: " or ",
    de: " oder "
  },
  multipleWays: {
    en: "can be disposed of in multiple ways.",
    de: "kann auf verschiedene Arten entsorgt werden."
  },
  belongsIn: {
    en: "belongs in this category.",
    de: "gehört in diese Kategorie."
  },
  scanAnother: {
    en: "Search another item",
    de: "Weiteren Gegenstand suchen"
  },
  noExactMatch: {
    en: "No exact match for",
    de: "Kein exakter Treffer für"
  },
  showing: {
    en: "Showing:",
    de: "Zeige:"
  },
  ambiguousTitle: {
    en: "Which one?",
    de: "Was genau?"
  },
  ambiguousDesc: {
    en: "We found multiple matches for",
    de: "Wir haben mehrere Treffer für"
  },
  pleaseClarify: {
    en: "Please clarify:",
    de: "gefunden. Bitte wählen:"
  },
  cancel: {
    en: "Cancel",
    de: "Abbrechen"
  },
  notFoundTitle: {
    en: "Not sure about that one.",
    de: "Das wissen wir leider nicht."
  },
  notFoundDesc: {
    en: "We couldn't find a precise rule for",
    de: "Wir konnten keine Regel finden für"
  },
  in: {
    en: "in",
    de: "in"
  },
  tryAgain: {
    en: "Try something else",
    de: "Versuche etwas anderes"
  },
  about: { en: "About", de: "Über uns" },
  howItWorks: { en: "How it works", de: "So funktioniert's" },
  privacy: { en: "Privacy", de: "Datenschutz" },
  specialRules: { en: "Special Rules", de: "Wichtige Regeln" },
  footerText: { 
    en: "Built for a greener Austria.", 
    de: "Für ein grüneres Österreich." 
  },
  hintASZ: {
    en: "Large quantities or hazardous materials should be taken to the Recycling Center (ASZ).",
    de: "Große Mengen oder Problemstoffe bitte zum Altstoffsammelzentrum (ASZ) bringen."
  },
  hintPlastic: {
    en: "Please empty containers and crush bottles to save space.",
    de: "Bitte Behälter entleeren und Flaschen flachdrücken."
  },
  hintBio: {
    en: "No plastic bags in the Bio bin (use cornstarch bags only if allowed).",
    de: "Keine Plastiksäcke in den Biomüll (Maisstärkesäcke nur wenn erlaubt)."
  },
  officialWebsiteLabel: {
    en: "Visit official website",
    de: "Offizielle Webseite besuchen"
  }
};