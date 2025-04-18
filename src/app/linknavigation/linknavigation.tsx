import LinkNavigation from '@/components/LinkNavigation';

export default function LinkNavigationPage() {
  return (
    <div className='mx-[25%] my-[10%] hyphens-auto'>
      <h2 className='font-medium text-4xl'>
        Das ist die Link Navigation Seite, welche sich öffnet wenn eine
        entsprechende Link Navigation geklickt wird.
      </h2>
      <LinkNavigation
        id={'back-to-homepage'}
        ariaLabel={'Führt im selben Tab zurück zur Startseite'}
        target={false}
        href={'/'}
        name={'Zurück zur Startseite'}
      />
    </div>
  );
}
