import LinkNavigation from './LinkNavigation';

export default function LinkNavigatioinIntro() {
  return (
    <div>
      <h3 className='font-medium text-2xl mb-8'>
        Die Link Navigation mittels Next.js Link
      </h3>
      <LinkNavigation
        ariaLabel={'Öffnet Button Seite in einem neuem Tab'}
        target={true}
        href={'/linknavigation'}
        name={'Zur Link Navigation Seite'}
      />
    </div>
  );
}
