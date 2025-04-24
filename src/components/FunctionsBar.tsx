import Image from 'next/image';

export default function FuncitonsBar() {
  return (
    <div className='px-[25%] py-[2%] flex flex-row gap-10 bg-[rgba(169,220,237,0.5)]'>
      <div className='relative w-6 h-6'>
        <Image
          src='/letter.png'
          alt='Ein großes A und ein Pluszeichen'
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className='relative w-6 h-6'>
        <Image
          src='/brightness.png'
          alt='Eine schwarz weiße Sonne die Kontrast abbilden soll.'
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
