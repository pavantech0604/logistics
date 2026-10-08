import React from 'react';
import { QuoteDefaults } from '../types';
import { FreightCalculator } from '../components/domain/FreightCalculator';
import { LogisticsCorridors } from '../components/domain/LogisticsCorridors';
import { Ship } from 'lucide-react';

interface CalculatorPageProps {
  openRFQ: (productName?: string, defaults?: QuoteDefaults) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ openRFQ }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-navy-800 pb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 mb-3">
          <Ship className="w-3.5 h-3.5" />
          Container Stuffing &amp; Maritime Calculator
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-navy-900 dark:text-white tracking-tight">
          Plan the load. Map the journey.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Estimate full container loads (FCL), Reefer thermal guidelines, and sailing days from major Indian ports (Nhava Sheva, Mundra, Chennai) to international discharge ports.
        </p>
      </div>

      {/* Main SaaS Tool */}
      <FreightCalculator
        onOpenRFQWithParams={(product, tonnage, port) => {
          openRFQ(product, { quantity: String(tonnage), destinationPort: port });
        }}
      />

      {/* Shipping Corridors & Reference Section */}
      <div className="pt-8 border-t border-slate-200 dark:border-navy-800">
        <LogisticsCorridors />
      </div>
    </div>
  );
};
