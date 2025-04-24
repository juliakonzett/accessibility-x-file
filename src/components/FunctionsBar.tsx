'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function FuncitonsBar() {
  const [isContrast, setIsContrast] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('highContrast') === 'true';
    setIsContrast(saved);
    document.body.classList.toggle('contrast', saved);
  }, []);

  const toggleContrast = () => {
    const newState = !isContrast;
    setIsContrast(newState);
    document.body.classList.toggle('contrast', newState);
    localStorage.setItem('highContrast', String(newState));
  };

  return (
    <div className='functions-bar px-[25%] py-[2%] flex flex-row gap-10 bg-[#a9dced] text-black'>
      <button className='relative w-6 h-6 custom-focus hover:cursor-pointer'>
        <Image
          src='/letter.png'
          alt='Ein großes A und ein Pluszeichen.'
          fill
          style={{ objectFit: 'contain' }}
        />
      </button>
      <button
        onClick={toggleContrast}
        aria-label='Kontrastmodus ein- oder ausschalten'
        className='custom-focus relative w-6 h-6 hover:cursor-pointer'>
        <Image
          src='/brightness.png'
          alt='Kontrast-Symbol (Sonne)'
          fill
          style={{ objectFit: 'contain' }}
        />
      </button>
    </div>
  );
}
