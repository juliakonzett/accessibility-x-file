export default function Scaling() {
  return (
    <div>
      <h2 className='font-medium text-4xl my-8'># Skalierungsfunktion</h2>
      <p>
        Als weiterer Optimierungsvorschlag wurde eine Skalierungsfunktion
        implementiert, die es Nutzenden ermöglicht, die Textgröße der gesamten
        Seite per Klick auf 200 % zu erhöhen oder wieder zu verringern. Die
        Umsetzung erfolgt über einen Button innerhalb der Funktionsleiste, der
        eine dynamische CSS-Variable (--scale) steuert. Diese Variable
        beeinflusst die Basis-Schriftgröße des "html"-Elements und somit
        indirekt alle Schriftgrößen, die auf rem- oder em-Werten basieren. Die
        Skalierung bleibt durch Speicherung im localStorage auch nach einem
        Seitenneuladen erhalten und ist vollständig ohne externe Hilfsmittel
        nutzbar. Der Button selbst ist als semantisches HTML-Element "button"
        mit aria-label versehen und durch die Utility-Klasse custom-focus
        visuell fokussierbar, was eine vollständige Tastaturbedienbarkeit
        gewährleistet.
      </p>
    </div>
  );
}
