import React from 'react';
import { RouteNetwork } from './RouteNetwork';
import { INDIAN_ORIGIN_PORTS, GLOBAL_SHIPPING_CORRIDORS } from '../../data/portsData';
import { Card } from '../ui/Card';
import { Anchor, MapPin, Clock } from 'lucide-react';

export const LogisticsCorridors: React.FC = () => {
  return (
    <div className="space-y-12">
      <RouteNetwork />
      {/* Indian Origin Ports Grid */}
      <div>
        <div className="mb-6">
          <h3 className="text-xl font-heading font-extrabold text-navy-900 dark:text-white">
            Primary Indian Ocean Ports &amp; Dispatch Hubs
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Direct ocean container gateways with dedicated container freight stations (CFS) and automated customs processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDIAN_ORIGIN_PORTS.map((port) => (
            <div
              key={port.id}
              className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span className="font-mono text-[11px] font-bold text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                    {port.code}
                  </span>
                  <Anchor className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white mb-1">
                  {port.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span>{port.location}</span>
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                  {port.specialty}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-navy-800 text-[10px] text-slate-400 font-mono">
                {port.berths}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Maritime Corridors Grid */}
      <div>
        <div className="mb-6">
          <h3 className="text-xl font-heading font-extrabold text-navy-900 dark:text-white">
            Active Global Ocean Shipping Routes
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Established shipping line partnerships (Maersk, MSC, Hapag-Lloyd, CMA CGM, ONE) ensuring dependable sailing schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GLOBAL_SHIPPING_CORRIDORS.map((corridor, idx) => (
            <Card
              key={idx}
              className="p-6 bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-800 hover:border-slate-300 dark:hover:border-navy-700"
            >
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-bold uppercase tracking-wider text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full">
                  {corridor.destinationRegion}
                </span>
                <span className="font-mono text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {corridor.transitDaysSea}
                </span>
              </div>

              <h4 className="font-heading font-bold text-lg text-navy-900 dark:text-white mb-1 flex items-center gap-2">
                <span>{corridor.destinationPort}</span>
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Origin: <strong className="text-slate-700 dark:text-slate-300">{corridor.originPort}</strong>
              </p>

              <div className="space-y-3 text-xs border-t border-slate-100 dark:border-navy-800 pt-3">
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Major Cargo Dispatched:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {corridor.commonCargo.map((cargo, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded text-[11px]"
                      >
                        {cargo}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Quarantine &amp; Clearance:
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {corridor.documentation.slice(0, 3).join(', ')}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
