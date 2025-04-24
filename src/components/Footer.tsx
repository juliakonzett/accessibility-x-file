import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='px-[5%] py-[5%] hyphens-auto bg-blue-950 text-white flex flex-col gap-10'>
      <Link
        aria-label='Öffnet Navigationsseite im gleichen Tab'
        href='/'
        className='flex flex-row gap-4 items-center'>
        <Image
          src='/accessibility_logo.png'
          alt='Ein hellblaues Logo mit einem Rollstuhlfahrer Icon in der Mitte'
          width={30}
          height={20}
        />
        <h2 className='font-medium text-2xl'>
          Auswirkungen des Barrierefreiheitsgesetzes
        </h2>
      </Link>

      <hr className='border border-white/20'></hr>

      <div className='flex flex-row justify-between w-full'>
        {/* Kontakt */}
        <div className='flex flex-col gap-2'>
          <h2>Kontakt</h2>
          <p>Julia Konzett</p>
          <p>jko9561@students.fhv.at</p>
          <p>Fachhochschule Vorarlberg</p>
        </div>

        {/* Navigation */}
        <div className='flex flex-col text-right gap-2'>
          <Link
            aria-label='Scrollt zum Abschnitt der Seite der Reduzierten Navigation'
            tabIndex={0}
            href='#navigation'
            className='custom-focus'>
            Reduzierte Navigation
          </Link>
          <Link
            aria-label='Scrollt zum Abschnitt der Seite der Skalierungsfunktion'
            tabIndex={0}
            href='#scaling'
            className='custom-focus'>
            Skalierungsfunktion
          </Link>
          <Link
            aria-label='Scrollt zum Abschnitt der Seite der Hochkontrastfunktion'
            tabIndex={0}
            href='#contrast'
            className='custom-focus'>
            Hochkontrast
          </Link>
          <Link
            aria-label='Scrollt zum Abschnitt der Seite des Back to Top Buttons'
            tabIndex={0}
            href='#backToTop'
            className='custom-focus'>
            Back to Top
          </Link>
        </div>
      </div>
    </div>
  );
}
