import { Reveal } from '../ui/Motion';
import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, COMMODITY_CATEGORIES } from '../../data/productsData';
import { ProductItem, ProductCategory } from '../../types';
import { ProductCard } from './ProductCard';
import { Search, PackageX } from 'lucide-react';

interface ProductCatalogProps {
  onOpenRFQ: (productName: string) => void;
  onViewDetails: (product: ProductItem) => void;
  initialCategory?: ProductCategory;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenRFQ,
  onViewDetails,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'popular'>('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
        product.specs.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'popular') return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="space-y-8">
      {/* Category Pills & Filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Category Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {COMMODITY_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                aria-pressed={isActive}
                onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-navy-900 dark:bg-emerald-600 text-white shadow-sm'
                    : 'bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-800 hover:border-slate-400'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              aria-label="Search commodities"
              placeholder="Search rice, ginger, spices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
            />
            {searchQuery && (
              <button
                aria-label="Clear search"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                &times;
              </button>
            )}
          </div>

          {/* Sort dropdown */}
          <select
            aria-label="Sort commodities"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs px-3 py-2.5 rounded-xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none"
          >
            <option value="featured">Featured First</option>
            <option value="popular">High Demand First</option>
            <option value="name">Alphabetical (A-Z)</option>
          </select>
        </div>

      </div>

      {/* Result Count and Active Filters Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>
          Showing <strong className="text-slate-900 dark:text-white">{filteredProducts.length}</strong> export commodities
        </span>
        {searchQuery && (
          <span>
            Filtered by keyword: <em className="text-forest-600 font-medium">"{searchQuery}"</em>
          </span>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Reveal hover key={product.id} delay={Math.min(index, 3) * 0.06} className="h-full"><ProductCard
              product={product}
              onOpenRFQ={onOpenRFQ}
              onViewDetails={onViewDetails}
            /></Reveal>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-white dark:bg-navy-900 rounded-2xl border border-dashed border-slate-300 dark:border-navy-800 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-navy-800 text-slate-400 mx-auto flex items-center justify-center">
            <PackageX className="w-6 h-6" />
          </div>
          <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white">
            No commodities matching "{searchQuery}"
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Try adjusting your search terms or view our custom sourcing program for bespoke procurement across India.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs font-semibold text-forest-600 dark:text-emerald-400 hover:underline pt-2 inline-block"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
