import { useRef, useEffect, useState } from 'react';

interface UseScrollIntoViewOptions {
  offset?: number;
  once?: boolean;
}

export function useScrollIntoView({ offset = 100, once = true }: UseScrollIntoViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasScrolledIn, setHasScrolledIn] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const isVisible = rect.top < windowHeight - offset && rect.bottom > offset;

          if (isVisible && !hasScrolledIn) {
            setHasScrolledIn(true);
          } else if (!isVisible && !once) {
            setHasScrolledIn(false);
          }

          // Progress: 0 when entering bottom, 1 when fully visible
          const raw = 1 - (rect.top - offset) / (windowHeight - offset * 2);
          setProgress(Math.max(0, Math.min(1, raw)));

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Check on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset, once, hasScrolledIn]);

  return { ref, hasScrolledIn, progress };
}
