import { useEffect, useRef, useState, type ReactNode } from 'react';

/** Load below-the-fold form code shortly before it enters the viewport. */
export function Deferred({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(() => !('IntersectionObserver' in window));
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setReady(true); observer.disconnect(); }
    }, { rootMargin: '600px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="min-h-[560px]">{ready ? children : <p className="text-sm text-slate-500 dark:text-slate-400">Quotation form available below</p>}</div>;
}
