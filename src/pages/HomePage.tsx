import React, { lazy, Suspense } from 'react';
import { Reveal } from '../components/ui/Motion';
import { Deferred } from '../components/ui/Deferred';
import { TrackingPreview } from '../components/domain/TrackingPreview';
import { ExportHero } from '../components/domain/ExportHero';
import { ProductItem, QuoteDefaults } from '../types';
import { ProductCatalog } from '../components/domain/ProductCatalog';
import { FreightCalculator } from '../components/domain/FreightCalculator';
import { ExportProcessTimeline } from '../components/domain/ExportProcessTimeline';
import { LogisticsCorridors } from '../components/domain/LogisticsCorridors';
import { QualityCertifications } from '../components/domain/QualityCertifications';
const ContactForm = lazy(() => import('../components/domain/ContactForm').then(module => ({ default: module.ContactForm })));
import { SectionObject, TiltSurface } from '../components/ui/Depth';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Shield, CheckCircle2, PackageCheck, Ship, Sparkles, PhoneForwarded, FileCheck, Box, Anchor, Globe2, Building2, Award, ArrowRight, MessageCircle } from 'lucide-react';

interface HomePageProps {
  openRFQ: (productName?: string, defaults?: QuoteDefaults) => void;
  openProductDetails: (product: ProductItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  openRFQ,
  openProductDetails,
}) => {
  return (
    <div className="home-page space-y-24">
      <ExportHero openRFQ={() => openRFQ()} />
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><TrackingPreview /></Reveal>



      {/* CORPORATE OVERVIEW / ABOUT SECTION */}
      <Reveal><section className="depth-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><SectionObject kind="origin" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              <Building2 className="w-3.5 h-3.5" />
              Corporate Overview
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-900 dark:text-white tracking-tight">
              Trade, with a personal touch.
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              ABC EXPORTS is an India-based export and international trading house focused on connecting verified agricultural commodities and fresh farm produce with international buyers. We build long-term business partnerships through consistent quality, transparent communication, and professional export logistics.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Operating with an international trade perspective, we bridge the gap between India's fertile agrarian belts and rigorous global import standards. From initial crop sampling to final customs container sealing, our operational protocols guarantee seamless trade execution for food processors, supermarkets, and wholesale distributors.
            </p>

            {/* Three Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 dark:text-white text-sm mb-1">Quality Focus</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Strict lab analysis &amp; phytosanitary inspection on every lot.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-3">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 dark:text-white text-sm mb-1">Global Business</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Direct container dispatches to Middle East, Europe &amp; Asia.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-3">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 dark:text-white text-sm mb-1">Export Ready</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Customized private labeling and moisture-controlled stuffing.</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-6">
            <div className="relative">
              <TiltSurface className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-navy-800">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                  alt="Warehouse packaging and quality inspection"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                      Trusted International Partner
                    </p>
                    <p className="text-lg font-heading font-bold">
                      Standardized Testing &amp; Export Documentation
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      Phytosanitary certification, Certificate of Origin, and container loading supervision ready.
                    </p>
                  </div>
                </div>
              </TiltSurface>

              {/* Floating Stat Badge */}
              <div className="absolute -top-4 -right-4 sm:top-6 sm:-left-6 bg-white dark:bg-navy-900 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-navy-800 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-600 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy-900 dark:text-white">100% Quality Assured</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Graded as per buyer specifications</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section></Reveal>

      {/* COMMODITY PORTFOLIO SECTION */}
      <Reveal><section id="products" className="depth-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><SectionObject kind="cargo" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 mb-3">
            <Award className="w-3.5 h-3.5" />
            Export Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-900 dark:text-white tracking-tight">
            The origin of great trade.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Agricultural commodities and fresh farm produce sourced from accredited Indian growing belts, machine sorted, graded, and packaged for worldwide ocean dispatch.
          </p>
        </div>

        {/* Product Catalog Component */}
        <ProductCatalog
          onOpenRFQ={openRFQ}
          onViewDetails={openProductDetails}
        />

        {/* Custom Sourcing Highlight Box */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 text-white p-8 md:p-10 border border-navy-800 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-navy-950/70 px-3 py-1 rounded-full border border-amber-500/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Tailored Sourcing Solutions
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight mb-3">
              Looking for a Specific Product from India?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Contact us to discuss your requirements. If you have custom packaging parameters, private label specifications, specific grade tolerances, or unique Indian commodity demands, our procurement team will structure a reliable supply pipeline.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => openRFQ('Custom Sourcing Product')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discuss Custom Requirements
              </Button>
              <a
                href="https://wa.me/918331851746?text=Hello%20ABC%20EXPORTS,%20I%20have%20a%20custom%20export%20sourcing%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-950/80 hover:bg-navy-950 border border-slate-700 text-slate-200 text-sm font-semibold px-5 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section></Reveal>

      {/* B2B CONTAINER & FREIGHT ESTIMATOR TOOL */}
      <Reveal><section className="depth-section bg-slate-100 dark:bg-navy-950 py-16 border-y border-slate-200 dark:border-navy-850"><SectionObject kind="freight" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 mb-3">
              <Ship className="w-3.5 h-3.5" />
              SaaS Logistics Tool
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-900 dark:text-white tracking-tight">
              Your cargo. Precisely planned.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
              Calculate container requirements, Reefer equipment parameters, and estimated maritime transit duration from India to your destination port.
            </p>
          </div>

          <FreightCalculator
            onOpenRFQWithParams={(product, tonnage, port) => {
              openRFQ(product, { quantity: String(tonnage), destinationPort: port });
            }}
          />
        </div>
      </section></Reveal>

      {/* 5-STEP OPERATIONAL EXPORT PROCESS */}
      <Reveal><section className="depth-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><SectionObject kind="process" />
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 mb-3">
            <Shield className="w-3.5 h-3.5" />
            Operational Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-900 dark:text-white tracking-tight">
            A journey you can follow.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            A disciplined 5-step export handling process designed to ensure complete transparency, documentation accuracy, and timely port dispatch.
          </p>
        </div>

        <ExportProcessTimeline onOpenRFQ={() => openRFQ()} />
      </section></Reveal>

      {/* WHY CHOOSE US & VALUE PROPOSITIONS */}
      <Reveal><section className="depth-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><SectionObject kind="assurance" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              <Award className="w-3.5 h-3.5" />
              Buyer Value Proposition
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-900 dark:text-white tracking-tight">
              Care in every detail.
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              In international agricultural trade, reliability is non-negotiable. Overseas importers partner with ABC EXPORTS for our transparent commercial conduct, strict lab verification, and timely ocean dispatch from premier Indian ports.
            </p>

            <div className="bg-white dark:bg-navy-900 p-5 rounded-2xl border border-slate-200 dark:border-navy-800 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-forest-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <PhoneForwarded className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Direct Export Trade Desk
                </p>
                <a
                  href="tel:+918331851746"
                  className="text-lg font-bold text-navy-900 dark:text-white hover:text-forest-600 dark:hover:text-emerald-400 transition"
                >
                  +91 8331851746
                </a>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Voice calls &amp; WhatsApp inquiries attended within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            <Card hoverEffect className="p-6">
              <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-bold text-navy-900 dark:text-white text-base mb-2">
                Verified Sourcing
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Direct connections with verified agricultural producers and certified grading centers across India to eliminate middlemen inflation.
              </p>
            </Card>

            <Card hoverEffect className="p-6">
              <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-heading font-bold text-navy-900 dark:text-white text-base mb-2">
                Export Documentation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Complete compliance: Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Commercial Invoices, and SGS / third-party inspection upon request.
              </p>
            </Card>

            <Card hoverEffect className="p-6">
              <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center mb-4">
                <Box className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="font-heading font-bold text-navy-900 dark:text-white text-base mb-2">
                Standardized Packaging
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Export-compliant packaging: ventilated corrugated boxes, vacuum pouches, PP woven bags, and moisture-controlled reefer container packing.
              </p>
            </Card>

            <Card hoverEffect className="p-6">
              <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center mb-4">
                <Anchor className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-heading font-bold text-navy-900 dark:text-white text-base mb-2">
                Timely Port Dispatch
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Coordinated shipping schedules with trusted freight forwarders operating out of JNPT, Mundra, Chennai, and Visakhapatnam sea ports.
              </p>
            </Card>

          </div>

        </div>
      </section></Reveal>

      {/* GLOBAL PORTS & LOGISTICS NETWORK */}
      <Reveal><section className="depth-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><SectionObject kind="network" />
        <LogisticsCorridors />
      </section></Reveal>

      {/* QUALITY & ACCREDITATIONS */}
      <Reveal><section className="depth-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><SectionObject kind="quality" />
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 mb-3">
            <Shield className="w-3.5 h-3.5" />
            Accreditations &amp; Testing
          </div>
          <h2 className="text-3xl font-heading font-extrabold text-navy-900 dark:text-white tracking-tight">
            Standards that travel with you.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
            Recognized standard compliance ensuring unhindered customs clearance across international borders.
          </p>
        </div>

        <QualityCertifications />
      </section></Reveal>

      {/* CONTACT & RFQ SECTION */}
      <Reveal><section id="contact" className="depth-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"><SectionObject kind="contact" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              <Globe2 className="w-3.5 h-3.5" />
              Direct Communication Desk
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-900 dark:text-white tracking-tight">
              Let’s move something great.
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              We welcome trade inquiries from international buyers, distributors, food processors, and trading houses. Reach out today for formal quotations, product specifications, and sample dispatch details.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-forest-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <PhoneForwarded className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">Telephone / Direct Line</p>
                  <a href="tel:+918331851746" className="text-base font-bold text-navy-900 dark:text-white hover:text-emerald-500 transition">
                    +91 8331851746
                  </a>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Official business inquiries (Voice &amp; WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-forest-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">Instant WhatsApp Chat</p>
                  <a
                    href="https://wa.me/918331851746?text=Hello%20ABC%20EXPORTS,%20I%20am%20interested%20in%20discussing%20an%20export%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-navy-900 dark:text-white hover:text-emerald-500 transition"
                  >
                    Connect on WhatsApp
                  </a>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Fast overseas response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
                <div className="w-10 h-10 rounded-lg bg-navy-100 dark:bg-navy-800 text-navy-900 dark:text-white flex items-center justify-center shrink-0">
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">Country of Origin</p>
                  <p className="text-sm font-bold text-navy-900 dark:text-white">India</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Major Port Clearances: JNPT, Mundra, Chennai, Visakhapatnam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Deferred><Suspense fallback={<p role="status">Loading quotation form…</p>}><ContactForm /></Suspense></Deferred>
          </div>

        </div>
      </section></Reveal>
    </div>
  );
};
