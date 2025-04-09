export default function Intro() {
  return (
    <div className='flex flex-col gap-8'>
      <h1 className='font-semibold text-6xl'>
        Wirtschaftliche Auswirkungen des Barrierefreiheitsgesetzes
      </h1>
      <h2 className='font-medium text-4xl'>
        Wie werden die gesetzlichen Grundlagen durch den Einsatz der
        WCAG-Standards konkret umgesetzt und welche Herausforderungen ergeben
        sich im Zuge der Implementierung von Barrierefreiheit in Unternehmen?
      </h2>
      <p className='font-serif italic'>- Bachelorarbeit von Julia Konzett</p>
      <p>
        Die folgenden implementierten Module sind Teil der Case Study für die
        oben genannte Bachelorarbeit. <br />
        Diese Module werden entwickelt um die Barrierefreiheit im Web, mit den
        Standards der WCAG 2.2, darzustellen und dienen als Basis zur Erstellung
        eines groben Konzepts für ein fiktives Unternehmen, welches auf Grund
        des Barrierefreiheitsgesetzes zu einem Relaunch verpflichtet ist. <br />
        Die Standards und Richtlinien der Web Content Accessibility Guidelines
        (WCAG) 2.2 finden Sie{' '}
        <strong>
          <a
            aria-label='Öffnet die WCAG 2.2 in einem neuen Tab'
            target='blank'
            className='underline underline-offset-4'
            href='https://www.w3.org/TR/WCAG22/'>
            hier
          </a>
          . <br />
        </strong>
        Das österreichische Barrierefreiheitsgesetz finden Sie{' '}
        <strong>
          <a
            aria-label='Öffnet das Barrierefreiheitsgesetz in einem neuen Tab'
            target='blank'
            className='underline underline-offset-4'
            href='https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2023_I_76/BGBLA_2023_I_76.html'>
            hier
          </a>
          . <br />
        </strong>
      </p>
    </div>
  );
}
