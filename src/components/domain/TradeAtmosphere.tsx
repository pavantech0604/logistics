import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const routes = [
  { path: 'M720 390 Q930 90 1260 190', duration: '18s', delay: '0s' },
  { path: 'M720 390 Q580 170 350 240', duration: '24s', delay: '-8s' },
  { path: 'M720 390 Q960 600 1320 470', duration: '22s', delay: '-12s' },
];

/** Decorative trade routes pause offscreen and respect reduced motion. */
export function TradeAtmosphere() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting));
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="trade-atmosphere" aria-hidden="true">
    <div className={`trade-aura${active && !reduced ? ' is-moving' : ''}`} />
    <svg viewBox="0 0 1440 720" preserveAspectRatio="xMidYMid slice" focusable="false">
      <g className="trade-contours" fill="none">
        <ellipse cx="1060" cy="340" rx="410" ry="250" />
        <ellipse cx="1060" cy="340" rx="340" ry="250" />
        <ellipse cx="1060" cy="340" rx="210" ry="250" />
        <path d="M650 340H1440M705 215Q1060 275 1415 215M705 465Q1060 405 1415 465" />
      </g>
      {routes.map((route, i) => <g key={route.path}>
        <path className="trade-route-track" d={route.path} fill="none" />
        <path className="trade-route-line" d={route.path} fill="none" />
        <g className="trade-vessel" transform={!active || reduced ? `translate(${[1260,350,1320][i]} ${[190,240,470][i]})` : undefined}>
          {active && !reduced && <animateMotion dur={route.duration} begin={route.delay} repeatCount="indefinite" path={route.path} rotate="auto" />}
          <circle r="19" className="trade-vessel-halo" />
          <path d="M-12 3H13L8 10H-7Z M-8-5H-1V2H-8Z M1-5H8V2H1Z M-3-11H3V-6H-3Z" />
        </g>
      </g>)}
      {[[720,390],[1260,190],[350,240],[1320,470]].map(([x,y],i) => <g key={i} transform={`translate(${x} ${y})`}>
        <circle r="12" className="trade-hub-ring" /><circle r="4" className="trade-hub" />
      </g>)}
      <g className="trade-harbor" transform="translate(1040 635)" fill="none">
        <path d="M-100 25H200M-75 25V-12H10V25M-65-12V-30H-10L10-12M65 25V-80H72L145-110H190M72-80H170V-42M163-42H178M90 25V-10H155V25M102-10V-24H142V-10" />
        <path d="M-95 40Q-60 32-25 40T45 40T115 40T185 40" />
      </g>
    </svg>
  </div>;
}
