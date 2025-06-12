import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (
  sectionIds: string[],
  options?: IntersectionObserverInit
) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, options);

    const { current: currentObserver } = observer;
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) currentObserver.observe(element);
    });

    return () => currentObserver.disconnect();
  }, [sectionIds, options]);

  return activeSection;
};