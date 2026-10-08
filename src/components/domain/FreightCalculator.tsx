import { CargoDepth } from './CargoDepth';
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { PRODUCTS_DATA } from '../../data/productsData';
import { GLOBAL_SHIPPING_CORRIDORS } from '../../data/portsData';
import { Ship, Container, Thermometer, FileCheck2, ArrowRight, Boxes } from 'lucide-react';

interface FreightCalculatorProps {
  onOpenRFQWithParams?: (product: string, tonnage: number, port: string) => void;
}

export const FreightCalculator: React.FC<FreightCalculatorProps> = ({
  onOpenRFQWithParams,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('indian-rice');
  const [metricTons, setMetricTons] = useState<number>(50);
  const [selectedCorridorIndex, setSelectedCorridorIndex] = useState<number>(0);

  const selectedProduct = PRODUCTS_DATA.find((p) => p.id === selectedProductId) || PRODUCTS_DATA[0];
  const selectedCorridor = GLOBAL_SHIPPING_CORRIDORS[selectedCorridorIndex] || GLOBAL_SHIPPING_CORRIDORS[0];

  // Commodity weight density & container parameters
  const getContainerEstimates = () => {
    let mtPer20ft = 25;
    let mtPer40ft = 27;
    let containerType = 'Dry Standard 20ft / 40ft';
    let tempRange = 'Ambient Temperature';

    if (selectedProductId === 'banana-products') {
      mtPer20ft = 0; // Not recommended for bananas
      mtPer40ft = 20.8;
      containerType = '40ft High Cube Reefer (Controlled Atmosphere)';
      tempRange = '+13.2°C to +13.8°C (Fresh) / Dry (Chips)';
    } else if (selectedProductId === 'red-pink-onions') {
      mtPer20ft = 12.5;
      mtPer40ft = 28;
      containerType = '40ft Ventilated / Reefer Container';
      tempRange = 'Well Ventilated / +2°C to +5°C';
    } else if (selectedProductId === 'fresh-dry-ginger') {
      mtPer20ft = 12;
      mtPer40ft = 25;
      containerType = '40ft Reefer (+12°C) or Dry Standard';
      tempRange = '+12°C with 65% Humidity';
    } else if (selectedProductId === 'indian-garlic') {
      mtPer20ft = 13;
      mtPer40ft = 26;
      containerType = '40ft Reefer / Aerated Boxed';
      tempRange = '+0°C to +1°C Cured';
    } else if (selectedProductId === 'tropical-fruits') {
      mtPer20ft = 10;
      mtPer40ft = 20;
      containerType = '40ft Reefer / Air Freight ULD Containers';
      tempRange = '+2°C to +8°C Cold Chain';
    } else if (selectedProductId === 'indian-spices') {
      mtPer20ft = 16;
      mtPer40ft = 26;
      containerType = 'Standard Dry Container (Moisture Traps)';
      tempRange = 'Cool & Dry (Max 25°C)';
    }

    // Number of 40ft containers needed
    const containers40ftNeeded = mtPer40ft > 0 ? Math.ceil(metricTons / mtPer40ft) : 0;
    const containers20ftNeeded = mtPer20ft > 0 ? Math.ceil(metricTons / mtPer40ft) * 2 : 0;

    return {
      mtPer20ft,
      mtPer40ft,
      containerType,
      tempRange,
      containers40ftNeeded,
      containers20ftNeeded,
    };
  };

  const est = getContainerEstimates();

  return (
    <div className="space-y-8">
      {/* Interactive Controls & Output Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Input Configuration Column */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="border-slate-200 dark:border-navy-800 p-6 space-y-5 bg-white dark:bg-navy-900 shadow-sm">
            <div className="border-b border-slate-100 dark:border-navy-800 pb-3">
              <h3 className="font-heading font-extrabold text-lg text-navy-900 dark:text-white">
                Cargo &amp; Route Configuration
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Calculate container equipment, payload limits, and shipping duration.
              </p>
            </div>

            {/* Commodity Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1.5">
                Select Agricultural Commodity
              </label>
              <select
                aria-label="Select agricultural commodity"
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-950 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none"
              >
                {PRODUCTS_DATA.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} ({p.badge})
                  </option>
                ))}
              </select>
            </div>

            {/* Tonnage Slider / Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                  Order Volume (Metric Tons)
                </label>
                <span className="text-sm font-extrabold text-forest-600 dark:text-emerald-400 font-mono">
                  {metricTons} MT
                </span>
              </div>
              <input
                aria-label="Order volume in metric tons"
                type="range"
                min="10"
                max="500"
                step="5"
                value={metricTons}
                onChange={(e) => setMetricTons(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-navy-800 rounded-lg appearance-none cursor-pointer accent-forest-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                <span>10 MT (1 FCL)</span>
                <span>100 MT</span>
                <span>250 MT</span>
                <span>500 MT (Bulk)</span>
              </div>
            </div>

            {/* Destination Corridor Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1.5">
                Target International Shipping Corridor
              </label>
              <select
                aria-label="Target shipping corridor"
                value={selectedCorridorIndex}
                onChange={(e) => setSelectedCorridorIndex(Number(e.target.value))}
                className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-950 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none"
              >
                {GLOBAL_SHIPPING_CORRIDORS.map((c, idx) => (
                  <option key={idx} value={idx}>
                    {c.originPort} &rarr; {c.destinationPort} ({c.destinationRegion})
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Sourcing Origin Note */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <p>
                <strong className="text-navy-900 dark:text-white">Active Source Hub:</strong> {selectedProduct.specs.origin}
              </p>
              <p>
                <strong className="text-navy-900 dark:text-white">Harvest Season:</strong> {selectedProduct.specs.harvestSeason || 'Year-round supply'}
              </p>
            </div>
          </Card>
        </div>

        {/* Right Output Dashboard Column */}
        <div className="lg:col-span-7 space-y-6" aria-live="polite" aria-atomic="true">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Metric 1: 40ft Containers */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 text-white border border-navy-800 shadow-md">
              <div className="flex items-center justify-between text-slate-300 text-xs mb-3">
                <span className="font-semibold uppercase tracking-wider">Container Requirement</span>
                <Container className="w-5 h-5 text-emerald-400" />
              </div>
              <CargoDepth count={est.containers40ftNeeded} />
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold font-heading text-white">
                  {est.containers40ftNeeded}
                </span>
                <span className="text-sm text-emerald-400 font-semibold">x 40ft FCL</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Equivalent to approx. {est.containers40ftNeeded * 2} x 20ft FCL slots.
              </p>
            </div>

            {/* Metric 2: Transit Time */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 text-white border border-navy-800 shadow-md">
              <div className="flex items-center justify-between text-slate-300 text-xs mb-3">
                <span className="font-semibold uppercase tracking-wider">Maritime Sea Transit</span>
                <Ship className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold font-heading text-white">
                  {selectedCorridor.transitDaysSea}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Port to Port: {selectedCorridor.destinationPort}
              </p>
            </div>

          </div>

          {/* Deep Specifications Breakdown Card */}
          <Card className="border-slate-200 dark:border-navy-800 p-6 space-y-6 bg-white dark:bg-navy-900">
            <div>
              <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white mb-1">
                Equipment &amp; Thermal Cold Chain Specifications
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Mandatory logistics parameters for maintaining export quality during ocean passage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-1.5">
                <span className="text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Boxes className="w-3.5 h-3.5 text-forest-600 dark:text-emerald-400" />
                  Recommended Equipment
                </span>
                <p className="font-bold text-sm text-navy-900 dark:text-white">
                  {est.containerType}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-1.5">
                <span className="text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5 text-amber-500" />
                  Thermal Environment
                </span>
                <p className="font-bold text-sm text-navy-900 dark:text-white">
                  {est.tempRange}
                </p>
              </div>
            </div>

            {/* Mandatory Documentation Required */}
            <div>
              <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-navy-900 dark:text-white mb-3 flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Required Export Documentation for this Corridor
              </h5>
              <div className="flex flex-wrap gap-2">
                {selectedCorridor.documentation.map((doc, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-navy-700"
                  >
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA: Open RFQ with precomputed params */}
            <div className="pt-4 border-t border-slate-100 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ready to receive a formal contract quotation for this cargo configuration?
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  if (onOpenRFQWithParams) {
                    onOpenRFQWithParams(selectedProduct.title, metricTons, selectedCorridor.destinationPort);
                  }
                }}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Inquire for {metricTons} MT {selectedProduct.title}
              </Button>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};
