'use client';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className='mx-[25%] my-[10%] hyphens-auto'>
      <h1 className='font-semibold text-6xl'>
        Upps, da ist etwas schiefgelaufen!
      </h1>
      <h2 className='font-light text-2xl my-8'>
        Diese Seite konnte nicht gefunden werden.
      </h2>
      <Button
        ariaLabel={'Führt im selben Tab zurück zur Startseite'}
        route={'/'}
        name={'Zurück zur Startseite'}
      />
    </div>
  );
}
