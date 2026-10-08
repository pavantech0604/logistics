import { TiltSurface } from '../ui/Depth';
import React from 'react';
import { QUALITY_CERTIFICATIONS } from '../../data/processData';

import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export const QualityCertifications: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {QUALITY_CERTIFICATIONS.map((cert) => (
          <TiltSurface
            key={cert.code}
            className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col justify-between hover:shadow-card-hover transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-forest-700 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-200 dark:border-emerald-800">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div className="mb-2">
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {cert.code}
                </span>
                <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white mt-0.5">
                  {cert.name}
                </h4>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                {cert.authority}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full Export Conformance</span>
            </div>
          </TiltSurface>
        ))}

        {/* Highlight Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950 text-white border border-navy-800 shadow-md flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-navy-800 text-amber-400 flex items-center justify-center mb-4 border border-navy-700">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-white mb-2">
              Third-Party Lab Testing on Every Lot
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Buyers can request independent pre-shipment sampling by SGS, Bureau Veritas, or Eurofins for moisture, pesticide MRL limits, and heavy metals prior to container sealing.
            </p>
          </div>
          <div className="pt-4 text-xs font-mono text-amber-400">
            Zero-Tolerance Quality Protocol
          </div>
        </div>
      </div>
    </div>
  );
};
