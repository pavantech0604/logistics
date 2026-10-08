import React from 'react';
import { LazyMotion, MotionConfig, m, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
const features = () => import('./motionFeatures').then(module => module.default);
export const MotionProvider = ({ children }: { children: React.ReactNode }) => <LazyMotion features={features} strict><MotionConfig reducedMotion="user" transition={{ duration: 0.32, ease: 'easeOut' }}>{children}</MotionConfig></LazyMotion>;
export const Reveal = ({ children, className, delay = 0, hover = false }: { children: React.ReactNode; className?: string; delay?: number; hover?: boolean }) => {
  const reduced = useReducedMotion();
  const x = useMotionValue(0), y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 150, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 150, damping: 24 });
  const reveal = !reduced && typeof IntersectionObserver !== 'undefined';
  return <m.div className={className} initial={reveal ? { opacity: 0, y: 16 } : false} animate={!reveal ? { opacity: 1, y: 0 } : undefined} whileInView={reveal ? { opacity: 1, y: 0 } : undefined} whileHover={hover && !reduced ? { y: -6 } : undefined} style={hover ? { rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY, transformPerspective: 1100 } : undefined} onPointerMove={event => { if (!hover || reduced || event.pointerType !== 'mouse') return; const rect = event.currentTarget.getBoundingClientRect(); x.set(((event.clientY - rect.top) / rect.height - 0.5) * -5); y.set(((event.clientX - rect.left) / rect.width - 0.5) * 5); }} onPointerLeave={() => { x.set(0); y.set(0); }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : delay }}>{children}</m.div>;
};
