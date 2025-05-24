import Image from 'next/image';

export default function ReducedNavigation() {
  return (
    <div>
      <h2 className='font-medium text-xl md:text-4xl my-8'># Navigation</h2>
      <p>
        Die Navigation steht in einem „nav“-Container. So erkennen
        Hilfsprogramme wie Screenreader sofort, dass es sich um die
        Haupt-Navigation handelt. Jeder Menüpunkt ist ein klickbarer Link mit
        einem klaren aria-label. Das aria-label erklärt genau, was passiert,
        wenn man den Link anklickt. Alle Links kann man mit der Tab-Taste
        erreichen und sie bekommen einen deutlichen Rahmen, wenn sie den Fokus
        haben. So ist die Navigation für alle Nutzerinnen und Nutzer gut
        bedienbar.
      </p>
      <div className='relative w-full h-12 md:h-16 my-4'>
        <Image
          src='/nav.png'
          alt='Ein Bild der Navigation, im hellem Modus, in welcher ein Link Element fokusiert ist'
          fill
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 768px) 100vw, 800px'
          priority
        />
      </div>

      <div className='relative w-full h-12 md:h-16 my-4'>
        <Image
          src='/nav2.png'
          alt='Ein Bild der Navigation, im dunklen Modus, in welcher ein Link Element fokusiert ist'
          fill
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 768px) 100vw, 800px'
          priority
        />
      </div>
    </div>
  );
}
