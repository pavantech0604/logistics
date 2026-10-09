import React from 'react';
import { ExportProcessTimeline } from '../components/domain/ExportProcessTimeline';
import { QualityCertifications } from '../components/domain/QualityCertifications';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Card } from '../components/ui/Card';

interface ProcessPageProps {
  openRFQ: (productName?: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ openRFQ }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-navy-800 pb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          Standard Operating Procedures
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-navy-900 dark:text-white tracking-tight">
          From inquiry to final handover.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          From initial crop specification review to customs gate-in and Bill of Lading delivery, our 5-step operational protocol guarantees transparency, legal compliance, and shipment predictability.
        </p>
      </div>

      {/* Process Interactive Timeline */}
      <ExportProcessTimeline onOpenRFQ={() => openRFQ()} />

      {/* Export Documents Checklist */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-heading font-extrabold text-navy-900 dark:text-white">
            Mandatory Export Documentation Suite
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Every shipment dispatched by Hind Legacy Logistics comes with complete statutory documents prepared by certified customs house agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card className="p-6">
            <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Certificate of Origin (COO)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Legalized by the Indian Chamber of Commerce / Export Inspection Agency verifying origin in India for preferential tariff treatment.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Phytosanitary Certificate
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Issued by Govt. of India Plant Quarantine authority certifying freedom from regulated pests, insects, and fungal pathogens.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Bill of Lading (OBL / Seaway)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Issued by premier global carriers (Maersk, MSC, Hapag-Lloyd) detailing exact container numbers, customs seal IDs, and vessel voyage details.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Commercial Invoice &amp; Packing List
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Detailed itemization of net weight, gross weight, pallet dimensions, Harmonized System (HS) Codes, and Incoterms pricing.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Fumigation Certificate
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Methyl Bromide / Phosphine treatment documentation adhering to the International Standards for Phytosanitary Measures (ISPM 15).
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              SGS / Bureau Veritas Analysis
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Independent third-party laboratory analysis report confirming chemical residue, moisture levels, aflatoxin limits, and quality grade.
            </p>
          </Card>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="pt-8 border-t border-slate-200 dark:border-navy-800 space-y-6">
        <h2 className="text-2xl font-heading font-extrabold text-navy-900 dark:text-white">
          Accreditation &amp; Export Boards
        </h2>
        <QualityCertifications />
      </div>
    </div>
  );
};
