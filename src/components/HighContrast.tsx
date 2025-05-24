import Image from 'next/image';

export default function HighContrast() {
  return (
    <div>
      <h2 tabIndex={0} className='font-medium text-xl md:text-4xl my-8'>
        # Hochkontrast
      </h2>
      <p tabIndex={0}>
        Ein Button in der Leiste schaltet zwischen Normal- und
        Hochkontrast-Modus um. Er hat ein aria-label namens „Kontrastmodus ein-
        oder ausschalten“, damit Screenreader seine Funktion vorlesen können. Du
        erreichst ihn mit der Tab-Taste, und er bekommt einen Rahmen, wenn er
        den Fokus hat. So können alle Nutzer und Nutzerinnen den Kontrast leicht
        umschalten.
      </p>
      <div className='relative w-full h-12 md:h-16 my-4'>
        <Image
          src='/switch.png'
          alt='Ein Bild des Hochkontrastbuttons, im hellen Modus, der mittels Fokusindikator hervorgehoben ist'
          fill
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 768px) 100vw, 800px'
          priority
        />
      </div>
    </div>
  );
}
