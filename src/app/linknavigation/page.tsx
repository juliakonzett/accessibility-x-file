import Button from '../../components/Button';

export default function LinkNavigationPage() {
  return (
    <div className='mx-[25%] my-[10%] hyphens-auto'>
      <h2 className='font-semibold text-4xl my-8'>
        Das ist eine Link Navigationsseite, welche sich öffnet wenn eine
        entsprechende Link Navigation geklickt wird.
      </h2>
      <Button
        ariaLabel={'Führt im selben Tab zurück zur Startseite'}
        route={'/'}
        name={'Zurück zur Startseite'}
      />
    </div>
  );
}
