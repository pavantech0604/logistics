import React from 'react';
import { ContactForm } from '../components/domain/ContactForm';
import { Phone, MessageSquare, MapPin, Mail, Clock, HelpCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const ContactPage: React.FC = () => {
  const faqs = [
    {
      q: 'What are your standard export payment terms?',
      a: 'We accommodate 100% Irrevocable Letter of Credit (LC at Sight) from prime international banks, Telegraphic Transfer (TT with 30% advance and 70% against BL draft copies), or CAD (Cash Against Documents).',
    },
    {
      q: 'Can you provide private label packaging with our company branding?',
      a: 'Yes, we provide full OEM private labeling. We print customized multi-color PP bags, non-woven sacks, corrugated telescopic boxes, and retail vacuum pouches according to your artwork and barcode specifications.',
    },
    {
      q: 'Do you arrange independent third-party inspection prior to stuffing?',
      a: 'Yes. We routinely arrange SGS, Bureau Veritas, or Eurofins inspection teams to draw representative crop samples, inspect weights, witness container loading, and affix security seals.',
    },
    {
      q: 'How fast can a container be dispatched upon contract signing?',
      a: 'Standard commodities (Rice, Spices, Garlic, Onions) typically gate-in at JNPT or Mundra port within 5 to 8 business days following packaging finalization and advance/LC receipt.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-navy-800 pb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          International Trade Desk
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-navy-900 dark:text-white tracking-tight">
          Your next shipment starts here.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Connect directly with our international export managers. All formal RFQs are attended to with current crop specifications and container sailing options within 24 hours.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Contact Details & Direct Lines */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-extrabold text-navy-900 dark:text-white">
              Official Communication Channels
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              For urgent container bookings, vessel schedules, or crop pricing quotes, reach us directly via telephone or our dedicated WhatsApp Business desk.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-forest-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Direct Trade Telephone</p>
                <a href="tel:+918331851746" className="text-lg font-bold text-navy-900 dark:text-white hover:text-emerald-500 transition">
                  +91 8331851746
                </a>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">International calling &amp; voice inquiries</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-forest-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">WhatsApp Business Desk</p>
                <a
                  href="https://wa.me/918331851746?text=Hello%20ABC%20EXPORTS,%20I%20am%20interested%20in%20discussing%20an%20export%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-navy-900 dark:text-white hover:text-emerald-500 transition"
                >
                  Connect on WhatsApp (+91 8331851746)
                </a>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Instant response for overseas buyers</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Formal Inquiries Email</p>
                <p className="text-base font-bold text-navy-900 dark:text-white">exports@abcexports.com</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Purchase orders &amp; spec submissions</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Headquarters &amp; Origin Country</p>
                <p className="text-sm font-bold text-navy-900 dark:text-white">ABC EXPORTS &bull; India</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Export clearances via JNPT (Nhava Sheva), Mundra, Chennai &amp; Visakhapatnam Port
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-3">
            <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>
              <strong>Guaranteed 24-Hour Turnaround:</strong> All buyer inquiries are attended to with verified commodity specifications and CIF quotation parameters.
            </span>
          </div>
        </div>

        {/* Contact & RFQ Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>

      {/* Buyer FAQ Section */}
      <div className="pt-8 border-t border-slate-200 dark:border-navy-800 space-y-6">
        <div>
          <h2 className="text-2xl font-heading font-extrabold text-navy-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-500" />
            Frequently Asked Buyer Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Common questions regarding payment terms, sample dispatches, and container handling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="p-6">
              <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white mb-2">
                {faq.q}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {faq.a}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
