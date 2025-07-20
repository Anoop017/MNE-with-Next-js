"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

export function useActiveSection(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeSection, setActiveSection] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    const y = window.scrollY;
    // Prioritize the entry that is closest to the top of the viewport and currently intersecting
    const intersectingEntries = entries.filter(e => e.isIntersecting);

    if (intersectingEntries.length > 0) {
      const bestEntry = intersectingEntries.reduce((prev, current) => {
        // Use getBoundingClientRect for more accurate positioning relative to the viewport
        const prevRect = document.getElementById(prev.target.id)?.getBoundingClientRect();
        const currentRect = document.getElementById(current.target.id)?.getBoundingClientRect();
        
        if (!prevRect) return current;
        if (!currentRect) return prev;
        
        // Closer to the top of the viewport (or less negative) is better
        return Math.abs(currentRect.top) < Math.abs(prevRect.top) ? current : prev;
      });
      setActiveSection(bestEntry.target.id);
    } else if (y < 200) {
      // If nothing is intersecting (e.g., at the very top or bottom), default to 'home' if near the top
      setActiveSection('home');
    }
  }, []);

  useEffect(() => {
    // A less aggressive rootMargin makes section transitions feel more natural.
    // This makes the active section highlight when it's closer to the center of the screen.
    observer.current = new IntersectionObserver(observerCallback, options || {
      rootMargin: `0% 0px -50% 0px`,
      threshold: 0,
    });

    const currentObserver = observer.current;

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        currentObserver.observe(el);
      }
    });

    // Set initial active section on page load
    if (window.scrollY < 200) {
      setActiveSection('home');
    }


    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          currentObserver.unobserve(el);
        }
      });
    };
  }, [sectionIds, options, observerCallback]);

  return activeSection;
}
