import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On every navigation (including a link to the page you're already on),
// scroll to the #section in the URL if there is one, otherwise to the top.
const ScrollManager = () => {
  const { key, hash } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [key, hash]);

  return null;
};

export default ScrollManager;
