import React from 'react';
import { MapPin, ShieldCheck, PhoneCall, MessageSquare, Anchor } from 'lucide-react';

export const TopTradeBar: React.FC = () => {
  return (
    <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-850/80 relative z-40">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2">
        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          <span className="flex items-center gap-1.5 text-slate-200 font-medium">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            Origin: India &bull; JNPT, Mundra, Chennai &amp; Vizag
          </span>
          <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            APEDA &amp; Spices Board Accredited Sourcing
          </span>
          <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Anchor className="w-3.5 h-3.5 text-cyan-400" />
            Containerized FCL / LCL &amp; Reefer Freight
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-5 text-xs">
          <a
            href="tel:+918331851746"
            className="hover:text-white flex items-center gap-1.5 transition-colors font-medium"
            title="Direct Phone Line"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>+91 8331851746</span>
          </a>
          <a
            href="https://wa.me/918331851746?text=Hello%20ABC%20EXPORTS,%20I%20am%20interested%20in%20discussing%20an%20agricultural%20export%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 flex items-center gap-1.5 transition-colors text-slate-300 font-medium"
            title="Connect on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
};
