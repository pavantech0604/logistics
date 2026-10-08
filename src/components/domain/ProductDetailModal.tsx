import React from 'react';
import { ProductItem } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Package, Shield, Container, CheckCircle, ArrowRight } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenRFQ: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onOpenRFQ,
}) => {
  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={product.title}
      subtitle={product.tagline}
      badge={product.badge}
      maxWidth="2xl"
    >
      <div className="space-y-6 text-slate-800 dark:text-slate-200">
        {/* Hero banner preview */}
        <div className="relative h-60 rounded-xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-sm">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-4">
            <div className="text-white text-xs">
              <span className="font-semibold text-emerald-400 uppercase tracking-wide">Category:</span> {product.categoryLabel} &bull; <span className="font-semibold text-amber-400">Origin:</span> {product.specs.origin}
            </div>
          </div>
        </div>

        {/* Narrative Description */}
        <div>
          <h4 className="font-heading font-bold text-sm text-navy-900 dark:text-white uppercase tracking-wider mb-2">
            Overview &amp; Export Grade
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {product.fullDescription}
          </p>
        </div>

        {/* Technical Specification Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-forest-700 dark:text-emerald-400 flex items-center gap-1.5">
              <Package className="w-4 h-4" />
              Grading &amp; Packaging
            </h5>
            <div className="text-xs space-y-1.5 text-slate-600 dark:text-slate-300">
              <p><strong className="text-slate-900 dark:text-white">Quality Grade:</strong> {product.specs.grade || 'Export Standard A'}</p>
              {product.specs.moistureMax && (
                <p><strong className="text-slate-900 dark:text-white">Max Moisture:</strong> {product.specs.moistureMax}</p>
              )}
              <p><strong className="text-slate-900 dark:text-white">Shelf Life:</strong> {product.specs.shelfLife}</p>
              <div className="pt-1">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">Standard Packaging:</span>
                <ul className="list-disc pl-4 space-y-0.5">
                  {product.specs.packaging.map((pack, i) => (
                    <li key={i}>{pack}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-forest-700 dark:text-emerald-400 flex items-center gap-1.5">
              <Container className="w-4 h-4" />
              Logistics &amp; Stuffing
            </h5>
            <div className="text-xs space-y-1.5 text-slate-600 dark:text-slate-300">
              <p><strong className="text-slate-900 dark:text-white">20ft FCL Loading:</strong> {product.specs.containerCapacity.fcl20ft}</p>
              <p><strong className="text-slate-900 dark:text-white">40ft FCL Loading:</strong> {product.specs.containerCapacity.fcl40ft}</p>
              {product.specs.temperatureControl && (
                <p><strong className="text-slate-900 dark:text-white">Thermal Parameters:</strong> {product.specs.temperatureControl}</p>
              )}
              {product.specs.harvestSeason && (
                <p><strong className="text-slate-900 dark:text-white">Harvest / Season:</strong> {product.specs.harvestSeason}</p>
              )}
            </div>
          </div>
        </div>

        {/* Certifications Badge Row */}
        <div>
          <h5 className="font-heading font-bold text-xs text-navy-900 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-amber-500" />
            Accreditations &amp; Testing Conformity
          </h5>
          <div className="flex flex-wrap gap-2">
            {product.specs.certifications.map((cert, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Dialog Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            FOB (Nhava Sheva/Mundra/Chennai) and CIF world port quotations available.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 rounded-lg transition"
            >
              Close
            </button>
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                onClose();
                onOpenRFQ(product.title);
              }}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto text-xs"
            >
              Request Quote for {product.title}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
