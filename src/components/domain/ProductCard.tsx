import React from 'react';
import { ProductItem } from '../../types';
import { Mail, Info, CheckCircle2 } from 'lucide-react';
import { TiltSurface } from '../ui/Depth';
import { Button } from '../ui/Button';

interface ProductCardProps {
  product: ProductItem;
  onOpenRFQ: (productName: string) => void;
  onViewDetails: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenRFQ,
  onViewDetails,
}) => {
  return (
    <TiltSurface className="group bg-white dark:bg-navy-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-sm hover:shadow-card-hover hover:border-forest-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between h-full product-card">
      <div>
        {/* Product Image & Badges */}
        <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-navy-950">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
          
          <span className="absolute top-3 left-3 bg-navy-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-700/60 shadow-sm">
            {product.badge}
          </span>

          {product.isPopular && (
            <span className="absolute top-3 right-3 bg-amber-500 text-navy-950 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
              High Demand
            </span>
          )}

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
            <span className="bg-navy-950/80 px-2 py-0.5 rounded text-[11px] backdrop-blur-sm text-slate-200">
              {product.specs.origin.split(',')[0]}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="font-heading font-bold text-lg text-navy-900 dark:text-white group-hover:text-forest-600 dark:group-hover:text-emerald-400 transition-colors">
              {product.title}
            </h3>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3.5 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Key Feature Bullets */}
          <div className="space-y-1.5 mb-4">
            {product.features.slice(0, 2).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 dark:text-emerald-400 shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>

          {/* Quick Specification Tags */}
          <div className="pt-2 border-t border-slate-100 dark:border-navy-800 flex flex-wrap gap-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-300">
            <span className="bg-slate-100 dark:bg-navy-800 px-2 py-0.5 rounded">
              {product.specs.containerCapacity.fcl20ft.split(' ')[0]} {product.specs.containerCapacity.fcl20ft.split(' ')[1] || 'FCL'}
            </span>
            <span className="bg-slate-100 dark:bg-navy-800 px-2 py-0.5 rounded">
              {product.specs.shelfLife.split(' ')[0]} {product.specs.shelfLife.split(' ')[1]} Shelf Life
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2">
        <button
          onClick={() => onViewDetails(product)}
          className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-200 text-xs font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-slate-200 dark:border-navy-700"
        >
          <Info className="w-3.5 h-3.5" />
          <span>Specifications</span>
        </button>

        <Button
          variant="primary"
          size="sm"
          onClick={() => onOpenRFQ(product.title)}
          icon={<Mail className="w-3.5 h-3.5" />}
          className="text-xs py-2"
        >
          Send Inquiry
        </Button>
      </div>
    </TiltSurface>
  );
};
