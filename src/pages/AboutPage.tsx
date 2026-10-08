import React from 'react';
import { Card } from '../components/ui/Card';
import { QualityCertifications } from '../components/domain/QualityCertifications';
import { Building2, MapPin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-navy-800 pb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 mb-3">
          <Building2 className="w-3.5 h-3.5" />
          About ABC EXPORTS
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-navy-900 dark:text-white tracking-tight">
          Rooted in India. Connected globally.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          ABC EXPORTS was founded with a clear operational mission: to provide overseas food importers, wholesalers, and retail chains with dependable, verified, and quality-standardized agricultural commodities from India.
        </p>
      </div>

      {/* Narrative & Visual Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-900 dark:text-white">
            Operational Excellence from Farm-Gate to Container Port
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            India is blessed with diverse agro-climatic zones producing the worlds finest rice varieties, aromatic spices, tropical fruits, and pulses. However, international trade often encounters challenges with inconsistent grading and incomplete export documentation.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            ABC EXPORTS eliminates these uncertainties. By operating directly at source farming clusters—Punjab for Basmati, Guntur for Chilies, Nashik for Onions and Grapes, Theni for Cavendish Bananas—we manage the quality chain from harvesting through mechanized cleaning, optical sortex sorting, and climate-controlled container stuffing.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
              <p className="text-2xl font-black font-heading text-forest-600 dark:text-emerald-400">100%</p>
              <p className="text-xs font-semibold text-navy-900 dark:text-white mt-0.5">QC Verification</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Pre-shipment batch testing</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
              <p className="text-2xl font-black font-heading text-forest-600 dark:text-emerald-400">24h</p>
              <p className="text-xs font-semibold text-navy-900 dark:text-white mt-0.5">Rapid Quote Turnaround</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Formal specifications &amp; Incoterms</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-navy-800">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
              alt="Global Freight Logistics"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Sourcing Hubs Map */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-heading font-extrabold text-navy-900 dark:text-white">
            Our Primary Indian Agricultural Sourcing Belts
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Certified procurement points and modern packing stations situated at strategic logistics junctions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card className="p-5">
            <MapPin className="w-5 h-5 text-emerald-500 mb-2" />
            <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white">North India Belt</h4>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">Punjab &amp; Haryana</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Long-grain 1121 Steam &amp; Sella Basmati rice, Pusa varieties, and high-protein wheat grains.
            </p>
          </Card>

          <Card className="p-5">
            <MapPin className="w-5 h-5 text-emerald-500 mb-2" />
            <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white">West India Belt</h4>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">Maharashtra &amp; Gujarat</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Nashik Red Onions, Alphonso Mangoes, Thompson Grapes, Cumin, Sesame seeds, and G9 Bananas.
            </p>
          </Card>

          <Card className="p-5">
            <MapPin className="w-5 h-5 text-emerald-500 mb-2" />
            <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white">South India Belt</h4>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">Andhra, Telangana, Tamil Nadu &amp; Kerala</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Guntur Red Chilies, Nizamabad Turmeric, Sona Masoori Rice, Fresh Ginger, and Green Bananas.
            </p>
          </Card>

          <Card className="p-5">
            <MapPin className="w-5 h-5 text-emerald-500 mb-2" />
            <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white">Central India Belt</h4>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">Madhya Pradesh &amp; Rajasthan</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Export-cured Garlic bulbs, Chickpeas (Kabuli), Coriander seeds, and Yellow feed maize.
            </p>
          </Card>
        </div>
      </div>

      {/* Certifications Block */}
      <div className="pt-8 border-t border-slate-200 dark:border-navy-800 space-y-6">
        <h2 className="text-2xl font-heading font-extrabold text-navy-900 dark:text-white">
          Accredited Export Memberships
        </h2>
        <QualityCertifications />
      </div>
    </div>
  );
};
