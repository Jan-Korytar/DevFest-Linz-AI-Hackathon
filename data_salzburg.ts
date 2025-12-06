import { CityRules } from './types';

export const SALZBURG_RULES: CityRules = {
  name: "Salzburg",
  officialWebsite: "https://www.stadt-salzburg.at/abfall/",
  bins: {
    plastic: { 
      name: { en: "Yellow Bag", de: "Gelber Sack" }, 
      color: "bg-yellow-400",
      icon: "plastic",
      detailedInstructions: {
        en: "• Plastic bottles, beverage cartons (Tetra Pak), plastic packaging.\n• Squeeze bottles flat, screw cap back on.\n• No hard plastics like toys.",
        de: "• Plastikflaschen, Getränkekartons (Tetra Pak), Kunststoffverpackungen.\n• Flaschen flachdrücken, Deckel wieder aufschrauben.\n• Keine Hartplastik-Gegenstände wie Spielzeug."
      }
    },
    paper: { 
      name: { en: "Waste Paper", de: "Altpapier" }, 
      color: "bg-red-500",
      icon: "paper",
      detailedInstructions: {
        en: "• Newspapers, catalogues, cardboard boxes.\n• Remove plastic packaging from magazines.",
        de: "• Zeitungen, Kataloge, Kartons.\n• Plastikfolien von Zeitschriften entfernen."
      }
    },
    bio: { 
      name: { en: "Organic Waste", de: "Bioabfall" }, 
      color: "bg-amber-700",
      icon: "bio",
      detailedInstructions: {
        en: "• Kitchen waste, garden waste.\n• No soups or sauces.\n• No plastic bags.",
        de: "• Küchenabfälle, Gartenabfälle.\n• Keine Suppen oder Saucen.\n• Keine Plastiksäcke."
      }
    },
    rest: { 
      name: { en: "Residual Waste", de: "Restmüll" }, 
      color: "bg-gray-800",
      icon: "rest",
      detailedInstructions: {
        en: "• Diapers, vacuum bags, street sweepings.\n• Cooled ash.",
        de: "• Windeln, Staubsaugersäcke, Straßenkehricht.\n• Ausgekühlte Asche."
      }
    }
  },
  mappings: {
    en: {
      "plastic bottle": ["plastic"],
      "water bottle": ["plastic"],
      "newspaper": ["paper"],
      "banana": ["bio"],
      "apple": ["bio"]
    },
    de: {
      "plastikflasche": ["plastic"],
      "wasserflasche": ["plastic"],
      "zeitung": ["paper"],
      "banane": ["bio"],
      "apfel": ["bio"]
    }
  }
};