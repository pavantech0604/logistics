import React, { lazy, Suspense } from 'react';
import { MotionProvider } from './components/ui/Motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from './components/ui/Toast';
import { AppShell } from './components/layout/AppShell';
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(module => ({ default: module.ProductsPage })));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage').then(module => ({ default: module.CalculatorPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then(module => ({ default: module.ProcessPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <MotionProvider><QueryClientProvider client={queryClient}>
      <ToastProvider>
        <BrowserRouter>
          <AppShell>
            {({ openRFQ, openProductDetails }) => (
              <Suspense fallback={<div className="p-12 text-center" role="status">Loading trade workspace…</div>}><Routes>
                <Route
                  path="/"
                  element={
                    <HomePage
                      openRFQ={openRFQ}
                      openProductDetails={openProductDetails}
                    />
                  }
                />
                <Route
                  path="/products"
                  element={
                    <ProductsPage
                      openRFQ={openRFQ}
                      openProductDetails={openProductDetails}
                    />
                  }
                />
                <Route
                  path="/calculator"
                  element={<CalculatorPage openRFQ={openRFQ} />}
                />
                <Route
                  path="/process"
                  element={<ProcessPage openRFQ={openRFQ} />}
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes></Suspense>
            )}
          </AppShell>
        </BrowserRouter>
      </ToastProvider>
    </QueryClientProvider></MotionProvider>
  );
};

export default App;
