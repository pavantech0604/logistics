import { ProductItem } from '../types';

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'indian-rice',
    title: 'Indian Rice',
    category: 'spices-staples',
    categoryLabel: 'Rice & Staples',
    badge: 'Agricultural Staple',
    tagline: 'Long-Grain Basmati & Non-Basmati Export Grades',
    shortDescription: 'Long-grain Basmati (1121, Pusa, Traditional) and Non-Basmati (IR64, Sona Masoori, Parboiled) cleaned, sorted, and packaged in customized PP or jute bags.',
    fullDescription: 'Our premium Indian Rice portfolio includes extra-long grain 1121 Steam & Sella Basmati, traditional aromatic varieties, and cost-effective Non-Basmati staples (IR64 Parboiled, Sona Masoori, Swarna). Sourced directly from Punjab, Haryana, and Andhra Pradesh milling hubs with automated optical sorting, moisture monitoring, and fumigation protocols for international quarantine acceptance.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    features: ['1121 Steam & Sella Basmati', 'IR64 5% / 25% Broken Non-Basmati', 'Sona Masoori Raw & Steam', 'Double Polished & Sortex Clean'],
    isPopular: true,
    specs: {
      grade: 'Grade A / Sortex Clean 100%',
      moistureMax: '12.0% - 13.5%',
      packaging: ['5 kg, 10 kg, 20 kg, 25 kg, 50 kg PP Bags', 'Non-Woven Fabric Bags', 'Jute / Hessian Export Bags'],
      containerCapacity: {
        fcl20ft: '25 to 26 Metric Tons',
        fcl40ft: '27 Metric Tons (Weight constrained)',
      },
      origin: 'Punjab / Haryana / Andhra Pradesh, India',
      shelfLife: '24 Months in dry warehouse storage',
      certifications: ['APEDA Registered', 'FSSAI Certified', 'SGS / Bureau Veritas Inspection Approved', 'Phytosanitary Certified'],
      harvestSeason: 'October to February (Basmati), Year-round (Non-Basmati)',
      temperatureControl: 'Ambient dry ventilated container'
    }
  },
  {
    id: 'banana-products',
    title: 'Banana Products',
    category: 'banana',
    categoryLabel: 'Banana Products',
    badge: 'Fresh & Value-Added',
    tagline: 'Fresh G9 Cavendish Bananas, Chips & Natural Powder',
    shortDescription: 'Export-grade G9 Cavendish green/yellow bananas, vacuum-sealed Kerala banana chips, natural banana powder, and processed derivatives.',
    fullDescription: 'ABC EXPORTS delivers field-fresh G9 Cavendish green bananas from Maharashtra and Tamil Nadu banana belts. Harvested at exact maturity angles (39-46 caliber), washed in food-grade alum solutions, fungicide-treated, packed in vacuum poly-bags, and shipped in refrigerated CA/MA reefer containers. Also offering export-packed salted and spiced coconut oil fried banana chips.',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80',
    features: ['Fresh G9 Cavendish (Green, Export Caliber)', 'Vacuum Fried Banana Chips (Salted/Spicy)', 'Pure Green Banana Flour', 'Reefer Container Cold Chain Managed'],
    isPopular: true,
    specs: {
      grade: 'Class 1 Export Grade (Caliber 39mm - 46mm, Length 18cm - 22cm)',
      moistureMax: 'N/A (Fresh) / 3.0% (Chips & Powder)',
      packaging: ['13.0 kg / 18.14 kg Telescopic Cartons with Poly Foam & Vacuum Liner', 'Nitrogen-flushed Foil Pouches for Chips'],
      containerCapacity: {
        fcl20ft: 'Not Recommended for Fresh Fruit',
        fcl40ft: '1,540 boxes (approx. 20.8 MT in 40ft High Cube Reefer)',
      },
      origin: 'Solapur / Jalgaon, Maharashtra & Theni, Tamil Nadu',
      shelfLife: '30-35 days under 13.5°C reefer transit',
      certifications: ['Global G.A.P.', 'Phytosanitary Certificate', 'FSSAI Quality Checked'],
      harvestSeason: 'Available 365 Days a year',
      temperatureControl: 'Controlled Atmosphere Reefer (+13.2°C to +13.8°C)'
    }
  },
  {
    id: 'fresh-dry-ginger',
    title: 'Fresh & Dry Ginger',
    category: 'fresh-produce',
    categoryLabel: 'Fresh Produce',
    badge: 'High Gingerol',
    tagline: 'Plump Fresh Rhizomes & Sun-Dried Split Ginger',
    shortDescription: 'Plump, washed, and sun-dried ginger rhizomes with pungent aroma and high gingerol content. Mesh bags and carton packaging.',
    fullDescription: 'Sourced from the fertile hill tracts of Wayanad (Kerala), Karnataka, and the Northeast. Our ginger features bold, fibrous-free flesh with high essential oil concentration. Offered in two standard export forms: thoroughly power-washed fresh rhizomes air-dried for reefer transport, and traditional bleached/unbleached sun-dried ginger flakes for spice extraction.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    features: ['High Volatile Oil & Gingerol Content', 'Washed & Cured Fresh Rhizomes', 'Sun-Dried Whole Split Ginger', 'Aerated Packaging for Ventilation'],
    specs: {
      grade: 'Export Grade Bold (150g - 300g+ rhizome fingers)',
      moistureMax: 'Fresh: Natural / Dry: Max 10.0%',
      packaging: ['10 kg / 30 kg Aerated Mesh Leno Bags', '13.6 kg Corrugated Cartons'],
      containerCapacity: {
        fcl20ft: '12 MT (Fresh in Reefer) / 14 MT (Dry in General FCL)',
        fcl40ft: '24 MT to 26 MT in 40ft Reefer',
      },
      origin: 'Karnataka / Kerala / Assam, India',
      shelfLife: '45-60 days in Reefer (+12°C) / 12 Months (Dry Ginger)',
      certifications: ['Spices Board of India', 'Phytosanitary Inspection', 'FSSAI Approved'],
      harvestSeason: 'December to May (Peak Fresh Season)',
      temperatureControl: '+12°C with 65% Relative Humidity'
    }
  },
  {
    id: 'indian-garlic',
    title: 'Indian Garlic',
    category: 'fresh-produce',
    categoryLabel: 'Fresh Produce',
    badge: 'Cleaned & Graded',
    tagline: 'Sun-Cured White Garlic Bulbs with Tight Cloves',
    shortDescription: 'Cleaned, sun-cured white garlic bulbs with tight cloves. Sized accurately from 25mm to 45mm+ in aerated mesh bags.',
    fullDescription: 'Indian garlic is prized for its high allicin concentration, distinct pungent taste, and superior shelf durability compared to larger bland varieties. Sourced from Madhya Pradesh (Mandsaur) and Gujarat. Machine cleaned of loose skin, root-trimmed, graded into 25mm-30mm, 30mm-40mm, and 40mm-50mm diameter bands, and packed in heavy-duty breathable mesh sacks.',
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80',
    features: ['Tight, firm cloves with snow-white/pinkish skin', 'Intense allicin flavor and medical potency', 'Uniform size sorting (30mm, 40mm, 45mm+)', 'Export-cured against mold formation'],
    specs: {
      grade: 'G2 / G1 Export Graded (30mm - 45mm+)',
      moistureMax: '65% naturally cured',
      packaging: ['5 kg, 10 kg, 20 kg, 25 kg Red / Orange Mesh Bags', 'Customized Master Cartons on request'],
      containerCapacity: {
        fcl20ft: '12 to 13 Metric Tons (Reefer or Ventilated)',
        fcl40ft: '25 to 26 Metric Tons in 40ft Reefer',
      },
      origin: 'Madhya Pradesh & Gujarat, India',
      shelfLife: '3 to 5 Months under proper ventilation / -1°C to 0°C reefer',
      certifications: ['APEDA Compliant', 'Phytosanitary Clearance', 'FSSAI'],
      harvestSeason: 'February to June',
      temperatureControl: 'Ventilated container or Reefer (+0°C to +1°C)'
    }
  },
  {
    id: 'red-pink-onions',
    title: 'Red & Pink Onions',
    category: 'fresh-produce',
    categoryLabel: 'Fresh Produce',
    badge: 'Nashik Premium',
    tagline: 'High Shelf Life Indian Onions for Global Distribution',
    shortDescription: 'Premium quality Nasik / South Indian red onions. Known for firm texture, high shelf life, and distinct pungent flavor.',
    fullDescription: 'Nashik Red and Bellary Onions from Maharashtra and Karnataka are globally famous for their globe shape, deep purple-red papery peel, and solid internal rings. Sized from 40mm to 60mm+ to cater to Middle Eastern, Southeast Asian, and European distribution channels. Export conditioning includes extensive field curing and ventilated container loading.',
    image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=800&q=80',
    features: ['Distinct pungent taste & high dry matter', 'Thoroughly dried necks preventing internal rotting', 'Graded: 35-45mm, 45-55mm, 55mm+ diameter', 'Low transit shrinkage rate'],
    specs: {
      grade: 'Nasik Red / Bellary Medium & Bold',
      moistureMax: 'Dry outer skin, fully cured',
      packaging: ['5 kg, 10 kg, 25 kg, 50 kg Red Open-Weave Mesh Bags', 'Palletized container options'],
      containerCapacity: {
        fcl20ft: '12.5 Metric Tons',
        fcl40ft: '28 Metric Tons in 40ft Ventilated / Reefer Container',
      },
      origin: 'Nashik & Ahmednagar, Maharashtra / Karnataka',
      shelfLife: '60 to 90 Days under proper air circulation',
      certifications: ['APEDA Certified', 'Phytosanitary Quarantine Certificate'],
      harvestSeason: 'Three cycles: Kharif, Late Kharif, and Rabi (Year-round)',
      temperatureControl: 'Ventilated dry container or +2°C to +5°C Reefer'
    }
  },
  {
    id: 'indian-spices',
    title: 'Indian Spices',
    category: 'spices-staples',
    categoryLabel: 'Spices & Staples',
    badge: 'Premium Spices',
    tagline: 'Turmeric Fingers, Cumin Seeds, Coriander & Red Chili',
    shortDescription: 'Whole and ground spices including Turmeric fingers, Cumin seeds, Coriander, Red Chili (Stemless/Sananam), and Green Cardamom.',
    fullDescription: 'India supplies over 70% of the worlds spice demand. ABC EXPORTS procures direct from spice auctions across Guntur (Andhra Pradesh), Unjha (Gujarat), Nizamabad (Telangana), and Idukki (Kerala). Offerings include Nizamabad double-polished turmeric (curcumin > 3%), Guntur S4 / Teja stemless red chili (SHU 20,000 - 75,000), machine-cleaned cumin seeds (purity 99%), and bold 8mm green cardamom pods.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    features: ['High Curcumin (3.0% - 5.0%) Turmeric', 'Guntur Sannam / Teja Dry Red Chili', 'Machine Cleaned Cumin Seeds (99% Purity)', 'Green Cardamom (7mm - 8mm Bold Alleppey)'],
    isPopular: true,
    specs: {
      grade: 'Export ASTA Quality / Premium FAQ',
      moistureMax: '8.0% to 10.0%',
      packaging: ['25 kg / 50 kg PP Bags with inner poly lining', 'Paper Bags / Jute Bags', 'Vacuum Bricks for Cardamom'],
      containerCapacity: {
        fcl20ft: '14 MT to 18 MT depending on spice density',
        fcl40ft: '26 MT to 27 MT',
      },
      origin: 'Andhra Pradesh, Gujarat, Telangana, Kerala',
      shelfLife: '24 Months in cool, dry conditions away from sunlight',
      certifications: ['Spices Board of India Certificate', 'FSSAI', 'SGS Analysis Certificate', 'ISO 22000 compliant facilities'],
      harvestSeason: 'January to May (Turmeric & Chili), March to May (Cumin)',
      temperatureControl: 'Dry general container with moisture absorbent desiccants'
    }
  },
  {
    id: 'tropical-fruits',
    title: 'Tropical Fruits',
    category: 'fresh-produce',
    categoryLabel: 'Fresh Produce',
    badge: 'Seasonal Export',
    tagline: 'Alphonso Mangoes, Pomegranates, Papayas & Grapes',
    shortDescription: 'Seasonal export fruits including Alphonso & Kesar Mangoes, Bhagwa Pomegranates, Fresh Papaya, and Seedless Grapes.',
    fullDescription: 'Direct farm orchards under APEDA export registration. Our tropical portfolio features GI-tagged Devgad & Ratnagiri Alphonso Mangoes, Gujarat Kesar, Maharashtra Bhagwa Pomegranates (deep red arils with soft seeds), and Nashik Thompson / Super Sonaka Seedless Grapes. Hot water immersion and irradiation treatments available for USA, Japan, Australia, and EU phytosanitary protocols.',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80',
    features: ['GI-Tagged Ratnagiri & Devgad Alphonso Mangoes', 'Bhagwa Pomegranates (Weight 250g - 400g+)', 'Thompson Seedless White & Black Grapes', 'Air Freight & Sea Reefer container schedules'],
    specs: {
      grade: 'Export Grade A, Hand Selected & Foam Padded',
      moistureMax: 'Fresh Orchard Harvest',
      packaging: ['3.5 kg / 4.0 kg Corrugated Master Gift Boxes', 'Plastic Punnet Trays with Bubble Cushions'],
      containerCapacity: {
        fcl20ft: 'Air Freight Cargo Pallets (LD3/PMC) or 20ft Reefer',
        fcl40ft: 'Approx. 4,200 to 4,500 boxes in 40ft Reefer',
      },
      origin: 'Maharashtra & Gujarat, India',
      shelfLife: '14-25 days depending on cold chain parameters',
      certifications: ['Global G.A.P.', 'APEDA Hortinet Registered', 'Phytosanitary Clearance'],
      harvestSeason: 'Mangoes: March to June; Pomegranates & Grapes: Nov to April',
      temperatureControl: 'Strict Cold Chain (+2°C to +12°C depending on fruit)'
    }
  },
  {
    id: 'agro-commodities',
    title: 'Natural & Agro Commodities',
    category: 'commodities',
    categoryLabel: 'Agro Commodities',
    badge: 'Bulk Sourcing',
    tagline: 'Sesame Seeds, Yellow Corn, Soybeans & Pulses',
    shortDescription: 'Pulses, oilseeds, sesame seeds, corn, and customized agricultural commodities directly sourced from farmer networks.',
    fullDescription: 'Reliable bulk procurement pipelines for commercial food manufacturers and livestock feed mills. High purity Hulled & Natural White Sesame Seeds (99.9% purity), Non-GMO Yellow Maize/Corn for poultry feeds and starch production, whole green mung beans, and chickpeas. FOB and CIF options with flexible Incoterms.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    features: ['Hulled White Sesame (Auto-Sortex 99.95%)', 'Non-GMO Yellow Feed Corn / Maize', 'Chickpeas / Garbanzo (Kabuli 7mm - 12mm)', 'Bulk Containerized / Jumbo Bags'],
    specs: {
      grade: 'Commercial Food / Feed Grade / Machine Cleaned',
      moistureMax: '10.0% to 12.0%',
      packaging: ['25 kg / 50 kg Multiwall Paper / PP Bags', '1000 kg Jumbo Big Bags', 'Loose Container Bulk with Liner'],
      containerCapacity: {
        fcl20ft: '20 to 24 Metric Tons',
        fcl40ft: '27 Metric Tons',
      },
      origin: 'Gujarat, Rajasthan, Madhya Pradesh, India',
      shelfLife: '18 to 24 Months',
      certifications: ['Non-GMO Declaration', 'FSSAI', 'SGS Pre-Shipment Inspection', 'Certificate of Origin'],
      harvestSeason: 'Kharif & Rabi Seasons',
      temperatureControl: 'Dry general standard container'
    }
  },
  {
    id: 'custom-sourcing',
    title: 'Custom Commodity Sourcing',
    category: 'custom',
    categoryLabel: 'Tailored Solutions',
    badge: 'Bespoke Trade',
    tagline: 'Private Labeling, Contract Farming & Specialty Indian Goods',
    shortDescription: 'Dedicated procurement desk for custom Indian agricultural and manufactured goods with customized export packaging and QA testing.',
    fullDescription: 'If your business requires a specific grade, specialized bulk packaging, private label retail boxing, or contract farming arrangements for unique Indian agricultural crops, ABC EXPORTS assigns a dedicated sourcing manager. We negotiate directly at mandis and processing centers to deliver assured specs, competitive pricing, and regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    features: ['Private Label OEM Packing with Buyer Branding', 'Contract Agricultural Procurement', 'Lab-verified Specification Matching', 'Full Export Licensing & Customs Support'],
    specs: {
      grade: 'Buyer Specified Tolerances',
      moistureMax: 'Custom Agreement',
      packaging: ['Custom Retail Pouches, Bulk Totes, Drums, Cartons, PP Bags'],
      containerCapacity: {
        fcl20ft: 'Custom tailored to cargo density',
        fcl40ft: 'Maximum legal axle weight capacity',
      },
      origin: 'All Certified Agricultural Belts in India',
      shelfLife: 'Determined by product specifications',
      certifications: ['Tailored to target destination country requirements (FDA, CE, SASO, etc.)'],
      harvestSeason: 'Coordinated on contract schedule',
      temperatureControl: 'Dry, Reefer, or Controlled Atmosphere'
    }
  }
];

export const COMMODITY_CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'spices-staples', label: 'Rice & Spices' },
  { id: 'fresh-produce', label: 'Fresh Produce' },
  { id: 'banana', label: 'Banana Products' },
  { id: 'commodities', label: 'Agro Commodities' },
  { id: 'custom', label: 'Custom Sourcing' },
] as const;
