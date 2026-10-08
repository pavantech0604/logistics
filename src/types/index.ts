export type ProductCategory = 
  | 'all'
  | 'spices-staples'
  | 'fresh-produce'
  | 'banana'
  | 'commodities'
  | 'custom';

export interface QuoteDefaults {
  quantity: string;
  destinationPort: string;
}

export interface ProductSpecification {
  grade?: string;
  moistureMax?: string;
  packaging: string[];
  containerCapacity: {
    fcl20ft: string;
    fcl40ft: string;
  };
  origin: string;
  shelfLife: string;
  certifications: string[];
  harvestSeason?: string;
  temperatureControl?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: ProductCategory;
  categoryLabel: string;
  badge: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  specs: ProductSpecification;
  isPopular?: boolean;
}

export interface RFQFormData {
  buyerName: string;
  companyName: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  unit: 'MT' | 'Containers' | 'Cartons' | 'Kilograms';
  incoterm: 'FOB' | 'CIF' | 'CFR' | 'EXW';
  destinationPort: string;
  destinationCountry: string;
  packagingPreference: string;
  notes?: string;
}

export interface ShippingCorridor {
  originPort: string;
  destinationPort: string;
  destinationRegion: string;
  transitDaysSea: string;
  transitDaysAir?: string;
  commonCargo: string[];
  documentation: string[];
}

export interface ExportStep {
  stepNumber: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  estimatedDays: string;
  iconName: string;
}
