import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
const RFQModal = lazy(() => import('../domain/RFQModal').then(module => ({ default: module.RFQModal })));
const ProductDetailModal = lazy(() => import('../domain/ProductDetailModal').then(module => ({ default: module.ProductDetailModal })));
import { ProductItem, QuoteDefaults } from '../../types';
import { useLocation } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';
import { MessageSquare, ArrowUp } from 'lucide-react';

interface AppShellProps {
  children: (props: {
    openRFQ: (productName?: string, defaults?: QuoteDefaults) => void;
    openProductDetails: (product: ProductItem) => void;
  }) => React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const location = useLocation();
  const reduced = useReducedMotion();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const titles: Record<string, string> = { '/': 'Global agricultural trade', '/products': 'Export commodities', '/calculator': 'Freight estimator', '/process': 'Export process', '/about': 'About our sourcing network', '/contact': 'Contact and RFQ' };
    document.title = `${titles[location.pathname] || 'Page not found'} | Hind Legacy Logistics`;
  }, [location.pathname]);
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [targetProduct, setTargetProduct] = useState<string | undefined>(undefined);
  const [quoteDefaults, setQuoteDefaults] = useState<QuoteDefaults | undefined>();
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Theme mode management
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('abc_theme_v2') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('abc_theme_v2', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('abc_theme_v2', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openRFQ = (productName?: string, defaults?: QuoteDefaults) => {
    setTargetProduct(productName);
    setQuoteDefaults(defaults);
    setRfqModalOpen(true);
  };

  const openProductDetails = (product: ProductItem) => {
    setSelectedProduct(product);
    setDetailModalOpen(true);
  };

  return (
    <div className="showcase-shell min-h-screen flex flex-col bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <a href="#main-content" className="skip-link">Skip to content</a>

      {/* Main Sticky Navigation */}
      <Header
        onOpenRFQ={openRFQ}
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Page Content */}
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <m.div key={location.pathname} initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.25 }}>
          {children({ openRFQ, openProductDetails })}
        </m.div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global RFQ Modal */}
      {rfqModalOpen && <Suspense fallback={<div role="status" className="fixed inset-0 z-50 grid place-items-center bg-navy-950/80 text-white">Opening quotation form…</div>}><RFQModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        defaultProduct={targetProduct}
        quoteDefaults={quoteDefaults}
      /></Suspense>}

      {/* Global Product Detail Modal */}
      {detailModalOpen && <Suspense fallback={<div role="status" className="fixed inset-0 z-50 grid place-items-center bg-navy-950/80 text-white">Opening specifications…</div>}><ProductDetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        product={selectedProduct}
        onOpenRFQ={(name) => openRFQ(name)}
      /></Suspense>}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' })}
            aria-label="Scroll to top"
            className="p-3 rounded-full bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-700 dark:text-slate-200 shadow-lg hover:scale-110 transition-all duration-200"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Business Desk */}
        <a
          href="https://wa.me/918331851746?text=Hello%20Hind%20Legacy%20Logistics,%20I%20would%20like%20to%20discuss%20an%20export%20inquiry."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Trade Inquiry"
          title="WhatsApp Trade Desk"
          className="bg-emerald-600 hover:bg-emerald-700 text-white w-14 h-14 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center justify-center border border-emerald-500"
        >
          <MessageSquare className="w-6 h-6 shrink-0" />
        </a>
      </div>
    </div>
  );
};
