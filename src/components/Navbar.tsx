import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='w-full navbar px-[10%] md:px-[20%] py-[2%] flex flex-row gap-4 justify-between items-center bg-blue-950 text-white'>
      <Link
        href='/'
        aria-label='Führt zurück zur Startseite'
        className='custom-focus relative w-[3em] h-[2em] shrink-0 flex'>
        <Image
          src='/accessibility_logo.png'
          alt='Ein hellblaues Logo mit einem Rollstuhlfahrer Icon in der Mitte'
          fill
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 768px) 100vw, 3em'
        />
      </Link>
      <Link
        aria-label={'Scrollt zum Abschnitt der Seite der Skalierungsfunktion'}
        tabIndex={0}
        href='#intro'
        className='custom-focus'>
        Intro
      </Link>
      <Link
        aria-label={
          'Scrollt zum Abschnitt der Seite der Reduzierten Navigation'
        }
        tabIndex={0}
        href='#module'
        className='custom-focus'>
        Module
      </Link>
      <Link
        aria-label={
          'Scrollt zum Abschnitt der Seite der Reduzierten Navigation'
        }
        tabIndex={0}
        href='#footer'
        className='custom-focus'>
        WCAG 2.2
      </Link>
      <Link
        aria-label={
          'Scrollt zum Abschnitt der Seite der Reduzierten Navigation'
        }
        tabIndex={0}
        href='#footer'
        className='custom-focus'>
        BaFG
      </Link>
    </nav>
  );
}
