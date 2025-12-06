import { LocalizedString, GeneralRule } from './types';

export const GENERAL_RULES: GeneralRule[] = [
  {
    id: 'batteries',
    icon: 'Battery',
    title: { en: "Batteries", de: "Batterien" },
    description: {
      en: "Never throw batteries or rechargeable batteries in the residual waste as they can cause fires. Always tape over the open poles and bring them to a recycling center.",
      de: "Werfen Sie Batterien oder Akkus niemals in den Restmüll, da sie Brände verursachen können. Kleben Sie offene Pole immer ab und bringen Sie sie zum Altstoffsammelzentrum."
    }
  },
  {
    id: 'oil',
    icon: 'Droplet',
    title: { en: "Cooking Oil", de: "Speiseöl" },
    description: {
      en: "Never pour old cooking oil or fat down the drain or toilet. Collect it in the yellow \"Öli\" bucket and exchange the full bucket for a clean one at the recycling center.",
      de: "Gießen Sie altes Speiseöl oder Fett niemals in den Abfluss oder die Toilette. Sammeln Sie es im gelben \"Öli\"-Eimer und tauschen Sie den vollen Eimer im Altstoffsammelzentrum gegen einen sauberen."
    }
  },
  {
    id: 'plastic',
    icon: 'Milk', 
    title: { en: "Plastic Packaging", de: "Plastikverpackungen" },
    description: {
      en: "You do not need to wash yogurt cups or plastic containers with water. It is enough if they are fully empty and \"spoon clean\" before you throw them away.",
      de: "Sie müssen Joghurtbecher oder Plastikbehälter nicht mit Wasser auswaschen. Es reicht, wenn sie vollständig leer und \"löffelrein\" sind, bevor Sie sie wegwerfen."
    }
  },
  {
    id: 'boxes',
    icon: 'Package',
    title: { en: "Paper Boxes", de: "Kartons" },
    description: {
      en: "Please fold all cardboard boxes flat to save space in the bin. Dirty or greasy paper, like used pizza boxes, belongs in the residual waste, not the paper bin.",
      de: "Bitte falten Sie alle Kartons flach zusammen, um Platz in der Tonne zu sparen. Verschmutztes oder fettiges Papier, wie benutzte Pizzaschachteln, gehört in den Restmüll, nicht ins Altpapier."
    }
  },
  {
    id: 'glass',
    icon: 'Wine',
    title: { en: "Glass Bottles", de: "Glasflaschen" },
    description: {
      en: "Remove caps and lids from jars and bottles before recycling them. Drinking glasses and ceramics must go into residual waste, never be put into the glass container.",
      de: "Entfernen Sie Verschlüsse und Deckel von Gläsern und Flaschen, bevor Sie sie recyceln. Trinkgläser und Keramik gehören in den Restmüll, niemals in den Glascontainer."
    }
  },
  {
    id: 'organic',
    icon: 'Leaf',
    title: { en: "Organic Waste", de: "Biomüll" },
    description: {
      en: "Never put plastic bags in the organic waste bin, even if they claim to be compostable. Use only certified cornstarch bags or simply wrap your wet kitchen scraps in old newspaper.",
      de: "Werfen Sie niemals Plastiktüten in die Biotonne, auch wenn sie als kompostierbar gelten. Verwenden Sie nur zertifizierte Maisstärkesäcke oder wickeln Sie feuchte Küchenabfälle in altes Zeitungspapier."
    }
  },
  {
    id: 'electronics',
    icon: 'Smartphone',
    title: { en: "Electronics", de: "Elektrogeräte" },
    description: {
      en: "Old electronic devices like toasters or phones must never be thrown in the normal garbage. Delete your personal data and take them to the recycling center for proper recovery.",
      de: "Alte Elektrogeräte wie Toaster oder Handys dürfen niemals in den normalen Müll geworfen werden. Löschen Sie Ihre persönlichen Daten und bringen Sie sie zur fachgerechten Verwertung ins Altstoffsammelzentrum."
    }
  },
  {
    id: 'clothing',
    icon: 'Shirt',
    title: { en: "Clothing & Shoes", de: "Kleidung & Schuhe" },
    description: {
      en: "Pack clean, wearable clothes tightly into bags before putting them in the clothing containers. Shoes must always be tied together in pairs so they don't get separated.",
      de: "Verpacken Sie saubere, tragbare Kleidung gut in Säcke, bevor Sie diese in die Altkleidercontainer werfen. Schuhe müssen immer paarweise zusammengebunden werden, damit sie nicht getrennt werden."
    }
  },
  {
    id: 'pfand',
    icon: 'Coins', // Or 'RefreshCcw' or 'Banknote'
    title: { en: "Deposit System (Pfand)", de: "Pfandsystem" },
    description: {
      en: "Starting 2025, plastic bottles and metal cans with the deposit logo must be returned to supermarkets. Do not crush them, or the machine cannot read the code to refund your 25 cents.",
      de: "Ab 2025 müssen Plastikflaschen und Metalldosen mit dem Pfand-Logo in Supermärkten zurückgegeben werden. Zerdrücken Sie diese nicht, sonst kann der Automat den Code für die 25 Cent Rückerstattung nicht lesen."
    }
  },
  {
    id: 'medicines',
    icon: 'Pill',
    title: { en: "Medicines", de: "Medikamente" },
    description: {
      en: "Never flush expired or old medication down the toilet or sink, as it pollutes the water. Return them to a pharmacy or take them to the hazardous waste collection at the recycling center.",
      de: "Spülen Sie abgelaufene oder alte Medikamente niemals die Toilette oder das Waschbecken hinunter, da dies das Wasser belastet. Geben Sie sie in der Apotheke oder bei der Problemstoffsammelstelle im Altstoffsammelzentrum ab."
    }
  },
  {
    id: 'lightbulbs',
    icon: 'Lightbulb',
    title: { en: "Light Bulbs", de: "Glühbirnen" },
    description: {
      en: "Energy-saving lamps, LEDs, and fluorescent tubes contain harmful substances and do not belong in the glass container or residual waste. Hand them in intact at the recycling center.",
      de: "Energiesparlampen, LEDs und Leuchtstoffröhren enthalten Schadstoffe und gehören weder in den Glascontainer noch in den Restmüll. Geben Sie diese unbeschädigt im Altstoffsammelzentrum ab."
    }
  }
];