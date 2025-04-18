import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='px-[25%] py-[2%] hyphens-auto flex flex-row justify-between items-center bg-[rgba(169,220,237,0.5)]'>
      <Link aria-label={'Führt zurück zur Startseite'} tabIndex={0} href={'/'}>
        <Image
          src='/accessibility_logo.png'
          alt='Ein hellblaues Logo mit einem Rollstuhlfahrer Icon in der Mitte'
          width={30}
          height={20}
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
        Skalierungsfunktioin
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
