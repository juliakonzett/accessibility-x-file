'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    isVisible && (
      <div
        role='button'
        tabIndex={0}
        aria-label='Zurück zum Seitenanfang'
        onClick={scrollToTop}
        onKeyDown={handleKeyDown}
        className='back-to-top custom-focus hover:cursor-pointer hover:border-4 hover:border-black fixed bottom-6 right-6 z-50 flex items-center gap-2 p-4 bg-[#a9dced] text-black rounded-full'>
        <Image
          src='/arrow-up-circle-svgrepo-com.svg'
          alt=''
          width={24}
          height={24}
          className='min-w-[24px]'
        />
        <span className='text-sm font-medium leading-none'>
          Zurück zum Anfang
        </span>
      </div>
    )
  );
}
