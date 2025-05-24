import Image from 'next/image';

export default function Scaling() {
  return (
    <div>
      <h2 className='font-medium text-xl md:text-4xl my-8'>
        # Skalierungsfunktion
      </h2>
      <p>
        Mit einem Knopf in der Leiste kannst du die Schrift auf das Doppelte
        vergrößern oder wieder zurücksetzen. Dein Browser merkt sich die
        Einstellung, auch wenn du die Seite neu lädst. Der Knopf ist leicht mit
        der Tastatur zu erreichen, hat eine klare Beschreibung für
        Hilfsprogramme und zeigt einen Rahmen, wenn du ihn per Tab auswählst.
      </p>
      <div className='relative w-full h-12 md:h-16 my-4'>
        <Image
          src='/switch2.png'
          alt='Ein Bild des Skalierungsbutton, im dunklen Modus, der mittels Fokusindikator hervorgehoben ist'
          fill
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 768px) 100vw, 800px'
          priority
        />
      </div>
    </div>
  );
}
