import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Mail, Shield, CheckCircle, FileText } from 'lucide-react';
import logoHorizontal from '../../assets/logo-horizontal.svg';
import { COMPANY } from '../../config/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-400 text-sm border-t border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Bio */}
          <div className="space-y-4">
            <Link to="/" className="footer-brand" aria-label={COMPANY.legalName} title={COMPANY.legalName}>
              <img src={logoHorizontal} alt={COMPANY.legalName} width="1205" height="260" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              International Trading &amp; Export Company connecting certified Indian agricultural commodities, fresh produce, and spices to global importers, retail chains, and wholesale distributors.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-navy-900 border border-slate-800 text-slate-300 font-mono text-[11px]">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                APEDA Registered
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-navy-900 border border-slate-800 text-slate-300 font-mono text-[11px]">
                <Shield className="w-3 h-3 text-amber-400" />
                Spices Board Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-emerald-400 transition">Home Overview</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition">Export Product Portfolio</Link></li>
              <li><Link to="/calculator" className="hover:text-emerald-400 transition">Container Freight Estimator</Link></li>
              <li><Link to="/process" className="hover:text-emerald-400 transition">5-Step Export Protocol</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition">About Our Sourcing Hubs</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition">Request for Quotation (RFQ)</Link></li>
            </ul>
          </div>

          {/* Major Export Lines */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
              Export Commodities
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/products?category=spices-staples" className="hover:text-emerald-400 transition">Indian Basmati &amp; Non-Basmati Rice</Link></li>
              <li><Link to="/products?category=banana" className="hover:text-emerald-400 transition">G9 Cavendish Bananas &amp; Vacuum Chips</Link></li>
              <li><Link to="/products?category=fresh-produce" className="hover:text-emerald-400 transition">Cured Indian Garlic &amp; Nashik Red Onions</Link></li>
              <li><Link to="/products?category=fresh-produce" className="hover:text-emerald-400 transition">Washed Fresh &amp; Sun-Dried Split Ginger</Link></li>
              <li><Link to="/products?category=spices-staples" className="hover:text-emerald-400 transition">Whole Spices: Turmeric, Chili, Cumin</Link></li>
              <li><Link to="/products?category=custom" className="hover:text-emerald-400 transition">Contract Farming &amp; Private Label Sourcing</Link></li>
            </ul>
          </div>

          {/* Official Contact & Corporate Desk */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
              Corporate &amp; Trade Desk
            </h4>
            <div className="text-xs space-y-3 text-slate-300">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-white font-medium">
                  {COMPANY.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={COMPANY.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium"
                >
                  WhatsApp Business Desk
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white font-medium">
                  {COMPANY.email}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  <strong className="text-slate-200 block">Registered Office:</strong>
                  {COMPANY.formattedAddress}
                </span>
              </p>
              <p className="flex items-center gap-2.5 text-[11px] text-slate-400">
                <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                <span>CIN: <strong className="text-slate-200 font-mono">{COMPANY.cin}</strong></span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-navy-850 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            {COMPANY.copyrightText}
          </p>
          <p className="flex items-center gap-3">
            <span>CIN: {COMPANY.cin}</span>
            <span>&bull;</span>
            <span>Export Compliance</span>
            <span>&bull;</span>
            <span>Phytosanitary Certified</span>
            <span>&bull;</span>
            <span>Global Container Freight</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
