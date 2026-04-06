import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          // Reveal once, then stop observing to prevent flicker near viewport edges.
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        });
      },
      {
        // Slight root margin avoids rapid toggling when only a sliver is visible.
        rootMargin: '0px 0px -5% 0px',
        threshold: 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
