import { ShippingCorridor } from '../types';

export const INDIAN_ORIGIN_PORTS = [
  {
    id: 'jnpt',
    name: 'JNPT / Nhava Sheva',
    location: 'Navi Mumbai, Maharashtra',
    type: 'Premier Container Port',
    berths: '34 Dedicated Container Berths',
    specialty: 'Reefer containers, spices, grains, processed foods',
    code: 'INNSA'
  },
  {
    id: 'mundra',
    name: 'Mundra Port',
    location: 'Kutch, Gujarat',
    type: 'Largest Private Commercial Port',
    berths: 'Multi-cargo deep draft terminal',
    specialty: 'Rice, oilseeds, cumin, sesame seeds, bulk grains',
    code: 'INMUN'
  },
  {
    id: 'chennai',
    name: 'Chennai Port',
    location: 'Tamil Nadu',
    type: 'Major East Coast Port',
    berths: 'Modern container terminal',
    specialty: 'Agricultural produce, onions, turmeric, grains',
    code: 'INMAA'
  },
  {
    id: 'vizag',
    name: 'Visakhapatnam Port',
    location: 'Andhra Pradesh',
    type: 'Deep Water Natural Port',
    berths: 'High-speed automated handling',
    specialty: 'Non-basmati rice, red chili, minerals, farm commodities',
    code: 'INVTZ'
  },
  {
    id: 'cochin',
    name: 'Cochin Port / Vallarpadam ICTT',
    location: 'Kerala',
    type: 'International Container Transshipment Terminal',
    berths: 'Direct deep-sea hub',
    specialty: 'Spices, ginger, banana derivatives, tea, coffee',
    code: 'INCOK'
  }
];

export const GLOBAL_SHIPPING_CORRIDORS: ShippingCorridor[] = [
  {
    originPort: 'JNPT / Mundra (India)',
    destinationPort: 'Jebel Ali / Port Rashid',
    destinationRegion: 'Middle East & GCC (UAE)',
    transitDaysSea: '3 - 5 Days',
    transitDaysAir: '1 Day (Direct Cargo)',
    commonCargo: ['Fresh Bananas', 'Onions', 'Basmati Rice', 'Fresh Ginger', 'Spices'],
    documentation: ['Phytosanitary Certificate', 'Certificate of Origin (Chamber of Commerce)', 'Commercial Invoice', 'Packing List', 'Bill of Lading']
  },
  {
    originPort: 'Mundra / JNPT (India)',
    destinationPort: 'Rotterdam / Hamburg / Antwerp',
    destinationRegion: 'Western Europe & Scandinavia',
    transitDaysSea: '22 - 28 Days',
    transitDaysAir: '2 - 3 Days',
    commonCargo: ['Basmati Rice', 'Hulled Sesame Seeds', 'Turmeric', 'Pomegranates', 'Grapes'],
    documentation: ['EUR.1 / REX Statement', 'Phytosanitary with MRL lab test', 'Global G.A.P.', 'SGS Certificate']
  },
  {
    originPort: 'Chennai / Visakhapatnam (India)',
    destinationPort: 'Port of Singapore / Port Klang',
    destinationRegion: 'Southeast Asia',
    transitDaysSea: '5 - 8 Days',
    transitDaysAir: '1 - 2 Days',
    commonCargo: ['Non-Basmati Rice (IR64)', 'Red Onions', 'Garlic', 'Chili Peppers'],
    documentation: ['Form AI (ASEAN-India FTA)', 'Bill of Lading', 'Phytosanitary', 'Fumigation Certificate']
  },
  {
    originPort: 'JNPT / Mundra (India)',
    destinationPort: 'Jeddah Islamic Port / Dammam',
    destinationRegion: 'Saudi Arabia & Gulf',
    transitDaysSea: '7 - 10 Days',
    transitDaysAir: '1 - 2 Days',
    commonCargo: ['Cardamom', 'Basmati Rice', 'Fresh Ginger', 'Banana Chips'],
    documentation: ['SFDA Import Compliance', 'Chamber Legalized COO', 'Halal Certificate where required']
  },
  {
    originPort: 'JNPT / Mundra (India)',
    destinationPort: 'New York (Newark) / Savannah / Los Angeles',
    destinationRegion: 'North America (USA)',
    transitDaysSea: '26 - 34 Days',
    transitDaysAir: '3 - 4 Days',
    commonCargo: ['Spices (Turmeric, Cumin)', 'Basmati Rice', 'Sesame Seeds', 'Irradiated Mangoes'],
    documentation: ['US FDA Prior Notice', 'USDA APHIS Phytosanitary Clearance', 'ISF 10+2 Filing', 'Ocean Bill of Lading']
  }
];
