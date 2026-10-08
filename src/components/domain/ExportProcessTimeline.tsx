import { m, useReducedMotion } from 'framer-motion';
import React, { useState } from 'react';
import { EXPORT_PROCESS_STEPS } from '../../data/processData';
import { Card } from '../ui/Card';
import { CheckCircle2, Clock, FileText, CheckSquare, Scale, ShieldCheck, Ship, ArrowRight } from 'lucide-react';

export const ExportProcessTimeline: React.FC<{ onOpenRFQ?: () => void }> = ({ onOpenRFQ }) => {
  const reduced = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5" />;
      case 'Scale':
        return <Scale className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Ship':
        return <Ship className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  const current = EXPORT_PROCESS_STEPS[activeStep];

  return (
    <div className="process-experience space-y-10">
      {/* 5-Step Process Horizontal Stepper Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {EXPORT_PROCESS_STEPS.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={step.stepNumber}
              aria-pressed={isActive}
              aria-controls="process-detail"
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between ${
                isActive
                  ? 'bg-navy-900 text-white border-forest-500 shadow-lg scale-[1.02]'
                  : 'bg-white dark:bg-navy-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-navy-800 hover:border-forest-500/50 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono font-bold text-xs px-2.5 py-1 rounded-md ${
                      isActive
                        ? 'bg-emerald-500 text-navy-950 font-black'
                        : 'bg-slate-100 dark:bg-navy-800 text-forest-700 dark:text-emerald-400'
                    }`}
                  >
                    STEP {step.stepNumber}
                  </span>
                  <div className={isActive ? 'text-emerald-400' : 'text-slate-400'}>
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                <h4 className="font-heading font-bold text-sm mb-1.5 leading-snug">
                  {step.title}
                </h4>
                <p
                  className={`text-xs line-clamp-2 leading-relaxed ${
                    isActive ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {step.description}
                </p>
              </div>

              <div
                className={`mt-4 pt-3 border-t text-[11px] font-medium flex items-center justify-between ${
                  isActive ? 'border-navy-800 text-emerald-400' : 'border-slate-100 dark:border-navy-800 text-slate-400'
                }`}
              >
                <span>{step.badge}</span>
                <span className="font-mono text-[10px]">{step.estimatedDays}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep Step Exploration Card */}
      <m.div id="process-detail" key={activeStep} initial={reduced ? false : { opacity: 0, y: 12, rotateX: -5 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: reduced ? 0 : 0.25 }} aria-live="polite"><Card className="border-slate-200 dark:border-navy-800 p-8 bg-white dark:bg-navy-900 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <span>Step {current.stepNumber} Operational Protocol</span>
              <span>&bull;</span>
              <span className="font-mono">{current.estimatedDays}</span>
            </div>

            <h3 className="text-2xl font-heading font-extrabold text-navy-900 dark:text-white">
              {current.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {current.description}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Mandatory Operational Deliverables
              </h4>
              <ul className="space-y-2.5">
                {current.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 dark:bg-navy-950 p-6 rounded-2xl border border-slate-200 dark:border-navy-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Guaranteed Dispatch Window</p>
                <p className="font-bold text-sm text-navy-900 dark:text-white">{current.estimatedDays}</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Every shipment is supported with real-time photographic loading witness, electronic BL drafting, and Chamber of Commerce certificate endorsements.
            </p>

            {onOpenRFQ && (
              <button
                onClick={onOpenRFQ}
                className="w-full bg-forest-600 hover:bg-forest-700 text-white text-xs font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Initiate Step 1 (Send RFQ)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </Card></m.div>
    </div>
  );
};
