import { CityRules } from './types';

export const VIENNA_RULES: CityRules = {
  name: "Vienna",
  officialWebsite: "https://www.wien.gv.at/umwelt/ma48/",
  bins: {
    plastic: { 
      name: { en: "Yellow Bin (Plastic & Metal)", de: "Gelbe Tonne" }, 
      color: "bg-yellow-400",
      icon: "plastic",
      detailedInstructions: {
        en: "• Collects: All plastic packaging (bottles, yogurt cups, trays, foils) AND metal packaging (cans, tubes, lids, crown caps).\n• Do NOT put in: Plastic toys, buckets, garden hoses, or tools (-> Mistplatz/Restmüll).\n• Do NOT put in: Deposit bottles/cans (Pfand).\n• Empty containers completely ('spoon clean'). No need to wash.",
        de: "• Das gehört hinein: Alle Kunststoffverpackungen (Flaschen, Becher, Schalen, Folien) UND Metallverpackungen (Dosen, Tuben, Deckel, Kronkorken).\n• Nicht hinein: Spielzeug, Kübel, Gartenschläuche oder Werkzeug (-> Mistplatz/Restmüll).\n• Nicht hinein: Pfandflaschen/-dosen.\n• Behälter restentleeren ('löffelrein'). Auswaschen nicht nötig."
      }
    },
    paper: { 
      name: { en: "Waste Paper", de: "Altpapier" }, 
      color: "bg-red-500",
      icon: "paper",
      detailedInstructions: {
        en: "• Collects: Newspapers, magazines, books, writing paper, cardboard boxes.\n• Do NOT put in: Dirty or greasy paper (e.g., used pizza boxes), receipts (thermal paper), tissues/handkerchiefs.\n• Important: Please fold cardboard boxes flat to save space.",
        de: "• Das gehört hinein: Zeitungen, Illustrierte, Bücher, Schreibpapier, Kartonagen.\n• Nicht hinein: Verschmutztes oder fettiges Papier (z.B. benutzte Pizzakartons), Kassabons (Thermopapier), Taschentücher.\n• Wichtig: Kartons bitte unbedingt flach zusammenfalten."
      }
    },
    glass: { 
      name: { en: "Glass Waste", de: "Altglas" }, 
      color: "bg-green-500",
      icon: "glass",
      detailedInstructions: {
        en: "• Separate by color: White Glass (Weissglas) and Colored Glass (Buntglas). If unsure, use Colored.\n• Collects: Glass bottles, preserve jars, perfume bottles.\n• Do NOT put in: Drinking glasses, window panes, mirrors, light bulbs, ceramics.\n• Please remove caps and lids (put them in Yellow Bin).",
        de: "• Nach Farbe trennen: Weißglas und Buntglas. Im Zweifelsfall zum Buntglas.\n• Das gehört hinein: Glasflaschen, Konservengläser, Parfümflakons.\n• Nicht hinein: Trinkgläser, Fensterglas, Spiegel, Glühbirnen, Keramik.\n• Bitte Verschlüsse und Deckel entfernen (in die Gelbe Tonne)."
      }
    },
    bio: { 
      name: { en: "Organic Waste", de: "Biotonne" }, 
      color: "bg-amber-900", // Vienna bio bins often have a brown lid
      icon: "bio",
      detailedInstructions: {
        en: "• Collects: Fruit & vegetable scraps, garden waste (leaves, grass), coffee grounds, tea bags.\n• Do NOT put in: Cooked food leftovers, meat, bones, eggs, dairy (-> Residual Waste).\n• Do NOT put in: Plastic bags (even biodegradable ones), cat litter, cigarette butts.",
        de: "• Das gehört hinein: Obst- & Gemüseabfälle, Gartenabfälle (Laub, Gras), Kaffeesatz, Teebeutel.\n• Nicht hinein: Gekochte Speisereste, Fleisch, Knochen, Eier, Milchprodukte (-> Restmüll).\n• Nicht hinein: Plastiksackerl (auch keine 'Bio-Sackerl'), Katzenstreu, Zigaretten."
      }
    },
    rest: { 
      name: { en: "Residual Waste", de: "Restmüll" }, 
      color: "bg-gray-800", // Often black bins
      icon: "rest",
      detailedInstructions: {
        en: "• Collects: Hygiene products, diapers, vacuum bags, dirty paper, broken glass/ceramics, cigarette butts.\n• Collects: Meat, bones, and cooked food leftovers (unlike many other cities).\n• Do NOT put in: Batteries, electronics, hazardous waste, or recyclables.",
        de: "• Das gehört hinein: Hygieneartikel, Windeln, Staubsaugerbeutel, schmutziges Papier, kaputte Trinkgläser/Keramik, Zigaretten.\n• Das gehört hinein: Fleisch, Knochen und gekochte Speisereste (anders als in vielen anderen Städten).\n• Nicht hinein: Batterien, Elektrogeräte, Problemstoffe oder Altstoffe."
      }
    },
    asz: { 
      name: { en: "Recycling Centre (Mistplatz)", de: "Mistplatz" }, 
      color: "bg-orange-500", 
      icon: "asz",
      description: { en: "Take to Mistplatz", de: "Zum Mistplatz bringen" },
      detailedInstructions: {
        en: "• Hazardous Waste: Batteries, paints, chemicals, energy-saving lamps.\n• Electronics: TVs, computers, appliances.\n• Cooking Oil: Use the 'Wöli' bucket (exchange full for empty).\n• Bulky Waste: Furniture, mattresses, large scrap metal, rubble.",
        de: "• Problemstoffe: Batterien, Lacke, Chemikalien, Energiesparlampen.\n• Elektrogeräte: Fernseher, Computer, Haushaltsgeräte.\n• Altspeiseöl: Im 'Wöli'-Kübel sammeln (voll gegen leer tauschen).\n• Sperrmüll: Möbel, Matratzen, großes Alteisen, Bauschutt."
      }
    }
  },
  mappings: {
    en: {
      "banana": ["bio"],
      "apple": ["bio"],
      "orange": ["bio"],
      "lemon": ["bio"],
      "food scraps": ["bio"],
      "newspaper": ["paper"],
      "magazine": ["paper"],
      "cardboard": ["paper"],
      "pizza box (clean)": ["paper"],
      "plastic bottle": ["plastic"],
      "water bottle": ["plastic"],
      "soda can": ["plastic"],
      "yogurt cup": ["plastic"],
      "beverage carton": ["plastic"],
      "tetra pak": ["plastic"],
      "beer bottle": ["glass"],
      "wine bottle": ["glass"],
      "glass jar": ["glass"],
      "diaper": ["rest"],
      "tissue": ["rest"],
      "pizza box (dirty)": ["rest"],
      "broken glass": ["rest"],
      "cigarette": ["rest"]
    },
    de: {
      "banane": ["bio"],
      "apfel": ["bio"],
      "zitrone": ["bio"],
      "speisereste": ["bio"],
      "zeitung": ["paper"],
      "zeitschrift": ["paper"],
      "karton": ["paper"],
      "pizzaschachtel (sauber)": ["paper"],
      "plastikflasche": ["plastic"],
      "wasserflasche": ["plastic"],
      "dose": ["plastic"],
      "joghurtbecher": ["plastic"],
      "getränkekarton": ["plastic"],
      "bierflasche": ["glass"],
      "weinflasche": ["glass"],
      "glas": ["glass"], 
      "marmeladenglas": ["glass"],
      "windel": ["rest"],
      "taschentuch": ["rest"],
      "pizzaschachtel (schmutzig)": ["rest"],
      "kaputtes glas": ["rest"], 
      "trinkglas": ["rest"],
      "zigarette": ["rest"]
    }
  }
};