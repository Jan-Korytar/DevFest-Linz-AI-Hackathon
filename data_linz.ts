import { CityRules } from './types';

export const LINZ_RULES: CityRules = {
  name: "Linz",
  officialWebsite: "https://www.linz.at/umwelt/abfall.php",
  bins: {
    plastic: { 
      name: { en: "Yellow Bag (Plastic & Metal)", de: "Gelber Sack / Gelbe Tonne" }, 
      color: "bg-yellow-400",
      icon: "plastic",
      detailedInstructions: {
        en: "• Collects: Plastic packaging (yogurt cups, bottles, foils), Material composites (milk/juice cartons), Metal/Aluminum (cans, lids, tubes).\n• Do NOT put in: Plastic toys, tools, cooking pots, or wires (-> ASZ).\n• Do NOT put in: Deposit bottles/cans (Pfand).\n• Empty containers completely. Remove aluminum lids from cups.",
        de: "• Das gehört hinein: Kunststoffverpackungen (Joghurtbecher, Flaschen, Folien), Materialverbund (Milch-/Getränkekartons), Metall/Alu (Dosen, Deckel, Tuben).\n• Nicht hinein: Spielzeug, Werkzeug, Kochtöpfe oder Drähte (-> ASZ).\n• Nicht hinein: Pfandflaschen/-dosen.\n• Behälter restentleeren. Aludeckel abtrennen."
      }
    },
    paper: { 
      name: { en: "Waste Paper", de: "Altpapier" }, 
      color: "bg-red-500",
      icon: "paper",
      detailedInstructions: {
        en: "• Collects: Newspapers, magazines, brochures, books, writing paper, cardboard boxes (folded flat).\n• Do NOT put in: Hygiene paper (tissues), milk/juice cartons (-> Yellow Bag), receipt thermal paper, dirty/greasy paper (pizza boxes).",
        de: "• Das gehört hinein: Zeitungen, Illustrierte, Prospekte, Bücher, Schreibpapier, Kartonagen (gefaltet).\n• Nicht hinein: Hygienepapier (Taschentücher), Milch-/Saftkartons (-> Gelber Sack), Thermopapier (Kassabons), verschmutztes/fettiges Papier (Pizzakartons)."
      }
    },
    glass: { 
      name: { en: "Glass Waste", de: "Altglas" }, 
      color: "bg-green-500",
      icon: "glass",
      detailedInstructions: {
        en: "• Separate by color (White / Colored). Colored includes unknown colors.\n• Collects: Glass bottles, jars, perfume bottles, empty medicine bottles.\n• Do NOT put in: Drinking glasses, window panes, ceramics, porcelain, light bulbs, or mirrors.\n• Remove caps/lids (unless stuck ring). Respect quiet hours (no throw-in 20:00-07:00).",
        de: "• Nach Farbe trennen (Weiß- / Buntglas). Buntglas ist für alle gefärbten Gläser.\n• Das gehört hinein: Glasflaschen, Konservengläser, Parfümflakons, leere Medizinfläschchen.\n• Nicht hinein: Trinkgläser, Fensterglas, Keramik, Porzellan, Glühbirnen oder Spiegel.\n• Verschlüsse entfernen. Ruhezeiten beachten (kein Einwurf 20:00-07:00)."
      }
    },
    bio: { 
      name: { en: "Organic Waste", de: "Biotonne" }, 
      color: "bg-amber-700",
      icon: "bio",
      detailedInstructions: {
        en: "• Collects: Fruit/veg scraps, food leftovers (incl. meat/bones), coffee grounds, eggshells, garden trimmings, paper towels.\n• Do NOT put in: PLASTIC bags (even 'bioplastic' capsules), liquids (oils, soups), cat litter, vacuum bags, cigarette butts.\n• Use only certified cornstarch bags or newspaper.",
        de: "• Das gehört hinein: Obst-/Gemüsereste, Speisereste (inkl. Fleisch/Knochen), Kaffeesatz, Eierschalen, Grünschnitt, Küchenrolle.\n• Nicht hinein: PLASTIKSÄCKE (auch keine 'Bio-Kapseln'), Flüssigkeiten (Öle, Suppen), Katzenstreu, Staubsaugerbeutel, Zigaretten.\n• Nur Maisstärkesäcke oder Zeitungspapier verwenden."
      }
    },
    rest: { 
      name: { en: "Residual Waste", de: "Restmüll" }, 
      color: "bg-gray-800",
      icon: "rest",
      detailedInstructions: {
        en: "• Collects: Hygiene products, diapers, vacuum bags, cigarette butts, photos, dirty paper/foil, broken drinking glasses/ceramics, broken household plastic (toys, buckets).\n• Do NOT put in: Batteries, electronics, hazardous waste, or recyclables.",
        de: "• Das gehört hinein: Hygieneartikel, Windeln, Staubsaugerbeutel, Zigaretten, Fotos, schmutziges Papier/Alufolie, kaputte Trinkgläser/Keramik, kaputte Haushaltsgegenstände aus Plastik (Spielzeug, Eimer).\n• Nicht hinein: Batterien, Elektrogeräte, Problemstoffe oder Altstoffe."
      }
    },
    asz: { 
      name: { en: "Recycling Center (ASZ)", de: "Altstoffsammelzentrum (ASZ)" }, 
      color: "bg-orange-500", 
      icon: "asz",
      description: { en: "Take to Recycling Center", de: "Ins ASZ bringen" },
      detailedInstructions: {
        en: "• Hazardous Waste: Batteries (tape poles!), paints, oils, chemicals.\n• Electronics: TVs, phones (delete data!), appliances, cables.\n• Cooking Oil: Use the 'Öli' bucket (exchange full for empty).\n• Others: Scrap metal, wood, bulky waste, wearable clothing (textiles), construction rubble.",
        de: "• Problemstoffe: Batterien/Akkus (Pole abkleben!), Lacke, Öle, Chemikalien.\n• Elektrogeräte: Fernseher, Handys (Daten löschen!), Haushaltsgeräte, Kabel.\n• Altspeiseöl: Im 'Öli'-Eimer sammeln (voll gegen leer tauschen).\n• Sonstiges: Alteisen, Altholz, Sperrmüll, tragbare Kleidung (Textilien), Bauschutt."
      }
    }
},
  mappings: {
    en: {
     //Special    



    "paint stripper": [
        "ASZ"
    ],
    "masking tapes": [
        "Restabfall"
    ],
    "Tarpaulins and foils": [
        "Restabfall"
    ],
    "Drain cleaner": [
        "ASZ"
    ],
    "drain pipes": [
        "ASZ"
    ],
    "acetone": [
        "ASZ"
    ],
    "Acrylic glasses": [
        "Restabfall"
    ],
    "Acrylic varnishes": [
        "ASZ"
    ],
    "Actimel vial": [
        "Gelbe Tonne/Gelber Sack"
    ],
    "Advent calendar": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Advent wreaths without wire, bows, polystyrene tires etc.": [
        "Biotonne"
    ],
    "Batteries": [
        "ASZ"
    ],
    "file folder": [
        "Restabfall"
    ],
    "Scrap iron (iron rods, iron parts, clothes racks,...)": [
        "ASZ"
    ],
    "Waste glass (canning jars, perfumes, glass bottles,...)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Old clothing": [
        "ASZ",
        "Restabfall"
    ],
    "Scrap metals": [
        "ASZ"
    ],
    "Waste oils containing halogen": [
        "ASZ"
    ],
    "Waste oils, mineral": [
        "ASZ"
    ],
    "Waste paper (cardboard boxes, newspapers, stationery,...)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Used cooking fats and oils": [
        "ASZ"
    ],
    "Old textiles": [
        "Restabfall"
    ],
    "Aluminum foil (dirty)": [
        "Restabfall"
    ],
    "Aluminum foil as packaging for goods (clean)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Aluminum container as packaging (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Fishing rods": [
        "Restabfall"
    ],
    "Antennas": [
        "ASZ"
    ],
    "Aquariums": [
        "ASZ"
    ],
    "fittings": [
        "ASZ"
    ],
    "Medicine tubes made of plastic (empty)": [
        "Gelbe Tonne/Gelber Sack"
    ],
    "Medicine tubes made of metal (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Asbestos cement products (e.g. Eternit panels)": [
        "ASZ"
    ],
    "Asphalt breaks": [
        "ASZ"
    ],
    "branches": [
        "ASZ",
        "Biotonne"
    ],
    "Etching solutions": [
        "ASZ"
    ],
    "Stickers": [
        "Restabfall"
    ],
    "Charging cables, devices": [
        "ASZ"
    ],
    "Roll-up tubes for kitchen roll or toilet paper": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Car windshields": [
        "ASZ"
    ],
    "Car batteries": [
        "ASZ"
    ],
    "Car rims": [
        "ASZ"
    ],
    "Car paints": [
        "ASZ"
    ],
    "Car furniture": [
        "ASZ"
    ],
    "Car care products (polishes, waxes)": [
        "ASZ"
    ],
    "Car seats": [
        "ASZ"
    ],
    "Plastic car bumpers": [
        "ASZ"
    ],
    "Metal car bumpers": [
        "ASZ"
    ],
    "Metal car parts (oil-free)": [
        "ASZ"
    ],
    "Baby bottles made of glass or plastic": [
        "Restabfall"
    ],
    "baking papers": [
        "Restabfall"
    ],
    "Ovens and ovens": [
        "ASZ"
    ],
    "Oven cleaner": [
        "ASZ"
    ],
    "Bathing caps": [
        "Restabfall"
    ],
    "Bath salts": [
        "Restabfall"
    ],
    "Bathtubs": [
        "ASZ"
    ],
    "Metal/enamel bathtubs": [
        "ASZ"
    ],
    "balls": [
        "Restabfall"
    ],
    "Banana peels": [
        "Biotonne"
    ],
    "Bandages": [
        "Restabfall"
    ],
    "Battery acids": [
        "ASZ"
    ],
    "Construction and demolition wood": [
        "ASZ"
    ],
    "construction rubble": [
        "ASZ"
    ],
    "Construction styrofoam": [
        "ASZ"
    ],
    "projector": [
        "ASZ"
    ],
    "Plastic cups (e.g. from ice cream, delicatessen products)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Leg presses": [
        "ASZ"
    ],
    "petrol": [
        "ASZ"
    ],
    "Petrol and diesel filters": [
        "ASZ"
    ],
    "Emphasize": [
        "ASZ"
    ],
    "Bed frames, inserts and frames made of wood or metal": [
        "ASZ"
    ],
    "Bed feathers (down filling material in blankets, etc.)": [
        "Restabfall"
    ],
    "Bed springs (spring core of a mattress)": [
        "ASZ"
    ],
    "Bedding": [
        "ASZ",
        "Restabfall"
    ],
    "Big bags": [
        "ASZ"
    ],
    "Picture frame": [
        "ASZ",
        "Restabfall"
    ],
    "Screen devices": [
        "ASZ"
    ],
    "Organic waste (egg shells, fruit and vegetable scraps,...)": [
        "Biotonne"
    ],
    "Bitumen (liquid)": [
        "ASZ"
    ],
    "Expanded clay (e.g. from hydroponics)": [
        "ASZ"
    ],
    "sheets": [
        "ASZ"
    ],
    "Sheet metal profiles": [
        "ASZ"
    ],
    "Lead, leftovers (e.g. from New Year's Eve)": [
        "ASZ"
    ],
    "Bleach": [
        "ASZ"
    ],
    "Lead glasses, lead crystal glasses": [
        "Restabfall"
    ],
    "Lead pipes": [
        "ASZ"
    ],
    "Pencils, colored pencils": [
        "Restabfall"
    ],
    "Flowers": [
        "Biotonne"
    ],
    "Flower boxes and boxes made of ceramic or plastic": [
        "Restabfall"
    ],
    "Ceramic flower pots and planters": [
        "Restabfall"
    ],
    "Flower pots and planters made of plastic": [
        "ASZ"
    ],
    "Floor waxes": [
        "ASZ"
    ],
    "Drilling, grinding and cutting oils": [
        "ASZ"
    ],
    "Drilling machines": [
        "ASZ"
    ],
    "boiler": [
        "ASZ"
    ],
    "Brake fluids": [
        "ASZ"
    ],
    "Denatured alcohols": [
        "ASZ"
    ],
    "Letters, stationery": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Envelopes with bubble wrap": [
        "Gelbe Tonne/Gelber Sack",
        "Restabfall",
        "Altpapierbehälter"
    ],
    "Envelopes, also with a window": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Stamps": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Glasses": [
        "ASZ",
        "Restabfall"
    ],
    "Glasses cases": [
        "ASZ"
    ],
    "Leftover bread (moldy)": [
        "Biotonne"
    ],
    "Books": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Ironing boards": [
        "ASZ"
    ],
    "iron": [
        "ASZ"
    ],
    "Ironing machines": [
        "ASZ"
    ],
    "Crayon metal boxes": [
        "ASZ"
    ],
    "Office supplies": [
        "ASZ",
        "Restabfall"
    ],
    "Paper clips": [
        "ASZ"
    ],
    "Office armchair": [
        "ASZ"
    ],
    "Brush": [
        "Restabfall"
    ],
    "Butter packaging films": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Greeting papers (dirty)": [
        "Restabfall"
    ],
    "CD cases": [
        "Restabfall"
    ],
    "CD player": [
        "ASZ"
    ],
    "CDs (compact disc, CD-ROM)": [
        "ASZ"
    ],
    "Cellophane packaging": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Chemicals": [
        "ASZ"
    ],
    "Chip bags": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Chlorine waste from swimming pool treatment": [
        "ASZ"
    ],
    "Christmas tree lights, electric": [
        "ASZ"
    ],
    "Christmas trees (without decorations, tinsel, hooks, etc.)": [
        "Biotonne"
    ],
    "Christmas tree decorations (e.g. tinsel, Christmas tree balls)": [
        "Restabfall"
    ],
    "Christmas tree spray candles (burned down)": [
        "Restabfall"
    ],
    "Chrome parts": [
        "ASZ"
    ],
    "Computers, notebooks": [
        "ASZ"
    ],
    "Computer papers, fax papers (plain paper)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Computer keyboards, mice": [
        "ASZ"
    ],
    "Couches": [
        "ASZ"
    ],
    "Roofing felts": [
        "Restabfall"
    ],
    "Plastic gutters": [
        "ASZ"
    ],
    "Metal gutters": [
        "ASZ"
    ],
    "Sanitary pads, tampons": [
        "Restabfall"
    ],
    "Insulating wool (artificial mineral fibers)": [
        "ASZ"
    ],
    "Steam iron": [
        "ASZ"
    ],
    "Dartboards": [
        "ASZ",
        "Restabfall"
    ],
    "Down (loose)": [
        "Restabfall"
    ],
    "Opaque metal boxes": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Opaque paint bowl made of plastic": [
        "Restabfall"
    ],
    "Defibrillators": [
        "ASZ"
    ],
    "Deodorant glass container (empty)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Deodorant plastic packaging (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Deodorant metal cans (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Deodorants": [
        "ASZ"
    ],
    "Disinfectant": [
        "ASZ"
    ],
    "Slide projectors": [
        "ASZ"
    ],
    "Slides": [
        "Restabfall"
    ],
    "Plastic-based sealants (cured)": [
        "Restabfall"
    ],
    "Plastic-based sealants (not cured)": [
        "ASZ"
    ],
    "Diesel oils": [
        "ASZ"
    ],
    "Floppy disks": [
        "Restabfall"
    ],
    "Floppy disk boxes": [
        "Restabfall"
    ],
    "Emulsion paints": [
        "ASZ"
    ],
    "Plastic document sleeves": [
        "Restabfall"
    ],
    "Document folders made of plastic or leather": [
        "Restabfall"
    ],
    "Document folders made of paper, without metal": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Cans made of cardboard-metal-plastic composite (e.g. Pringles cans)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Can opener, electric": [
        "ASZ"
    ],
    "Can opener, mechanical": [
        "ASZ"
    ],
    "Wire glasses": [
        "ASZ"
    ],
    "Printer": [
        "ASZ"
    ],
    "Printer ribbons": [
        "Restabfall"
    ],
    "Inkjet printer cartridges": [
        "ASZ"
    ],
    "Compressed gas packs (with remaining contents)": [
        "ASZ"
    ],
    "Compressed gas packs made of metal (completely emptied)": [
        "Gelbe Tonne/Gelber Sack"
    ],
    "Scented stones (e.g. for toilets)": [
        "ASZ"
    ],
    "Fertilizers": [
        "ASZ"
    ],
    "Fertilizer bags (not completely emptied)": [
        "ASZ"
    ],
    "Plastic fertilizer bags (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Fertilizer bags made of paper (empty)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Fertilizer packaging made of cardboard (emptied of any residue)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "extractor filter": [
        "Restabfall"
    ],
    "extractor hoods": [
        "ASZ"
    ],
    "Plastic shower hoses": [
        "Restabfall"
    ],
    "Metal shower hoses": [
        "ASZ"
    ],
    "shower trays": [
        "ASZ"
    ],
    "shower curtains": [
        "Restabfall"
    ],
    "DVD cases": [
        "Restabfall"
    ],
    "DVD player": [
        "ASZ"
    ],
    "DVDs": [
        "ASZ"
    ],
    "E-bike batteries": [
        "ASZ"
    ],
    "E-bike, e-scooter with removed battery": [
        "ASZ"
    ],
    "Real wood veneers made from untreated wood": [
        "ASZ"
    ],
    "Stainless steel sinks": [
        "ASZ"
    ],
    "Egg cartons (clean, empty)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Plastic egg boxes": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Eggshells": [
        "Biotonne"
    ],
    "shopping baskets": [
        "Restabfall"
    ],
    "Plastic shopping bags": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Paper shopping bags": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Hermitage jars (empty)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Disposable tableware, plastic cutlery (e.g. ready meal bowls)": [
        "Gelbe Tonne/Gelber Sack"
    ],
    "Disposable plastic gloves": [
        "Restabfall"
    ],
    "Disposable razors": [
        "Restabfall"
    ],
    "Disposable razor protective caps": [
        "Restabfall"
    ],
    "individual porcelain items": [
        "Restabfall"
    ],
    "Ice cream cups made of plastic or waxed paper/cardboard": [
        "Restabfall"
    ],
    "Iron, metal boxes": [
        "ASZ"
    ],
    "Iron parts (no packaging)": [
        "ASZ"
    ],
    "Ice sticks": [
        "ASZ"
    ],
    "Electrical screw fuses": [
        "ASZ"
    ],
    "Electric stoves kitchen": [
        "ASZ"
    ],
    "Electric boiler": [
        "ASZ"
    ],
    "Electrical appliances": [
        "ASZ"
    ],
    "Electric heaters, electric radiators": [
        "ASZ"
    ],
    "Electric motors": [
        "ASZ"
    ],
    "electronic dartboards": [
        "ASZ"
    ],
    "electronic sports equipment": [
        "ASZ"
    ],
    "Electric shaver": [
        "ASZ"
    ],
    "Enamel colors": [
        "ASZ"
    ],
    "Energy saving lamps": [
        "ASZ"
    ],
    "De-icer, defroster": [
        "ASZ"
    ],
    "Descaler": [
        "ASZ"
    ],
    "Discharge lamps": [
        "ASZ"
    ],
    "Rust removal agent": [
        "ASZ"
    ],
    "Epoxy resin, epoxy glue (not cured)": [
        "ASZ"
    ],
    "Earth": [
        "ASZ"
    ],
    "Metal cutlery": [
        "ASZ"
    ],
    "Meals on Wheels metal meal trays": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Leftover food": [
        "Biotonne"
    ],
    "Eternit, plates": [
        "ASZ"
    ],
    "Labels, backing paper": [
        "Restabfall"
    ],
    "cases": [
        "ASZ"
    ],
    "Bicycle dynamo": [
        "ASZ"
    ],
    "Bicycles": [
        "ASZ"
    ],
    "Bicycle lamps": [
        "Restabfall"
    ],
    "Plastic bicycle air pumps": [
        "Restabfall"
    ],
    "Metal bicycle air pumps": [
        "ASZ"
    ],
    "Bicycle tires and tubes": [
        "Restabfall"
    ],
    "Bicycle locks": [
        "ASZ"
    ],
    "Plastic bicycle parts": [
        "Restabfall"
    ],
    "Metal bicycle parts": [
        "ASZ"
    ],
    "Vehicle tires": [
        "ASZ"
    ],
    "Color toner cartridges from copiers and printers (with remaining contents)": [
        "ASZ"
    ],
    "Ribbons, ribbon cassettes from typewriters or printers": [
        "Restabfall"
    ],
    "Paint cans (brush clean)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Paint cans and buckets (contents hardened)": [
        "Restabfall"
    ],
    "Paint cans and buckets (contents liquid)": [
        "ASZ"
    ],
    "Paints and varnishes": [
        "ASZ"
    ],
    "Plastic paint bucket (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Paint residue (dried, free of heavy metals, oil and solvents)": [
        "Restabfall"
    ],
    "Paint thinner, lacquer thinner": [
        "ASZ"
    ],
    "Skins (tanned or raw)": [
        "Restabfall"
    ],
    "Window seals": [
        "Restabfall"
    ],
    "Window sashes and frames made of aluminum": [
        "ASZ"
    ],
    "window glasses": [
        "ASZ"
    ],
    "Window putty (cured)": [
        "Restabfall"
    ],
    "Window putty (not cured)": [
        "ASZ"
    ],
    "Wooden window frames and frames": [
        "ASZ"
    ],
    "Piglet lamps": [
        "ASZ"
    ],
    "Remote controls": [
        "ASZ"
    ],
    "TV sets": [
        "ASZ"
    ],
    "Greases based on mineral oil, e.g. grease": [
        "ASZ"
    ],
    "Fats and oils of animal or vegetable origin": [
        "ASZ"
    ],
    "Shreds, oily or oil-smeared": [
        "ASZ"
    ],
    "Fireproof glass (e.g. Jenaer Glas)": [
        "Restabfall"
    ],
    "Fire extinguisher": [
        "ASZ"
    ],
    "Firecrackers (burned down)": [
        "Restabfall"
    ],
    "Lighters (empty)": [
        "Restabfall"
    ],
    "Lighters (with remaining contents)": [
        "ASZ"
    ],
    "Filament residue from 3D printing": [
        "Restabfall"
    ],
    "Film canisters": [
        "Gelbe Tonne/Gelber Sack"
    ],
    "Film capsules, cassettes, cartridges, spools": [
        "Restabfall"
    ],
    "Filter layers from viticulture": [
        "Biotonne"
    ],
    "Felt-tip pens (dried out)": [
        "Restabfall"
    ],
    "Felt-tip pens, flipchart pens (solvent-based)": [
        "ASZ"
    ],
    "Fish bones": [
        "Biotonne"
    ],
    "Flat batteries": [
        "ASZ"
    ],
    "Flat glasses": [
        "ASZ"
    ],
    "Glass bottles (empty)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Bottles made of glass, as packaging (completely emptied)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Bottles made of ceramic or earthenware (as packaging)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Bottles made of plastic, ceramic, earthenware or glass (no packaging)": [
        "Restabfall"
    ],
    "Stain cleaning products": [
        "ASZ"
    ],
    "Leftover meat, sausages and bones from households": [
        "Biotonne"
    ],
    "Meat foils and papers (waxed or foil-coated)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "meat bag (dirty)": [
        "Restabfall"
    ],
    "Meat cups (dirty)": [
        "Restabfall"
    ],
    "Cardboard meat cups": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Meat cups made of plastic (e.g. made of Styrofoam or Porozell)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Flex discs": [
        "Restabfall"
    ],
    "fly catcher (chemical)": [
        "ASZ"
    ],
    "Fly swatters": [
        "Restabfall"
    ],
    "Tiles": [
        "ASZ"
    ],
    "Tile adhesive": [
        "ASZ"
    ],
    "Tile adhesive bags made of paper (plastic-coated)": [
        "Restabfall"
    ],
    "Tile adhesive bags made of paper (empty)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Films (dirty)": [
        "Restabfall"
    ],
    "Films made of biodegradable material as packaging (e.g. film for tomatoes)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Plastic films (as packaging)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Foil containers for outdoor plants": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Photo batteries": [
        "ASZ"
    ],
    "Photochemicals": [
        "ASZ"
    ],
    "Photos": [
        "Restabfall"
    ],
    "Plastic cling film (as packaging for goods)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Cling film, made of plastic, is not used as packaging for goods, but is used in the household": [
        "Restabfall"
    ],
    "deep fryer": [
        "ASZ"
    ],
    "Deep-frying fats and oils": [
        "ASZ"
    ],
    "Antifreeze": [
        "ASZ"
    ],
    "Plastic-based joint compounds (hardened)": [
        "Restabfall"
    ],
    "Plastic-based joint compounds (not hardened)": [
        "ASZ"
    ],
    "Cement-based joint compounds": [
        "ASZ"
    ],
    "Fungicides": [
        "ASZ"
    ],
    "Feed bags made of plastic or coated (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Feed sacks made of paper (emptied completely)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Wooden floors and coverings": [
        "ASZ"
    ],
    "floor coverings": [
        "ASZ"
    ],
    "Floor care products": [
        "ASZ"
    ],
    "Doormats": [
        "Restabfall"
    ],
    "Curtain strips": [
        "ASZ"
    ],
    "Garden waste, organic": [
        "Biotonne"
    ],
    "Wooden garden furniture": [
        "ASZ"
    ],
    "Garden hoses": [
        "Restabfall"
    ],
    "Garden gnomes": [
        "Restabfall"
    ],
    "Gas stoves": [
        "ASZ"
    ],
    "Gas discharge lamps": [
        "ASZ"
    ],
    "Gas bottles and cartridges (empty or with contents)": [
        "ASZ"
    ],
    "Consumer goods made of plastic, e.g. toys (no packaging)": [
        "ASZ"
    ],
    "Freezer bags (as packaging for purchased goods)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Freezer bags, not used as packaging for goods, but used in the household": [
        "Restabfall"
    ],
    "Wallets made of plastic or leather": [
        "Restabfall"
    ],
    "Gelsenplug plates": [
        "ASZ"
    ],
    "Vegetable waste": [
        "Biotonne"
    ],
    "Wrapping papers": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Wrapping paper (foil-coated)": [
        "Restabfall"
    ],
    "Aluminum tableware - disposable (e.g. ready meal bowls)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Dishwasher": [
        "ASZ"
    ],
    "Disposable beverage cups (made of cardboard or plastic)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Beverage cans (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Plastic beverage bottles (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Beverage cartons such as milk cartons": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Gear oils": [
        "ASZ"
    ],
    "Antlers": [
        "ASZ"
    ],
    "Spice packaging": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Plastic watering cans": [
        "ASZ"
    ],
    "Metal watering cans": [
        "ASZ"
    ],
    "Poison packaging": [
        "ASZ"
    ],
    "Poisons of all kinds": [
        "ASZ"
    ],
    "plaster": [
        "ASZ"
    ],
    "Glass dishes, glass bowls": [
        "Restabfall"
    ],
    "Glass panes": [
        "ASZ"
    ],
    "Broken glass (no packaging)": [
        "ASZ"
    ],
    "Broken glass (packaging)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Glass tables": [
        "ASZ"
    ],
    "Light bulbs": [
        "Restabfall"
    ],
    "Grave lights (battery operated)": [
        "ASZ"
    ],
    "Grave lights (with remaining contents)": [
        "Restabfall"
    ],
    "Grave candle cases made of glass (without remaining contents)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Grave candle covers made of plastic (without residual contents)": [
        "Restabfall"
    ],
    "Grave light covers": [
        "Restabfall"
    ],
    "Grass clippings": [
        "ASZ",
        "Biotonne"
    ],
    "Griller, electric": [
        "ASZ"
    ],
    "Grill cleaner": [
        "ASZ"
    ],
    "Aluminum grill cups": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Green waste": [
        "Biotonne"
    ],
    "Green cuttings": [
        "Biotonne"
    ],
    "rubber waste": [
        "Restabfall"
    ],
    "Rubber bands": [
        "Restabfall"
    ],
    "Rubber ring": [
        "Restabfall"
    ],
    "Rubber boots": [
        "Restabfall"
    ],
    "Pickle jars (empty)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Belt": [
        "ASZ"
    ],
    "Plastic belt buckles": [
        "Restabfall"
    ],
    "Metal belt buckles": [
        "ASZ"
    ],
    "Hairbrushes": [
        "Restabfall"
    ],
    "Animal or human hair and nails": [
        "Biotonne"
    ],
    "Hair dye": [
        "ASZ"
    ],
    "Glass hair dye bottles (empty)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Plastic hair dye bottles (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Hairdryers": [
        "ASZ"
    ],
    "Hairspray and pump spray cans made of plastic (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Hairspray and pump spray cans made of metal (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Hair sprays and pump sprays (with remaining contents)": [
        "ASZ"
    ],
    "Hair wax, gels": [
        "ASZ"
    ],
    "Wood chips (untreated)": [
        "Biotonne"
    ],
    "Halogen vapor lamps": [
        "ASZ"
    ],
    "Halogen lamps, spotlights, spots": [
        "Restabfall"
    ],
    "Hand and care creams": [
        "ASZ"
    ],
    "Gloves": [
        "ASZ"
    ],
    "Cell phones": [
        "ASZ"
    ],
    "Hemp ropes": [
        "Restabfall"
    ],
    "dumbbells, benches": [
        "ASZ"
    ],
    "Hardboard": [
        "ASZ"
    ],
    "Household electronics": [
        "ASZ"
    ],
    "Household porcelains and ceramics": [
        "ASZ"
    ],
    "Household cleaners": [
        "ASZ"
    ],
    "household waste": [
        "Restabfall"
    ],
    "Slippers": [
        "Restabfall"
    ],
    "Pet manure, feces with litter": [
        "Restabfall"
    ],
    "Hedge trimmings": [
        "Biotonne"
    ],
    "Booklets (without plastic cover)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Plastic bindings": [
        "Restabfall"
    ],
    "Staples": [
        "ASZ"
    ],
    "Adhesive plaster": [
        "Restabfall"
    ],
    "Home solarium": [
        "ASZ"
    ],
    "Heaters, electric": [
        "ASZ"
    ],
    "Heating boilers for gas, solid fuel or oil (but without oil residues)": [
        "ASZ"
    ],
    "radiator": [
        "ASZ"
    ],
    "heating oils": [
        "ASZ"
    ],
    "Herbicides": [
        "ASZ"
    ],
    "Stove cleaning products": [
        "ASZ"
    ],
    "hay": [
        "Biotonne"
    ],
    "Pressure washer": [
        "ASZ"
    ],
    "Wood treated": [
        "ASZ",
        "Restabfall"
    ],
    "Wood untreated": [
        "ASZ",
        "Restabfall"
    ],
    "Wood ash (cold)": [
        "Restabfall"
    ],
    "Woodworking tools": [
        "ASZ"
    ],
    "Wooden blinds": [
        "ASZ"
    ],
    "Wooden boxes and cabinets": [
        "ASZ"
    ],
    "Wooden boxes (treated, dirty)": [
        "ASZ"
    ],
    "Wooden boxes (untreated, clean)": [
        "ASZ"
    ],
    "Wooden boxes as packaging (e.g. gift boxes for cakes, cigars, wines)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Wooden furniture": [
        "ASZ"
    ],
    "Wooden pallets (clean or untreated)": [
        "ASZ"
    ],
    "Wooden pallets (contaminated or treated such as glued)": [
        "ASZ"
    ],
    "Wooden panels (treated, contaminated)": [
        "ASZ"
    ],
    "Wooden panels (untreated, clean)": [
        "ASZ"
    ],
    "Wood residues from treated wood": [
        "ASZ"
    ],
    "Wood residues from untreated wood": [
        "ASZ"
    ],
    "wooden shingles": [
        "ASZ"
    ],
    "Wood preservatives": [
        "ASZ"
    ],
    "Wooden sticks of ice cream": [
        "Restabfall"
    ],
    "Wooden chairs": [
        "ASZ"
    ],
    "Wooden tables": [
        "ASZ"
    ],
    "Wooden doors, sticks": [
        "ASZ"
    ],
    "Wood wool as packaging filling material": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Wood wool insulation panels": [
        "ASZ"
    ],
    "Dog poop": [
        "Restabfall"
    ],
    "Hats": [
        "Restabfall"
    ],
    "Hydraulic oils": [
        "ASZ"
    ],
    "Hygiene products, sanitary paper": [
        "Restabfall"
    ],
    "waterproofing agent": [
        "ASZ"
    ],
    "Infectious substances": [
        "ASZ"
    ],
    "Infrared lamp devices": [
        "ASZ"
    ],
    "Infrared lamp light bulbs": [
        "Restabfall"
    ],
    "Infrared heater": [
        "ASZ"
    ],
    "Infusion bags, infusion bottles with contents or accessories (drip, tubes, etc.)": [
        "ASZ"
    ],
    "Infusion bag, without accessories (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Infusion bottles, without accessories (completely emptied)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Injection syringes with needles": [
        "ASZ"
    ],
    "Injection syringes without a needle": [
        "Restabfall"
    ],
    "Insect repellent": [
        "ASZ"
    ],
    "Ice cream parlor insulated boxes": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Insulating films": [
        "Restabfall"
    ],
    "Insulating glasses": [
        "Restabfall"
    ],
    "Insulating mats": [
        "Restabfall"
    ],
    "Insulated bags for transporting frozen goods home": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "sleeping pads": [
        "Restabfall"
    ],
    "Plastic blinds": [
        "Restabfall"
    ],
    "Metal blinds": [
        "ASZ"
    ],
    "Leftover snacks": [
        "Biotonne"
    ],
    "Plastic snack bag": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Paper snack bags": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Iodine tincture": [
        "ASZ"
    ],
    "Yoghurt cup without metal lid": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metal yogurt lid": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Jute and fabric bags (as packaging)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Jute and fabric bags (no packaging)": [
        "Restabfall"
    ],
    "Cable": [
        "ASZ"
    ],
    "Cable reels and drums": [
        "ASZ"
    ],
    "Cable protection tubes": [
        "ASZ"
    ],
    "Coffee filters, grounds, brew": [
        "Biotonne"
    ],
    "Aluminum coffee capsules": [
        "ASZ"
    ],
    "Coffee capsules made from biodegradable plastic": [
        "ASZ"
    ],
    "Plastic coffee capsules": [
        "ASZ"
    ],
    "Coffee machines": [
        "ASZ"
    ],
    "Coffee packaging, vacuum packaging": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metal cocoa cans": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Lime, lime paint": [
        "ASZ"
    ],
    "camera": [
        "ASZ"
    ],
    "Fireplace bricks": [
        "ASZ"
    ],
    "Combs made of horn or plastic": [
        "Restabfall"
    ],
    "Metal combs": [
        "ASZ"
    ],
    "Plastic canister for vinegar, distilled water etc., completely emptied": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Canister for engine oil (empty or with contents)": [
        "ASZ"
    ],
    "Cardboard boxes": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Cheese foils and papers (waxed or foil-coated)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Cheese rinds without wax": [
        "Biotonne"
    ],
    "Cheese wax": [
        "Restabfall"
    ],
    "Catalogs, brochures (without plastic cover)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Cat litter": [
        "Restabfall"
    ],
    "Chewing gum blister": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Chewing gum": [
        "Restabfall"
    ],
    "garbage": [
        "Restabfall"
    ],
    "Cookie tins, metal waffle tins": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Ceramic items (no packaging)": [
        "Restabfall"
    ],
    "Candles, leftovers, wax": [
        "ASZ"
    ],
    "Plastic candle cup (empty)": [
        "Restabfall"
    ],
    "Metal candle cups (e.g. tea lights), empty": [
        "ASZ"
    ],
    "Glass ketchup bottles (empty)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Plastic ketchup bottles (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Automotive catalytic converters": [
        "ASZ"
    ],
    "Plastic children's bobsleigh": [
        "ASZ"
    ],
    "Stroller": [
        "ASZ"
    ],
    "Putties (hardened)": [
        "Restabfall"
    ],
    "Putty (not cured)": [
        "ASZ"
    ],
    "Clamping machine": [
        "ASZ",
        "Restabfall"
    ],
    "Transparent films, transparent covers": [
        "Restabfall"
    ],
    "Rinse aid": [
        "ASZ"
    ],
    "Rinse aid bottles made of plastic (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Adhesive tapes": [
        "Restabfall"
    ],
    "Adhesive tapes (as packaging for purchased goods)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Glue stick cases, empty (e.g. from Uhu-Stic)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Glue sticks, glue sticks (e.g. Uhu-Stic)": [
        "Restabfall"
    ],
    "Adhesives in tubes or cans (not cured)": [
        "ASZ"
    ],
    "Adhesive residue (dried)": [
        "Restabfall"
    ],
    "Wooden clothes hanger": [
        "ASZ"
    ],
    "Plastic clothes hanger": [
        "ASZ"
    ],
    "Metal clothes hanger": [
        "ASZ"
    ],
    "Small metals (nails, screws, wires)": [
        "ASZ"
    ],
    "Air conditioning units": [
        "ASZ"
    ],
    "toilet brushes": [
        "Restabfall"
    ],
    "Toilet paper rolls": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Snacks": [
        "Biotonne"
    ],
    "Plasticine (plasticine)": [
        "Restabfall"
    ],
    "Bones, big": [
        "Restabfall"
    ],
    "Button cells": [
        "ASZ"
    ],
    "Plastic cooking spoon": [
        "Restabfall"
    ],
    "Suitcases, travel bags": [
        "ASZ"
    ],
    "Coal and coke ash (cold)": [
        "Restabfall"
    ],
    "Charcoal grill": [
        "ASZ"
    ],
    "Carbon papers, carbonless papers": [
        "Restabfall"
    ],
    "Compressors": [
        "ASZ"
    ],
    "Capacitors": [
        "ASZ"
    ],
    "Cans (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Canning jars (empty)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Contact lenses": [
        "Restabfall"
    ],
    "headphones": [
        "ASZ"
    ],
    "Headphones (working)": [
        "ASZ"
    ],
    "Copy papers": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Cork coverings": [
        "Restabfall"
    ],
    "Plastic corks": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Corks made from natural cork": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metal corkscrew": [
        "ASZ"
    ],
    "Body lotions": [
        "ASZ"
    ],
    "Correction varnishes, thinners (containing solvents)": [
        "ASZ"
    ],
    "cosmetics": [
        "ASZ"
    ],
    "Cosmetic swabs": [
        "Restabfall"
    ],
    "Cosmetic packaging made of glass (completely emptied)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Plastic or ceramic cosmetic packaging": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Kraft papers": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Tie and sock hanger made of plastic": [
        "ASZ"
    ],
    "Credit and debit cards": [
        "Restabfall"
    ],
    "Crepe papers": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Bottle caps": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Kitchen waste": [
        "Biotonne"
    ],
    "Kitchen paper (dirty)": [
        "Biotonne"
    ],
    "Ballpoint pen": [
        "Restabfall"
    ],
    "Refrigerators and freezers": [
        "ASZ"
    ],
    "Cooling batteries": [
        "Restabfall"
    ],
    "coolant": [
        "ASZ"
    ],
    "Synthetic resins (cured)": [
        "Restabfall"
    ],
    "Synthetic resins (not cured)": [
        "ASZ"
    ],
    "synthetic resin varnishes": [
        "ASZ"
    ],
    "Artificial mineral fibers (KMF)": [
        "ASZ"
    ],
    "Plastic veneers": [
        "Restabfall"
    ],
    "Plastic rain gutters": [
        "ASZ"
    ],
    "Plastic pipes": [
        "ASZ"
    ],
    "Plastic container": [
        "ASZ"
    ],
    "Plastic barrels (no packaging)": [
        "ASZ"
    ],
    "Plastic items (no packaging)": [
        "Restabfall"
    ],
    "plastic panels": [
        "Restabfall"
    ],
    "copper pipes": [
        "ASZ"
    ],
    "Laboratory glasses": [
        "ASZ"
    ],
    "Paint cans (contents hardened)": [
        "Restabfall"
    ],
    "Paint cans (contents not cured)": [
        "ASZ"
    ],
    "Paint cans (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Paint residue (hardened)": [
        "Restabfall"
    ],
    "Touch-up pens": [
        "ASZ"
    ],
    "Laminate": [
        "ASZ",
        "Restabfall"
    ],
    "Laminate floors in small quantities": [
        "Restabfall"
    ],
    "Lampshades made of glass, plastic, etc.": [
        "Restabfall"
    ],
    "Chinese lanterns": [
        "Restabfall"
    ],
    "Leaves, tree needles": [
        "ASZ",
        "Biotonne"
    ],
    "Lye": [
        "ASZ"
    ],
    "Speakers": [
        "ASZ"
    ],
    "LCD displays": [
        "ASZ"
    ],
    "food leftovers": [
        "Biotonne"
    ],
    "LED lamps": [
        "ASZ"
    ],
    "Leather waste": [
        "Restabfall"
    ],
    "Leather clothing": [
        "ASZ",
        "Restabfall"
    ],
    "Leather care products and sprays": [
        "ASZ"
    ],
    "Lightweight packaging (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Lightweight packaging (empty of residue) (plastic films, yoghurt cups, metal closures, food cans,...)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "glues": [
        "ASZ"
    ],
    "Aluminum ladders": [
        "ASZ"
    ],
    "Wooden ladders": [
        "ASZ"
    ],
    "Circuit boards": [
        "ASZ"
    ],
    "Highlighters, text markers": [
        "Restabfall"
    ],
    "fluorescent tubes": [
        "ASZ"
    ],
    "Electric fairy lights": [
        "ASZ"
    ],
    "Deck chairs": [
        "ASZ"
    ],
    "Rulers": [
        "Restabfall"
    ],
    "linoleum": [
        "ASZ"
    ],
    "Lipstick cases": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Lipsticks": [
        "ASZ"
    ],
    "solvent": [
        "ASZ"
    ],
    "solder": [
        "ASZ"
    ],
    "Balloons": [
        "Restabfall"
    ],
    "Air filter": [
        "Restabfall"
    ],
    "Air mattresses": [
        "Restabfall"
    ],
    "Plastic air pumps": [
        "Restabfall"
    ],
    "Metal air pumps": [
        "ASZ"
    ],
    "Rags": [
        "Restabfall"
    ],
    "Cornstarch chips": [
        "Restabfall"
    ],
    "Cornstarch cutlery and tableware": [
        "Biotonne"
    ],
    "Cornstarch Sacks": [
        "Biotonne"
    ],
    "Margarine cups": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Plastic jam cups": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Jam jars (empty)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "wire mesh": [
        "ASZ"
    ],
    "Chain link fences": [
        "ASZ"
    ],
    "Metal machine parts": [
        "ASZ"
    ],
    "massage oils": [
        "ASZ"
    ],
    "mattresses": [
        "ASZ"
    ],
    "Demolition of the wall": [
        "ASZ"
    ],
    "Mouse traps": [
        "Restabfall"
    ],
    "Mouse poisons": [
        "ASZ"
    ],
    "Medication": [
        "ASZ"
    ],
    "Glass medication bottle (empty)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Medicine packaging made of plastic, blister packs or composite materials (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Medicine packaging made of paper or cardboard (empty)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Reusable tableware made of aluminum, sheet metal, enamel, cast iron, stainless steel (also Teflon coated)": [
        "ASZ"
    ],
    "Reusable tableware made of glass, ceramic or plastic": [
        "ASZ"
    ],
    "Knife": [
        "ASZ"
    ],
    "Brass parts": [
        "ASZ"
    ],
    "Metal pipes": [
        "ASZ"
    ],
    "metalworking oils": [
        "ASZ"
    ],
    "Metal lids of packaging": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metal barrels (as packaging)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metal barrels (no packaging)": [
        "ASZ"
    ],
    "Metal foils (as packaging)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metal canister (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metal collars of champagne bottles": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metal cleaning products": [
        "ASZ"
    ],
    "Metal packaging (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Microwaves": [
        "ASZ"
    ],
    "Plastic milk bottles (completely emptied)": [
        "ASZ"
    ],
    "Dairy products (spoiled)": [
        "Biotonne"
    ],
    "Plastic dairy product packaging": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Mineral oil cans (with remaining contents)": [
        "ASZ"
    ],
    "Mineral oil cans (completely emptied)": [
        "ASZ"
    ],
    "mineral oils": [
        "ASZ"
    ],
    "scraps soaked in mineral oil": [
        "ASZ"
    ],
    "Items contaminated with mineral oil": [
        "ASZ"
    ],
    "mineral wool": [
        "ASZ"
    ],
    "Mixing machines": [
        "ASZ"
    ],
    "Furniture": [
        "ASZ"
    ],
    "Furniture care products": [
        "ASZ"
    ],
    "Assembly foam cans (with remaining contents)": [
        "ASZ"
    ],
    "Assembly foams, containing CFCs (cured)": [
        "ASZ"
    ],
    "Assembly foams, CFC-free (cured)": [
        "Restabfall"
    ],
    "mortar": [
        "ASZ"
    ],
    "Motor oils": [
        "ASZ"
    ],
    "Moth repellent": [
        "ASZ"
    ],
    "Mouse pads": [
        "Restabfall"
    ],
    "Mulching films": [
        "Restabfall"
    ],
    "Gauze bandages": [
        "Restabfall"
    ],
    "Garbage bags": [
        "Restabfall"
    ],
    "Oral care products": [
        "ASZ"
    ],
    "Face masks, disposable masks": [
        "Restabfall"
    ],
    "Coin cassettes": [
        "Restabfall"
    ],
    "Conch shells": [
        "Restabfall"
    ],
    "Metal musical instruments": [
        "ASZ"
    ],
    "Musical instruments, electronic": [
        "ASZ"
    ],
    "Musical instruments, not of metal": [
        "Restabfall"
    ],
    "Music cassettes": [
        "Restabfall"
    ],
    "Night storage heaters (both asbestos-containing and asbestos-free)": [
        "ASZ"
    ],
    "Nail polishes (cured)": [
        "Restabfall"
    ],
    "Nail polish (liquid)": [
        "ASZ"
    ],
    "nail polish remover": [
        "ASZ"
    ],
    "Nail polish bottles (with remaining contents)": [
        "ASZ"
    ],
    "sewing waste": [
        "Restabfall"
    ],
    "Sewing machines": [
        "ASZ"
    ],
    "Sewing needles": [
        "ASZ"
    ],
    "Negatives from photos": [
        "Restabfall"
    ],
    "Neon tubes": [
        "ASZ"
    ],
    "Nespresso capsules made of aluminum": [
        "ASZ"
    ],
    "Nets as packaging (e.g. for fruit and vegetables, suet balls, Christmas trees)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Nets as packaging made from biodegradable material (e.g. cotton, cellulose)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Non-ferrous metals": [
        "ASZ"
    ],
    "Sneezing powder": [
        "Restabfall"
    ],
    "Nitro thinners": [
        "ASZ"
    ],
    "Nut shells and fruit kernels": [
        "Biotonne"
    ],
    "Nut shells, fruit kernels": [
        "Biotonne"
    ],
    "Wooden fruit and vegetable crates (no packaging)": [
        "ASZ"
    ],
    "Plastic fruit and vegetable crates (no packaging)": [
        "ASZ"
    ],
    "fruit waste": [
        "Biotonne"
    ],
    "Fruit nets (not biodegradable)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Cardboard fruit cups (clean)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Fruit cups made of plastic (e.g. Styrofoam, Porozell)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Ovens (e.g. electric ovens)": [
        "ASZ"
    ],
    "Stove pipes": [
        "ASZ"
    ],
    "Oil binding agent (used)": [
        "ASZ"
    ],
    "Oil filter": [
        "ASZ"
    ],
    "Oil radiators, electric": [
        "ASZ"
    ],
    "Opaque glass bottles - milky glass (e.g. Odol, coconut liqueurs)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Orange peels": [
        "Biotonne"
    ],
    "organic waste": [
        "Biotonne"
    ],
    "Easter grasses": [
        "Restabfall"
    ],
    "Overhead slides": [
        "Restabfall"
    ],
    "Packing papers": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Breakdown triangles (mainly made of iron)": [
        "ASZ"
    ],
    "Puncture triangles (mainly made of plastic)": [
        "Restabfall"
    ],
    "Breakdown triangle container": [
        "ASZ"
    ],
    "Papers (waxed or dirty)": [
        "Restabfall"
    ],
    "Papers (clean, uncoated)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Papers as packaging (film-coated)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Papers from document shredders (e.g. shredded paper)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Papers, no packaging (film-coated)": [
        "Restabfall"
    ],
    "Paper towels (dirty or clean)": [
        "Restabfall"
    ],
    "Paper scraps": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Paper bag for collecting organic waste": [
        "Biotonne"
    ],
    "Paper napkins (dirty or clean)": [
        "Restabfall"
    ],
    "Paper tissues (dirty or clean)": [
        "Restabfall"
    ],
    "Paper cups for drinks": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Paper plates (clean, not foil-coated)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Paper plate (dirty)": [
        "Restabfall"
    ],
    "Perfumes, perfume bottles (with remaining contents)": [
        "ASZ"
    ],
    "Glass perfume bottle (empty)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Perfume bottles made of ceramic or plastic (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Parquets": [
        "ASZ"
    ],
    "pellets": [
        "Restabfall"
    ],
    "Furs (unwearable, dirty)": [
        "Restabfall"
    ],
    "Furs (wearable, clean)": [
        "ASZ",
        "Restabfall"
    ],
    "petroleum": [
        "ASZ"
    ],
    "Plastic plant growing trays": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Plant protection products": [
        "ASZ"
    ],
    "Photovoltaic modules (for power generation; silicon-based)": [
        "ASZ"
    ],
    "Mushroom poisons": [
        "ASZ"
    ],
    "Paint brush": [
        "Restabfall"
    ],
    "Brush cleaner": [
        "ASZ"
    ],
    "Pizza boxes (clean)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Pizza boxes (dirty, greased)": [
        "Restabfall"
    ],
    "Plastic buckets and buckets (dirty)": [
        "Restabfall"
    ],
    "Plastic tubs and buckets as packaging (e.g. of paint, oranges)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Plastic buckets, buckets, not as packaging (e.g. household buckets, construction buckets)": [
        "ASZ"
    ],
    "Plastic bowls (as packaging or household dishes)": [
        "ASZ"
    ],
    "Plastic bowls as packaging (e.g. for gingerbread)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Plastic bowls, household dishes": [
        "Restabfall"
    ],
    "circuit boards": [
        "ASZ"
    ],
    "Plexiglass": [
        "Restabfall"
    ],
    "Polaroid pictures": [
        "Restabfall"
    ],
    "Polaroid cassettes": [
        "Restabfall"
    ],
    "Pölster": [
        "Restabfall"
    ],
    "Upholstered furniture": [
        "ASZ"
    ],
    "Pomades": [
        "ASZ"
    ],
    "Porcelain bottles (as packaging)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Post-It memo notes": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Postcards": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Condoms": [
        "Restabfall"
    ],
    "Pressed chipboard": [
        "ASZ"
    ],
    "Problem material": [
        "ASZ"
    ],
    "PU foam cans (with remaining contents)": [
        "ASZ"
    ],
    "PU foam cans made of metal (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "PU foams (cured)": [
        "Restabfall"
    ],
    "Pump atomizer made of plastic (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "dolls": [
        "Restabfall"
    ],
    "Dollhouses": [
        "ASZ"
    ],
    "Cleaning room hoses (e.g. suit protectors)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Scraps of plaster": [
        "Restabfall"
    ],
    "Cleaning products (with remaining contents)": [
        "ASZ"
    ],
    "cleaning cloth": [
        "Restabfall"
    ],
    "PV modules (for power generation; silicon-based)": [
        "ASZ"
    ],
    "PVC waste (e.g. floor coverings)": [
        "Restabfall"
    ],
    "PVC gutters": [
        "ASZ"
    ],
    "PVC pipes": [
        "ASZ"
    ],
    "mercury": [
        "ASZ"
    ],
    "Lamps containing mercury": [
        "ASZ"
    ],
    "Mercury switch": [
        "ASZ"
    ],
    "Erasers": [
        "Restabfall"
    ],
    "radio equipment": [
        "ASZ"
    ],
    "Rustling foil": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "mowing machine": [
        "ASZ"
    ],
    "Lawn clippings": [
        "Biotonne"
    ],
    "Lawn sods": [
        "ASZ"
    ],
    "Razor blades": [
        "ASZ"
    ],
    "shaving brush": [
        "Restabfall"
    ],
    "Rattan shopping baskets": [
        "ASZ"
    ],
    "Rat traps": [
        "Restabfall"
    ],
    "Rat poisons, rat bait": [
        "ASZ"
    ],
    "Room spray cans (with remaining contents)": [
        "ASZ"
    ],
    "Plastic rain barrels": [
        "ASZ"
    ],
    "Metal rain barrels": [
        "ASZ"
    ],
    "Residual waste (sanitary papers, photos, plastic products,...)": [
        "Restabfall"
    ],
    "Rigips panels": [
        "ASZ"
    ],
    "bark": [
        "Biotonne"
    ],
    "Ring binder (plastic)": [
        "Restabfall"
    ],
    "Ring binder made of paper or cardboard, metal removed": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Ring binder made of paper or cardboard, with metal": [
        "Restabfall"
    ],
    "X-ray images": [
        "ASZ"
    ],
    "Rust preventative, rust converter": [
        "ASZ"
    ],
    "routers": [
        "ASZ"
    ],
    "soot": [
        "Restabfall"
    ],
    "Seed dressing": [
        "ASZ"
    ],
    "Paper seed bags (empty)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Bags made of biodegradable material (e.g. corn starch, potato starch)": [
        "Biotonne"
    ],
    "Plastic bag": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Paper bag (clean)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Paper bag (dirty)": [
        "Restabfall"
    ],
    "Sawdust and shavings from treated wood": [
        "Restabfall"
    ],
    "Sawdust and shavings from untreated wood": [
        "Biotonne"
    ],
    "Ointment jars and jars made of glass (empty of all contents)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Ointment jars and containers made of plastic (empty of all contents)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Ointment tubes made of plastic (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Ointment tubes made of metal (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "sand": [
        "ASZ"
    ],
    "Ceramic sanitary facilities": [
        "ASZ"
    ],
    "Plastic sanitary facilities": [
        "ASZ"
    ],
    "Sanitary cleaner": [
        "ASZ"
    ],
    "Satellite systems and antennas": [
        "ASZ"
    ],
    "Sauerkraut packaging": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "acids": [
        "ASZ"
    ],
    "boxes": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Tropical fruit peels": [
        "Biotonne"
    ],
    "Records": [
        "Restabfall"
    ],
    "Record cover (paper)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "formwork panels": [
        "ASZ"
    ],
    "Fireclay": [
        "ASZ"
    ],
    "Foam rubbers, foams (as packaging)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Foam rubbers, foams (no packaging)": [
        "Restabfall"
    ],
    "Credit cards": [
        "Restabfall"
    ],
    "chest of drawers (iron)": [
        "ASZ"
    ],
    "Wheel chest (plastic)": [
        "ASZ"
    ],
    "Scissors": [
        "ASZ"
    ],
    "Abrasive dust cans (e.g. Tenn)": [
        "ASZ"
    ],
    "Ham nets": [
        "Restabfall"
    ],
    "Ham foils and papers (waxed or foil-coated)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Umbrellas": [
        "ASZ",
        "Restabfall"
    ],
    "Umbrella stand (wood)": [
        "ASZ"
    ],
    "Umbrella stand (metal)": [
        "ASZ"
    ],
    "Umbrella stand (not made of metal)": [
        "Restabfall"
    ],
    "Whipped cream and soda cartridges (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Whipped cream cup": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Inflatable boats": [
        "Restabfall"
    ],
    "sandpapers": [
        "Restabfall"
    ],
    "Key": [
        "ASZ"
    ],
    "Lubricant (mineral)": [
        "ASZ"
    ],
    "Jewelry boxes": [
        "Restabfall"
    ],
    "Snail poisons": [
        "ASZ"
    ],
    "Tailoring waste": [
        "Restabfall"
    ],
    "Cut flowers": [
        "Biotonne"
    ],
    "Sewing pattern and stencil papers": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "dummy": [
        "Restabfall"
    ],
    "snuff": [
        "Biotonne"
    ],
    "cords": [
        "Restabfall"
    ],
    "Chocolate papers": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Slipcovers": [
        "Restabfall"
    ],
    "Metal ladle": [
        "ASZ"
    ],
    "Writing papers": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Writing inks": [
        "Restabfall"
    ],
    "Shotgun pellets": [
        "ASZ"
    ],
    "Scraps": [
        "ASZ"
    ],
    "Shrink wrap (clean)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Shrink films (dirty)": [
        "Restabfall"
    ],
    "Shoe laces": [
        "Restabfall"
    ],
    "Shoe polish cans and tubes made of metal (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Shoe polishes, sprays": [
        "ASZ"
    ],
    "Plastic shoe polish tubes": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Shoes (not wearable)": [
        "Restabfall"
    ],
    "Shoes (wearable, clean)": [
        "ASZ"
    ],
    "Shoe soles": [
        "Restabfall"
    ],
    "School bags": [
        "Restabfall"
    ],
    "sponges": [
        "Restabfall"
    ],
    "Welding electrodes": [
        "Restabfall"
    ],
    "Welding machines, electric": [
        "ASZ"
    ],
    "Swords, samurai, sebel": [
        "ASZ"
    ],
    "Swimming fins, wings": [
        "Restabfall"
    ],
    "Tissue papers": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Soap and shampoo bottles made of plastic (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Soap residue": [
        "Restabfall"
    ],
    "Ropes": [
        "Restabfall"
    ],
    "Mustard jars (empty)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Mustard tubes (with remaining contents)": [
        "Restabfall"
    ],
    "Plastic mustard tubes": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metal mustard tubes (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Fuses, electronic": [
        "ASZ"
    ],
    "Silicate plasters": [
        "ASZ"
    ],
    "Silicone cartridges (with remaining contents)": [
        "ASZ"
    ],
    "Silicone cartridges (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Seating sets": [
        "ASZ"
    ],
    "Seating sets (made of aluminum)": [
        "ASZ"
    ],
    "Seating sets (made of iron)": [
        "ASZ"
    ],
    "Seating sets (made of wood)": [
        "ASZ"
    ],
    "Seating sets (made of plastic/textile)": [
        "ASZ"
    ],
    "Skis/snowboards": [
        "ASZ"
    ],
    "Ski boots": [
        "ASZ",
        "Restabfall"
    ],
    "Ski poles": [
        "ASZ"
    ],
    "panty liners": [
        "Restabfall"
    ],
    "Solar lights": [
        "ASZ"
    ],
    "Solar cells": [
        "ASZ"
    ],
    "Soletti bags": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Sun oils, sun creams": [
        "Restabfall"
    ],
    "Plaster or cement-based fillers": [
        "ASZ"
    ],
    "Synthetic resin-based fillers (hardened)": [
        "Restabfall"
    ],
    "Fillers based on synthetic resin (not hardened)": [
        "ASZ"
    ],
    "Metal cooking oil cans (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Glass cooking oil bottles (completely emptied)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Plastic cooking oil bottles (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Bulky waste": [
        "ASZ"
    ],
    "Mirror glass": [
        "ASZ",
        "Restabfall"
    ],
    "Mirror glasses in small quantities": [
        "Restabfall"
    ],
    "playing cards": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Game consoles": [
        "ASZ"
    ],
    "Plastic or metal toys": [
        "ASZ",
        "Restabfall"
    ],
    "Sporting goods": [
        "Restabfall"
    ],
    "Sports bows": [
        "ASZ"
    ],
    "Spray cans, pump spray cans (with remaining contents)": [
        "ASZ"
    ],
    "Spray cans, pump spray cans made of plastic (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Spray cans, pump spray cans made of metal (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Spraying agents": [
        "ASZ"
    ],
    "Spray container (with remaining contents)": [
        "ASZ"
    ],
    "Plastic spray container (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Cistern accessories": [
        "ASZ"
    ],
    "Spool cores from kitchen roll or toilet paper": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Carpet cores made of cardboard": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Dishwashing liquid": [
        "ASZ"
    ],
    "Plastic detergent bottles (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Hand blender": [
        "ASZ"
    ],
    "Tin foil papers": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Vacuum cleaner": [
        "ASZ"
    ],
    "Vacuum cleaner bag (with contents)": [
        "Restabfall"
    ],
    "Sockets": [
        "Restabfall"
    ],
    "Floor lamps": [
        "ASZ"
    ],
    "Stones": [
        "ASZ"
    ],
    "Stoneware bottles (as packaging)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Earthenware dishes": [
        "ASZ"
    ],
    "Hard coal, coke": [
        "Restabfall"
    ],
    "Rubber stamp": [
        "Restabfall"
    ],
    "Stamp inks, pads": [
        "ASZ"
    ],
    "Stereo systems": [
        "ASZ"
    ],
    "Star Splash (Burned)": [
        "Restabfall"
    ],
    "Star Splash (not burned)": [
        "ASZ"
    ],
    "Cloth handkerchiefs": [
        "Restabfall"
    ],
    "scraps of fabric": [
        "Restabfall"
    ],
    "Cloth bags, fabric sacks (as packaging)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "stuffed animals": [
        "Restabfall"
    ],
    "Shrub cuttings, chopped (up to thumb thickness)": [
        "ASZ",
        "Biotonne"
    ],
    "Matches": [
        "Restabfall"
    ],
    "grit, grit": [
        "ASZ"
    ],
    "Straws": [
        "Restabfall"
    ],
    "Straw hats": [
        "Restabfall"
    ],
    "Tights (broken)": [
        "Restabfall"
    ],
    "Helmets": [
        "Restabfall"
    ],
    "Styrofoam, Porocellular packaging": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Styrofoam chips as packaging filling material": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Soup bags": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Tablets": [
        "ASZ"
    ],
    "Tampons": [
        "Restabfall"
    ],
    "Paper or fabric wallpaper": [
        "Restabfall"
    ],
    "Bags made of plastic or leather": [
        "ASZ",
        "Restabfall"
    ],
    "Bags made of plastic or leather (functional)": [
        "ASZ"
    ],
    "Flashlights": [
        "ASZ"
    ],
    "Calculator": [
        "ASZ"
    ],
    "Plastic tea bags (e.g. pyramid-shaped tea bags)": [
        "Restabfall"
    ],
    "Tea bags, filters, grounds, brew": [
        "Biotonne"
    ],
    "Tar residue": [
        "ASZ"
    ],
    "Tar paper": [
        "ASZ"
    ],
    "Pasta bags": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Telephone books": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Telephone prepaid cards": [
        "Restabfall"
    ],
    "Tennis balls": [
        "Restabfall"
    ],
    "Tennis racket": [
        "ASZ",
        "Restabfall"
    ],
    "Carpets, carpets": [
        "ASZ"
    ],
    "turpentine": [
        "ASZ"
    ],
    "Textile packaging": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Thermofore": [
        "Restabfall"
    ],
    "Thermometer (electronic)": [
        "ASZ"
    ],
    "Thermometer (contains mercury)": [
        "ASZ"
    ],
    "Thermal paper (e.g. invoices or receipts)": [
        "Restabfall"
    ],
    "Thermoses": [
        "Restabfall"
    ],
    "Frozen bags as goods packaging (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Cardboard freezer packaging": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Composite frozen food packaging": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Animal bristles (natural bristles)": [
        "Biotonne"
    ],
    "Animal feed": [
        "Biotonne"
    ],
    "Animal food cans and bowls (empty of all contents)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Taxidermy": [
        "ASZ"
    ],
    "Ink killer": [
        "Restabfall"
    ],
    "Ink cartridges (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Ink cartridges (full)": [
        "Restabfall"
    ],
    "Tipp-Ex (liquid, solvent-based)": [
        "ASZ"
    ],
    "Table linen": [
        "ASZ",
        "Restabfall"
    ],
    "toaster": [
        "ASZ"
    ],
    "Tapes and cassettes": [
        "Restabfall"
    ],
    "Toner from copiers, laser printers": [
        "ASZ"
    ],
    "Toner containers from copiers, completely emptied": [
        "ASZ"
    ],
    "Toner cartridges, units of copiers, laser printers": [
        "ASZ"
    ],
    "clay pots": [
        "ASZ"
    ],
    "pottery": [
        "ASZ"
    ],
    "Pots and pans made of aluminum, sheet metal, enamel, cast iron, stainless steel (also Teflon coated)": [
        "ASZ"
    ],
    "Curd cup": [
        "ASZ"
    ],
    "Potted plants without a pot": [
        "Biotonne"
    ],
    "Plastic carrier bags": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Paper carrier bags": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Fuels": [
        "ASZ"
    ],
    "Fuel filter": [
        "ASZ"
    ],
    "Drinking bottles (plastic)": [
        "ASZ",
        "Restabfall"
    ],
    "Drinking glasses": [
        "ASZ",
        "Restabfall"
    ],
    "Drinking straws": [
        "Restabfall"
    ],
    "Dried flowers": [
        "Biotonne"
    ],
    "Drying hoods": [
        "ASZ"
    ],
    "Plastic tubes (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Tubes made of plastic or metal (with remaining contents)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metal tubes (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Cloth ducks": [
        "Restabfall"
    ],
    "Doors, frames and frames made of metal": [
        "ASZ"
    ],
    "Clocks, digital": [
        "ASZ"
    ],
    "Watches, mechanical": [
        "Restabfall"
    ],
    "Watch cases": [
        "Restabfall"
    ],
    "weed": [
        "Biotonne"
    ],
    "Underbody protection": [
        "ASZ"
    ],
    "Consumer electronics": [
        "ASZ"
    ],
    "USB sticks, hard drives": [
        "ASZ"
    ],
    "UV irradiation lamps": [
        "ASZ"
    ],
    "Vases made of plastic, glass, etc.": [
        "Restabfall"
    ],
    "Fans": [
        "ASZ"
    ],
    "Dressing materials": [
        "Restabfall"
    ],
    "Combustion engines (without fluids)": [
        "ASZ"
    ],
    "Laminated glasses": [
        "ASZ"
    ],
    "Extension cable": [
        "ASZ"
    ],
    "Glass packaging (completely emptied)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Paper packaging (possibly coated, but with appropriate labeling)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Packaging vials and bottles made of plastic (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Packaging fleeces": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Packaging closures (plastic)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Packaging closures (metal)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Sealing varnishes": [
        "ASZ"
    ],
    "Distribution plug, cable": [
        "ASZ"
    ],
    "Video cassettes": [
        "Restabfall"
    ],
    "Plastic video cassette cases": [
        "Restabfall"
    ],
    "Paper video cassette cases": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "VCR": [
        "ASZ"
    ],
    "Birdcages": [
        "ASZ"
    ],
    "Curtains": [
        "ASZ"
    ],
    "Curtain garnishes, curtain cornices": [
        "ASZ"
    ],
    "Wax crayons": [
        "Restabfall"
    ],
    "Wax crayon metal boxes": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "wax papers": [
        "Restabfall"
    ],
    "Hiking map sleeves": [
        "Restabfall"
    ],
    "Hot water bottles": [
        "Restabfall"
    ],
    "Heat pumps": [
        "ASZ"
    ],
    "Warming bag for grilled food (e.g. chicken bags)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Bathroom sink": [
        "ASZ"
    ],
    "Mineral spirits": [
        "ASZ"
    ],
    "Clothespins": [
        "Restabfall"
    ],
    "Laundry baskets": [
        "ASZ"
    ],
    "Clotheslines": [
        "Restabfall"
    ],
    "Drying rack, spider": [
        "ASZ"
    ],
    "Tumble dryer": [
        "ASZ"
    ],
    "Washing machines": [
        "ASZ"
    ],
    "detergent": [
        "ASZ"
    ],
    "Detergent dosing aids made of plastic": [
        "Restabfall"
    ],
    "Plastic detergent bottles": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Detergent cartons (empty)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Kettle": [
        "ASZ"
    ],
    "Cotton balls, cotton pads (e.g. make-up remover pads)": [
        "Restabfall"
    ],
    "cotton swab": [
        "Restabfall"
    ],
    "Toilet shells": [
        "ASZ"
    ],
    "Toilet cleaner": [
        "ASZ"
    ],
    "softener": [
        "ASZ"
    ],
    "Plastic fabric softener bottles": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "electric fence insulators": [
        "Restabfall"
    ],
    "Wine boxes": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Tinplate cans (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Tinplates": [
        "ASZ"
    ],
    "Corrugated sheets": [
        "ASZ"
    ],
    "Corrugated cardboard": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Advertising brochure bag (empty)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Plastic or metal tool boxes": [
        "ASZ"
    ],
    "wrapping film": [
        "ASZ"
    ],
    "Diaper pants (not reusable)": [
        "Restabfall"
    ],
    "Diapers (reusable)": [
        "Restabfall"
    ],
    "Diapers (disposable diapers)": [
        "Restabfall"
    ],
    "Leftover wool": [
        "Restabfall"
    ],
    "Vole bait": [
        "ASZ"
    ],
    "Wound spirit": [
        "ASZ"
    ],
    "Sparklers (not burned out)": [
        "ASZ"
    ],
    "Sausage foils and papers (waxed or foil-coated)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "sausage skins": [
        "Restabfall"
    ],
    "Ytong stones": [
        "ASZ"
    ],
    "Toothbrushes": [
        "Restabfall"
    ],
    "Toothbrushes, electric": [
        "ASZ"
    ],
    "Plastic toothpaste tubes": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metal toothpaste tubes (completely emptied)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Toothpaste tubes with contents": [
        "Restabfall"
    ],
    "Drawing papers": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Magazines, magazines": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Newspapers": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Cellophane films, cellophane sleeves": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "cement": [
        "ASZ"
    ],
    "Cement bags (empty)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Bricks, chippings": [
        "ASZ"
    ],
    "Cigarette ash and remains": [
        "Restabfall"
    ],
    "Cigarette boxes with plastic or metal foil": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Cigarette boxes without plastic and metal foils": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Houseplants without pots": [
        "Biotonne"
    ],
    "Tin and zinc products": [
        "ASZ"
    ],
    "Pewter dishes, plates, cups": [
        "ASZ"
    ],
    "Lemon peels": [
        "Biotonne"
    ],
    "Citrus fruits": [
        "Biotonne"
    ],
    "Candy papers": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "spark plugs": [
        "Restabfall"
    ],
    "Branches chopped up (to the thickness of a thumb)": [
        "ASZ",
        "Biotonne"
    ],
    "Leftover twine": [
        "Restabfall"
    ],
    "Plastic or wooden thread spools": [
        "Restabfall"
    ]
},
    de: {
    "Abbeizmittel": [
        "ASZ"
    ],
    "Abdeckbänder": [
        "Restabfall"
    ],
    "Abdeckplanen, -folien": [
        "Restabfall"
    ],
    "Abflussreiniger": [
        "ASZ"
    ],
    "Abflussrohre": [
        "ASZ"
    ],
    "Aceton": [
        "ASZ"
    ],
    "Acrylgläser": [
        "Restabfall"
    ],
    "Acryllacke": [
        "ASZ"
    ],
    "Actimel-Fläschchen": [
        "Gelbe Tonne/Gelber Sack"
    ],
    "Adventkalender": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Adventkränze ohne Draht, Schleifen, Styroporreifen etc.": [
        "Biotonne"
    ],
    "Akkus": [
        "ASZ"
    ],
    "Aktenordner": [
        "Restabfall"
    ],
    "Alteisen (Eisenstangen, Eisenteile, Wäscheständer,...)": [
        "ASZ"
    ],
    "Altglas (Konservengläser, Parfüms, Glasflaschen,...)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Altkleidung": [
        "ASZ",
        "Restabfall"
    ],
    "Altmetalle": [
        "ASZ"
    ],
    "Altöle, halogenhaltig": [
        "ASZ"
    ],
    "Altöle, mineralisch": [
        "ASZ"
    ],
    "Altpapier (Kartons, Zeitungen, Briefpapier,...)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Altspeisefette und -öle": [
        "ASZ"
    ],
    "Alttextilien": [
        "Restabfall"
    ],
    "Alufolien (verschmutzt)": [
        "Restabfall"
    ],
    "Alufolien als Warenverpackung (sauber)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Aluminiumbehälter als Verpackung (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Angelruten": [
        "Restabfall"
    ],
    "Antennen": [
        "ASZ"
    ],
    "Aquarien": [
        "ASZ"
    ],
    "Armaturen": [
        "ASZ"
    ],
    "Arzneituben aus Kunststoff (restentleert)": [
        "Gelbe Tonne/Gelber Sack"
    ],
    "Arzneituben aus Metall (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Asbestzementprodukte (z.B. Eternitplatten)": [
        "ASZ"
    ],
    "Asphaltaufbrüche": [
        "ASZ"
    ],
    "Äste": [
        "ASZ",
        "Biotonne"
    ],
    "Ätzlösungen": [
        "ASZ"
    ],
    "Aufkleber": [
        "Restabfall"
    ],
    "Aufladekabel, -geräte": [
        "ASZ"
    ],
    "Aufwickelhülsen von Küchenrolle oder Toilettenpapier": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Auto-Windschutzscheiben": [
        "ASZ"
    ],
    "Autobatterien": [
        "ASZ"
    ],
    "Autofelgen": [
        "ASZ"
    ],
    "Autolacke": [
        "ASZ"
    ],
    "Automöbel": [
        "ASZ"
    ],
    "Autopflegemittel (Polituren, Wachse)": [
        "ASZ"
    ],
    "Autositze": [
        "ASZ"
    ],
    "Autostoßstangen aus Kunststoff": [
        "ASZ"
    ],
    "Autostoßstangen aus Metall": [
        "ASZ"
    ],
    "Autoteile aus Metall (ölfrei)": [
        "ASZ"
    ],
    "Babyfläschchen aus Glas oder Kunststoff": [
        "Restabfall"
    ],
    "Backpapiere": [
        "Restabfall"
    ],
    "Backrohre, -öfen": [
        "ASZ"
    ],
    "Backrohrreiniger": [
        "ASZ"
    ],
    "Badehauben": [
        "Restabfall"
    ],
    "Badesalze": [
        "Restabfall"
    ],
    "Badewannen": [
        "ASZ"
    ],
    "Badewannen aus Metall/Email": [
        "ASZ"
    ],
    "Bälle": [
        "Restabfall"
    ],
    "Bananenschalen": [
        "Biotonne"
    ],
    "Bandagen": [
        "Restabfall"
    ],
    "Batterien": [
        "ASZ"
    ],
    "Batteriesäuren": [
        "ASZ"
    ],
    "Bau- und Abbruchholz": [
        "ASZ"
    ],
    "Bauschutt": [
        "ASZ"
    ],
    "Baustyropore": [
        "ASZ"
    ],
    "Beamer": [
        "ASZ"
    ],
    "Becher aus Kunststoff (z.B. von Speiseeis, Feinkostwaren)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Beinpressen": [
        "ASZ"
    ],
    "Benzin": [
        "ASZ"
    ],
    "Benzin-, Dieselfilter": [
        "ASZ"
    ],
    "Betone": [
        "ASZ"
    ],
    "Bettenroste, -einsätze, -gestelle aus Holz oder Metall": [
        "ASZ"
    ],
    "Bettfedern (Daunen-Füllmaterial in Decken, etc.)": [
        "Restabfall"
    ],
    "Bettfedern (Federkern einer Matratze)": [
        "ASZ"
    ],
    "Bettwäsche": [
        "ASZ",
        "Restabfall"
    ],
    "Big Bags": [
        "ASZ"
    ],
    "Bilderrahmen": [
        "ASZ",
        "Restabfall"
    ],
    "Bildschirmgeräte": [
        "ASZ"
    ],
    "Bioabfall (Eierschalen, Obst- ,Gemüsereste,...)": [
        "Biotonne"
    ],
    "Bitumen (flüssig)": [
        "ASZ"
    ],
    "Blähton (z.B. von Hydrokulturen)": [
        "ASZ"
    ],
    "Bleche": [
        "ASZ"
    ],
    "Blechprofile": [
        "ASZ"
    ],
    "Blei, -reste (z.B. von Silvester)": [
        "ASZ"
    ],
    "Bleichmittel": [
        "ASZ"
    ],
    "Bleigläser, Bleikristallgläser": [
        "Restabfall"
    ],
    "Bleirohre": [
        "ASZ"
    ],
    "Bleistifte, Buntstifte": [
        "Restabfall"
    ],
    "Blumen": [
        "Biotonne"
    ],
    "Blumenkästen, -kisterl aus Keramik oder Kunststoffe": [
        "Restabfall"
    ],
    "Blumentöpfe, -übertöpfe aus Keramik": [
        "Restabfall"
    ],
    "Blumentöpfe, -übertöpfe aus Kunststoffe": [
        "ASZ"
    ],
    "Bohnerwachse": [
        "ASZ"
    ],
    "Bohr-, Schleif- und Schneidöle": [
        "ASZ"
    ],
    "Bohrmaschinen": [
        "ASZ"
    ],
    "Boiler": [
        "ASZ"
    ],
    "Bremsflüssigkeiten": [
        "ASZ"
    ],
    "Brennspiritusse": [
        "ASZ"
    ],
    "Briefe, Briefpapiere": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Briefkuverts mit Luftpolsterfolie": [
        "Gelbe Tonne/Gelber Sack",
        "Restabfall",
        "Altpapierbehälter"
    ],
    "Briefkuverts, auch mit Fenster": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Briefmarken": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Brillen": [
        "ASZ",
        "Restabfall"
    ],
    "Brillenetuis": [
        "ASZ"
    ],
    "Brotreste (verschimmelt)": [
        "Biotonne"
    ],
    "Bücher": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Bügelbretter": [
        "ASZ"
    ],
    "Bügeleisen": [
        "ASZ"
    ],
    "Bügelmaschinen": [
        "ASZ"
    ],
    "Buntstift-Metallschachteln": [
        "ASZ"
    ],
    "Büroartikel": [
        "ASZ",
        "Restabfall"
    ],
    "Büroklammern": [
        "ASZ"
    ],
    "Bürosessel": [
        "ASZ"
    ],
    "Bürsten": [
        "Restabfall"
    ],
    "Butter-Verpackungsfolien": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Butterbrotpapiere (verschmutzt)": [
        "Restabfall"
    ],
    "CD-Hüllen": [
        "Restabfall"
    ],
    "CD-Player": [
        "ASZ"
    ],
    "CDs (Compact-Disc, CD-ROM)": [
        "ASZ"
    ],
    "Cellophanverpackungen": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Chemikalien": [
        "ASZ"
    ],
    "Chips-Sackerl": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Chlorabfälle von der Schwimmbad-Aufbereitung": [
        "ASZ"
    ],
    "Christbaumbeleuchtungen, elektrisch": [
        "ASZ"
    ],
    "Christbäume (ohne Schmuck, Lametta, Haken etc.)": [
        "Biotonne"
    ],
    "Christbaumschmucke (z.B. Lametta, Christbaumkugeln)": [
        "Restabfall"
    ],
    "Christbaumspritzkerzen (abgebrannt)": [
        "Restabfall"
    ],
    "Chromteile": [
        "ASZ"
    ],
    "Computer, Notebooks": [
        "ASZ"
    ],
    "Computerpapiere, Faxpapiere (Normalpapier)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Computertastaturen, -mäuse": [
        "ASZ"
    ],
    "Couchen": [
        "ASZ"
    ],
    "Dachpappen": [
        "Restabfall"
    ],
    "Dachrinnen aus Kunststoff": [
        "ASZ"
    ],
    "Dachrinnen aus Metall": [
        "ASZ"
    ],
    "Damenbinden, Tampons": [
        "Restabfall"
    ],
    "Dämmwollen (Künstliche Mineralfasern)": [
        "ASZ"
    ],
    "Dampfbügeleisen": [
        "ASZ"
    ],
    "Dartscheiben": [
        "ASZ",
        "Restabfall"
    ],
    "Daunen (lose)": [
        "Restabfall"
    ],
    "Deckfarben-Metallschachteln": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Deckfarbenschälchen aus Kunststoff": [
        "Restabfall"
    ],
    "Defibrilatoren": [
        "ASZ"
    ],
    "Deodorant-Glasbehälter (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Deodorant-Kunststoffverpackungen (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Deodorant-Metalldosen (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Deodorants": [
        "ASZ"
    ],
    "Desinfektionsmittel": [
        "ASZ"
    ],
    "Diaprojektoren": [
        "ASZ"
    ],
    "Dias": [
        "Restabfall"
    ],
    "Dichtungsmassen auf Kunststoffbasis (ausgehärtet)": [
        "Restabfall"
    ],
    "Dichtungsmassen auf Kunststoffbasis (nicht ausgehärtet)": [
        "ASZ"
    ],
    "Dieselöle": [
        "ASZ"
    ],
    "Disketten": [
        "Restabfall"
    ],
    "Disketten-Boxen": [
        "Restabfall"
    ],
    "Dispersionsfarben": [
        "ASZ"
    ],
    "Dokumentenhüllen aus Kunststoff": [
        "Restabfall"
    ],
    "Dokumentenmappen aus Kunststoff oder Leder": [
        "Restabfall"
    ],
    "Dokumentenmappen aus Papier, ohne Metall": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Dosen aus Karton-Metall-Kunststoffverbund (z.B. Pringles-Dosen)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Dosenöffner, elektrisch": [
        "ASZ"
    ],
    "Dosenöffner, mechanisch": [
        "ASZ"
    ],
    "Drahtgläser": [
        "ASZ"
    ],
    "Drucker": [
        "ASZ"
    ],
    "Druckerbänder": [
        "Restabfall"
    ],
    "Druckerpatronen von Tintenstrahldruckern": [
        "ASZ"
    ],
    "Druckgaspackungen (mit Restinhalt)": [
        "ASZ"
    ],
    "Druckgaspackungen aus Metall (restentleert)": [
        "Gelbe Tonne/Gelber Sack"
    ],
    "Duftsteine (z.B. für WC)": [
        "ASZ"
    ],
    "Düngemittel": [
        "ASZ"
    ],
    "Düngemittelsäcke (nicht restentleert)": [
        "ASZ"
    ],
    "Düngemittelsäcke aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Düngemittelsäcke aus Papier (restentleert)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Düngemittelverpackungen aus Karton (restentleert)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Dunstabzugsfilter": [
        "Restabfall"
    ],
    "Dunstabzugshauben": [
        "ASZ"
    ],
    "Duschschläuche aus Kunststoff": [
        "Restabfall"
    ],
    "Duschschläuche aus Metall": [
        "ASZ"
    ],
    "Duschtassen": [
        "ASZ"
    ],
    "Duschvorhänge": [
        "Restabfall"
    ],
    "DVD-Hüllen": [
        "Restabfall"
    ],
    "DVD-Player": [
        "ASZ"
    ],
    "DVDs": [
        "ASZ"
    ],
    "E-Bike Akkus": [
        "ASZ"
    ],
    "E-Bike-, E-Scooter mit ausgebautem Akku": [
        "ASZ"
    ],
    "Echtholz-Furniere aus unbehandeltem Holz": [
        "ASZ"
    ],
    "Edelstahlspülen": [
        "ASZ"
    ],
    "Eierkartons (sauber, leer)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Eierschachteln aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Eierschalen": [
        "Biotonne"
    ],
    "Einkaufskörbe": [
        "Restabfall"
    ],
    "Einkaufssackerl aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Einkaufssackerl aus Papier": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Einsiedegläser (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Einweggeschirre, Essbestecke aus Kunststoff (z.B. Fertiggericht-Schalen)": [
        "Gelbe Tonne/Gelber Sack"
    ],
    "Einweghandschuhe aus Kunststoff": [
        "Restabfall"
    ],
    "Einwegrasierer": [
        "Restabfall"
    ],
    "Einwegrasierer-Schutzkappen": [
        "Restabfall"
    ],
    "einzelne Porzellangegenstände": [
        "Restabfall"
    ],
    "Eisbecher aus Kunststoff oder gewachstem Papier/Karton": [
        "Restabfall"
    ],
    "Eisen-, Metallkisten": [
        "ASZ"
    ],
    "Eisenteile (keine Verpackung)": [
        "ASZ"
    ],
    "Eisstöcke": [
        "ASZ"
    ],
    "Elektrische Schraubsicherungen": [
        "ASZ"
    ],
    "Elektro-Herde Küche": [
        "ASZ"
    ],
    "Elektroboiler": [
        "ASZ"
    ],
    "Elektrogeräte": [
        "ASZ"
    ],
    "Elektroheizkörper, Elektroradiatoren": [
        "ASZ"
    ],
    "Elektromotoren": [
        "ASZ"
    ],
    "elektronische Dartscheiben": [
        "ASZ"
    ],
    "elektronische Sportgeräte": [
        "ASZ"
    ],
    "Elektrorasierer": [
        "ASZ"
    ],
    "Emailfarben": [
        "ASZ"
    ],
    "Energiesparlampen": [
        "ASZ"
    ],
    "Enteiser, Entfroster": [
        "ASZ"
    ],
    "Entkalker": [
        "ASZ"
    ],
    "Entladungslampen": [
        "ASZ"
    ],
    "Entrostungsmittel": [
        "ASZ"
    ],
    "Epoxidharz, Epoxidkleber (nicht ausgehärtet)": [
        "ASZ"
    ],
    "Erde": [
        "ASZ"
    ],
    "Essbestecke aus Metall": [
        "ASZ"
    ],
    "Essen-Auf-Rädern-Menüschalen aus Metall": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Essensreste": [
        "Biotonne"
    ],
    "Eternit, -platten": [
        "ASZ"
    ],
    "Etiketten, -trägerpapier": [
        "Restabfall"
    ],
    "Etuis": [
        "ASZ"
    ],
    "Fahrraddynamo": [
        "ASZ"
    ],
    "Fahrräder": [
        "ASZ"
    ],
    "Fahrradlampen": [
        "Restabfall"
    ],
    "Fahrradluftpumpen aus Kunststoff": [
        "Restabfall"
    ],
    "Fahrradluftpumpen aus Metall": [
        "ASZ"
    ],
    "Fahrradreifen, -schläuche": [
        "Restabfall"
    ],
    "Fahrradschlösser": [
        "ASZ"
    ],
    "Fahrradteile aus Kunststoff": [
        "Restabfall"
    ],
    "Fahrradteile aus Metall": [
        "ASZ"
    ],
    "Fahrzeugreifen": [
        "ASZ"
    ],
    "Farb-Tonerkassetten von Kopiergeräten und Druckern (mit Restinhalt)": [
        "ASZ"
    ],
    "Farbbänder, Farbbandkassetten von Schreibmaschinen oder Druckern": [
        "Restabfall"
    ],
    "Farbdosen (pinselrein)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Farbdosen, -kübel (Inhalt ausgehärtet)": [
        "Restabfall"
    ],
    "Farbdosen, -kübel (Inhalt flüssig)": [
        "ASZ"
    ],
    "Farben und Lacke": [
        "ASZ"
    ],
    "Farbkübel aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Farbreste (eingetrocknet, schwermetall-, öl- und lösungsmittelfrei)": [
        "Restabfall"
    ],
    "Farbverdünner, Lackverdünner": [
        "ASZ"
    ],
    "Felle (gegerbt oder roh)": [
        "Restabfall"
    ],
    "Fensterdichtungen": [
        "Restabfall"
    ],
    "Fensterflügel, -rahmen aus Aluminium": [
        "ASZ"
    ],
    "Fenstergläser": [
        "ASZ"
    ],
    "Fensterkitte (ausgehärtet)": [
        "Restabfall"
    ],
    "Fensterkitte (nicht ausgehärtet)": [
        "ASZ"
    ],
    "Fensterrahmen, -stöcke aus Holz": [
        "ASZ"
    ],
    "Ferkellampen": [
        "ASZ"
    ],
    "Fernbedienungen": [
        "ASZ"
    ],
    "Fernsehgeräte": [
        "ASZ"
    ],
    "Fette auf Mineralölbasis, z.B. Abschmierfett": [
        "ASZ"
    ],
    "Fette und Öle tierischer oder pflanzlicher Art": [
        "ASZ"
    ],
    "Fetzen, verölte oder ölverschmierte": [
        "ASZ"
    ],
    "Feuerfestes Glas (z.B. Jenaer Glas)": [
        "Restabfall"
    ],
    "Feuerlöscher": [
        "ASZ"
    ],
    "Feuerwerkskörper (abgebrannt)": [
        "Restabfall"
    ],
    "Feuerzeuge (leer)": [
        "Restabfall"
    ],
    "Feuerzeuge (mit Restinhalt)": [
        "ASZ"
    ],
    "Filamentreste von 3D-Druck": [
        "Restabfall"
    ],
    "Filmdosen": [
        "Gelbe Tonne/Gelber Sack"
    ],
    "Filmkapseln, -kassetten, -patronen, -spulen": [
        "Restabfall"
    ],
    "Filterschichten aus Weinbau": [
        "Biotonne"
    ],
    "Filzstifte (ausgetrocknet)": [
        "Restabfall"
    ],
    "Filzstifte, Flipchartstifte (lösungsmittelhältig)": [
        "ASZ"
    ],
    "Fischgräten": [
        "Biotonne"
    ],
    "Flachbatterien": [
        "ASZ"
    ],
    "Flachgläser": [
        "ASZ"
    ],
    "Flacons aus Glas (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Flaschen aus Glas, als Verpackung (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Flaschen aus Keramik oder Steingut (als Verpackung)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Flaschen aus Kunststoff, Keramik, Steingut oder Glas (keine Verpackung)": [
        "Restabfall"
    ],
    "Fleckputzmittel": [
        "ASZ"
    ],
    "Fleisch-, Wurstreste und Knochen aus Haushalten": [
        "Biotonne"
    ],
    "Fleischfolien, -papiere (gewachst oder folienbeschichtet)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Fleischsackerl (verschmutzt)": [
        "Restabfall"
    ],
    "Fleischtassen (verschmutzt)": [
        "Restabfall"
    ],
    "Fleischtassen aus Karton": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Fleischtassen aus Kunststoff (z.B. aus Styropor oder Porozell)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Flexscheiben": [
        "Restabfall"
    ],
    "Fliegenfänger (chemische)": [
        "ASZ"
    ],
    "Fliegenklatschen": [
        "Restabfall"
    ],
    "Fliesen": [
        "ASZ"
    ],
    "Fliesenkleber": [
        "ASZ"
    ],
    "Fliesenklebersäcke aus Papier (kunststoffbeschichtet)": [
        "Restabfall"
    ],
    "Fliesenklebersäcke aus Papier (restentleert)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Folien (verschmutzt)": [
        "Restabfall"
    ],
    "Folien aus biologisch abbaubarem Material als Verpackung (z.B. Folie bei Tomaten)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Folien aus Kunststoff (als Verpackung)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Foliencontainer für Freilandpflanzen": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Fotobatterien": [
        "ASZ"
    ],
    "Fotochemikalien": [
        "ASZ"
    ],
    "Fotos": [
        "Restabfall"
    ],
    "Frischhaltefolien aus Kunststoff (als Warenverpackung)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Frischhaltefolien, aus Kunststoff nicht als Warenverpackung, sondern im Haushalt anfallend": [
        "Restabfall"
    ],
    "Fritteuse": [
        "ASZ"
    ],
    "Frittierfette, -öle": [
        "ASZ"
    ],
    "Frostschutzmittel": [
        "ASZ"
    ],
    "Fugenmassen auf Kunststoff-Basis (ausgehärtet)": [
        "Restabfall"
    ],
    "Fugenmassen auf Kunststoff-Basis (nicht ausgehärtet)": [
        "ASZ"
    ],
    "Fugenmassen auf Zementbasis": [
        "ASZ"
    ],
    "Fungizide": [
        "ASZ"
    ],
    "Futtermittelsäcke aus Kunststoff oder beschichtet (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Futtermittelsäcke aus Papier (restentleert)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Fußböden, -beläge aus Holz": [
        "ASZ"
    ],
    "Fußbodenbeläge": [
        "ASZ"
    ],
    "Fußbodenpflegemittel": [
        "ASZ"
    ],
    "Fußmatten": [
        "Restabfall"
    ],
    "Gardinenleisten": [
        "ASZ"
    ],
    "Gartenabfälle, organische": [
        "Biotonne"
    ],
    "Gartenmöbel aus Holz": [
        "ASZ"
    ],
    "Gartenschläuche": [
        "Restabfall"
    ],
    "Gartenzwerge": [
        "Restabfall"
    ],
    "Gas-Herde": [
        "ASZ"
    ],
    "Gasentladungslampen": [
        "ASZ"
    ],
    "Gasflaschen, -kartuschen (leer oder mit Inhalt)": [
        "ASZ"
    ],
    "Gebrauchsgegenstände aus Kunststoff z.B. Spielsachen (keine Verpackungen)": [
        "ASZ"
    ],
    "Gefrierbeutel (als Verpackung gekaufter Waren)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Gefrierbeutel, nicht als Warenverpackung, sondern im Haushalt anfallend": [
        "Restabfall"
    ],
    "Geldbörsen aus Kunststoff oder Leder": [
        "Restabfall"
    ],
    "Gelsenstecker-Plättchen": [
        "ASZ"
    ],
    "Gemüseabfälle": [
        "Biotonne"
    ],
    "Geschenkpapiere": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Geschenkpapiere (folienbeschichtet)": [
        "Restabfall"
    ],
    "Geschirr aus Aluminium - Einweg (z.B. Fertiggericht-Schalen)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Geschirrspüler": [
        "ASZ"
    ],
    "Getränkebecher Einweg (aus Karton oder Kunststoff)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Getränkedosen (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Getränkeflaschen aus Plastik (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Getränkekartons wie z.B. Milchpackungen": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Getriebeöle": [
        "ASZ"
    ],
    "Geweihe": [
        "ASZ"
    ],
    "Gewürzverpackungen": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Gießkannen aus Kunststoff": [
        "ASZ"
    ],
    "Gießkannen aus Metall": [
        "ASZ"
    ],
    "Gift-Verpackungen": [
        "ASZ"
    ],
    "Gifte aller Art": [
        "ASZ"
    ],
    "Gips": [
        "ASZ"
    ],
    "Glasflaschen (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Glasgeschirr, Glasschüsseln": [
        "Restabfall"
    ],
    "Glasscheiben": [
        "ASZ"
    ],
    "Glasscherben (keine Verpackung)": [
        "ASZ"
    ],
    "Glasscherben (Verpackungen)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Glastische": [
        "ASZ"
    ],
    "Glühbirnen": [
        "Restabfall"
    ],
    "Grablichter (batteriebetrieben)": [
        "ASZ"
    ],
    "Grablichter (mit Restinhalt)": [
        "Restabfall"
    ],
    "Grablichter-Hüllen aus Glas (ohne Restinhalt)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Grablichter-Hüllen aus Kunststoff (ohne Restinhalt)": [
        "Restabfall"
    ],
    "Grablichthüllen": [
        "Restabfall"
    ],
    "Grasschnitt": [
        "ASZ",
        "Biotonne"
    ],
    "Griller, elektrisch": [
        "ASZ"
    ],
    "Grillreiniger": [
        "ASZ"
    ],
    "Grilltassen aus Aluminium": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Grünabfälle": [
        "Biotonne"
    ],
    "Grünschnitte": [
        "Biotonne"
    ],
    "Gummiabfälle": [
        "Restabfall"
    ],
    "Gummibänder": [
        "Restabfall"
    ],
    "Gummiringerl": [
        "Restabfall"
    ],
    "Gummistiefel": [
        "Restabfall"
    ],
    "Gurkengläser (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Gürtel": [
        "ASZ"
    ],
    "Gürtelschnallen aus Kunststoff": [
        "Restabfall"
    ],
    "Gürtelschnallen aus Metall": [
        "ASZ"
    ],
    "Haarbürsten": [
        "Restabfall"
    ],
    "Haare und Nägel von Tier oder Mensch": [
        "Biotonne"
    ],
    "Haarfärbemittel": [
        "ASZ"
    ],
    "Haarfärbemittel-Flaschen aus Glas (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Haarfärbemittel-Flaschen aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Haarföhne": [
        "ASZ"
    ],
    "Haarspray-, -pumpspray-Dosen aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Haarspray-, -pumpspraydosen aus Metall (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Haarsprays, -pumpsprays (mit Restinhalt)": [
        "ASZ"
    ],
    "Haarwachs, -gels": [
        "ASZ"
    ],
    "Hackschnitzel (unbehandelt)": [
        "Biotonne"
    ],
    "Halogendampflampen": [
        "ASZ"
    ],
    "Halogenlampen, -strahler, -spots": [
        "Restabfall"
    ],
    "Hand-, Pflegecremen": [
        "ASZ"
    ],
    "Handschuhe": [
        "ASZ"
    ],
    "Handys": [
        "ASZ"
    ],
    "Hanfseile": [
        "Restabfall"
    ],
    "Hantel, -bänke": [
        "ASZ"
    ],
    "Hartfaserplatten": [
        "ASZ"
    ],
    "Haushaltselektronik": [
        "ASZ"
    ],
    "Haushaltsporzellane -keramiken": [
        "ASZ"
    ],
    "Haushaltsreiniger": [
        "ASZ"
    ],
    "Hausmüll": [
        "Restabfall"
    ],
    "Hausschuhe": [
        "Restabfall"
    ],
    "Haustiermist, -fäkalien mit Streu": [
        "Restabfall"
    ],
    "Heckenschnitte": [
        "Biotonne"
    ],
    "Hefte (ohne Kunststoffumschlag)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Hefteinbände aus Kunststoff": [
        "Restabfall"
    ],
    "Heftklammern": [
        "ASZ"
    ],
    "Heftpflaster": [
        "Restabfall"
    ],
    "Heimsolarium": [
        "ASZ"
    ],
    "Heizgeräte, elektrisch": [
        "ASZ"
    ],
    "Heizkessel für Gas, Festbrennstoffe oder Öl (jedoch ohne Ölrückstände)": [
        "ASZ"
    ],
    "Heizkörper": [
        "ASZ"
    ],
    "Heizöle": [
        "ASZ"
    ],
    "Herbizide": [
        "ASZ"
    ],
    "Herdputzmittel": [
        "ASZ"
    ],
    "Heu": [
        "Biotonne"
    ],
    "Hochdruckreiniger": [
        "ASZ"
    ],
    "Holz behandelt": [
        "ASZ",
        "Restabfall"
    ],
    "Holz unbehandelt": [
        "ASZ",
        "Restabfall"
    ],
    "Holzaschen (kalt)": [
        "Restabfall"
    ],
    "Holzbearbeitungswerkzeuge": [
        "ASZ"
    ],
    "Holzjalousien": [
        "ASZ"
    ],
    "Holzkästen, -schränke": [
        "ASZ"
    ],
    "Holzkisten (behandelt, verschmutzt)": [
        "ASZ"
    ],
    "Holzkisten (unbehandelt, sauber)": [
        "ASZ"
    ],
    "Holzkisten als Verpackung (z.B. Geschenkkisten für Torten, Zigarren, Weine)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Holzmöbel": [
        "ASZ"
    ],
    "Holzpaletten (sauber oder unbehandelt)": [
        "ASZ"
    ],
    "Holzpaletten (verunreinigt oder behandelt wie z.B. verklebt)": [
        "ASZ"
    ],
    "Holzplatten (behandelt, verunreinigt)": [
        "ASZ"
    ],
    "Holzplatten (unbehandelt, sauber)": [
        "ASZ"
    ],
    "Holzreste von behandeltem Holz": [
        "ASZ"
    ],
    "Holzreste von unbehandeltem Holz": [
        "ASZ"
    ],
    "Holzschindeln": [
        "ASZ"
    ],
    "Holzschutzmittel": [
        "ASZ"
    ],
    "Holzstäbchen von Speiseeis": [
        "Restabfall"
    ],
    "Holzstühle": [
        "ASZ"
    ],
    "Holztische": [
        "ASZ"
    ],
    "Holztüren, -stöcke": [
        "ASZ"
    ],
    "Holzwolle als Verpackungsfüllmaterial": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Holzwolle-Dämmplatten": [
        "ASZ"
    ],
    "Hundekote": [
        "Restabfall"
    ],
    "Hüte": [
        "Restabfall"
    ],
    "Hydrauliköle": [
        "ASZ"
    ],
    "Hygieneartikel, Hygienepapier": [
        "Restabfall"
    ],
    "Imprägniermittel": [
        "ASZ"
    ],
    "Infektiöse Stoffe": [
        "ASZ"
    ],
    "Infrarotlampen-Geräte": [
        "ASZ"
    ],
    "Infrarotlampen-Glühbirnen": [
        "Restabfall"
    ],
    "Infrarotstrahler": [
        "ASZ"
    ],
    "Infusionsbeutel, Infusionsflaschen mit Inhalt oder Zubehör (Tropf, Schläuche etc.)": [
        "ASZ"
    ],
    "Infusionsbeutel, ohne Zubehör (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Infusionsflaschen, ohne Zubehör (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Injektionsspritzen mit Nadeln": [
        "ASZ"
    ],
    "Injektionsspritzen ohne Nadel": [
        "Restabfall"
    ],
    "Insektenschutzmittel": [
        "ASZ"
    ],
    "Isolierboxen von Eissalons": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Isolierfolien": [
        "Restabfall"
    ],
    "Isoliergläser": [
        "Restabfall"
    ],
    "Isoliermatten": [
        "Restabfall"
    ],
    "Isoliertaschen für Heimtransport von Tiefkühlware": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Isomatten": [
        "Restabfall"
    ],
    "Jalousien aus Kunststoff": [
        "Restabfall"
    ],
    "Jalousien aus Metall": [
        "ASZ"
    ],
    "Jausenreste": [
        "Biotonne"
    ],
    "Jausensackerl aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Jausensackerl aus Papier": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Jodtinktur": [
        "ASZ"
    ],
    "Joghurtbecher ohne Metalldeckel": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Joghurtdeckel aus Metall": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Jute- und Stoffsäcke (als Verpackung)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Jute- und Stoffsäcke (keine Verpackungen)": [
        "Restabfall"
    ],
    "Kabel": [
        "ASZ"
    ],
    "Kabelrollen, -trommeln": [
        "ASZ"
    ],
    "Kabelschutzrohre": [
        "ASZ"
    ],
    "Kaffeefilter, -satz, -sud": [
        "Biotonne"
    ],
    "Kaffeekapseln aus Aluminium": [
        "ASZ"
    ],
    "Kaffeekapseln aus biologisch abbaubarem Kunststoff": [
        "ASZ"
    ],
    "Kaffeekapseln aus Kunststoff": [
        "ASZ"
    ],
    "Kaffeemaschinen": [
        "ASZ"
    ],
    "Kaffeeverpackungen, Vakuumverpackungen": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Kakaodosen aus Metall": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Kalk, Kalkanstrich": [
        "ASZ"
    ],
    "Kamera": [
        "ASZ"
    ],
    "Kaminziegel": [
        "ASZ"
    ],
    "Kämme aus Horn oder Kunststoff": [
        "Restabfall"
    ],
    "Kämme aus Metall": [
        "ASZ"
    ],
    "Kanister aus Kunststoff für Essig, destilliertes Wasser etc., restentleert": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Kanister für Motoröl (leer oder mit Inhalt)": [
        "ASZ"
    ],
    "Kartonagen": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Käsefolien, -papiere (gewachst oder folienbeschichtet)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Käserinden ohne Wachs": [
        "Biotonne"
    ],
    "Käsewachs": [
        "Restabfall"
    ],
    "Kataloge, Prospekte (ohne Kunststoffhülle)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Katzenstreu": [
        "Restabfall"
    ],
    "Kaugummi-Blister": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Kaugummis": [
        "Restabfall"
    ],
    "Kehricht": [
        "Restabfall"
    ],
    "Keksdosen, Waffeldosen aus Metall": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Keramikgegenstände (keine Verpackung)": [
        "Restabfall"
    ],
    "Kerzen, -reste, -wachs": [
        "ASZ"
    ],
    "Kerzenbecher aus Kunststoff (leer)": [
        "Restabfall"
    ],
    "Kerzenbecher aus Metall (z.B. Teelichter), leer": [
        "ASZ"
    ],
    "Ketchupflaschen aus Glas (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Ketchupflaschen aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "KFZ-Katalysatoren": [
        "ASZ"
    ],
    "Kinderbob aus Kunststoff": [
        "ASZ"
    ],
    "Kinderwagen": [
        "ASZ"
    ],
    "Kitte (ausgehärtet)": [
        "Restabfall"
    ],
    "Kitte (nicht ausgehärtet)": [
        "ASZ"
    ],
    "Klammerlmaschine": [
        "ASZ",
        "Restabfall"
    ],
    "Klarsichtfolien, Klarsichthüllen": [
        "Restabfall"
    ],
    "Klarspüler": [
        "ASZ"
    ],
    "Klarspüler-Flaschen aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Klebebänder": [
        "Restabfall"
    ],
    "Klebebänder (als Verpackung gekaufter Waren)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Klebestift-Hüllen, leer (z.B. von Uhu-Stic)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Klebestifte, Klebe-Sticks (z.B. Uhu-Stic)": [
        "Restabfall"
    ],
    "Klebstoffe in Tuben oder Dosen (nicht ausgehärtet)": [
        "ASZ"
    ],
    "Klebstoffrückstände (eingetrocknet)": [
        "Restabfall"
    ],
    "Kleiderbügel aus Holz": [
        "ASZ"
    ],
    "Kleiderbügel aus Kunststoff": [
        "ASZ"
    ],
    "Kleiderbügel aus Metall": [
        "ASZ"
    ],
    "Kleinmetalle (Nägel, Schrauben, Drähte)": [
        "ASZ"
    ],
    "Klimageräte": [
        "ASZ"
    ],
    "Klobürsten": [
        "Restabfall"
    ],
    "Klopapier-Rollen": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Knabbergebäck": [
        "Biotonne"
    ],
    "Knetmasse (Plastilin)": [
        "Restabfall"
    ],
    "Knochen, groß": [
        "Restabfall"
    ],
    "Knopfzellen": [
        "ASZ"
    ],
    "Kochlöffel aus Kunststoff": [
        "Restabfall"
    ],
    "Koffer, Reisetaschen": [
        "ASZ"
    ],
    "Kohle-, Koksasche (kalt)": [
        "Restabfall"
    ],
    "Kohlegriller": [
        "ASZ"
    ],
    "Kohlepapiere, Durchschreibpapiere": [
        "Restabfall"
    ],
    "Kompressoren": [
        "ASZ"
    ],
    "Kondensatoren": [
        "ASZ"
    ],
    "Konservendosen (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Konservengläser (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Kontaktlinsen": [
        "Restabfall"
    ],
    "Kopfhörer": [
        "ASZ"
    ],
    "Kopfhörer (funktionstüchtig)": [
        "ASZ"
    ],
    "Kopierpapiere": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Korkbeläge": [
        "Restabfall"
    ],
    "Korken aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Korken aus Naturkork": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Korkenzieher aus Metall": [
        "ASZ"
    ],
    "Körperlotions": [
        "ASZ"
    ],
    "Korrekturlacke, -verdünner (lösungsmittelhältig)": [
        "ASZ"
    ],
    "Kosmetika": [
        "ASZ"
    ],
    "Kosmetiktupfer": [
        "Restabfall"
    ],
    "Kosmetikverpackungen aus Glas (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Kosmetikverpackungen aus Kunststoff oder Keramik": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Kraftpapiere": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Krawatten-, Socken-Hänger aus Kunststoff": [
        "ASZ"
    ],
    "Kredit-, Bankomatkarten": [
        "Restabfall"
    ],
    "Krepp-Papiere": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Kronkorken": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Küchenabfälle": [
        "Biotonne"
    ],
    "Küchenpapier (verschmutzt)": [
        "Biotonne"
    ],
    "Kugelschreiber": [
        "Restabfall"
    ],
    "Kühl- und Gefriergeräte": [
        "ASZ"
    ],
    "Kühl-Akkus": [
        "Restabfall"
    ],
    "Kühlmittel": [
        "ASZ"
    ],
    "Kunstharze (ausgehärtet)": [
        "Restabfall"
    ],
    "Kunstharze (nicht ausgehärtet)": [
        "ASZ"
    ],
    "Kunstharzlacke": [
        "ASZ"
    ],
    "Künstliche Mineralfasern (KMF)": [
        "ASZ"
    ],
    "Kunststoff-Furniere": [
        "Restabfall"
    ],
    "Kunststoff-Regenrinnen": [
        "ASZ"
    ],
    "Kunststoff-Rohre": [
        "ASZ"
    ],
    "Kunststoffbehälter": [
        "ASZ"
    ],
    "Kunststofffässer (keine Verpackung)": [
        "ASZ"
    ],
    "Kunststoffgegenstände (keine Verpackung)": [
        "Restabfall"
    ],
    "Kunststoffplatten": [
        "Restabfall"
    ],
    "Kupfer,-rohre": [
        "ASZ"
    ],
    "Laborgläser": [
        "ASZ"
    ],
    "Lackdosen (Inhalt ausgehärtet)": [
        "Restabfall"
    ],
    "Lackdosen (Inhalt nicht ausgehärtet)": [
        "ASZ"
    ],
    "Lackdosen (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Lackreste (ausgehärtet)": [
        "Restabfall"
    ],
    "Lackstifte": [
        "ASZ"
    ],
    "Laminat": [
        "ASZ",
        "Restabfall"
    ],
    "Laminatböden in kleinen Mengen": [
        "Restabfall"
    ],
    "Lampenschirme aus Glas, Kunststoff etc.": [
        "Restabfall"
    ],
    "Lampions": [
        "Restabfall"
    ],
    "Laub, Baumnadeln": [
        "ASZ",
        "Biotonne"
    ],
    "Laugen": [
        "ASZ"
    ],
    "Lautsprecher": [
        "ASZ"
    ],
    "LCD-Anzeigen": [
        "ASZ"
    ],
    "Lebensmittelreste": [
        "Biotonne"
    ],
    "LED-Lampen": [
        "ASZ"
    ],
    "Lederabfälle": [
        "Restabfall"
    ],
    "Lederbekleidungen": [
        "ASZ",
        "Restabfall"
    ],
    "Lederpflegemittel, -sprays": [
        "ASZ"
    ],
    "Leichtverpackungen (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Leichtverpackungen (restentleert) (Kunststofffolien, Joghurtbecher, Metallverschlüsse, Konservendosen,..)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Leime": [
        "ASZ"
    ],
    "Leitern aus Aluminium": [
        "ASZ"
    ],
    "Leitern aus Holz": [
        "ASZ"
    ],
    "Leiterplatten": [
        "ASZ"
    ],
    "Leuchtstifte, Text-Marker": [
        "Restabfall"
    ],
    "Leuchtstoffröhren": [
        "ASZ"
    ],
    "Lichterketten elektrisch": [
        "ASZ"
    ],
    "Liegestühle": [
        "ASZ"
    ],
    "Lineale": [
        "Restabfall"
    ],
    "Linoleum": [
        "ASZ"
    ],
    "Lippenstift-Hüllen": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Lippenstifte": [
        "ASZ"
    ],
    "Lösungsmittel": [
        "ASZ"
    ],
    "Lötzinn": [
        "ASZ"
    ],
    "Luftballons": [
        "Restabfall"
    ],
    "Luftfilter": [
        "Restabfall"
    ],
    "Luftmatratzen": [
        "Restabfall"
    ],
    "Luftpumpen aus Kunststoff": [
        "Restabfall"
    ],
    "Luftpumpen aus Metall": [
        "ASZ"
    ],
    "Lumpen": [
        "Restabfall"
    ],
    "Maisstärke-Chips": [
        "Restabfall"
    ],
    "Maisstärke-Essbestecke, -Geschirre": [
        "Biotonne"
    ],
    "Maisstärke-Säcke": [
        "Biotonne"
    ],
    "Margarinebecher": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Marmeladebecher aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Marmeladegläser (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Maschendrahte": [
        "ASZ"
    ],
    "Maschendrahtzäune": [
        "ASZ"
    ],
    "Maschinenteile aus Metall": [
        "ASZ"
    ],
    "Massageöle": [
        "ASZ"
    ],
    "Matratzen": [
        "ASZ"
    ],
    "Mauerabbruch": [
        "ASZ"
    ],
    "Mäusefallen": [
        "Restabfall"
    ],
    "Mäusegifte": [
        "ASZ"
    ],
    "Medikamente": [
        "ASZ"
    ],
    "Medikamentenfläschchen aus Glas (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Medikamentenverpackungen aus Kunststoff, Blister oder Verbundmaterialien (leer)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Medikamentenverpackungen aus Papier oder Karton (leer)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Mehrweggeschirre aus Aluminium, Blech, Email, Gusseisen, Edelstahl (auch teflonbeschichtet)": [
        "ASZ"
    ],
    "Mehrweggeschirre aus Glas, Keramik oder Kunststoff": [
        "ASZ"
    ],
    "Messer": [
        "ASZ"
    ],
    "Messingteile": [
        "ASZ"
    ],
    "Metall-Regenrinnen": [
        "ASZ"
    ],
    "Metall-Rohre": [
        "ASZ"
    ],
    "Metallbearbeitungsöle": [
        "ASZ"
    ],
    "Metalldeckel von Verpackungen": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metallfässer (als Verpackung)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metallfässer (keine Verpackung)": [
        "ASZ"
    ],
    "Metallfolien (als Verpackung)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metallkanister (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metallmanschetten von Sektflaschen": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Metallputzmittel": [
        "ASZ"
    ],
    "Metallverpackungen (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Mikrowellen": [
        "ASZ"
    ],
    "Milchflaschen aus Kunststoff (restentleert)": [
        "ASZ"
    ],
    "Milchprodukte (verdorben)": [
        "Biotonne"
    ],
    "Milchproduktverpackungen aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Mineralöldosen (mit Restinhalt)": [
        "ASZ"
    ],
    "Mineralöldosen (restentleert)": [
        "ASZ"
    ],
    "Mineralöle": [
        "ASZ"
    ],
    "mineralölgetränkte Fetzen": [
        "ASZ"
    ],
    "mineralölverschmutzte Gegenstände": [
        "ASZ"
    ],
    "Mineralwolle": [
        "ASZ"
    ],
    "Mischmaschinen": [
        "ASZ"
    ],
    "Möbel": [
        "ASZ"
    ],
    "Möbelpflegemittel": [
        "ASZ"
    ],
    "Montageschaumdosen (mit Restinhalt)": [
        "ASZ"
    ],
    "Montageschäume , FCKW-hältig (ausgehärtet)": [
        "ASZ"
    ],
    "Montageschäume,  FCKW-frei (ausgehärtet)": [
        "Restabfall"
    ],
    "Mörtel": [
        "ASZ"
    ],
    "Motoröle": [
        "ASZ"
    ],
    "Mottenschutzmittel": [
        "ASZ"
    ],
    "Mouse-Pads": [
        "Restabfall"
    ],
    "Mulchfolien": [
        "Restabfall"
    ],
    "Mullbinden": [
        "Restabfall"
    ],
    "Müllsäcke": [
        "Restabfall"
    ],
    "Mundpflegemittel": [
        "ASZ"
    ],
    "Mundschutz, Einwegmasken": [
        "Restabfall"
    ],
    "Münzkassetten": [
        "Restabfall"
    ],
    "Muschelschalen": [
        "Restabfall"
    ],
    "Musikinstrumente aus Metall": [
        "ASZ"
    ],
    "Musikinstrumente, elektronisch": [
        "ASZ"
    ],
    "Musikinstrumente, nicht aus Metall": [
        "Restabfall"
    ],
    "Musikkassetten": [
        "Restabfall"
    ],
    "Nachtspeicheröfen (sowohl asbesthältig als auch asbestfrei)": [
        "ASZ"
    ],
    "Nagellacke (ausgehärtet)": [
        "Restabfall"
    ],
    "Nagellacke (flüssig)": [
        "ASZ"
    ],
    "Nagellackentferner": [
        "ASZ"
    ],
    "Nagellackflaschen (mit Restinhalt)": [
        "ASZ"
    ],
    "Nähabfälle": [
        "Restabfall"
    ],
    "Nähmaschinen": [
        "ASZ"
    ],
    "Nähnadeln": [
        "ASZ"
    ],
    "Negative von Fotos": [
        "Restabfall"
    ],
    "Neonröhren": [
        "ASZ"
    ],
    "Nespressokapseln aus Aluminium": [
        "ASZ"
    ],
    "Netze als Verpackung (z.B. für Obst und Gemüse, Meisenknödel, Weihnachtsbäume)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Netze als Verpackung aus biologisch abbaubarem Material (z.B. Baumwolle, Zellulose)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Nichteisen-Metalle": [
        "ASZ"
    ],
    "Niespulver": [
        "Restabfall"
    ],
    "Nitroverdünnungen": [
        "ASZ"
    ],
    "Nuss-Schalen und Obstkerne": [
        "Biotonne"
    ],
    "Nussschalen, Kerne von Obst": [
        "Biotonne"
    ],
    "Obst-, Gemüsesteigen aus Holz (keine Verpackung)": [
        "ASZ"
    ],
    "Obst-, Gemüsesteigen aus Kunststoff (keine Verpackung)": [
        "ASZ"
    ],
    "Obstabfälle": [
        "Biotonne"
    ],
    "Obstnetze (nicht biologisch abbaubar)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Obsttassen aus Karton (sauber)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Obsttassen aus Kunststoff (z.B. Styropor, Porozell)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Öfen (z.B. Elektroöfen)": [
        "ASZ"
    ],
    "Ofenrohre": [
        "ASZ"
    ],
    "Ölbindemittel (gebraucht)": [
        "ASZ"
    ],
    "Ölfilter": [
        "ASZ"
    ],
    "Ölradiatoren, elektrisch": [
        "ASZ"
    ],
    "Opak-Glas-Flaschen - milchiges Glas (z.B. Odol, Kokosliköre)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Orangenschalen": [
        "Biotonne"
    ],
    "organische Abfälle": [
        "Biotonne"
    ],
    "Ostergräser": [
        "Restabfall"
    ],
    "Overhead-Folien": [
        "Restabfall"
    ],
    "Packpapiere": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Pannendreiecke (überwiegend aus Eisen)": [
        "ASZ"
    ],
    "Pannendreiecke (überwiegend aus Kunststoff)": [
        "Restabfall"
    ],
    "Pannendreiecksbehälter": [
        "ASZ"
    ],
    "Papiere (gewachst oder verschmutzt)": [
        "Restabfall"
    ],
    "Papiere (sauber, unbeschichtet)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Papiere als Verpackung (folienbeschichtet)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Papiere aus Aktenvernichtern (z.B.: Schredderpapier)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Papiere, keine Verpackung (folienbeschichtet)": [
        "Restabfall"
    ],
    "Papierhandtücher (verschmutzt oder sauber)": [
        "Restabfall"
    ],
    "Papierreste": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Papiersackerl zur Sammlung von Bioabfall": [
        "Biotonne"
    ],
    "Papierservietten (verschmutzt oder sauber)": [
        "Restabfall"
    ],
    "Papiertaschentücher (verschmutzt oder sauber)": [
        "Restabfall"
    ],
    "Pappbecher für Getränke": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Pappteller (sauber, nicht folienbeschichtet)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Pappteller (verschmutzt)": [
        "Restabfall"
    ],
    "Parfüme, Parfümfläschchen (mit Restinhalt)": [
        "ASZ"
    ],
    "Parfümfläschchen aus Glas (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Parfümfläschchen aus Keramik oder Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Parkette": [
        "ASZ"
    ],
    "Pellets": [
        "Restabfall"
    ],
    "Pelze (nicht tragbar, verschmutzt)": [
        "Restabfall"
    ],
    "Pelze (tragbar, sauber)": [
        "ASZ",
        "Restabfall"
    ],
    "Petroleum": [
        "ASZ"
    ],
    "Pflanzenaufzuchtsschalen aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Pflanzenschutzmittel": [
        "ASZ"
    ],
    "Photovoltaik-Module (zur Stromerzeugung; siliziumbasiert)": [
        "ASZ"
    ],
    "Pilzgifte": [
        "ASZ"
    ],
    "Pinsel": [
        "Restabfall"
    ],
    "Pinselreiniger": [
        "ASZ"
    ],
    "Pizzakartons (sauber)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Pizzakartons (verschmutzt, durchgefettet)": [
        "Restabfall"
    ],
    "Plastik-Gegenstände (keine Verpackung)": [
        "Restabfall"
    ],
    "Plastikkübel, -eimer (verschmutzt)": [
        "Restabfall"
    ],
    "Plastikkübel, -eimer als Verpackung (z.B. von Farbe, Orangen)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Plastikkübel, -eimer, nicht als Verpackung (z.B. Haushaltskübel, Baueimer)": [
        "ASZ"
    ],
    "Plastikschüsseln (als Verpackung oder Haushaltsgeschirr)": [
        "ASZ"
    ],
    "Plastikschüsseln als Verpackung (z.B. von Lebkuchen)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Plastikschüsseln, Haushaltsgeschirr": [
        "Restabfall"
    ],
    "Platinen": [
        "ASZ"
    ],
    "Plexigläser": [
        "Restabfall"
    ],
    "Polaroidbilder": [
        "Restabfall"
    ],
    "Polaroidkassetten": [
        "Restabfall"
    ],
    "Pölster": [
        "Restabfall"
    ],
    "Polstermöbel": [
        "ASZ"
    ],
    "Pomaden": [
        "ASZ"
    ],
    "Porzellanflaschen (als Verpackung)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Post-It - Memozetteln": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Postkarten": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Präservative": [
        "Restabfall"
    ],
    "Press-Spanplatten": [
        "ASZ"
    ],
    "Problemstoff": [
        "ASZ"
    ],
    "PU-Schaum-Dosen (mit Restinhalt)": [
        "ASZ"
    ],
    "PU-Schaum-Dosen aus Metall (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "PU-Schäume (ausgehärtet)": [
        "Restabfall"
    ],
    "Pumpzerstäuber aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Puppen": [
        "Restabfall"
    ],
    "Puppenhäuser": [
        "ASZ"
    ],
    "Putzereischläuche (z.B. Anzugschoner)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Putzfetzen": [
        "Restabfall"
    ],
    "Putzmittel (mit Restinhalt)": [
        "ASZ"
    ],
    "Putztuch": [
        "Restabfall"
    ],
    "PV-Module (zur Stromerzeugung; siliziumbasiert)": [
        "ASZ"
    ],
    "PVC-Abfälle (z.B. Bodenbeläge)": [
        "Restabfall"
    ],
    "PVC-Regenrinnen": [
        "ASZ"
    ],
    "PVC-Rohre": [
        "ASZ"
    ],
    "Quecksilber": [
        "ASZ"
    ],
    "Quecksilberhältige Lampen": [
        "ASZ"
    ],
    "Quecksilberschalter": [
        "ASZ"
    ],
    "Radiergummis": [
        "Restabfall"
    ],
    "Radiogeräte": [
        "ASZ"
    ],
    "Raschelfolie": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Rasenmäher": [
        "ASZ"
    ],
    "Rasenschnitt": [
        "Biotonne"
    ],
    "Rasensoden": [
        "ASZ"
    ],
    "Rasierklingen": [
        "ASZ"
    ],
    "Rasierpinsel": [
        "Restabfall"
    ],
    "Rattaneinkaufskörbe": [
        "ASZ"
    ],
    "Rattenfallen": [
        "Restabfall"
    ],
    "Rattengifte, Rattenköder": [
        "ASZ"
    ],
    "Raumspray-Dosen (mit Restinhalt)": [
        "ASZ"
    ],
    "Regentonnen aus Kunststoff": [
        "ASZ"
    ],
    "Regentonnen aus Metall": [
        "ASZ"
    ],
    "Restabfall (Hygienepapiere, Fotos, Kunststoffprodukte,...)": [
        "Restabfall"
    ],
    "Rigips-Platten": [
        "ASZ"
    ],
    "Rinde": [
        "Biotonne"
    ],
    "Ringordner (Kunststoff)": [
        "Restabfall"
    ],
    "Ringordner aus Papier bzw. Karton, Metall entfernt": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Ringordner aus Papier bzw. Karton, mit Metall": [
        "Restabfall"
    ],
    "Röntgenbilder": [
        "ASZ"
    ],
    "Rostschutzmittel, Rostumwandler": [
        "ASZ"
    ],
    "Router": [
        "ASZ"
    ],
    "Ruß": [
        "Restabfall"
    ],
    "Saatbeizen": [
        "ASZ"
    ],
    "Saatgut-Säcke aus Papier (restentleert)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Sackerl aus biologisch abbaubarem Material (z.B. Maisstärke, Kartoffelstärke)": [
        "Biotonne"
    ],
    "Sackerl aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Sackerl aus Papier (sauber)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Sackerl aus Papier (verschmutzt)": [
        "Restabfall"
    ],
    "Sägemehl, -späne aus behandeltem Holz": [
        "Restabfall"
    ],
    "Sägemehl, -späne aus unbehandeltem Holz": [
        "Biotonne"
    ],
    "Salbentiegel, -dosen aus Glas (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Salbentiegel, -dosen aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Salbentuben aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Salbentuben aus Metall (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Sand": [
        "ASZ"
    ],
    "Sanitäreinrichtungen aus Keramik": [
        "ASZ"
    ],
    "Sanitäreinrichtungen aus Kunststoff": [
        "ASZ"
    ],
    "Sanitärreiniger": [
        "ASZ"
    ],
    "Sat-Anlagen, -Antennen": [
        "ASZ"
    ],
    "Sauerkrautverpackungen": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Säuren": [
        "ASZ"
    ],
    "Schachteln": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Schalen von Südfrüchten": [
        "Biotonne"
    ],
    "Schallplatten": [
        "Restabfall"
    ],
    "Schallplattencover (Papier)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Schalungsplatten": [
        "ASZ"
    ],
    "Schamotte": [
        "ASZ"
    ],
    "Schaumgummis, Schaumstoffe (als Verpackung)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Schaumgummis, Schaumstoffe (keine Verpackung)": [
        "Restabfall"
    ],
    "Scheckkarten": [
        "Restabfall"
    ],
    "Scheibtruhe (Eisen)": [
        "ASZ"
    ],
    "Scheibtruhe (Kunststoff)": [
        "ASZ"
    ],
    "Scheren": [
        "ASZ"
    ],
    "Scheuermittel-Streudosen (z.B. Tenn)": [
        "ASZ"
    ],
    "Schinken-Netze": [
        "Restabfall"
    ],
    "Schinkenfolien, -papiere (gewachst oder folienbeschichtet)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Schirme": [
        "ASZ",
        "Restabfall"
    ],
    "Schirmständer (Holz)": [
        "ASZ"
    ],
    "Schirmständer (Metall)": [
        "ASZ"
    ],
    "Schirmständer (nicht aus Metall)": [
        "Restabfall"
    ],
    "Schlagobers-, Sodapatronen (leer)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Schlagobersbecher": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Schlauchboote": [
        "Restabfall"
    ],
    "Schleifpapiere": [
        "Restabfall"
    ],
    "Schlüssel": [
        "ASZ"
    ],
    "Schmiermittel (mineralisch)": [
        "ASZ"
    ],
    "Schmuckkassetten": [
        "Restabfall"
    ],
    "Schneckengifte": [
        "ASZ"
    ],
    "Schneidereiabfälle": [
        "Restabfall"
    ],
    "Schnittblumen": [
        "Biotonne"
    ],
    "Schnittmuster-, Schablonenpapiere": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Schnuller": [
        "Restabfall"
    ],
    "Schnupftabak": [
        "Biotonne"
    ],
    "Schnüre": [
        "Restabfall"
    ],
    "Schokoladepapiere": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Schonbezüge": [
        "Restabfall"
    ],
    "Schöpflöffel aus Metall": [
        "ASZ"
    ],
    "Schreibpapiere": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Schreibtinten": [
        "Restabfall"
    ],
    "Schrotkugeln": [
        "ASZ"
    ],
    "Schrotte": [
        "ASZ"
    ],
    "Schrumpffolien (sauber)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Schrumpffolien (verschmutzt)": [
        "Restabfall"
    ],
    "Schuhbänder": [
        "Restabfall"
    ],
    "Schuhcremedosen, -tuben aus Metall (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Schuhcremen, -sprays": [
        "ASZ"
    ],
    "Schuhcremetuben aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Schuhe (nicht tragbar)": [
        "Restabfall"
    ],
    "Schuhe (tragbar, sauber)": [
        "ASZ"
    ],
    "Schuhsolen": [
        "Restabfall"
    ],
    "Schultaschen": [
        "Restabfall"
    ],
    "Schwämme": [
        "Restabfall"
    ],
    "Schweißelektroden": [
        "Restabfall"
    ],
    "Schweißgeräte, elektrisch": [
        "ASZ"
    ],
    "Schwerter, Samurais, Sebel": [
        "ASZ"
    ],
    "Schwimmflossen, -flügel": [
        "Restabfall"
    ],
    "Seidenpapiere": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Seifen-, Shampooflaschen aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Seifenreste": [
        "Restabfall"
    ],
    "Seile": [
        "Restabfall"
    ],
    "Senfgläser (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Senftuben (mit Restinhalt)": [
        "Restabfall"
    ],
    "Senftuben aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Senftuben aus Metall (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Sicherungen, elektronische": [
        "ASZ"
    ],
    "Silikatputze": [
        "ASZ"
    ],
    "Silikonkartuschen (mit Restinhalt)": [
        "ASZ"
    ],
    "Silikonkartuschen (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Sitzgarnituren": [
        "ASZ"
    ],
    "Sitzgarnituren (aus Aluminium)": [
        "ASZ"
    ],
    "Sitzgarnituren (aus Eisen)": [
        "ASZ"
    ],
    "Sitzgarnituren (aus Holz)": [
        "ASZ"
    ],
    "Sitzgarnituren (aus Kunststoff/Textil)": [
        "ASZ"
    ],
    "Ski/Snowboards": [
        "ASZ"
    ],
    "Skischuhe": [
        "ASZ",
        "Restabfall"
    ],
    "Skistöcke": [
        "ASZ"
    ],
    "Slipeinlagen": [
        "Restabfall"
    ],
    "Solarleuchten": [
        "ASZ"
    ],
    "Solarzellen": [
        "ASZ"
    ],
    "Soletti-Sackerl": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Sonnenöle, Sonnencremen": [
        "Restabfall"
    ],
    "Spachtelmassen auf Gips- oder Zement-Basis": [
        "ASZ"
    ],
    "Spachtelmassen auf Kunstharz-Basis (ausgehärtet)": [
        "Restabfall"
    ],
    "Spachtelmassen auf Kunstharz-Basis (nicht ausgehärtet)": [
        "ASZ"
    ],
    "Speiseöldosen aus Metall (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Speiseölflaschen aus Glas (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Speiseölflaschen aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Speisereste": [
        "Biotonne"
    ],
    "Sperrige Abfälle": [
        "ASZ"
    ],
    "Spiegelglas": [
        "ASZ",
        "Restabfall"
    ],
    "Spiegelgläser in kleinen Mengen": [
        "Restabfall"
    ],
    "Spielkarten": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Spielkonsolen": [
        "ASZ"
    ],
    "Spielzeuge aus Kunststoff oder Metall": [
        "ASZ",
        "Restabfall"
    ],
    "Sportartikel": [
        "Restabfall"
    ],
    "Sportbögen": [
        "ASZ"
    ],
    "Spraydosen, Pumpspraydosen (mit Restinhalt)": [
        "ASZ"
    ],
    "Spraydosen, Pumpspraydosen aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Spraydosen, Pumpspraydosen aus Metall (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Spritzmittel": [
        "ASZ"
    ],
    "Spritzmittelbehälter (mit Restinhalt)": [
        "ASZ"
    ],
    "Spritzmittelbehälter aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Spülkastenzusätze": [
        "ASZ"
    ],
    "Spulkerne von Küchenrolle oder Toilettenpapier": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Spulkerne von Teppichböden aus Karton": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Spülmittel": [
        "ASZ"
    ],
    "Spülmittelflaschen aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Stabmixer": [
        "ASZ"
    ],
    "Stanniolpapiere": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Staubsauger": [
        "ASZ"
    ],
    "Staubsaugerbeutel (mit Inhalt)": [
        "Restabfall"
    ],
    "Steckdosen": [
        "Restabfall"
    ],
    "Stehlampen": [
        "ASZ"
    ],
    "Steine": [
        "ASZ"
    ],
    "Steingutflaschen (als Verpackung)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Steingutgeschirre": [
        "ASZ"
    ],
    "Steinkohle, Koks": [
        "Restabfall"
    ],
    "Stempel": [
        "Restabfall"
    ],
    "Stempelfarben, -kissen": [
        "ASZ"
    ],
    "Stereoanlagen": [
        "ASZ"
    ],
    "Sternespritzer (abgebrannt)": [
        "Restabfall"
    ],
    "Sternespritzer (nicht abgebrannt)": [
        "ASZ"
    ],
    "Stoff-Taschentücher": [
        "Restabfall"
    ],
    "Stoffreste": [
        "Restabfall"
    ],
    "Stoffsackerl, Stoffsäcke (als Verpackung)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Stofftiere": [
        "Restabfall"
    ],
    "Strauchschnitt, zerkleinert (bis daumendick)": [
        "ASZ",
        "Biotonne"
    ],
    "Streichhölzer": [
        "Restabfall"
    ],
    "Streusand, Streusplitt": [
        "ASZ"
    ],
    "Strohhalme": [
        "Restabfall"
    ],
    "Strohhüte": [
        "Restabfall"
    ],
    "Strumpfhosen (kaputt)": [
        "Restabfall"
    ],
    "Sturzhelme": [
        "Restabfall"
    ],
    "Styropor-, Porozellverpackungen": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Styroporchips als Verpackungsfüllmaterial": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Suppenbeutel": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Tablets": [
        "ASZ"
    ],
    "Tampons": [
        "Restabfall"
    ],
    "Tapeten aus Papier oder Stoff": [
        "Restabfall"
    ],
    "Taschen aus Kunststoff oder Leder": [
        "ASZ",
        "Restabfall"
    ],
    "Taschen aus Kunststoff oder Leder (funktionstüchtig)": [
        "ASZ"
    ],
    "Taschenlampen": [
        "ASZ"
    ],
    "Taschenrechner": [
        "ASZ"
    ],
    "Teebeutel aus Kunststoff (z.B. pyramidenförmige Teebeutel)": [
        "Restabfall"
    ],
    "Teebeutel, -filter, -satz, -sud": [
        "Biotonne"
    ],
    "Teer-Reste": [
        "ASZ"
    ],
    "Teerpappe": [
        "ASZ"
    ],
    "Teigwarensackerl": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Telefonbücher": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Telefonwertkarten": [
        "Restabfall"
    ],
    "Tennisbälle": [
        "Restabfall"
    ],
    "Tennisschläger": [
        "ASZ",
        "Restabfall"
    ],
    "Teppiche, Teppichböden": [
        "ASZ"
    ],
    "Terpentin": [
        "ASZ"
    ],
    "Textile Verpackungen": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Thermofore": [
        "Restabfall"
    ],
    "Thermometer (elektronisch)": [
        "ASZ"
    ],
    "Thermometer (quecksilberhaltig)": [
        "ASZ"
    ],
    "Thermopapier (z.B. Rechnungen oder Belege)": [
        "Restabfall"
    ],
    "Thermoskannen": [
        "Restabfall"
    ],
    "Tiefkühlbeutel als Warenverpackung (leer)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Tiefkühlverpackungen aus Karton": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Tiefkühlverpackungen aus Verbundmaterial": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Tierborsten (Naturborsten)": [
        "Biotonne"
    ],
    "Tierfutter": [
        "Biotonne"
    ],
    "Tierfutterdosen und -schalen (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Tierpräparate": [
        "ASZ"
    ],
    "Tintenkiller": [
        "Restabfall"
    ],
    "Tintenpatronen (leer)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Tintenpatronen (voll)": [
        "Restabfall"
    ],
    "Tipp-Ex  (flüssig, lösungsmittelhältig)": [
        "ASZ"
    ],
    "Tischwäsche": [
        "ASZ",
        "Restabfall"
    ],
    "Toaster": [
        "ASZ"
    ],
    "Tonbänder, -kassetten": [
        "Restabfall"
    ],
    "Toner von Kopiergeräten, Laserdruckern": [
        "ASZ"
    ],
    "Tonerbehälter von Kopiergeräten, restentleert": [
        "ASZ"
    ],
    "Tonerkartuschen, -einheiten von Kopiergeräten, Laserdruckern": [
        "ASZ"
    ],
    "Tontöpfe": [
        "ASZ"
    ],
    "Tonwaren": [
        "ASZ"
    ],
    "Töpfe und Pfannen aus Aluminium, Blech, Email, Gusseisen, Edelstahl (auch teflonbeschichtet)": [
        "ASZ"
    ],
    "Topfenbecher": [
        "ASZ"
    ],
    "Topfpflanzen ohne Topf": [
        "Biotonne"
    ],
    "Tragetaschen aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Tragetaschen aus Papier": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Treibstoffe": [
        "ASZ"
    ],
    "Treibstofffilter": [
        "ASZ"
    ],
    "Trinkflaschen (Kunststoff)": [
        "ASZ",
        "Restabfall"
    ],
    "Trinkgläser": [
        "ASZ",
        "Restabfall"
    ],
    "Trinkhalme": [
        "Restabfall"
    ],
    "Trockenblumen": [
        "Biotonne"
    ],
    "Trockenhauben": [
        "ASZ"
    ],
    "Tuben aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Tuben aus Kunststoff oder Metall (mit Restinhalt)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Tuben aus Metall (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Tuchenten": [
        "Restabfall"
    ],
    "Türen, -stöcke, -zargen aus Metall": [
        "ASZ"
    ],
    "Uhren, digital": [
        "ASZ"
    ],
    "Uhren, mechanisch": [
        "Restabfall"
    ],
    "Uhren-Etuis": [
        "Restabfall"
    ],
    "Unkraut": [
        "Biotonne"
    ],
    "Unterbodenschutze": [
        "ASZ"
    ],
    "Unterhaltungselektroniken": [
        "ASZ"
    ],
    "USB-Sticks, Festplatten": [
        "ASZ"
    ],
    "UV-Bestrahlungslampen": [
        "ASZ"
    ],
    "Vasen aus Kunststoff, Glas etc.": [
        "Restabfall"
    ],
    "Ventilatoren": [
        "ASZ"
    ],
    "Verbandsmaterialien": [
        "Restabfall"
    ],
    "Verbrennermotoren (ohne Flüssigkeiten)": [
        "ASZ"
    ],
    "Verbundgläser": [
        "ASZ"
    ],
    "Verlängerungskabel": [
        "ASZ"
    ],
    "Verpackungen aus Glas (restentleert)": [
        "ASZ",
        "Altglasbehälter"
    ],
    "Verpackungen aus Papier (ev. beschichtet, aber mit entsprechender Aufschrift)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Verpackungs-Fläschchen und -Flaschen aus Kunststoff (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Verpackungsvliese": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Verschlüsse von Verpackungen (Kunststoff)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Verschlüsse von Verpackungen (Metall)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Versiegelungslacke": [
        "ASZ"
    ],
    "Verteilerstecker, -kabel": [
        "ASZ"
    ],
    "Videokassetten": [
        "Restabfall"
    ],
    "Videokassettenhüllen aus Kunststoff": [
        "Restabfall"
    ],
    "Videokassettenhüllen aus Papier": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Videorekorder": [
        "ASZ"
    ],
    "Vogelkäfige": [
        "ASZ"
    ],
    "Vorhänge": [
        "ASZ"
    ],
    "Vorhanggarnischen, Vorhangkarniesen": [
        "ASZ"
    ],
    "Wachsmalkreiden": [
        "Restabfall"
    ],
    "Wachsmalkreiden-Metallschachteln": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Wachspapiere": [
        "Restabfall"
    ],
    "Wanderkartenhüllen": [
        "Restabfall"
    ],
    "Wärmeflaschen": [
        "Restabfall"
    ],
    "Wärmepumpen": [
        "ASZ"
    ],
    "Warmhaltebeutel für Grillgut (z.B. Hähnchenbeutel)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Waschbecken": [
        "ASZ"
    ],
    "Waschbenzin": [
        "ASZ"
    ],
    "Wäscheklammern": [
        "Restabfall"
    ],
    "Wäschekörbe": [
        "ASZ"
    ],
    "Wäscheleinen": [
        "Restabfall"
    ],
    "Wäscheständer, -spinne": [
        "ASZ"
    ],
    "Wäschetrockner": [
        "ASZ"
    ],
    "Waschmaschinen": [
        "ASZ"
    ],
    "Waschmittel": [
        "ASZ"
    ],
    "Waschmitteldosierhilfen aus Kunststoff": [
        "Restabfall"
    ],
    "Waschmittelflaschen aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Waschmittelkartons (restentleert)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Wasserkocher": [
        "ASZ"
    ],
    "Wattebäuschchen, Wattepads (z.B. Abschminkpads)": [
        "Restabfall"
    ],
    "Wattestäbchen": [
        "Restabfall"
    ],
    "WC-Muscheln": [
        "ASZ"
    ],
    "WC-Reiniger": [
        "ASZ"
    ],
    "Weichspüler": [
        "ASZ"
    ],
    "Weichspülerflaschen aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Weidezaunisolatoren": [
        "Restabfall"
    ],
    "Weinkartons": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Weißblechdosen (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Weißbleche": [
        "ASZ"
    ],
    "Wellbleche": [
        "ASZ"
    ],
    "Wellpappe": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Werbeprospekt-Säckchen (leer)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Werkzeugkästen aus Kunststoff oder Metall": [
        "ASZ"
    ],
    "Wickelfolie": [
        "ASZ"
    ],
    "Windelhosen (nicht wiederverwendbar)": [
        "Restabfall"
    ],
    "Windeln (Mehrweg)": [
        "Restabfall"
    ],
    "Windeln (Wegwerf-Windeln)": [
        "Restabfall"
    ],
    "Wollreste": [
        "Restabfall"
    ],
    "Wühlmausköder": [
        "ASZ"
    ],
    "Wundbenzin": [
        "ASZ"
    ],
    "Wunderkerzen (nicht abgebrannt)": [
        "ASZ"
    ],
    "Wurstfolien, -papiere (gewachst oder folienbeschichtet)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Wursthäute": [
        "Restabfall"
    ],
    "Ytongsteine": [
        "ASZ"
    ],
    "Zahnbürsten": [
        "Restabfall"
    ],
    "Zahnbürsten, elektrische": [
        "ASZ"
    ],
    "Zahnpastatuben aus Kunststoff": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Zahnpastatuben aus Metall (restentleert)": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Zahnpastatuben mit Inhalt": [
        "Restabfall"
    ],
    "Zeichenpapiere": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Zeitschriften, Illustrierte": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Zeitungen": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Zellophanfolien, Zellophanhüllen": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Zement": [
        "ASZ"
    ],
    "Zementsäcke (restentleert)": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Ziegelsteine, -splitt": [
        "ASZ"
    ],
    "Zigarettenasche, -reste": [
        "Restabfall"
    ],
    "Zigarettenschachteln mit Kunststoff- oder Metallfolien": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Zigarettenschachteln ohne Kunststoff- und Metallfolien": [
        "ASZ",
        "Altpapierbehälter"
    ],
    "Zimmerpflanzen ohne Topf": [
        "Biotonne"
    ],
    "Zinn- und Zinkprodukte": [
        "ASZ"
    ],
    "Zinngeschirre, -teller, -becher": [
        "ASZ"
    ],
    "Zitronenschalen": [
        "Biotonne"
    ],
    "Zitrusfrüchte": [
        "Biotonne"
    ],
    "Zuckerlpapiere": [
        "ASZ",
        "Gelbe Tonne/Gelber Sack"
    ],
    "Zündkerzen": [
        "Restabfall"
    ],
    "Zweige zerkleinert (bis daumendick)": [
        "ASZ",
        "Biotonne"
    ],
    "Zwirnreste": [
        "Restabfall"
    ],
    "Zwirnspulen aus Kunststoff oder Holz": [
        "Restabfall"
    ]
   }
  }
};