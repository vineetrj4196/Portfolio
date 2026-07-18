"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element once it scrolls into view (mirrors the old
 * IntersectionObserver-based scroll-reveal). Fires once, then disconnects.
 * Respects prefers-reduced-motion by reporting "in view" immediately.
 */
export function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Client-only capability check (matchMedia/IntersectionObserver aren't
    // available during SSR, so this can't be computed during render).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
