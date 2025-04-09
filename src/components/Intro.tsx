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
      <h3 className='font-medium text-2xl'>
        Wahrnehmbar, bedienbar, nachvollziehbar, robust
      </h3>
      <p>
        Das sind die vier Prinzipien der Barrierefreiheit. <br />
        Die Standards und Richtlinien der Barrierefreiheit der Web Content
        Accessibility Guidelines (WCAG) 2.2 finden Sie{' '}
        <strong>
          <a
            target='blank'
            className='underline underline-offset-4'
            href='https://www.w3.org/TR/WCAG22/'>
            hier
          </a>
          .
        </strong>
      </p>
    </div>
  );
}
