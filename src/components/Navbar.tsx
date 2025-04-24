import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='navbar px-[20%] py-[2%] hyphens-auto flex flex-row gap-4 justify-between items-center bg-blue-950 text-white'>
      <Link
        href='/'
        aria-label='Führt zurück zur Startseite'
        className='custom-focus relative w-[3em] h-[2em]'>
        <Image
          src='/accessibility_logo.png'
          alt='Ein hellblaues Logo mit einem Rollstuhlfahrer Icon in der Mitte'
          fill
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 768px) 100vw, 3em'
        />
      </Link>
      <Link
        aria-label={
          'Scrollt zum Abschnitt der Seite der Reduzierten Navigation'
        }
        tabIndex={0}
        href='#navigation'
        className='custom-focus'>
        Reduzierte Navigation
      </Link>
      <Link
        aria-label={'Scrollt zum Abschnitt der Seite der Skalierungsfunktion'}
        tabIndex={0}
        href='#scaling'
        className='custom-focus'>
        Skalierungsfunktion
      </Link>
      <Link
        aria-label={'Scrollt zum Abschnitt der Seite der Hochkontrastfunktion'}
        tabIndex={0}
        href='#contrast'
        className='custom-focus'>
        Hochkontrast
      </Link>
      <Link
        aria-label={'Scrollt zum Abschnitt der Seite des Back to Top Buttons'}
        tabIndex={0}
        href='#backToTop'
        className='custom-focus'>
        Back to Top
      </Link>
    </nav>
  );
}
