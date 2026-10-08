import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCatalog } from '../components/domain/ProductCatalog';
import { ProductItem, ProductCategory } from '../types';
import { Award, PackageCheck, Shield } from 'lucide-react';

interface ProductsPageProps {
  openRFQ: (productName?: string) => void;
  openProductDetails: (product: ProductItem) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  openRFQ,
  openProductDetails,
}) => {
  const [searchParams] = useSearchParams();
  const categoryParam = (searchParams.get('category') as ProductCategory) || 'all';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="border-b border-slate-200 dark:border-navy-800 pb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 mb-3">
          <Award className="w-3.5 h-3.5" />
          Export Catalog &bull; Sourced from India
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-navy-900 dark:text-white tracking-tight">
          Export commodities &amp; products
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Premium agricultural produce, spices, staples, and fresh commodities processed under strict quarantine standards for ocean and air containerized freight.
        </p>

        <div className="flex flex-wrap gap-6 mt-6 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <PackageCheck className="w-4 h-4 text-emerald-500" />
            20ft &amp; 40ft High Cube Container Loading
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-amber-500" />
            Phytosanitary &amp; Lab Test Certified
          </span>
        </div>
      </div>

      {/* Main Catalog with URL category handling */}
      <ProductCatalog
        key={categoryParam}
        initialCategory={categoryParam}
        onOpenRFQ={openRFQ}
        onViewDetails={openProductDetails}
      />
    </div>
  );
};
