import { CityRules } from './types';

export const GRAZ_RULES: CityRules = {
  name: "Graz",
  officialWebsite: "https://www.holding-graz.at/de/abfall/abfalltrennung/",
  bins: {
    plastic: { 
      name: { en: "Yellow Bag (Plastic)", de: "Gelber Sack (Plastik)" }, 
      color: "bg-yellow-400",
      icon: "plastic",
      detailedInstructions: {
        en: "• Plastic packaging only.\n• Bottles, yogurt cups, foils.\n• Empty properly.\n• NOTE: Metal often collected separately in Graz!",
        de: "• Nur Kunststoffverpackungen.\n• Flaschen, Becher, Folien.\n• Gut entleeren.\n• ACHTUNG: Metall wird in Graz oft getrennt gesammelt!"
      }
    },
    metal: { 
      name: { en: "Metal Cans", de: "Dosen (Metall)" }, 
      color: "bg-blue-500",
      icon: "metal",
      detailedInstructions: {
        en: "• Aluminum cans, food tins.\n• Metal lids.\n• Crush if possible to save space.",
        de: "• Aludosen, Konservendosen.\n• Metalldeckel.\n• Wenn möglich flachdrücken."
      }
    },
    paper: { 
      name: { en: "Waste Paper", de: "Altpapier" }, 
      color: "bg-red-500",
      icon: "paper",
      detailedInstructions: {
        en: "• Clean paper and cardboard.\n• Flatten boxes completely.",
        de: "• Sauberes Papier und Kartonagen.\n• Kartons bitte zerlegen."
      }
    },
    bio: { 
      name: { en: "Organic Waste", de: "Bioabfall" }, 
      color: "bg-amber-700",
      icon: "bio",
      detailedInstructions: {
        en: "• Vegetable scraps, food leftovers.\n• Wrap moist waste in newspaper.\n• No plastic bags.",
        de: "• Gemüseabfälle, Speisereste.\n• Feuchte Abfälle in Zeitungspapier wickeln.\n• Keine Plastiksackerl."
      }
    },
    rest: { 
      name: { en: "Residual Waste", de: "Restmüll" }, 
      color: "bg-gray-800",
      icon: "rest",
      detailedInstructions: {
        en: "• Non-recyclable household waste.\n• Hygiene products, sweepings, broken glass.",
        de: "• Nicht verwertbarer Hausmüll.\n• Hygieneartikel, Kehricht, kaputtes Glas."
      }
    }
  },
  mappings: {
    en: {
      "banana": ["bio"],
      "apple": ["bio"],
      "soda can": ["metal"],
      "can": ["metal"],
      "plastic bottle": ["plastic"],
      "yogurt cup": ["plastic"],
      "newspaper": ["paper"],
      "beer bottle": ["rest"], // Glass often collected at islands
      "wine bottle": ["rest"],
      "glass": ["rest"],
      "pizza box (clean)": ["paper"],
      "pizza box (dirty)": ["rest"]
    },
    de: {
      "banane": ["bio"],
      "apfel": ["bio"],
      "dose": ["metal"],
      "alu dose": ["metal"],
      "konservendose": ["metal"],
      "plastikflasche": ["plastic"],
      "joghurtbecher": ["plastic"],
      "zeitung": ["paper"],
      "bierflasche": ["rest"],
      "weinflasche": ["rest"],
      "glas": ["rest"],
      "pizzaschachtel (sauber)": ["paper"],
      "pizzaschachtel (schmutzig)": ["rest"]
    }
  }
};