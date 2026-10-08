import { m, useReducedMotion } from 'framer-motion';

export function CargoDepth({ count }: { count: number }) {
  const reduced = useReducedMotion();
  return <div className="cargo-depth" aria-hidden="true">
    {Array.from({ length: Math.min(count, 8) }, (_, index) => <m.div key={index} className="cargo-depth-unit"
      initial={reduced ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.3, delay: reduced ? 0 : index * 0.045 }}>
      <div className="cargo-front" /><div className="cargo-top" /><div className="cargo-side" />
    </m.div>)}
    {count > 8 && <span>+{count - 8}</span>}
  </div>;
}
