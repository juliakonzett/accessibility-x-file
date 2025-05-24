'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUpOnView(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { ref, count };
}

export default function KpiTeaser() {
  const stats = [
    { label: 'Zufriedene Kund*innen', value: 1250 },
    { label: 'Projekte abgeschlossen', value: 340 },
    { label: 'Jahre Erfahrung', value: 15 },
  ];

  return (
    <div
      id='kpiWrapper'
      className='py-12 px-4 text-center border-black rounded-xl shadow custom-focus'>
      <h2 className='text-3xl font-bold mb-10'>Unsere Erfolge</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {stats.map((stat, index) => {
          const { ref, count } = useCountUpOnView(stat.value);
          return (
            <div key={index} ref={ref} className='flex flex-col items-center'>
              <p id='kpiLabelTitle' className='text-5xl font-extrabold'>
                {count}
              </p>
              <p id='kpiLabel' className='mt-2 text-lg font-medium'>
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
