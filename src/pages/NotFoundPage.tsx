import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-navy-850 text-slate-400 mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 text-emerald-500 animate-spin-slow" />
        </div>
        <h1 className="text-4xl font-heading font-extrabold text-navy-900 dark:text-white">
          404 - Page Not Found
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          The requested export portal page or specification route does not exist. Please navigate back to the main export commodities catalog.
        </p>
        <div>
          <Link to="/" className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white rounded-lg px-4 py-3 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Return to Trade Portal
          </Link>
        </div>
      </div>
    </div>
  );
};
