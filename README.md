# ABC EXPORTS — Modern B2B International Trading & Agricultural Export Platform

A modern, high-performance, responsive React + TypeScript web application engineered for **ABC EXPORTS** (India &bull; Global Markets). Reconstructed from the design reference `abc-exports.html` and elevated into an enterprise-ready SaaS portal with interactive B2B logistics tools, full container capacity calculations, dynamic RFQ workflow, and dark/light mode.

---

## 1. Quick Start & Commands

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### Installation
```bash
# Clone or open project directory
cd e:\Logistics

# Install production and development dependencies
npm install
```

### Local Development Server
```bash
# Run local Vite development server
npm run dev

# Or specify a custom port
npm run dev -- --port 5174
```
Access the application at [http://localhost:5174](http://localhost:5174).

### Automated Vitest Test Suite
```bash
# Run component tests
npm test
```

### Production Build
```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 2. Architecture & Design Decisions

### A. Visual System & Typography
- **Curated Color Tokens**:
  - **Navy Executive Base**: `#0b192c`, `#0c1b30`, `#060d17` for authority and maritime depth.
  - **Forest & Emerald Accents**: `#16a34a`, `#22c55e`, `#10b981` symbolizing agriculture, vitality, and purity.
  - **Warm Gold / Amber Accents**: `#d97706`, `#f59e0b`, `#fbbf24` highlighting export grades and premium spice heritage.
- **Font Pairing**:
  - `Plus Jakarta Sans`: High-contrast display headings with editorial structure.
  - `Inter`: Crisp, tabular data and body copy with comfortable line height.
- **Dark & Light Mode**: Seamless switcher persisted via `localStorage` with system preference fallback.

### B. SaaS Feature Enhancements Beyond the Original HTML
1. **Interactive Freight & Container Estimator (`/calculator`)**:
   - Calculates container equipment (Dry 20ft/40ft FCL vs Controlled Atmosphere 40ft High Cube Reefer).
   - Tonnage slider adjusting pallet limits, tare weight, and maritime transit duration from India to Jebel Ali, Rotterdam, Singapore, and New York.
   - Pre-fills formal RFQ with calculated volume.
2. **Interactive Product Catalog (`/products`)**:
   - Real-time search by keyword, origin, variety, or grade.
   - Category filtering (Rice & Spices, Fresh Produce, Banana Products, Agro Commodities, Custom).
   - Sorting by popularity, alphabetical, and featured.
   - Detailed Specification Sheet Modal inspecting packaging, container loading, shelf life, and quarantine certifications.
3. **5-Step Operational Pipeline (`/process`)**:
   - Step-by-step interactive workflow detailing deliverables, turnaround times, and statutory documents required per milestone.
4. **Zod & React Hook Form RFQ Engine**:
   - Schema validation with inline error messages, unit selectors (MT, Containers, Cartons), Incoterms (FOB, CIF, CFR, EXW), and automated feedback toasts.
5. **Direct Trade Desk Connectivity**:
   - Click-to-chat WhatsApp Business desk (`+91 8331851746`) with pre-filled purchase inquiry messages.

---

## 3. Main Routes

| Path | Page Component | Description |
|---|---|---|
| `/` | `HomePage.tsx` | Overview dashboard, hero, commodities, process, calculator teaser, and RFQ desk |
| `/products` | `ProductsPage.tsx` | Interactive product catalog with search, filters, and detailed specs modal |
| `/calculator` | `CalculatorPage.tsx` | Interactive container stuffing and sea freight duration calculator |
| `/process` | `ProcessPage.tsx` | 5-step operational protocol and export documentation checklist |
| `/about` | `AboutPage.tsx` | Corporate background, sourcing belts (Punjab, Nashik, Andhra, MP) |
| `/contact` | `ContactPage.tsx` | Dedicated trade desk, RFQ form, phone, WhatsApp, and buyer FAQs |
| `*` | `NotFoundPage.tsx` | 404 handler with return-to-home navigation |

---

## 4. Main Reusable Components

```
src/
├── components/
│   ├── layout/
│   │   ├── AppShell.tsx         # Layout wrapper with theme & global modal states
│   │   ├── TopTradeBar.tsx      # Origin & direct trade desk status bar
│   │   ├── Header.tsx           # Sticky responsive header with navigation & theme switch
│   │   └── Footer.tsx           # Comprehensive trade links and regulatory notices
│   ├── ui/
│   │   ├── Button.tsx           # Accessible button with 6 variants & loading states
│   │   ├── Badge.tsx            # Semantic badges (forest, navy, gold, slate, pulse)
│   │   ├── Card.tsx             # Surface card with hover states and borders
│   │   ├── Modal.tsx            # Accessible modal dialog with Esc & focus trap
│   │   ├── Drawer.tsx           # Mobile & detail side drawer
│   │   └── Toast.tsx            # Floating toast notification system
│   └── domain/
│       ├── ProductCard.tsx          # Commodity card with specs and inquiry trigger
│       ├── ProductCatalog.tsx       # Live search, category tabs, and sorting grid
│       ├── ProductDetailModal.tsx   # Complete commodity specification sheet
│       ├── FreightCalculator.tsx    # Container stuffing and sea transit tool
│       ├── ExportProcessTimeline.tsx# 5-Step interactive operational timeline
│       ├── LogisticsCorridors.tsx   # Indian ports & world shipping corridors
│       ├── QualityCertifications.tsx# APEDA, Spices Board, FSSAI, Global GAP
│       ├── RFQModal.tsx             # Form-validated quote request modal
│       └── ContactForm.tsx          # Full RFQ submission form with feedback
```

---

## 5. Connecting Mock Data to a Real Backend API

All mock data is cleanly separated from UI components in `src/data/`:
- `src/data/productsData.ts`
- `src/data/portsData.ts`
- `src/data/processData.ts`

### Where to Replace:
1. **Products API**:
   In `src/components/domain/ProductCatalog.tsx` or a custom hook `src/hooks/useProducts.ts`:
   ```typescript
   import { useQuery } from '@tanstack/react-query';

   export const useProducts = () => {
     return useQuery({
       queryKey: ['products'],
       queryFn: async () => {
         const res = await fetch('https://api.abcexports.com/v1/products');
         if (!res.ok) throw new Error('Failed to fetch commodities');
         return res.json();
       },
     });
   };
   ```

2. **RFQ & Inquiry Submission**:
   In `src/components/domain/RFQModal.tsx` and `src/components/domain/ContactForm.tsx`:
   Replace the simulated timeout in `onSubmit`:
   ```typescript
   const onSubmit = async (data: RFQFormValues) => {
     const response = await fetch('https://api.abcexports.com/v1/rfq', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data),
     });
     const result = await response.json();
     // update UI state and trigger toast
   };
   ```

---

## 6. Official Contact & Trade Desk Details

- **Company**: ABC EXPORTS
- **Origin**: India
- **Direct Phone**: +91 8331851746
- **WhatsApp**: [Connect on WhatsApp](https://wa.me/918331851746)
- **Primary Dispatch Ports**: JNPT / Nhava Sheva (Mumbai), Mundra (Gujarat), Chennai (Tamil Nadu), Visakhapatnam (Andhra Pradesh), Cochin (Kerala).
