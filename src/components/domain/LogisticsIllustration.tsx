import { m, useReducedMotion } from 'framer-motion';
export default function LogisticsScene() {
  const reduced = useReducedMotion();
  return <div className="logistics-scene">
    <div className="scene-caption"><span className="scene-dot" /> FARM → WAREHOUSE → WORLD <span>01 / EXPORT NETWORK</span></div>
    <svg viewBox="0 0 600 440" role="img" aria-labelledby="logistics-scene-title">
      <title id="logistics-scene-title">Isometric export warehouse, container truck, and shipping route</title>
      <defs><linearGradient id="ground" x2="1" y2="1"><stop stopColor="#a0bbd6"/><stop offset="1" stopColor="#6988aa"/></linearGradient><linearGradient id="cargo" x2="1" y2="1"><stop stopColor="#7eafe9"/><stop offset="1" stopColor="#3e79bd"/></linearGradient></defs>
      <ellipse cx="310" cy="345" rx="238" ry="65" fill="#03121d" opacity=".3" />
      <path d="M35 270 305 115 565 265 295 420Z" fill="url(#ground)" stroke="#385367" />
      {[0,1,2,3,4,5].map(i=><g key={i} stroke="#5d8191" opacity=".14"><path d={`M${65+i*40} ${287+i*23} l270 -155`} /><path d={`M${75+i*42} ${247-i*24} l260 150`} /></g>)}
      <path d="M100 285 280 390 510 258" stroke="#d2ae6e" strokeWidth="3" strokeDasharray="8 9" fill="none" />
      <g><path d="M135 170 265 95 385 164 255 240Z" fill="#dde8f4"/><path d="M135 170 255 240 255 320 135 250Z" fill="#95b1cf"/><path d="M255 240 385 164 385 246 255 320Z" fill="#678cb5"/><path d="M125 173 265 83 397 162 255 250Z" fill="#f6faff"/><path d="M265 83 265 107 397 184 397 162Z" fill="#a9c4e0"/>
      {[0,1,2].map(i=><g key={i}><path d={`M${273+i*35} ${247-i*20} l24 -14 v51 l-24 14Z`} fill="#0c2434" stroke="#6d94a5"/><path d={`M${275+i*35} ${252-i*20} l20 -12`} stroke="#4da69f"/></g>)}<path d="M151 196 230 241 230 261 151 217Z" fill="#b9d6ee"/><text x="155" y="147" fill="#eef8f6" fontSize="12" transform="rotate(-30 155 147)">HIND LEGACY / EXPORT HUB</text></g>
      <m.g initial={reduced ? false : { x: -25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: reduced ? 0 : 1, delay: reduced ? 0 : 0.2 }}>
        <path d="M285 300 373 250 467 304 379 355Z" fill="#071923" opacity=".5"/>
        <path d="M277 256 356 211 428 253 349 299Z" fill="#c1ddfa"/><path d="M277 256 349 299 349 348 277 305Z" fill="url(#cargo)"/><path d="M349 299 428 253 428 302 349 348Z" fill="#376faa"/>
        {[0,1,2,3,4,5].map(i=><path key={i} d={`M${286+i*10} ${264+i*6} v34`} stroke="#5288c4" opacity=".5"/>)}
        <path d="M349 348 428 302 456 319 378 365Z" fill="#243d4d"/><path d="M428 278 455 294 466 325 439 310Z" fill="#e0c28a"/><path d="M455 294 477 281 487 312 466 325Z" fill="#af8850"/><path d="M428 278 450 265 477 281 455 294Z" fill="#f5dfb6"/><path d="M459 298 475 289 481 308 465 317Z" fill="#163c50"/>
        {[{x:300,y:322},{x:339,y:346},{x:452,y:335},{x:475,y:322}].map((p,i)=><g key={i}><ellipse cx={p.x} cy={p.y} rx="9" ry="13" fill="#071521"/><ellipse cx={p.x} cy={p.y} rx="4" ry="6" fill="#a4b9be"/></g>)}
      </m.g>
      <g fill="#dcba7e"><path d="M108 281 135 265 163 281 135 297Z"/><path d="M108 281 135 297 135 321 108 305Z" fill="#b68a48"/><path d="M135 297 163 281 163 305 135 321Z" fill="#876839"/></g>
      <g fill="#7eafe9"><circle cx="100" cy="285" r="6"/><circle cx="510" cy="258" r="6"/><circle cx="510" cy="258" r="14" fill="none" stroke="#7eafe9" opacity=".4"/></g>
    </svg>
    <div className="scene-footer"><div><small>ORIGIN</small><strong>India’s sourcing belts</strong></div><div><small>FREIGHT</small><strong>FCL · LCL · Reefer</strong></div><span>↗</span></div>
  </div>;
}
