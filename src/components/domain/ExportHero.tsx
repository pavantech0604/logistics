import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, MoveUpRight } from 'lucide-react';
import { INDIAN_ORIGIN_PORTS, GLOBAL_SHIPPING_CORRIDORS } from '../../data/portsData';
import { PRODUCTS_DATA } from '../../data/productsData';
import { TradeAtmosphere } from './TradeAtmosphere';
const LogisticsScene = lazy(() => import('./LogisticsScene'));

export function ExportHero({ openRFQ }: { openRFQ: () => void }) {
  const reduced = useReducedMotion();
  return <section className="export-hero" aria-labelledby="export-hero-title">
    <TradeAtmosphere />
    <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
    <div className="hero-editorial max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="hero-overline"><span>INDIA, CONNECTED TO THE WORLD</span><span>ABC / INTERNATIONAL TRADE</span></div>
      <div className="hero-composition">
        <div className="hero-copy">
          <p className="hero-index"><span /> Sourcing with purpose. Shipping with precision.</p>
          <h1 id="export-hero-title">Good produce.<br /><m.span initial={reduced?false:{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:0.7,delay:reduced?0:0.15}}>Great journeys.</m.span></h1>
          <p className="hero-description">From India’s growing belts to your destination port. A considered approach to agricultural sourcing, export-ready packing, and global freight.</p>
          <div className="hero-actions"><button onClick={openRFQ} className="hero-quote">Plan your next shipment <ArrowUpRight size={20}/></button><Link to="/products">Explore the portfolio <MoveUpRight size={17}/></Link></div>
          <div className="hero-bottom-note"><span>QUALITY AT ORIGIN.<br />CONFIDENCE AT EVERY MILESTONE.</span><Link to="/calculator" aria-label="Open freight estimator"><ArrowDown size={18}/><span>Calculate your cargo</span></Link></div>
        </div>
        <Suspense fallback={<div className="terminal-loading" role="status">Preparing your export terminal…</div>}><LogisticsScene /></Suspense>
      </div>
      <div className="trade-facts"><div><strong>{String(INDIAN_ORIGIN_PORTS.length).padStart(2,'0')}</strong><span>Indian origin<br />gateways</span></div><div><strong>{String(PRODUCTS_DATA.length).padStart(2,'0')}</strong><span>Export commodities<br />in our portfolio</span></div><div><strong>{String(GLOBAL_SHIPPING_CORRIDORS.length).padStart(2,'0')}</strong><span>Established global<br />corridors</span></div><Link to="/process"><span>A clear path from<br />farm gate to port.</span><ArrowUpRight size={28}/></Link></div>
    </div>
  </section>;
}
