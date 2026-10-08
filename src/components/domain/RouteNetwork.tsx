import { TiltSurface } from '../ui/Depth';
import { useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { GLOBAL_SHIPPING_CORRIDORS } from '../../data/portsData';
const points = [{ x: 490, y: 190, label: 'GCC' }, { x: 422, y: 104, label: 'Europe' }, { x: 636, y: 237, label: 'SE Asia' }, { x: 465, y: 177, label: 'Saudi Arabia' }, { x: 210, y: 134, label: 'North America' }];
export function RouteNetwork() {
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const corridor = GLOBAL_SHIPPING_CORRIDORS[selected];
  const point = points[selected];
  return <div className="space-y-6">
    <TiltSurface className="route-network">
      <div className="px-6 pt-6 flex flex-wrap justify-between gap-3"><p className="text-xs uppercase tracking-widest text-teal-200">India → Global corridors</p><span className="text-xs text-slate-300">Schematic route overview</span></div>
      <svg viewBox="0 0 850 340" role="img" aria-label={`Schematic shipping route from India to ${corridor.destinationRegion}`}>
        <defs><pattern id="map-grid" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#8ca8d0" opacity=".35"/></pattern></defs>
        <rect width="850" height="340" fill="url(#map-grid)"/>
        <g fill="var(--map-land)" stroke="var(--map-edge)" strokeWidth="1"><path d="M108 89 145 60 224 53 274 78 288 101 249 123 231 156 191 169 171 145 128 151 103 127Z"/><path d="M209 178 254 190 280 239 257 281 237 305 213 263 197 224Z"/><path d="M374 108 412 72 470 80 483 115 447 138 415 135Z"/><path d="M393 146 443 139 482 176 468 231 437 261 412 221 388 181Z"/><path d="M476 81 566 55 685 79 730 134 684 167 626 165 610 206 571 177 553 226 524 203 502 160 466 138Z"/><path d="M665 251 721 241 749 275 718 302 675 295Z"/></g>
        <path d={`M553 202 Q${(553+point.x)/2} ${Math.min(202,point.y)-90} ${point.x} ${point.y}`} stroke="var(--map-edge)" strokeWidth="3" fill="none"/>
        <m.path key={selected} d={`M553 202 Q${(553+point.x)/2} ${Math.min(202,point.y)-90} ${point.x} ${point.y}`} stroke="var(--map-line)" strokeWidth="2.5" fill="none" initial={reduced?false:{pathLength:0}} animate={{pathLength:1}} transition={{duration:reduced?0:0.65}}/>
        {points.map((p,i)=><g key={p.label}><circle cx={p.x} cy={p.y} r={i===selected?6:4} fill={i===selected?'var(--map-line)':'#87a3c7'}/><text x={p.x} y={p.y-14} fill={i===selected?'var(--map-active)':'var(--map-label)'} fontSize="11" textAnchor="middle">{p.label}</text></g>)}
        <circle cx="553" cy="202" r="6" fill="var(--map-line)"/><circle cx="553" cy="202" r="14" fill="none" stroke="var(--map-line)" opacity=".4"/><text x="554" y="240" fill="var(--map-active)" fontSize="12" textAnchor="middle">INDIA</text>
      </svg>
      <div className="route-summary" aria-live="polite"><strong>{corridor.originPort} → {corridor.destinationPort}</strong><span className="text-amber-200">Estimated sea transit · {corridor.transitDaysSea}</span></div>
    </TiltSurface>
    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900">
      <table className="corridor-table"><caption className="sr-only">Select a shipping corridor to inspect its schematic route and transit estimate</caption><thead><tr><th scope="col">Destination corridor</th><th scope="col">Origin gateway</th><th scope="col">Sea transit</th><th scope="col">Cargo focus</th></tr></thead><tbody>{GLOBAL_SHIPPING_CORRIDORS.map((c,i)=><tr key={c.destinationRegion} aria-selected={i===selected}><td><button aria-pressed={i===selected} onClick={()=>setSelected(i)}>{c.destinationRegion}<span className="block text-xs text-slate-500 dark:text-slate-400 font-normal mt-1">{c.destinationPort}</span></button></td><td>{c.originPort}</td><td className="whitespace-nowrap font-mono">{c.transitDaysSea}</td><td>{c.commonCargo.slice(0,2).join(' · ')}</td></tr>)}</tbody></table>
    </div>
  </div>;
}
