/**
 * Centralized company configuration for Hind Legacy Logistics Private Limited.
 * All UI components should reference this module for company details.
 *
 * NOTE: The CIN, registered address, and incorporation date are sourced
 * from the company's incorporation certificate. Do not modify without
 * verifying against the official MCA records.
 */

export const COMPANY = {
  /** Full registered legal name */
  legalName: 'Hind Legacy Logistics Private Limited',

  /** Short display name (use in headers, navigation) */
  displayName: 'Hind Legacy Logistics',

  /** Brand tagline */
  tagline: 'Connecting Markets • Delivering Excellence',

  /** Corporate Identity Number (MCA) */
  cin: 'U46300AP2026PTC129015',

  /** Date of incorporation */
  incorporationDate: '2026-10-22',

  /** Registered office address */
  registeredAddress: {
    line1: '2-380, Cherlopalli (CT)',
    line2: 'Cherlopali Grampanchayat, C. Gollapalle',
    city: 'Tirupati Rural',
    district: 'Chittoor',
    postalCode: '517505',
    state: 'Andhra Pradesh',
    country: 'India',
  },

  /** Formatted single-line registered address */
  get formattedAddress(): string {
    const a = this.registeredAddress;
    return `${a.line1}, ${a.line2}, ${a.city}, ${a.district} – ${a.postalCode}, ${a.state}, ${a.country}`;
  },

  /** Official contact email */
  email: 'info@hindlegacylogistics.com',

  /** Official contact phone (E.164 format) */
  phone: '+91 9059995204',

  /** Raw phone digits for tel: links */
  phoneRaw: '+919059995204',

  /**
   * GSTIN — not yet assigned. Keep empty.
   * Do not insert dummy values, "NA", or "000000".
   */
  gstin: '',

  /** WhatsApp Business number (same as phone unless configured separately) */
  whatsapp: {
    number: '919059995204',
    defaultMessage:
      'Hello Hind Legacy Logistics, I am interested in discussing an export inquiry.',
  },

  /** WhatsApp deep link generator */
  whatsappUrl(message?: string): string {
    const text = encodeURIComponent(
      message ?? this.whatsapp.defaultMessage
    );
    return `https://wa.me/${this.whatsapp.number}?text=${text}`;
  },

  /** Logo asset paths (relative imports handled by Vite) */
  logos: {
    /** Original unmodified logo file — preserved as backup */
    original: '/src/assets/logo.png',
    /** High-res horizontal PNG */
    horizontalPng: '/src/assets/logo-restored.png',
    /** SVG symbol only (elephant + globe) */
    symbol: '/src/assets/logo-symbol.svg',
    /** SVG horizontal layout */
    horizontal: '/src/assets/logo-horizontal.svg',
    /** SVG wordmark only */
    wordmark: '/src/assets/logo-wordmark.svg',
    /** SVG stacked layout */
    stacked: '/src/assets/logo-stacked.svg',
    /** Light variant symbol for dark backgrounds */
    symbolLight: '/src/assets/logo-symbol-light.svg',
  },

  /** Page title suffix */
  titleSuffix: 'Hind Legacy Logistics',

  /** Browser tab title for the index page */
  indexTitle: 'Hind Legacy Logistics | International Trading & Agricultural Commodities',

  /** Current year for copyright */
  get copyrightYear(): number {
    return new Date().getFullYear();
  },

  /** Full copyright line */
  get copyrightText(): string {
    return `© ${this.copyrightYear} ${this.legalName}. All rights reserved.`;
  },
} as const;

