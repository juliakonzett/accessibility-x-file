import Image from 'next/image';

export default function BackToTop() {
  return (
    <div>
      <h2 className='font-medium text-xl md:text-4xl my-8'># Back To Top</h2>
      <p>
        Nach 100 Pixeln Scrollen erscheint ein Feld, mit dem du zurück ganz nach
        oben springen kannst. Es ist als „div“ mit role="button" und tabIndex=0
        eingerichtet, damit du es auch per Tab und Enter/Leertaste bedienen
        kannst. Ein sichtbarer Rahmen (custom-focus) zeigt den Fokus an. Im
        Hochkontrast-Modus hat es extra starke Farben für guten Kontrast.
      </p>
      <div className='relative w-full h-12 md:h-16 my-4'>
        <Image
          src='/button.png'
          alt='Ein Bild des Back To Top Buttons, im hellen Modus.'
          fill
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 768px) 100vw, 800px'
          priority
        />
      </div>
      <div className='relative w-full h-12 md:h-16 my-4'>
        <Image
          src='/button2.png'
          alt='Ein Bild des Back To Top Buttons, im dunklen Modus.'
          fill
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 768px) 100vw, 800px'
          priority
        />
      </div>
    </div>
  );
}
