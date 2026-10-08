import { SectionObject } from '../ui/Depth';
import { useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { PackageCheck, Truck, Anchor, Ship, CheckCircle2 } from 'lucide-react';
const stages = [
  { title: 'Quality verified', detail: 'Crop specifications, grading, and packing reviewed before dispatch.', icon: PackageCheck },
  { title: 'Warehouse dispatch', detail: 'Export cargo packed and prepared for transfer to the origin port.', icon: Truck },
  { title: 'Port clearance', detail: 'Customs documentation and container gate-in before vessel loading.', icon: Anchor },
  { title: 'Ocean transit', detail: 'Container departs the origin gateway for the destination port.', icon: Ship },
  { title: 'Destination handover', detail: 'Arrival documents and import clearance support the final handover.', icon: CheckCircle2 },
];
export function TrackingPreview() {
  const [active, setActive] = useState(2);
  const reduced = useReducedMotion();
  return <section className="tracking-preview depth-section" aria-labelledby="tracking-heading">
    <SectionObject kind="process" /><div className="flex flex-wrap justify-between gap-4 mb-8"><div><p className="eyebrow">Shipment visibility</p><h2 id="tracking-heading" className="text-2xl sm:text-3xl font-heading font-bold mt-2">Every milestone. In perspective.</h2></div><span className="preview-label">Illustrative journey · no live shipment feed</span></div>
    <div className="tracking-steps">{stages.map((stage,i)=><button key={stage.title} aria-label={`0${i+1} ${stage.title}`} aria-pressed={active===i} aria-controls="tracking-detail" onClick={()=>setActive(i)} className={i===active?'selected':''}><span className="tracking-node"><stage.icon size={20}/></span><small>0{i+1}</small><strong>{stage.title}</strong></button>)}</div>
    <div className="tracking-detail" id="tracking-detail" aria-live="polite"><AnimatePresence mode="wait" initial={false}><m.div key={active} initial={reduced?false:{opacity:0,y:8,rotateX:-8}} animate={{opacity:1,y:0,rotateX:0}} exit={{opacity:0}} transition={{duration:reduced?0:0.18}}><span className="scene-dot"/><strong>{stages[active].title}</strong><p>{stages[active].detail}</p></m.div></AnimatePresence><button onClick={()=>setActive((active+1)%stages.length)}>Explore next milestone →</button></div>
  </section>;
}
