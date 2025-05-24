export default function ReducedNavigation() {
  return (
    <div>
      <h2 className='font-medium text-4xl my-8'># Navigation</h2>
      <p>
        Die Navigation ist in ein "nav"-Element eingebettet, wodurch
        Screenreader und andere assistive Technologien die Navigation als
        eigenständigen Bereich erkennen können. Jeder Navigationspunkt ist als
        klickbarer "a"-Link realisiert und enthält ein präzises aria-label, das
        die Funktion des Links eindeutig beschreibt. Dadurch wird die Navigation
        auch für Nutzende mit Screenreadern oder anderen Hilfsmitteln
        vollständig zugänglich. Zudem wurde auf eine klare Tastaturbedienbarkeit
        geachtet: Alle Links sind über die Tab-Taste erreichbar und mit der
        Utility-Klasse custom-focus versehen, die eine deutliche visuelle
        Fokusanzeige bei Tastatursteuerung ermöglicht. Damit stellt die
        Navigation sowohl in visueller als auch in technischer Hinsicht ein
        barrierefreies zentrales Steuerelement der Anwendung dar.
      </p>
    </div>
  );
}
