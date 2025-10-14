import { useEffect, useState, useRef } from 'react';

export default function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (options.once) observer.unobserve(node);
          } else if (!options.once) {
            setIsInView(false);
          }
        });
      },
      { threshold: options.threshold || 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, options.once, options.threshold]);

  return [ref, isInView];
}
