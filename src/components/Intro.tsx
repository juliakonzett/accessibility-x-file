import Image from 'next/image';

export default function Intro() {
  return (
    <div className='flex flex-col gap-8'>
      <h1 className='font-semibold text-2xl md:text-6xl hyphens-auto'>
        Auswirkungen des Barrierefreiheitsgesetzes
      </h1>
      <div id='introWrapper' className='flex flex-row gap-10 items-center'>
        <div id='introImg' className='relative w-2/3 h-[403px]'>
          <Image
            src='/e.t.phoning.png'
            alt='E.T. versucht nach Hause zu telefonieren aber die Barrieren halten ihn auf.'
            fill
            style={{ objectFit: 'contain' }}
            sizes='(max-width: 768px) 100vw, 800px'
            priority
          />
        </div>

        <div id='introText' className='w-1/3'>
          <p>
            Stell dir vor: E.T. steht am Rand unseres digitalen Universums, sein
            leuchtender Finger ausgestreckt – und doch bleibt der Weg heimwärts
            versperrt. Nicht der Funkspruch zu seinem Planeten ist sein
            Hindernis, sondern die unsichtbaren Gitternetze und Schranken auf
            unseren Webseiten. Solange wir Barrieren im Netz dulden – seien es
            knallharte Captchas, undurchsichtige Navigationen oder fehlende
            Screenreader-Unterstützung – bleibt E.T. auf der Erde gestrandet.
            Erst wenn wir jede Online-Barriere beseitigen, die seinen Pfad
            versperrt, wird sein Rufschrei die Stille durchbrechen und ihn
            endlich zurück in die Sterne katapultieren. Bis dahin ist kein
            „Nach-Hause-Telefonat“ möglich – denn Freiheit im Web ist sein
            einziger Schlüssel zum Heimflug.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
