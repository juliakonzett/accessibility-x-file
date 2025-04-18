import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='px-[25%] py-[2%] hyphens-auto flex flex-row justify-between items-center bg-[rgba(169,220,237,0.5)]'>
      <Link aria-label={'Öffnet Navigationsseite im gleichen Tab'} href={'/'}>
        <Image
          src='/accessibility_logo.png'
          alt='Ein hellblaues Logo mit einem Rollstuhlfahrer Icon in der Mitte'
          width={30}
          height={20}
        />
      </Link>
      <a href='#navigation'>Reduzierte Navigation</a>
      <a href='#scaling'>Skalierungsfunktioin</a>
      <a href='#contrast'>Hochkontrast</a>
      <a href='#backToTop'>Back to Top</a>
    </nav>
  );
}
