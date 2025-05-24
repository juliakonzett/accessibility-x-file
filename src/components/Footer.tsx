import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='footer px-[5%] py-[5%] hyphens-auto bg-blue-950 text-white flex flex-col gap-10'>
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
      <h4 className='text-2xl'>Auswirkungen des Barrierefreiheitsgesetzes</h4>

      <hr className='border border-white/20'></hr>

      <div className='flex flex-row justify-between w-full'>
        {/* Kontakt */}
        <div className='flex flex-col gap-2'>
          <span>Julia Konzett & Dominik Illmer</span>
          <span>
            <strong>
              <a
                aria-label='Öffnet die WCAG 2.2 in einem neuen Tab'
                target='blank'
                className='underline underline-offset-4 custom-focus'
                tabIndex={0}
                href='https://www.w3.org/TR/WCAG22/'>
                Web Content Accessibility Guidelines (WCAG) 2.2
              </a>
              <br />
            </strong>
            <strong>
              <a
                aria-label='Öffnet das Barrierefreiheitsgesetz in einem neuen Tab'
                target='blank'
                tabIndex={0}
                className='underline underline-offset-4 custom-focus'
                href='https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2023_I_76/BGBLA_2023_I_76.html'>
                Barrierefreiheitsgesetz
              </a>
              <br />
            </strong>
          </span>
        </div>

        {/* Navigation */}
        <div className='flex flex-col text-right gap-2'>
          <Link
            aria-label='Scrollt zum Abschnitt der Seite der Reduzierten Navigation'
            tabIndex={0}
            href='#intro'
            className='custom-focus'>
            Intro
          </Link>
          <Link
            aria-label='Scrollt zum Abschnitt der Seite der Skalierungsfunktion'
            tabIndex={0}
            href='#module'
            className='custom-focus'>
            Module
          </Link>
        </div>
      </div>
    </div>
  );
}
