import { ExportStep } from '../types';

export const EXPORT_PROCESS_STEPS: ExportStep[] = [
  {
    stepNumber: '01',
    title: 'Inquiry & Requirements',
    badge: 'RFQ Review',
    description: 'Buyer submits product specifications, desired quantity (Tons/Containers), target packaging, and destination port requirements.',
    deliverables: [
      'Buyer RFQ evaluation & technical viability review',
      'Preliminary spec matching against active crop arrivals',
      'Target dispatch timeline estimation'
    ],
    estimatedDays: 'Within 24 Hours',
    iconName: 'FileText'
  },
  {
    stepNumber: '02',
    title: 'Product Discussion & Spec Alignment',
    badge: 'Spec Alignment',
    description: 'Our trade desk reviews technical grades, allowable moisture tolerances, physical samples, custom private branding, and port logistics parameters.',
    deliverables: [
      'Courier sample dispatch upon buyer request',
      'Custom packaging die-line & label artwork confirmation',
      'Incoterms alignment (FOB Nhava Sheva / Mundra vs CIF Destination Port)'
    ],
    estimatedDays: '1 - 3 Days',
    iconName: 'CheckSquare'
  },
  {
    stepNumber: '03',
    title: 'Quotation, Contract & Terms',
    badge: 'FOB / CIF Pricing',
    description: 'Transparent and competitive quotation issued with fixed Incoterms, currency benchmarks, payment terms (LC, TT, CAD), and formal Sales Contract.',
    deliverables: [
      'Formal Proforma Invoice (PI) & Purchase Agreement',
      'Escrow or irrevocable Letter of Credit (LC) draft review',
      'Firm shipping line booking reservation'
    ],
    estimatedDays: '1 - 2 Days',
    iconName: 'Scale'
  },
  {
    stepNumber: '04',
    title: 'QC, Processing & Loading Supervision',
    badge: 'Inspection Passed',
    description: 'Meticulous quality control, lab/phytosanitary checks, export labeling, palletization, and port container stuffing under our direct supervision.',
    deliverables: [
      'Third-party pre-shipment inspection (SGS / Bureau Veritas available)',
      'Phytosanitary inspection & pest fumigation certification',
      'Live photo & video audit of container stuffing & custom seal application'
    ],
    estimatedDays: '3 - 7 Days',
    iconName: 'ShieldCheck'
  },
  {
    stepNumber: '05',
    title: 'Shipment, Custom Clearance & BL',
    badge: 'Port Dispatch',
    description: 'Indian customs gate-in clearance, Bill of Lading (BL) issuance, export incentives compliance, cargo tracking updates, and safe delivery to your port.',
    deliverables: [
      'Original Bill of Lading (OBL) or Express Telex Release',
      'Certificate of Origin (COO) legalized by Indian Chamber of Commerce',
      'Commercial Invoice, Packing List & full digital courier dispatch via DHL'
    ],
    estimatedDays: 'Vessel Schedule (3-30 Days)',
    iconName: 'Ship'
  }
];

export const QUALITY_CERTIFICATIONS = [
  {
    code: 'APEDA',
    name: 'Agricultural & Processed Food Products Export Development Authority',
    authority: 'Ministry of Commerce and Industry, Govt. of India',
    description: 'Official statutory body certifying quality and standard conformance for agro-food exports.'
  },
  {
    code: 'SPICES BOARD',
    name: 'Spices Board of India',
    authority: 'Ministry of Commerce, Govt. of India',
    description: 'Regulatory oversight ensuring strict chemical residue, aflatoxin, and purity standards.'
  },
  {
    code: 'FSSAI',
    name: 'Food Safety and Standards Authority of India',
    authority: 'Govt. of India Quality Mark',
    description: 'Mandatory food processing, hygienic packing, and storage compliance.'
  },
  {
    code: 'GLOBAL G.A.P.',
    name: 'Good Agricultural Practices',
    authority: 'International Farm Assurance Standard',
    description: 'Safe, sustainable agricultural production standard required by premier global retail chains.'
  },
  {
    code: 'SGS / BV',
    name: 'Third-Party Inspection Conformance',
    authority: 'Independent Global Verification',
    description: 'Pre-shipment batch testing, loading witness, container seal verification, and weight certificates.'
  }
];
