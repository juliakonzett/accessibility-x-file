export default function HighContrast() {
  return (
    <div>
      <h2 className='font-medium text-4xl my-8'># Hochkontrast</h2>
      <p>
        Für den Hochkontrastmodus wurde ein interaktiver Funktionsbutton
        implementiert, der es Nutzenden ermöglicht, per Klick zwischen dem
        Standard- und dem Hochkontrastmodus zu wechseln. Der Button ist als
        semantisches HTML-Element "button" umgesetzt und wurde mit dem Attribut
        aria-label="Kontrastmodus ein- oder ausschalten" versehen, um assistiven
        Technologien (wie Screenreadern) eine eindeutige Beschreibung seiner
        Funktion bereitzustellen. Zusätzlich wurde der Button mit der CSS-Klasse
        custom-focus ausgestattet, die durch visuelle Hervorhebung (z. B. rote
        Umrandung bei Tastaturfokus) sicherstellt, dass er auch für Nutzende mit
        eingeschränkter Mausbedienung zugänglich ist.
      </p>
    </div>
  );
}
