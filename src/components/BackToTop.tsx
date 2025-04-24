export default function BackToTop() {
  return (
    <div>
      <h2 className='font-medium text-4xl my-8'># Back To Top</h2>
      <p>
        Zur Verbesserung der Navigation wurde eine „Zurück zum Anfang“-Funktion
        implementiert, die beim Scrollen ab 100 Pixeln erscheint und Nutzenden
        ermöglicht, mit einem Klick oder Tastendruck zum Seitenanfang
        zurückzukehren. Die Komponente wurde bewusst nicht als "button", sondern
        als "div" mit role="button" umgesetzt, um aufzuzeigen, dass solche
        Elemente zusätzlich barrierefrei gestaltet werden müssen. Durch das
        Attribut tabIndex={0} ist der Button per Tastatur erreichbar, und über
        die onKeyDown-Funktion kann er mittels Enter oder Leertaste ausgelöst
        werden. Die visuelle Fokusanzeige wird durch die Utility-Klasse
        custom-focus sichergestellt. Damit erfüllt die Funktion die
        Anforderungen der WCAG 2.2 Erfolgskriterien § 2.1.1 (Tastaturbedienung)
        und § 2.4.7 (Fokus sichtbar). Zusätzlich wurde für den Hochkontrastmodus
        ein angepasster Farbsatz definiert, um auch das Erfolgskriterium § 1.4.3
        (Kontrast – Minimum) einzuhalten.
      </p>
    </div>
  );
}
