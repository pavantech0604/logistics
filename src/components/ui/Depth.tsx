import { useEffect, useRef, useState, type HTMLAttributes } from 'react';
import { m, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { Anchor, Box, Globe2, PackageCheck, ShieldCheck, Ship, Truck, Send } from 'lucide-react';

import { DEPTH_MOTION } from './depthMotionConfig';

export function TiltSurface({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0), y = useMotionValue(0);
  const rotateX = useSpring(x, DEPTH_MOTION), rotateY = useSpring(y, DEPTH_MOTION);
  const reset = () => { x.set(0); y.set(0); };
  return <div {...props} className={`depth-perspective ${className}`}>
    <m.div className="depth-surface" style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY, transformPerspective: DEPTH_MOTION.perspective }}
      onPointerMove={event => {
        if (reduced || event.pointerType !== 'mouse' || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((0.5 - (event.clientY - rect.top) / rect.height) * DEPTH_MOTION.tilt * 2);
        y.set(((event.clientX - rect.left) / rect.width - 0.5) * DEPTH_MOTION.tilt * 2);
      }} onPointerLeave={reset} onBlur={reset}>
      {children}
    </m.div>
  </div>;
}

const icons = { origin: Globe2, cargo: Box, freight: Truck, process: PackageCheck, assurance: ShieldCheck, network: Ship, quality: Anchor, contact: Send };
export type DepthKind = keyof typeof icons;

export function SectionObject({ kind }: { kind: DepthKind }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (reduced || typeof IntersectionObserver === 'undefined') return;
    let visible = false;
    const sync = () => setRunning(visible && document.visibilityState === 'visible');
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    if (ref.current) observer.observe(ref.current);
    document.addEventListener('visibilitychange', sync);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', sync); };
  }, [reduced]);
  const Icon = icons[kind];
  return <div ref={ref} aria-hidden="true" className={`section-object object-${kind}${running && !reduced ? ' is-running' : ''}`}>
    <div className="object-shadow" />
    <div className="object-orbit" />
    <div className="object-rig">
      <div className="object-face face-front"><Icon size={28} strokeWidth={1.4} /></div>
      <div className="object-face face-back" /><div className="object-face face-left" />
      <div className="object-face face-right" /><div className="object-face face-top" /><div className="object-face face-bottom" />
    </div>
  </div>;
}
