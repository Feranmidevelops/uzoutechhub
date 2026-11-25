import { useEffect, useRef, useState } from 'react';

// Reports when an element first scrolls into view, then stops watching.
// The huge top margin counts anything already scrolled past as seen, so a
// section skipped between two frames (an anchor jump, a fast flick, a busy
// phone) still appears instead of staying hidden.
export const useInView = ({ threshold = 0.15, rootMargin = '100000px 0px -8% 0px' } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
};
