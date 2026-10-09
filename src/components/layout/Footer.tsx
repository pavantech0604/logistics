import logo from '../../assets/logo-restored.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Mail, Shield, CheckCircle } from 'lucide-react';

const currentYear = new Date().getFullYear();
export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-400 text-sm border-t border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Bio */}
          <div className="space-y-4">
            <Link to="/" className="footer-brand"><img src={logo} alt="Hind Legacy Logistics" width="2164" height="727" /></Link>
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

          {/* Official Contact Desk */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
              Direct Trade Desk
            </h4>
            <div className="text-xs space-y-3 text-slate-300">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+918331851746" className="hover:text-white font-medium">+91 8331851746</a>
              </p>
              <p className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/918331851746?text=Hello%20Hind%20Legacy%20Logistics,%20I%20am%20interested%20in%20discussing%20an%20export%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Business Desk
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="hover:text-white">Contact our trade desk</span>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Major Dispatch Hubs: JNPT (Mumbai), Mundra (Gujarat), Chennai &amp; Visakhapatnam</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-navy-850 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} Hind Legacy Logistics. All rights reserved. International Trading Company.
          </p>
          <p className="flex items-center gap-3">
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
