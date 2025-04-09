import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className='m-36'>
      <h1 className='font-semibold text-6xl'>
        Upps, da ist etwas schiefgelaufen!
      </h1>
      <h2 className='font-light text-2xl my-8'>
        Diese Seite konnte nicht gefunden werden.
      </h2>
      <Button href={'/'} name={'Zurück zur Startseite'}></Button>
    </div>
  );
}
