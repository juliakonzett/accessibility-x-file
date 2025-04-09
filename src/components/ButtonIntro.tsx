import Button from './Button';

export default function ButtonIntro() {
  return (
    <div>
      <h3 className='font-medium text-2xl mb-8'>Der Button</h3>
      <Button href={'/'} name={'Aussagekräftiger Text'} />
    </div>
  );
}
