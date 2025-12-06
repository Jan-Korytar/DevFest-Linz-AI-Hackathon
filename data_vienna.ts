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
    },
    textiles: { 
      name: { en: "Old Clothes / Textiles", de: "Altkleidersammlung" }, 
      color: "bg-indigo-400",
      icon: "shirt",
      detailedInstructions: {
        en: "• Collects: Clean wearable clothing, shoes (in pairs), household textiles.\n• Do NOT put in: Dirty rags, wet fabrics, scraps.",
        de: "• Das gehört hinein: Tragbare Kleidung, Schuhe (paarweise), Haushaltstextilien.\n• Nicht hinein: Schmutzige Fetzen, nasse Stoffe, Stoffreste."
      }
    },
    pfand: { 
      name: { en: "Deposit Return", de: "Pfandrückgabe (Supermarkt)" }, 
      color: "bg-blue-600", 
      icon: "bottle", 
      detailedInstructions: {
        en: "• Collects: Bottles/Cans with Pfand logo (starting 2025).\n• Return to supermarkets.",
        de: "• Das gehört hinein: Flaschen/Dosen mit Pfand-Logo (ab 2025).\n• Rückgabe in Supermärkten."
      }
    }
  },
  mappings: {
    en: {
    "paint stripper": [
        "asz"
    ],
    "Drain cleaner": [
        "asz"
    ],
    "Batteries": [
        "asz"
    ],
    "File folder (empty)": [
        "rest"
    ],
    "Used cooking oil": [
        "asz"
    ],
    "Aluminum grill cups": [
        "plastic"
    ],
    "Aluminum foil": [
        "plastic"
    ],
    "aluminum cans": [
        "pfand",
        "plastic"
    ],
    "Aluminum tableware": [
        "asz"
    ],
    "fittings": [
        "asz"
    ],
    "Paint colors": [
        "asz"
    ],
    "Growing trays (e.g. for lettuce plants)": [
        "plastic"
    ],
    "drug": [
        "asz"
    ],
    "Apple": [
        "bio"
    ],
    "Asbestos cement with an edge length greater than 90 cm": [
        "asz"
    ],
    "Asbestos cement with an edge length of less than 90 cm": [
        "asz"
    ],
    "Branches, shredded": [
        "bio"
    ],
    "Car batteries": [
        "asz"
    ],
    "Auto glass": [
        "asz"
    ],
    "Car care products": [
        "asz"
    ],
    "car tires": [
        "asz"
    ],
    "Plastic car parts": [
        "asz",
        "rest"
    ],
    "Metal car parts (oil-free)": [
        "asz"
    ],
    "Car wrecks": [
        "asz"
    ],
    "Baby diapers": [
        "rest"
    ],
    "baking paper": [
        "rest"
    ],
    "Oven cleaner": [
        "asz"
    ],
    "Bathtub": [
        "asz"
    ],
    "Banana peel": [
        "bio"
    ],
    "Batteries up to 5 kg": [
        "asz"
    ],
    "Batteries over 5kg": [
        "asz"
    ],
    "Plastic construction and insulation material": [
        "asz"
    ],
    "Tree trunks": [
        "asz"
    ],
    "construction rubble": [
        "asz"
    ],
    "Construction site waste": [
        "asz"
    ],
    "Cup of dairy products": [
        "plastic"
    ],
    "clothing": [
        "rest",
        "textile"
    ],
    "petrol": [
        "asz"
    ],
    "Fuel filter": [
        "asz"
    ],
    "Coated paper": [
        "rest"
    ],
    "Bedding": [
        "rest",
        "textile"
    ],
    "Coated packaging (e.g. for spices)": [
        "plastic"
    ],
    "Bag for spices": [
        "plastic"
    ],
    "Instant meal bags": [
        "plastic"
    ],
    "Beer cans": [
        "pfand",
        "plastic"
    ],
    "Beer capsules": [
        "plastic"
    ],
    "Screens": [
        "asz"
    ],
    "Bind": [
        "rest"
    ],
    "Bioplastic packaging": [
        "plastic"
    ],
    "Biodegradable plastic packaging": [
        "plastic"
    ],
    "Expanded clay (for example from hydroponics)": [
        "rest"
    ],
    "Tin cans (e.g. canned fruit)": [
        "plastic"
    ],
    "sheets": [
        "asz"
    ],
    "Tinware": [
        "asz"
    ],
    "Tin toys": [
        "asz"
    ],
    "Lead crystal glass": [
        "rest"
    ],
    "Empty blister packs (e.g. tablet packs)": [
        "plastic"
    ],
    "Flowers": [
        "bio"
    ],
    "Potting soil": [
        "asz",
        "bio"
    ],
    "Asbestos cement flower pots": [
        "asz"
    ],
    "Plastic flower pots": [
        "rest"
    ],
    "Ceramic flower pots": [
        "asz"
    ],
    "floor coverings": [
        "asz"
    ],
    "Floor care products": [
        "asz"
    ],
    "drill": [
        "asz"
    ],
    "firewood": [
        "asz"
    ],
    "Envelope": [
        "paper"
    ],
    "stationery": [
        "paper"
    ],
    "Leftover bread": [
        "bio"
    ],
    "Books": [
        "paper"
    ],
    "iron": [
        "asz"
    ],
    "Ironing machine": [
        "asz"
    ],
    "Stained glass (without screw caps)": [
        "glass"
    ],
    "Greeting paper": [
        "paper"
    ],
    "Greaseproof paper (coated)": [
        "rest"
    ],
    "Butter packaging": [
        "plastic"
    ],
    "CDs (without cases)": [
        "asz"
    ],
    "CD cases": [
        "rest"
    ],
    "CD player": [
        "asz"
    ],
    "Ceramic hobs": [
        "asz"
    ],
    "Chemicals": [
        "asz"
    ],
    "Chip bag": [
        "plastic"
    ],
    "Christmas tree": [
        "asz"
    ],
    "computer": [
        "asz"
    ],
    "couch": [
        "asz"
    ],
    "Roof wave ternite": [
        "asz"
    ],
    "White and colorful EPS insulation panels (“Kugerl” can be seen)": [
        "asz"
    ],
    "XPS plates (no “balls” to be seen), for example pink, green, blue, rarely white": [
        "asz"
    ],
    "Insulating wool": [
        "asz"
    ],
    "Disinfectant": [
        "asz"
    ],
    "Slides": [
        "rest"
    ],
    "Seals made from bonded asbestos fibers": [
        "asz"
    ],
    "Diesel filter": [
        "asz"
    ],
    "Emulsion paints": [
        "asz"
    ],
    "wire": [
        "asz"
    ],
    "Wired glass": [
        "rest"
    ],
    "common household": [
        "asz"
    ],
    "commercially used equipment, such as stationary photocopiers": [
        "asz"
    ],
    "Printer with an edge length of less than 50 cm": [
        "asz"
    ],
    "Printer cartridges and toner": [
        "asz"
    ],
    "Compressed gas packs (gas cartridges, gas bottles) with valve": [
        "asz"
    ],
    "Fertilizers": [
        "asz"
    ],
    "Carbonless paper": [
        "rest"
    ],
    "Shower gel packaging (plastic, empty)": [
        "plastic"
    ],
    "DVD player larger than 50 cm - edge length": [
        "asz"
    ],
    "DVD player smaller than 50 cm edge length": [
        "asz"
    ],
    "DVD cases": [
        "rest"
    ],
    "DVDs (without cases)": [
        "asz"
    ],
    "Eggshells": [
        "rest"
    ],
    "Plastic shopping bags": [
        "plastic"
    ],
    "Hermit jar": [
        "rest"
    ],
    "Disposable cutlery": [
        "plastic"
    ],
    "Disposable glass bottles": [
        "glass"
    ],
    "Disposable tableware": [
        "plastic"
    ],
    "Disposable glove": [
        "rest"
    ],
    "Disposable syringes (in puncture-resistant packaging)": [
        "asz"
    ],
    "Iron parts": [
        "asz"
    ],
    "Old electrical devices with an edge length larger than 50 cm": [
        "asz"
    ],
    "Old electrical devices with an edge length of less than 50 cm": [
        "asz"
    ],
    "Enamel colors": [
        "asz"
    ],
    "Energy saving lamps": [
        "asz"
    ],
    "Descaler": [
        "asz"
    ],
    "Deruster": [
        "asz"
    ],
    "EPS insulation panels": [
        "asz"
    ],
    "Earth, excavated earth": [
        "asz"
    ],
    "Leftover food": [
        "rest"
    ],
    "Eternite": [
        "asz"
    ],
    "Labels (gummed, adhesive labels)": [
        "rest"
    ],
    "Bicycle": [
        "asz"
    ],
    "Bicycle tires and tubes": [
        "rest"
    ],
    "Bicycle parts": [
        "asz"
    ],
    "Ribbons": [
        "asz"
    ],
    "Paint cans (but only brush clean)": [
        "asz",
        "plastic"
    ],
    "Paint cans and buckets with paint residues": [
        "asz"
    ],
    "Colors": [
        "asz"
    ],
    "Color films and color photos": [
        "rest"
    ],
    "Paint bucket (brush-clean without metal bracket)": [
        "asz"
    ],
    "Paint residue": [
        "asz"
    ],
    "Paint thinner": [
        "asz"
    ],
    "Fax machines with an edge length larger than 50 cm": [
        "asz"
    ],
    "Fax machines with an edge length of less than 50 cm": [
        "asz"
    ],
    "Fax thermal paper": [
        "rest"
    ],
    "Feathers": [
        "rest"
    ],
    "Window": [
        "asz"
    ],
    "Window seals": [
        "rest"
    ],
    "window glass": [
        "asz"
    ],
    "Window envelopes": [
        "paper"
    ],
    "Remote control": [
        "asz"
    ],
    "TV sets": [
        "asz"
    ],
    "Hard drives with sensitive data": [
        "asz"
    ],
    "Hard drives without sensitive data": [
        "asz"
    ],
    "Fats": [
        "asz"
    ],
    "wet wipes": [
        "rest"
    ],
    "Fireproof glass": [
        "rest"
    ],
    "Fire extinguisher": [
        "asz"
    ],
    "Firecrackers": [
        "asz"
    ],
    "FFP2 masks": [
        "rest"
    ],
    "clinical thermometer": [
        "asz"
    ],
    "Film rolls": [
        "rest"
    ],
    "Felt-tip pens - solvent-free": [
        "rest"
    ],
    "felt-tip pens with solvent": [
        "asz"
    ],
    "Bottles, vials (plastic)": [
        "pfand",
        "plastic"
    ],
    "Stain cleaning products": [
        "asz"
    ],
    "meat scraps": [
        "rest"
    ],
    "Meat foils": [
        "plastic"
    ],
    "Meat cup": [
        "plastic"
    ],
    "hairdryer": [
        "asz"
    ],
    "Cameras": [
        "asz"
    ],
    "Photochemicals": [
        "asz"
    ],
    "Photos": [
        "rest"
    ],
    "cling film": [
        "plastic"
    ],
    "frying oils": [
        "asz"
    ],
    "Antifreeze": [
        "asz"
    ],
    "Garden waste": [
        "bio"
    ],
    "Garden furniture": [
        "asz"
    ],
    "Garden hose": [
        "rest"
    ],
    "Gas bottles with contents and valve": [
        "asz"
    ],
    "Gas bottles without contents and valve": [
        "asz"
    ],
    "gas stove": [
        "asz"
    ],
    "vegetables (cooked)": [
        "rest"
    ],
    "Plastic vegetable cups": [
        "plastic"
    ],
    "Plastic vegetable packaging": [
        "plastic"
    ],
    "Vegetable waste (uncooked)": [
        "bio"
    ],
    "Foamed plastics": [
        "rest"
    ],
    "Wrapping paper": [
        "paper"
    ],
    "Dishwasher": [
        "asz"
    ],
    "Drink cans": [
        "pfand",
        "plastic"
    ],
    "Beverage bottles (plastic)": [
        "pfand",
        "plastic"
    ],
    "Beverage carton": [
        "plastic"
    ],
    "Commercial equipment (refrigerators, copiers, drinks machines, etc., but no cold storage panels)": [
        "asz"
    ],
    "Spice bag": [
        "plastic"
    ],
    "Poisons of all kinds": [
        "asz"
    ],
    "Plasterboard": [
        "asz"
    ],
    "Glass bottles (without screw caps)": [
        "glass"
    ],
    "Glassware": [
        "rest"
    ],
    "Glass wool": [
        "asz"
    ],
    "Light bulbs (not energy saving lamps)": [
        "rest"
    ],
    "grass": [
        "bio"
    ],
    "Grill cleaner": [
        "asz"
    ],
    "rubber": [
        "rest"
    ],
    "Pickle jars": [
        "glass"
    ],
    "Belt": [
        "rest",
        "textile"
    ],
    "Hair": [
        "rest"
    ],
    "Hair dye": [
        "asz"
    ],
    "Halogen lamps and halogen spots": [
        "rest"
    ],
    "Hand circular saw": [
        "asz"
    ],
    "Cell phones": [
        "asz"
    ],
    "Hard plastics (e.g. plastic garden furniture)": [
        "asz"
    ],
    "Household appliances with an edge length of more than 50 cm": [
        "asz"
    ],
    "Household appliances with an edge length of less than 50 cm": [
        "asz"
    ],
    "Household cleaner (plastic, empty)": [
        "plastic"
    ],
    "Pet manure": [
        "rest"
    ],
    "HDPE bottles (for example shampoo bottles)": [
        "plastic"
    ],
    "Headset": [
        "asz"
    ],
    "Hedge trimming": [
        "bio"
    ],
    "Notebooks": [
        "asz"
    ],
    "Heating oil residues": [
        "asz"
    ],
    "Heraclith": [
        "rest"
    ],
    "Wood": [
        "asz"
    ],
    "Wood ash cold": [
        "rest"
    ],
    "Wood preservatives": [
        "asz"
    ],
    "Small wooden crate (e.g. carrier for strawberries)": [
        "plastic"
    ],
    "Dog poop": [
        "rest"
    ],
    "Hydraulic oils": [
        "asz"
    ],
    "Hygiene articles and papers": [
        "rest"
    ],
    "Illustrated (without plastic cover)": [
        "paper"
    ],
    "Infusion plastic bag": [
        "rest"
    ],
    "Insulating glass": [
        "rest"
    ],
    "Yoghurt cup": [
        "plastic"
    ],
    "Yogurt cup lid (plastic)": [
        "plastic"
    ],
    "Yogurt cup lid (aluminum)": [
        "plastic"
    ],
    "Cable": [
        "asz"
    ],
    "Coffee mug": [
        "plastic"
    ],
    "Coffee machines": [
        "asz"
    ],
    "Coffee brew": [
        "bio"
    ],
    "Aluminum coffee capsules": [
        "plastic",
        "rest"
    ],
    "Coffee packaging (vacuum packaging)": [
        "plastic"
    ],
    "Cardboard boxes, cardboard boxes": [
        "paper"
    ],
    "Cheese packaging": [
        "plastic"
    ],
    "receipt": [
        "rest"
    ],
    "Catalogs (without plastic cover)": [
        "paper"
    ],
    "Catalysts": [
        "asz"
    ],
    "Cat litter": [
        "rest"
    ],
    "garbage": [
        "rest"
    ],
    "Large ceramic parts (e.g. sink)": [
        "asz"
    ],
    "Small ceramic parts (e.g. mugs)": [
        "rest"
    ],
    "Leftover candles": [
        "rest"
    ],
    "Kitten": [
        "asz"
    ],
    "Putty hardened": [
        "rest"
    ],
    "Adhesive tapes": [
        "rest"
    ],
    "Adhesives": [
        "asz"
    ],
    "Glue tubes and cans": [
        "asz"
    ],
    "Clamp packaging without waste paper (e.g. for ballpoint pens)": [
        "plastic"
    ],
    "Garments (clean)": [
        "asz",
        "textile"
    ],
    "Small animal manure": [
        "rest"
    ],
    "Air conditioning units": [
        "asz"
    ],
    "Bone": [
        "rest"
    ],
    "Button cells": [
        "asz"
    ],
    "Metal cookware": [
        "asz"
    ],
    "Carbon and carbonless paper": [
        "rest"
    ],
    "Coal and coke ash (cold)": [
        "rest"
    ],
    "Canned food": [
        "asz",
        "plastic"
    ],
    "canning jars": [
        "glass"
    ],
    "Copier machines with an edge length of less than 50 cm": [
        "asz"
    ],
    "Cork": [
        "plastic"
    ],
    "cosmetics": [
        "asz"
    ],
    "Glass cosmetic packaging": [
        "glass"
    ],
    "Ceramic cosmetic packaging": [
        "plastic"
    ],
    "circular saw": [
        "asz"
    ],
    "Crown corks": [
        "plastic"
    ],
    "Kitchen waste (vegetable, unseasoned, uncooked)": [
        "bio"
    ],
    "coolant": [
        "asz"
    ],
    "Refrigerators": [
        "asz"
    ],
    "Artificial mineral wool fibers (glass wool, rock wool, mineral wool, insulation wool)": [
        "asz"
    ],
    "Ballpoint pen": [
        "rest"
    ],
    "Plastic, construction and insulation material": [
        "asz"
    ],
    "Plastic lid": [
        "plastic"
    ],
    "plastic bottles": [
        "pfand",
        "plastic"
    ],
    "Plastic films (large)": [
        "asz"
    ],
    "Plastic films (small)": [
        "plastic"
    ],
    "Plastic canister (small)": [
        "plastic"
    ],
    "Plastic canister (large)": [
        "asz"
    ],
    "Plastic nets (e.g. for onions)": [
        "plastic"
    ],
    "Plastic plugs": [
        "plastic"
    ],
    "Plastic tubes (e.g. for toothpaste)": [
        "plastic"
    ],
    "Plastic packaging": [
        "plastic"
    ],
    "plastic toys": [
        "rest"
    ],
    "copper pipes": [
        "asz"
    ],
    "envelopes": [
        "paper"
    ],
    "Laboratory glassware": [
        "rest"
    ],
    "Lampshade glass": [
        "rest"
    ],
    "Laptops": [
        "asz"
    ],
    "leaves": [
        "bio"
    ],
    "Lye": [
        "asz"
    ],
    "Leather waste": [
        "rest"
    ],
    "LED lamps": [
        "asz"
    ],
    "fluorescent tubes": [
        "asz"
    ],
    "Lithium-ion batteries/batteries": [
        "asz"
    ],
    "solvent": [
        "asz"
    ],
    "Air filter": [
        "rest"
    ],
    "Bubble wrap": [
        "plastic"
    ],
    "Margarine cups": [
        "plastic"
    ],
    "jam jars": [
        "glass"
    ],
    "mattresses": [
        "asz"
    ],
    "Medication": [
        "asz"
    ],
    "Glass medicine bottle (empty)": [
        "glass"
    ],
    "Menu bowls": [
        "plastic"
    ],
    "Menu trays with information about waste paper disposal": [
        "paper"
    ],
    "metalworking oils": [
        "asz"
    ],
    "Metal cleaning products": [
        "asz"
    ],
    "metal pipes": [
        "asz"
    ],
    "Metal parts (not engine parts)": [
        "asz"
    ],
    "metal tool": [
        "asz"
    ],
    "Microwave larger than 50 cm edge length": [
        "asz"
    ],
    "Microwave with an edge length smaller than 50 cm": [
        "asz"
    ],
    "Dairy products": [
        "rest"
    ],
    "milk packaging": [
        "plastic"
    ],
    "mineral oils": [
        "asz"
    ],
    "Mineral oil containers (engine oil bottles)": [
        "asz"
    ],
    "mineral wool": [
        "asz"
    ],
    "mixer": [
        "asz"
    ],
    "Furniture": [
        "asz"
    ],
    "Mobile phones": [
        "asz"
    ],
    "Monitors": [
        "asz"
    ],
    "Assembly foam can (operated with propellant gas)": [
        "asz"
    ],
    "Engines or engine parts": [
        "asz"
    ],
    "Engine oil bottles": [
        "asz"
    ],
    "Moth repellent": [
        "asz"
    ],
    "ammunition": [
        "asz"
    ],
    "Music cassettes": [
        "rest"
    ],
    "Night storage heaters (not dismantled)": [
        "asz"
    ],
    "Nails": [
        "rest"
    ],
    "nail polishes": [
        "asz"
    ],
    "nail polish remover": [
        "asz"
    ],
    "Neon tubes": [
        "asz"
    ],
    "Nitro thinners": [
        "asz"
    ],
    "fruit waste": [
        "bio"
    ],
    "fruit nets": [
        "plastic"
    ],
    "Fruit cups (e.g. for strawberries)": [
        "plastic"
    ],
    "Plastic fruit packaging": [
        "plastic"
    ],
    "Stoves (not night storage heaters)": [
        "asz"
    ],
    "oil cans": [
        "asz"
    ],
    "oils": [
        "asz"
    ],
    "Oil filter": [
        "asz"
    ],
    "oil radiators": [
        "asz"
    ],
    "Oil-contaminated items": [
        "asz"
    ],
    "Orange peels": [
        "bio"
    ],
    "folder (empty)": [
        "rest"
    ],
    "Paper": [
        "paper"
    ],
    "Paper (coated, easy to tear)": [
        "paper"
    ],
    "Paper (heavily dirty)": [
        "rest"
    ],
    "Paper, laminated": [
        "rest"
    ],
    "Paper towels": [
        "rest"
    ],
    "Paper wallpapers": [
        "rest"
    ],
    "Tissues": [
        "rest"
    ],
    "Paper packaging": [
        "paper"
    ],
    "Paper packaging, coated": [
        "plastic"
    ],
    "PET beverage bottles": [
        "pfand",
        "plastic"
    ],
    "petroleum": [
        "asz"
    ],
    "Pan": [
        "rest"
    ],
    "plant waste": [
        "bio"
    ],
    "Plant protection products": [
        "asz"
    ],
    "Plastic pill packaging (empty)": [
        "plastic"
    ],
    "Pizza box (clean)": [
        "paper"
    ],
    "Pizza box (heavily soiled, e.g. leftover food)": [
        "rest"
    ],
    "plastic bag": [
        "plastic"
    ],
    "china": [
        "rest"
    ],
    "Pressboard": [
        "asz"
    ],
    "Brochures": [
        "paper"
    ],
    "PUR insulation panels": [
        "asz"
    ],
    "PU foam can": [
        "asz"
    ],
    "cleaning chemicals": [
        "asz"
    ],
    "mercury": [
        "asz"
    ],
    "Mercury thermometer": [
        "asz"
    ],
    "Radioactive substances": [
        "asz"
    ],
    "Radio devices with an edge length of more than 50 cm": [
        "asz"
    ],
    "Radio devices with an edge length smaller than 50 cm": [
        "asz"
    ],
    "Lawn clippings": [
        "bio"
    ],
    "razor": [
        "asz"
    ],
    "Rat poison": [
        "asz"
    ],
    "Receiver with an edge length larger than 50 cm": [
        "asz"
    ],
    "Receiver with an edge length smaller than 50 cm": [
        "asz"
    ],
    "Tires truck, tractor, construction machine": [
        "asz"
    ],
    "Car tires": [
        "asz"
    ],
    "Cleaning products": [
        "asz"
    ],
    "Cleaning products (plastic bottles, empty)": [
        "plastic"
    ],
    "brushwood": [
        "bio"
    ],
    "Plasterboards": [
        "asz"
    ],
    "Asbestos cement pipes": [
        "asz"
    ],
    "X-ray images": [
        "asz"
    ],
    "Rust inhibitor": [
        "asz"
    ],
    "Seed dressing": [
        "asz"
    ],
    "Juice packaging": [
        "plastic"
    ],
    "Sawdust (untreated wood)": [
        "bio"
    ],
    "Anoint": [
        "asz"
    ],
    "Sanitary cleaner": [
        "asz"
    ],
    "Satellite systems": [
        "asz"
    ],
    "acids": [
        "asz"
    ],
    "scanner": [
        "asz"
    ],
    "boxes": [
        "paper"
    ],
    "Pesticides": [
        "asz"
    ],
    "Fruit peels": [
        "bio"
    ],
    "Records": [
        "rest"
    ],
    "Foams": [
        "rest"
    ],
    "Foam packaging": [
        "plastic"
    ],
    "Shooting equipment": [
        "asz"
    ],
    "Whipped cream packaging": [
        "plastic"
    ],
    "Lubricating oils": [
        "asz"
    ],
    "Snail poison": [
        "asz"
    ],
    "Tailoring waste": [
        "rest"
    ],
    "Cut flowers": [
        "bio"
    ],
    "screws": [
        "rest"
    ],
    "Plastic screw caps": [
        "plastic"
    ],
    "Metal screw caps": [
        "plastic"
    ],
    "Typewriter cartridges": [
        "asz"
    ],
    "Writing paper": [
        "paper"
    ],
    "Shoe polish cans (clean and empty)": [
        "plastic"
    ],
    "Shoes": [
        "rest",
        "textile"
    ],
    "rubble (construction rubble)": [
        "asz"
    ],
    "Champagne corks": [
        "plastic"
    ],
    "Mustard tubes (made of plastic)": [
        "plastic"
    ],
    "Mustard tubes (made of metal)": [
        "plastic"
    ],
    "napkins": [
        "rest"
    ],
    "Shampoo bottles": [
        "plastic"
    ],
    "ski": [
        "asz"
    ],
    "Smartphone": [
        "asz"
    ],
    "Solar cells": [
        "asz"
    ],
    "Sorting insert cups (e.g. for cookies, confectionery)": [
        "plastic"
    ],
    "Memory cards with sensitive data": [
        "asz"
    ],
    "Memory cards without sensitive data": [
        "asz"
    ],
    "cooking fats": [
        "asz"
    ],
    "cooking oils": [
        "asz"
    ],
    "Cooking oil bottles (empty)": [
        "glass",
        "plastic"
    ],
    "Bulky waste": [
        "asz"
    ],
    "Mirror glass": [
        "asz"
    ],
    "Games console": [
        "asz"
    ],
    "Plastic toys": [
        "rest"
    ],
    "Spray cans": [
        "asz"
    ],
    "explosives": [
        "asz"
    ],
    "spray container": [
        "asz"
    ],
    "Detergent bottles (empty)": [
        "plastic"
    ],
    "Steel bands": [
        "asz"
    ],
    "Tin foil": [
        "plastic"
    ],
    "Vacuum cleaner": [
        "asz"
    ],
    "vacuum cleaner bags": [
        "rest"
    ],
    "Perennials": [
        "bio"
    ],
    "Stones": [
        "asz"
    ],
    "Rock wool": [
        "asz"
    ],
    "Earthenware tableware": [
        "rest"
    ],
    "Earthenware packaging": [
        "plastic"
    ],
    "scraps of fabric": [
        "rest"
    ],
    "Fabric wallpapers": [
        "rest"
    ],
    "Plastic bumpers": [
        "rest"
    ],
    "Shrub cutting": [
        "bio"
    ],
    "grit": [
        "asz"
    ],
    "Styrofoam (large, no insulation boards)": [
        "asz"
    ],
    "Styrofoam (small, no insulation panels)": [
        "plastic"
    ],
    "Styrofoam flakes": [
        "plastic"
    ],
    "Styrofoam cups, chips, colored Styrofoam": [
        "plastic"
    ],
    "Styrofoam packaging (large)": [
        "asz"
    ],
    "Styrofoam packaging small": [
        "plastic"
    ],
    "Soup bags": [
        "plastic"
    ],
    "tablet (computer)": [
        "asz"
    ],
    "Tablets": [
        "asz"
    ],
    "Plastic tablet packaging (empty)": [
        "plastic"
    ],
    "wallpapers": [
        "rest"
    ],
    "Take-away packaging (except paper)": [
        "plastic"
    ],
    "Calculator": [
        "asz"
    ],
    "Handkerchiefs": [
        "rest"
    ],
    "Keyboard": [
        "asz"
    ],
    "Tea bags (plastic)": [
        "rest"
    ],
    "Tea bags (paper)": [
        "bio"
    ],
    "Tar paper": [
        "asz"
    ],
    "tea brew": [
        "bio"
    ],
    "phone": [
        "asz"
    ],
    "Carpets, carpet floor coverings": [
        "rest"
    ],
    "turpentine": [
        "asz"
    ],
    "Tetra pack": [
        "plastic"
    ],
    "Textiles (clothing, shoes)": [
        "asz",
        "textile"
    ],
    "Textiles (not clothing)": [
        "rest"
    ],
    "Highlighter - solvent-free": [
        "rest"
    ],
    "Solvent highlighter": [
        "asz"
    ],
    "thermometer": [
        "asz"
    ],
    "Thermal paper": [
        "rest"
    ],
    "Cardboard freezer packaging": [
        "paper"
    ],
    "Frozen packaging, coated": [
        "plastic"
    ],
    "Pet food cans": [
        "plastic"
    ],
    "Animal carcasses": [
        "asz"
    ],
    "Pet food packaging": [
        "plastic"
    ],
    "Thermoformed trays (e.g. for cheese, biscuits, fruit, sausage)": [
        "plastic"
    ],
    "Table linen": [
        "rest",
        "textile"
    ],
    "toaster": [
        "asz"
    ],
    "toilet bowl": [
        "asz"
    ],
    "Toner cartridges and printer cartridges": [
        "asz"
    ],
    "Pottery (small quantities)": [
        "rest"
    ],
    "Pottery (large quantities)": [
        "asz"
    ],
    "Potted plants (without pot)": [
        "bio"
    ],
    "Carrying bag (plastic)": [
        "plastic"
    ],
    "Plastic drinking cup": [
        "plastic"
    ],
    "Drying hood": [
        "asz"
    ],
    "drops, medication": [
        "asz"
    ],
    "Metal tube": [
        "plastic"
    ],
    "Doors": [
        "asz"
    ],
    "weed": [
        "bio"
    ],
    "Weedkiller": [
        "asz"
    ],
    "Consumer electronics with an edge length of more than 50 cm": [
        "asz"
    ],
    "Consumer electronics with an edge length of less than 50 cm": [
        "asz"
    ],
    "Outer packaging (e.g. 6 trays for mineral water)": [
        "plastic"
    ],
    "USB stick": [
        "asz"
    ],
    "Vacuum packaging (e.g. for coffee)": [
        "plastic"
    ],
    "vase": [
        "rest"
    ],
    "Fans larger than 50 cm edge length": [
        "asz"
    ],
    "Fans with an edge length smaller than 50 cm": [
        "asz"
    ],
    "Laminated glass": [
        "rest"
    ],
    "Spoiled food": [
        "rest"
    ],
    "Plastic packaging (small)": [
        "plastic"
    ],
    "Packaging made from bioplastics": [
        "plastic"
    ],
    "Packaging made of jute or textiles": [
        "plastic"
    ],
    "Packaging made of plastic nets (e.g. for onions)": [
        "plastic"
    ],
    "Ceramic packaging (e.g. for special beers, cosmetic products)": [
        "plastic"
    ],
    "Packaging for sliced ​​cheese, sliced ​​sausage": [
        "plastic"
    ],
    "Packaging chips (Styrofoam)": [
        "plastic"
    ],
    "Packaging films (large)": [
        "asz"
    ],
    "Packaging films (small)": [
        "plastic"
    ],
    "Packaging Styrofoam (large)": [
        "asz"
    ],
    "Packaging styrofoam (small)": [
        "plastic"
    ],
    "Video cassettes": [
        "rest"
    ],
    "Video recorder with an edge length of more than 50 cm": [
        "asz"
    ],
    "Video recorder with an edge length of less than 50 cm": [
        "asz"
    ],
    "wax paper": [
        "plastic"
    ],
    "Bathroom sink": [
        "asz"
    ],
    "Mineral spirits": [
        "asz"
    ],
    "Tumble dryer": [
        "asz"
    ],
    "Washing machines": [
        "asz"
    ],
    "Detergent bottles": [
        "plastic"
    ],
    "Toilet scent stones": [
        "asz"
    ],
    "Toilet cleaner": [
        "asz"
    ],
    "Disposable lighters": [
        "rest"
    ],
    "Wine corks": [
        "plastic"
    ],
    "Tinplate cans": [
        "pfand",
        "plastic"
    ],
    "Tinplate parts": [
        "asz"
    ],
    "wave ternite": [
        "asz"
    ],
    "Corrugated cardboard": [
        "paper"
    ],
    "Diapers": [
        "rest"
    ],
    "Windshields": [
        "asz"
    ],
    "Wool blankets": [
        "rest",
        "textile"
    ],
    "sausage foils": [
        "plastic"
    ],
    "Sausage paper (without foil)": [
        "paper"
    ],
    "sausage packaging": [
        "plastic"
    ],
    "rhizomes": [
        "asz"
    ],
    "XPS insulation panels": [
        "asz"
    ],
    "toothbrush": [
        "rest"
    ],
    "Toothbrush (electric)": [
        "asz"
    ],
    "Toothpaste tubes": [
        "plastic"
    ],
    "Magazines": [
        "paper"
    ],
    "Newspapers": [
        "paper"
    ],
    "cellophane": [
        "plastic"
    ],
    "Cement bags": [
        "rest"
    ],
    "Cigarette packs": [
        "rest"
    ],
    "Cigarette butts": [
        "rest"
    ],
    "Lemon peels": [
        "bio"
    ],
    "Citrus fruits": [
        "bio"
    ],
    "candy paper": [
        "plastic"
    ],
    "Matches (completely cooled)": [
        "rest"
    ],
    "branches": [
        "bio"
    ]
},
    de: {
    "Abbeizmittel": [
        "asz"
    ],
    "Abflussreiniger": [
        "asz"
    ],
    "Akkus": [
        "asz"
    ],
    "Aktenordner (leer)": [
        "rest"
    ],
    "Altspeiseöl": [
        "asz"
    ],
    "Alu-Grilltassen": [
        "plastic"
    ],
    "Alufolien": [
        "plastic"
    ],
    "Aluminiumdosen": [
        "pfand",
        "plastic"
    ],
    "Aluminiumgeschirr": [
        "asz"
    ],
    "Armaturen": [
        "asz"
    ],
    "Anstrichfarben": [
        "asz"
    ],
    "Anzuchtschalen (z. B. für Salatpflanzen)": [
        "plastic"
    ],
    "Arzneimittel": [
        "asz"
    ],
    "Apfel": [
        "bio"
    ],
    "Asbestzement größer als 90 cm Kantenlänge": [
        "asz"
    ],
    "Asbestzement kleiner als 90 cm Kantenlänge": [
        "asz"
    ],
    "Äste, zerkleinert": [
        "bio"
    ],
    "Autobatterien": [
        "asz"
    ],
    "Autoglas": [
        "asz"
    ],
    "Autopflegemittel": [
        "asz"
    ],
    "Autoreifen": [
        "asz"
    ],
    "Autoteile aus Kunststoff": [
        "asz",
        "rest"
    ],
    "Autoteile aus Metall (ölfrei)": [
        "asz"
    ],
    "Autowracks": [
        "asz"
    ],
    "Babywindeln": [
        "rest"
    ],
    "Backpapier": [
        "rest"
    ],
    "Backrohrreiniger": [
        "asz"
    ],
    "Badewanne": [
        "asz"
    ],
    "Bananenschale": [
        "bio"
    ],
    "Batterien bis 5 kg": [
        "asz"
    ],
    "Batterien über 5 kg": [
        "asz"
    ],
    "Bau- und Isoliermaterial aus Kunststoff": [
        "asz"
    ],
    "Baumstämme": [
        "asz"
    ],
    "Bauschutt": [
        "asz"
    ],
    "Baustellenabfälle": [
        "asz"
    ],
    "Becher von Milchprodukten": [
        "plastic"
    ],
    "Bekleidung": [
        "rest",
        "textile"
    ],
    "Benzin": [
        "asz"
    ],
    "Benzinfilter": [
        "asz"
    ],
    "Beschichtetes Papier": [
        "rest"
    ],
    "Bettwäsche": [
        "rest",
        "textile"
    ],
    "Beschichtete Verpackungen (z. B. für Gewürze)": [
        "plastic"
    ],
    "Beutel für Gewürze": [
        "plastic"
    ],
    "Beutel für Instantgerichte": [
        "plastic"
    ],
    "Bierdosen": [
        "pfand",
        "plastic"
    ],
    "Bierkapseln": [
        "plastic"
    ],
    "Bildschirme": [
        "asz"
    ],
    "Binden": [
        "rest"
    ],
    "Biokunststoff-Verpackung": [
        "plastic"
    ],
    "Biologisch abbaubare Kunststoffverpackungen": [
        "plastic"
    ],
    "Blähton (zum Beispiel von Hydrokulturen)": [
        "rest"
    ],
    "Blechdosen (zum Beispiel Obstkonserven)": [
        "plastic"
    ],
    "Bleche": [
        "asz"
    ],
    "Blechgeschirr": [
        "asz"
    ],
    "Blechspielzeug": [
        "asz"
    ],
    "Bleikristallglas": [
        "rest"
    ],
    "Blisterverpackungen leer (zum Beispiel Tablettenverpackungen)": [
        "plastic"
    ],
    "Blumen": [
        "bio"
    ],
    "Blumenerde": [
        "asz",
        "bio"
    ],
    "Blumentöpfe aus Asbestzement": [
        "asz"
    ],
    "Blumentöpfe aus Kunststoff": [
        "rest"
    ],
    "Blumentöpfe aus Keramik": [
        "asz"
    ],
    "Bodenbeläge": [
        "asz"
    ],
    "Bodenpflegemittel": [
        "asz"
    ],
    "Bohrmaschine": [
        "asz"
    ],
    "Brennholz": [
        "asz"
    ],
    "Briefkuvert": [
        "paper"
    ],
    "Briefpapier": [
        "paper"
    ],
    "Brotreste": [
        "bio"
    ],
    "Bücher": [
        "paper"
    ],
    "Bügeleisen": [
        "asz"
    ],
    "Bügelmaschine": [
        "asz"
    ],
    "Buntglas (ohne Schraubverschlüsse)": [
        "glass"
    ],
    "Butterbrotpapier": [
        "paper"
    ],
    "Butterbrotpapier (beschichtet)": [
        "rest"
    ],
    "Butterverpackungen": [
        "plastic"
    ],
    "CDs (ohne Hüllen)": [
        "asz"
    ],
    "CD-Hüllen": [
        "rest"
    ],
    "CD-Player": [
        "asz"
    ],
    "Ceranfelder": [
        "asz"
    ],
    "Chemikalien": [
        "asz"
    ],
    "Chipssackerl": [
        "plastic"
    ],
    "Christbaum": [
        "asz"
    ],
    "Computer": [
        "asz"
    ],
    "Couch": [
        "asz"
    ],
    "Dachwelleternit": [
        "asz"
    ],
    "Weiße und bunte EPS-Dämmplatten (\"Kugerl\" zu sehen)": [
        "asz"
    ],
    "XPS-Platten (keine \"Kugerl\" zu sehen), zum Beispiel Rosa, Grün, Blau, selten Weiß": [
        "asz"
    ],
    "Dämmwolle": [
        "asz"
    ],
    "Desinfektionsmittel": [
        "asz"
    ],
    "Dias": [
        "rest"
    ],
    "Dichtungen aus festgebundenen Asbestfasern": [
        "asz"
    ],
    "Dieselfilter": [
        "asz"
    ],
    "Dispersionsfarben": [
        "asz"
    ],
    "Draht": [
        "asz"
    ],
    "Drahtglas": [
        "rest"
    ],
    "haushaltsüblich": [
        "asz"
    ],
    "gewerblich genutzte Geräte, zum Beispiel Standkopiergeräte": [
        "asz"
    ],
    "Drucker kleiner 50 cm Kantenlänge": [
        "asz"
    ],
    "Druckerpatronen und Toner": [
        "asz"
    ],
    "Druckgaspackungen (Gaskartuschen, Gasflaschen) mit Ventil": [
        "asz"
    ],
    "Düngemittel": [
        "asz"
    ],
    "Durchschreibepapier": [
        "rest"
    ],
    "Duschgelverpackung (Plastik, leer)": [
        "plastic"
    ],
    "DVD-Player größer 50 cm - Kantenlänge": [
        "asz"
    ],
    "DVD-Player kleiner 50 cm - Kantenlänge": [
        "asz"
    ],
    "DVD-Hüllen": [
        "rest"
    ],
    "DVDs (ohne Hüllen)": [
        "asz"
    ],
    "Eierschalen": [
        "rest"
    ],
    "Einkaufssackerl aus Kunststoff": [
        "plastic"
    ],
    "Einsiedeglas": [
        "rest"
    ],
    "Einwegbesteck": [
        "plastic"
    ],
    "Einwegflaschen aus Glas": [
        "glass"
    ],
    "Einweggeschirr": [
        "plastic"
    ],
    "Einweghandschuh": [
        "rest"
    ],
    "Einwegspritzen (in durchstichfester Verpackung)": [
        "asz"
    ],
    "Eisenteile": [
        "asz"
    ],
    "Elektroaltgeräte größer 50 cm Kantenlänge": [
        "asz"
    ],
    "Elektroaltgeräte kleiner 50 cm Kantenlänge": [
        "asz"
    ],
    "Emailfarben": [
        "asz"
    ],
    "Energiesparlampen": [
        "asz"
    ],
    "Entkalker": [
        "asz"
    ],
    "Entroster": [
        "asz"
    ],
    "EPS-Dämmplatten": [
        "asz"
    ],
    "Erde, Erdaushub": [
        "asz"
    ],
    "Essensreste": [
        "rest"
    ],
    "Eternit": [
        "asz"
    ],
    "Etiketten (gummiert, Klebeetiketten)": [
        "rest"
    ],
    "Fahrrad": [
        "asz"
    ],
    "Fahrradreifen und -schläuche": [
        "rest"
    ],
    "Fahrradteile": [
        "asz"
    ],
    "Farbbänder": [
        "asz"
    ],
    "Farbdosen (jedoch nur pinselrein)": [
        "asz",
        "plastic"
    ],
    "Farbdosen und -kübel mit Farbresten": [
        "asz"
    ],
    "Farben": [
        "asz"
    ],
    "Farbfilme und Farbfotos": [
        "rest"
    ],
    "Farbkübel (pinselrein ohne Metallbügel)": [
        "asz"
    ],
    "Farbreste": [
        "asz"
    ],
    "Farbverdünner": [
        "asz"
    ],
    "Faxgeräte größer 50 cm Kantenlänge": [
        "asz"
    ],
    "Faxgeräte kleiner 50 cm Kantenlänge": [
        "asz"
    ],
    "Faxthermopapier": [
        "rest"
    ],
    "Federn": [
        "rest"
    ],
    "Fenster": [
        "asz"
    ],
    "Fensterdichtungen": [
        "rest"
    ],
    "Fensterglas": [
        "asz"
    ],
    "Fensterkuverts": [
        "paper"
    ],
    "Fernbedienung": [
        "asz"
    ],
    "Fernsehgeräte": [
        "asz"
    ],
    "Festplatten mit heiklen Daten": [
        "asz"
    ],
    "Festplatten ohne heiklen Daten": [
        "asz"
    ],
    "Fette": [
        "asz"
    ],
    "Feuchttücher": [
        "rest"
    ],
    "Feuerfestes Glas": [
        "rest"
    ],
    "Feuerlöscher": [
        "asz"
    ],
    "Feuerwerkskörper": [
        "asz"
    ],
    "FFP2-Masken": [
        "rest"
    ],
    "Fieberthermometer": [
        "asz"
    ],
    "Filmrollen": [
        "rest"
    ],
    "Filzstifte - Lösungsmittelfrei": [
        "rest"
    ],
    "Filzstifte mit Lösungsmittel": [
        "asz"
    ],
    "Flaschen, Fläschchen (Kunststoff)": [
        "pfand",
        "plastic"
    ],
    "Fleckputzmittel": [
        "asz"
    ],
    "Fleischabfälle": [
        "rest"
    ],
    "Fleischfolien": [
        "plastic"
    ],
    "Fleischtasse": [
        "plastic"
    ],
    "Fön": [
        "asz"
    ],
    "Fotoapparate": [
        "asz"
    ],
    "Fotochemikalien": [
        "asz"
    ],
    "Fotos": [
        "rest"
    ],
    "Frischhaltefolien": [
        "plastic"
    ],
    "Frittieröle": [
        "asz"
    ],
    "Frostschutzmittel": [
        "asz"
    ],
    "Gartenabfälle": [
        "bio"
    ],
    "Gartenmöbel": [
        "asz"
    ],
    "Gartenschlauch": [
        "rest"
    ],
    "Gasflaschen mit Inhalt und Ventil": [
        "asz"
    ],
    "Gasflaschen ohne Inhalt und Ventil": [
        "asz"
    ],
    "Gasherd": [
        "asz"
    ],
    "Gemüse (gekocht)": [
        "rest"
    ],
    "Gemüsetassen aus Kunststoff": [
        "plastic"
    ],
    "Gemüseverpackung aus Kunststoff": [
        "plastic"
    ],
    "Gemüseabfälle (ungekocht)": [
        "bio"
    ],
    "Geschäumte Kunststoffe": [
        "rest"
    ],
    "Geschenkpapier": [
        "paper"
    ],
    "Geschirrspüler": [
        "asz"
    ],
    "Getränkedosen": [
        "pfand",
        "plastic"
    ],
    "Getränkeflaschen (Kunststoff)": [
        "pfand",
        "plastic"
    ],
    "Getränkekarton": [
        "plastic"
    ],
    "Gewerbegeräte (Kühlgeräte, Kopierer, Getränkeautomat et cetera, jedoch keine Kühlhauspaneele)": [
        "asz"
    ],
    "Gewürzbeutel": [
        "plastic"
    ],
    "Gifte aller Art": [
        "asz"
    ],
    "Gipskartonplatten": [
        "asz"
    ],
    "Glasflaschen (ohne Schraubverschlüsse)": [
        "glass"
    ],
    "Glasgeschirr": [
        "rest"
    ],
    "Glaswolle": [
        "asz"
    ],
    "Glühbirnen (keine Sparlampen)": [
        "rest"
    ],
    "Gras": [
        "bio"
    ],
    "Grillreiniger": [
        "asz"
    ],
    "Gummi": [
        "rest"
    ],
    "Gurkengläser": [
        "glass"
    ],
    "Gürtel": [
        "rest",
        "textile"
    ],
    "Haare": [
        "rest"
    ],
    "Haarfärbemittel": [
        "asz"
    ],
    "Halogenlampen und Halogenspots": [
        "rest"
    ],
    "Handkreissäge": [
        "asz"
    ],
    "Handys": [
        "asz"
    ],
    "Hartkunststoffe (zum Beispiel Gartenmöbel aus Plastik)": [
        "asz"
    ],
    "Haushaltsgeräte größer als 50 cm Kantenlänge": [
        "asz"
    ],
    "Haushaltsgeräte kleiner als 50 cm Kantenlänge": [
        "asz"
    ],
    "Haushaltsreiniger (Plastik, leer)": [
        "plastic"
    ],
    "Haustiermist": [
        "rest"
    ],
    "HDPE-Flaschen (zum Beispiel Shampooflaschen)": [
        "plastic"
    ],
    "Headset": [
        "asz"
    ],
    "Heckenschnitt": [
        "bio"
    ],
    "Hefte": [
        "paper"
    ],
    "Heizölreste": [
        "asz"
    ],
    "Heraklith": [
        "rest"
    ],
    "Holz": [
        "asz"
    ],
    "Holzasche kalt": [
        "rest"
    ],
    "Holzschutzmittel": [
        "asz"
    ],
    "Holzsteigen klein (z. B. Tragerl für Erdbeeren)": [
        "plastic"
    ],
    "Hundekot": [
        "rest"
    ],
    "Hydrauliköle": [
        "asz"
    ],
    "Hygieneartikel, -papiere": [
        "rest"
    ],
    "Illustrierte (ohne Kunststoffhülle)": [
        "paper"
    ],
    "Infusionskunststoffbeutel": [
        "rest"
    ],
    "Isolierglas": [
        "rest"
    ],
    "Joghurtbecher": [
        "plastic"
    ],
    "Joghurtbecherdeckel (Kunststoff)": [
        "plastic"
    ],
    "Joghurtbecherdeckel (Alu)": [
        "plastic"
    ],
    "Kabel": [
        "asz"
    ],
    "Kaffeebecher": [
        "plastic"
    ],
    "Kaffeemaschinen": [
        "asz"
    ],
    "Kaffeesud": [
        "bio"
    ],
    "Kaffeekapseln aus Aluminium": [
        "plastic",
        "rest"
    ],
    "Kaffeeverpackungen (Vakuumverpackungen)": [
        "plastic"
    ],
    "Kameras": [
        "asz"
    ],
    "Kartons, Kartonagen": [
        "paper"
    ],
    "Käseverpackungen": [
        "plastic"
    ],
    "Kassazettel": [
        "rest"
    ],
    "Kassenbon": [
        "rest"
    ],
    "Kataloge (ohne Kunststoffhülle)": [
        "paper"
    ],
    "Katalysatoren": [
        "asz"
    ],
    "Katzenstreu": [
        "rest"
    ],
    "Kehricht": [
        "rest"
    ],
    "Keramikteile groß (z.B. Waschbecken)": [
        "asz"
    ],
    "Keramikteile klein (z.B. Häferl)": [
        "rest"
    ],
    "Kerzenreste": [
        "rest"
    ],
    "Kitte": [
        "asz"
    ],
    "Kitte ausgehärtet": [
        "rest"
    ],
    "Klebebänder": [
        "rest"
    ],
    "Klebstoffe": [
        "asz"
    ],
    "Klebstofftuben und -dosen": [
        "asz"
    ],
    "Klemmverpackungen ohne Altpapier (z. B. für Kugelschreiber)": [
        "plastic"
    ],
    "Kleidungsstücke (rein)": [
        "asz",
        "textile"
    ],
    "Kleintiermist": [
        "rest"
    ],
    "Klimageräte": [
        "asz"
    ],
    "Knochen": [
        "rest"
    ],
    "Knopfzellen": [
        "asz"
    ],
    "Kochgeschirr aus Metall": [
        "asz"
    ],
    "Kohle- und Durchschreibepapier": [
        "rest"
    ],
    "Kohlen- und Koksasche (kalt)": [
        "rest"
    ],
    "Konservendosen": [
        "asz",
        "plastic"
    ],
    "Konservengläser": [
        "glass"
    ],
    "Kopiergeräte kleiner 50 cm Kantenlänge": [
        "asz"
    ],
    "Korken": [
        "plastic"
    ],
    "Kosmetika": [
        "asz"
    ],
    "Kosmetikverpackungen aus Glas": [
        "glass"
    ],
    "Kosmetikverpackungen aus Keramik": [
        "plastic"
    ],
    "Kreissäge": [
        "asz"
    ],
    "Kronenkorken": [
        "plastic"
    ],
    "Küchenabfälle (pflanzlich, ungewürzt, ungekocht)": [
        "bio"
    ],
    "Kühlmittel": [
        "asz"
    ],
    "Kühlschränke": [
        "asz"
    ],
    "Künstliche Mineralwollfasern (Glaswolle, Steinwolle, Mineralwolle, Dämmwolle)": [
        "asz"
    ],
    "Kugelschreiber": [
        "rest"
    ],
    "Kunststoff-, Bau- und Isoliermaterial": [
        "asz"
    ],
    "Kunststoffdeckel": [
        "plastic"
    ],
    "Kunststoffflaschen": [
        "pfand",
        "plastic"
    ],
    "Kunststofffolien (groß)": [
        "asz"
    ],
    "Kunststofffolien (klein)": [
        "plastic"
    ],
    "Kunststoffkanister (klein)": [
        "plastic"
    ],
    "Kunststoffkanister (groß)": [
        "asz"
    ],
    "Kunststoffnetze (z. B. für Zwiebel)": [
        "plastic"
    ],
    "Kunststoffstöpsel": [
        "plastic"
    ],
    "Kunststofftuben (z. B. für Zahnpasta)": [
        "plastic"
    ],
    "Kunststoffverpackungen": [
        "plastic"
    ],
    "Kunststoffspielzeug": [
        "rest"
    ],
    "Kupferrohre": [
        "asz"
    ],
    "Kuverts": [
        "paper"
    ],
    "Laborglas": [
        "rest"
    ],
    "Lackdosen (jedoch nur pinselrein)": [
        "asz",
        "plastic"
    ],
    "Lackreste": [
        "asz"
    ],
    "Lampenschirmglas": [
        "rest"
    ],
    "Laptops": [
        "asz"
    ],
    "Laub": [
        "bio"
    ],
    "Laugen": [
        "asz"
    ],
    "Lederabfälle": [
        "rest"
    ],
    "LED-Lampen": [
        "asz"
    ],
    "Leuchtstoffröhren": [
        "asz"
    ],
    "Lithium-Ionen-Akkus/Batterien": [
        "asz"
    ],
    "Lösungsmittel": [
        "asz"
    ],
    "Luftfilter": [
        "rest"
    ],
    "Luftpolsterfolie": [
        "plastic"
    ],
    "Margarinebecher": [
        "plastic"
    ],
    "Marmeladegläser": [
        "glass"
    ],
    "Matratzen": [
        "asz"
    ],
    "Medikamente": [
        "asz"
    ],
    "Medikamentenfläschchen aus Glas (leer)": [
        "glass"
    ],
    "Menüschalen": [
        "plastic"
    ],
    "Menüschalen mit Hinweis Altpapierentsorgung": [
        "paper"
    ],
    "Metallbearbeitungsöle": [
        "asz"
    ],
    "Metallputzmittel": [
        "asz"
    ],
    "Metallrohre": [
        "asz"
    ],
    "Metallteile (keine Motorteile)": [
        "asz"
    ],
    "Metallwerkzeug": [
        "asz"
    ],
    "Mikrowelle größer als 50 cm Kantenlänge": [
        "asz"
    ],
    "Mikrowelle kleiner als 50 cm Kantenlänge": [
        "asz"
    ],
    "Milchprodukte": [
        "rest"
    ],
    "Milchverpackungen": [
        "plastic"
    ],
    "Mineralöle": [
        "asz"
    ],
    "Mineralölgebinde (Motorölflaschen)": [
        "asz"
    ],
    "Mineralwolle": [
        "asz"
    ],
    "Mixer": [
        "asz"
    ],
    "Möbel": [
        "asz"
    ],
    "Mobiltelefone": [
        "asz"
    ],
    "Monitore": [
        "asz"
    ],
    "Montageschaumdose (mit Treibgas betrieben)": [
        "asz"
    ],
    "Motoren oder Motorenteile": [
        "asz"
    ],
    "Motorölflaschen": [
        "asz"
    ],
    "Mottenschutzmittel": [
        "asz"
    ],
    "Munition": [
        "asz"
    ],
    "Musikkassetten": [
        "rest"
    ],
    "Nachtspeicheröfen (unzerlegt)": [
        "asz"
    ],
    "Nägel": [
        "rest"
    ],
    "Nagellacke": [
        "asz"
    ],
    "Nagellackentferner": [
        "asz"
    ],
    "Neonröhren": [
        "asz"
    ],
    "Nitroverdünnungen": [
        "asz"
    ],
    "Notebooks": [
        "asz"
    ],
    "Obstabfälle": [
        "bio"
    ],
    "Obstnetze": [
        "plastic"
    ],
    "Obsttassen (z. B. für Erdbeeren)": [
        "plastic"
    ],
    "Obstverpackung aus Kunststoff": [
        "plastic"
    ],
    "Öfen (keine Nachtspeicheröfen)": [
        "asz"
    ],
    "Öldosen": [
        "asz"
    ],
    "Öle": [
        "asz"
    ],
    "Ölfilter": [
        "asz"
    ],
    "Ölradiatoren": [
        "asz"
    ],
    "Ölverschmutzte Gegenstände": [
        "asz"
    ],
    "Orangenschalen": [
        "bio"
    ],
    "Ordner (leer)": [
        "rest"
    ],
    "Packpapier": [
        "paper"
    ],
    "Papier": [
        "paper"
    ],
    "Papier (beschichtet, leicht zu zerreißen)": [
        "paper"
    ],
    "Papier (stark verschmutzt)": [
        "rest"
    ],
    "Papier, laminiert": [
        "rest"
    ],
    "Papierhandtücher": [
        "rest"
    ],
    "Papiertapeten": [
        "rest"
    ],
    "Papiertaschentücher": [
        "rest"
    ],
    "Papierverpackungen": [
        "paper"
    ],
    "Papierverpackungen, beschichtet": [
        "plastic"
    ],
    "PET-Getränkeflaschen": [
        "pfand",
        "plastic"
    ],
    "Petroleum": [
        "asz"
    ],
    "Pfanne": [
        "rest"
    ],
    "Pflanzenabfälle": [
        "bio"
    ],
    "Pflanzenschutzmittel": [
        "asz"
    ],
    "Pillenverpackungen aus Kunststoff (leer)": [
        "plastic"
    ],
    "Pizzakarton (sauber)": [
        "paper"
    ],
    "Pizzakarton (stark verschmutzt, z.B. Essensreste)": [
        "rest"
    ],
    "Plastikflaschen": [
        "pfand",
        "plastic"
    ],
    "Plastiksackerl": [
        "plastic"
    ],
    "Plastikverpackungen": [
        "plastic"
    ],
    "Porzellan": [
        "rest"
    ],
    "Pressspanplatten": [
        "asz"
    ],
    "Prospekte": [
        "paper"
    ],
    "PUR-Dämmplatten": [
        "asz"
    ],
    "PU-Schaumdose": [
        "asz"
    ],
    "Putzchemikalien": [
        "asz"
    ],
    "Quecksilber": [
        "asz"
    ],
    "Quecksilberthermometer": [
        "asz"
    ],
    "Radioaktive Stoffe": [
        "asz"
    ],
    "Radiogeräte größer als 50 cm Kantenlänge": [
        "asz"
    ],
    "Radiogeräte kleiner als 50 cm Kantenlänge": [
        "asz"
    ],
    "Rasenschnitt": [
        "bio"
    ],
    "Rasierapparat": [
        "asz"
    ],
    "Rattengift": [
        "asz"
    ],
    "Receiver größer als 50 cm Kantenlänge": [
        "asz"
    ],
    "Receiver kleiner als 50 cm Kantenlänge": [
        "asz"
    ],
    "Reifen LKW, Traktor, Baumaschine": [
        "asz"
    ],
    "Reifen PKW": [
        "asz"
    ],
    "Reinigungsmittel": [
        "asz"
    ],
    "Reinigungsmittel (Plastikflaschen, leer)": [
        "plastic"
    ],
    "Reisig": [
        "bio"
    ],
    "Rigipsplatten": [
        "asz"
    ],
    "Rohrleitungen aus Asbestzement": [
        "asz"
    ],
    "Röntgenbilder": [
        "asz"
    ],
    "Rostschutzmittel": [
        "asz"
    ],
    "Saatbeize": [
        "asz"
    ],
    "Saftverpackungen": [
        "plastic"
    ],
    "Sägespäne (unbehandeltes Holz)": [
        "bio"
    ],
    "Salben": [
        "asz"
    ],
    "Sanitärreiniger": [
        "asz"
    ],
    "Satellitenanlagen": [
        "asz"
    ],
    "Säuren": [
        "asz"
    ],
    "Scanner": [
        "asz"
    ],
    "Schachteln": [
        "paper"
    ],
    "Schädlingsbekämpfungsmittel": [
        "asz"
    ],
    "Schalen von Früchten": [
        "bio"
    ],
    "Schallplatten": [
        "rest"
    ],
    "Schaumstoffe": [
        "rest"
    ],
    "Schaumstoffverpackungen": [
        "plastic"
    ],
    "Schießmittel": [
        "asz"
    ],
    "Schlagobersverpackungen": [
        "plastic"
    ],
    "Schmieröle": [
        "asz"
    ],
    "Schneckengift": [
        "asz"
    ],
    "Schneidereiabfälle": [
        "rest"
    ],
    "Schnittblumen": [
        "bio"
    ],
    "Schrauben": [
        "rest"
    ],
    "Schraubverschlüsse aus Kunststoff": [
        "plastic"
    ],
    "Schraubverschlüsse aus Metall": [
        "plastic"
    ],
    "Schreibmaschinenkassetten": [
        "asz"
    ],
    "Schreibpapier": [
        "paper"
    ],
    "Schuhcremedosen (rein und leer)": [
        "plastic"
    ],
    "Schuhe": [
        "rest",
        "textile"
    ],
    "Schutt (Bauschutt)": [
        "asz"
    ],
    "Sektkorken": [
        "plastic"
    ],
    "Senftuben (aus Kunststoff)": [
        "plastic"
    ],
    "Senftuben (aus Metall)": [
        "plastic"
    ],
    "Servietten": [
        "rest"
    ],
    "Shampooflaschen": [
        "plastic"
    ],
    "Ski": [
        "asz"
    ],
    "Smartphone": [
        "asz"
    ],
    "Solarzellen": [
        "asz"
    ],
    "Sortiereinlagetassen (z. B. für Kekse, Konfekt)": [
        "plastic"
    ],
    "Sparlampen": [
        "asz"
    ],
    "Speicherkarten mit heiklen Daten": [
        "asz"
    ],
    "Speicherkarten ohne heikle Daten": [
        "asz"
    ],
    "Speisefette": [
        "asz"
    ],
    "Speiseöle": [
        "asz"
    ],
    "Speiseölflaschen (leer)": [
        "glass",
        "plastic"
    ],
    "Speisereste": [
        "rest"
    ],
    "Sperrmüll": [
        "asz"
    ],
    "Spiegelglas": [
        "asz"
    ],
    "Spielekonsole": [
        "asz"
    ],
    "Spielzeug aus Kunststoff": [
        "rest"
    ],
    "Spraydosen": [
        "asz"
    ],
    "Sprengmittel": [
        "asz"
    ],
    "Spritzmittelbehälter": [
        "asz"
    ],
    "Spülmittelflaschen (leer)": [
        "plastic"
    ],
    "Stahlbänder": [
        "asz"
    ],
    "Stanniolpapier": [
        "plastic"
    ],
    "Staubsauger": [
        "asz"
    ],
    "Staubsaugerbeutel": [
        "rest"
    ],
    "Stauden": [
        "bio"
    ],
    "Steine": [
        "asz"
    ],
    "Steinwolle": [
        "asz"
    ],
    "Steingutgeschirr": [
        "rest"
    ],
    "Steingutverpackungen": [
        "plastic"
    ],
    "Stoffreste": [
        "rest"
    ],
    "Stofftapeten": [
        "rest"
    ],
    "Stoßstangen aus Kunststoff": [
        "rest"
    ],
    "Strauchschnitt": [
        "bio"
    ],
    "Streusand": [
        "asz"
    ],
    "Styropor (groß, keine Dämmplatten)": [
        "asz"
    ],
    "Styropor (klein, keine Dämmplatten)": [
        "plastic"
    ],
    "Styroporflakes": [
        "plastic"
    ],
    "Styroportassen, -chips, färbiges Styropor": [
        "plastic"
    ],
    "Styroporverpackung (groß)": [
        "asz"
    ],
    "Styroporverpackung klein": [
        "plastic"
    ],
    "Suppenbeutel": [
        "plastic"
    ],
    "Tablet (Computer)": [
        "asz"
    ],
    "Tabletten": [
        "asz"
    ],
    "Tablettenverpackungen aus Kunststoff (leer)": [
        "plastic"
    ],
    "Tapeten": [
        "rest"
    ],
    "Take-Away-Verpackung (außer Papier)": [
        "plastic"
    ],
    "Taschenrechner": [
        "asz"
    ],
    "Taschentücher": [
        "rest"
    ],
    "Tastatur": [
        "asz"
    ],
    "Teebeutel (Kunststoff)": [
        "rest"
    ],
    "Teebeutel (Papier)": [
        "bio"
    ],
    "Teerpappe": [
        "asz"
    ],
    "Teesud": [
        "bio"
    ],
    "Telefon": [
        "asz"
    ],
    "Teppiche, Teppichbodenbeläge": [
        "rest"
    ],
    "Terpentin": [
        "asz"
    ],
    "Tetra Pak": [
        "plastic"
    ],
    "Textilien (Kleidung, Schuhe)": [
        "asz",
        "textile"
    ],
    "Textilien (keine Kleidungsstücke)": [
        "rest"
    ],
    "Textmarker - Lösungsmittelfrei": [
        "rest"
    ],
    "Textmarker mit Lösungsmittel": [
        "asz"
    ],
    "Thermometer": [
        "asz"
    ],
    "Thermopapier": [
        "rest"
    ],
    "Tiefkühlverpackungen aus Karton": [
        "paper"
    ],
    "Tiefkühlverpackung, beschichtet": [
        "plastic"
    ],
    "Tierfutterdosen": [
        "plastic"
    ],
    "Tierkadaver": [
        "asz"
    ],
    "Tiernahrungsverpackung": [
        "plastic"
    ],
    "Tiefziehschalen (z. B. für Käse, Kekse, Obst, Wurst)": [
        "plastic"
    ],
    "Tischwäsche": [
        "rest",
        "textile"
    ],
    "Toaster": [
        "asz"
    ],
    "Toilettenschüssel": [
        "asz"
    ],
    "Tonerkassetten und Druckerpatronen": [
        "asz"
    ],
    "Tonwaren (kleine Mengen)": [
        "rest"
    ],
    "Tonwaren (große Mengen)": [
        "asz"
    ],
    "Topfpflanzen (ohne Topf)": [
        "bio"
    ],
    "Tragetasche (Kunststoff)": [
        "plastic"
    ],
    "Trinkbecher aus Kunststoff": [
        "plastic"
    ],
    "Trockenhaube": [
        "asz"
    ],
    "Tropfen, Medikamente": [
        "asz"
    ],
    "Tube aus Metall": [
        "plastic"
    ],
    "Türen": [
        "asz"
    ],
    "TV-Geräte": [
        "asz"
    ],
    "Unkraut": [
        "bio"
    ],
    "Unkrautvernichtungsmittel": [
        "asz"
    ],
    "Unterhaltungselektronik größer als 50 cm Kantenlänge": [
        "asz"
    ],
    "Unterhaltungselektronik kleiner als 50 cm Kantenlänge": [
        "asz"
    ],
    "Umverpackungen (z. B. 6er-Trays für Mineralwasser)": [
        "plastic"
    ],
    "USB-Stick": [
        "asz"
    ],
    "Vakuumverpackungen (z. B. für Kaffee)": [
        "plastic"
    ],
    "Vase": [
        "rest"
    ],
    "Ventilatoren größer als 50 cm Kantenlänge": [
        "asz"
    ],
    "Ventilatoren kleiner als 50 cm Kantenlänge": [
        "asz"
    ],
    "Verbundglas": [
        "rest"
    ],
    "Verdorbene Lebensmittel": [
        "rest"
    ],
    "Verpackungen aus Kunststoff (klein)": [
        "plastic"
    ],
    "Verpackungen aus Biokunststoffen": [
        "plastic"
    ],
    "Verpackungen aus Jute beziehungsweise Textilien": [
        "plastic"
    ],
    "Verpackungen aus Kunststoffnetzen (z. B. für Zwiebel)": [
        "plastic"
    ],
    "Verpackungen aus Keramik (z. B. für Spezialbiere, Kosmetikprodukte)": [
        "plastic"
    ],
    "Verpackungen für Schnittkäse, Schnittwurst": [
        "plastic"
    ],
    "Verpackungschips (Styropor)": [
        "plastic"
    ],
    "Verpackungsfolien (groß)": [
        "asz"
    ],
    "Verpackungsfolien (klein)": [
        "plastic"
    ],
    "Verpackungsstyropor (groß)": [
        "asz"
    ],
    "Verpackungsstyropor (klein)": [
        "plastic"
    ],
    "Videokassetten": [
        "rest"
    ],
    "Videorekorder größer als 50 cm Kantenlänge": [
        "asz"
    ],
    "Videorekorder kleiner als 50 cm Kantenlänge": [
        "asz"
    ],
    "Wachspapier": [
        "plastic"
    ],
    "Waschbecken": [
        "asz"
    ],
    "Waschbenzin": [
        "asz"
    ],
    "Wäschetrockner": [
        "asz"
    ],
    "Waschmaschinen": [
        "asz"
    ],
    "Waschmittelflaschen": [
        "plastic"
    ],
    "WC-Duftsteine": [
        "asz"
    ],
    "WC-Reiniger": [
        "asz"
    ],
    "Wegwerffeuerzeuge": [
        "rest"
    ],
    "Weinkorken": [
        "plastic"
    ],
    "Weißblechdosen": [
        "pfand",
        "plastic"
    ],
    "Weißblechteile": [
        "asz"
    ],
    "Welleternit": [
        "asz"
    ],
    "Wellpappe": [
        "paper"
    ],
    "Windeln": [
        "rest"
    ],
    "Windschutzscheiben": [
        "asz"
    ],
    "Wolldecken": [
        "rest",
        "textile"
    ],
    "Wurstfolien": [
        "plastic"
    ],
    "Wurstpapier (ohne Folie)": [
        "paper"
    ],
    "Wurstverpackungen": [
        "plastic"
    ],
    "Wurzelstöcke": [
        "asz"
    ],
    "XPS-Dämmplatten": [
        "asz"
    ],
    "Zahnbürste": [
        "rest"
    ],
    "Zahnbürste (elektrisch)": [
        "asz"
    ],
    "Zahnpastatuben": [
        "plastic"
    ],
    "Zeitschriften": [
        "paper"
    ],
    "Zeitungen": [
        "paper"
    ],
    "Zellophan": [
        "plastic"
    ],
    "Zementsäcke": [
        "rest"
    ],
    "Zigarettenschachteln": [
        "rest"
    ],
    "Zigarettenstummel": [
        "rest"
    ],
    "Zitronenschalen": [
        "bio"
    ],
    "Zitrusfrüchte": [
        "bio"
    ],
    "Zuckerlpapier": [
        "plastic"
    ],
    "Zündhölzer (völlig erkaltet)": [
        "rest"
    ],
    "Zweige": [
        "bio"
    ]
}
  }
};