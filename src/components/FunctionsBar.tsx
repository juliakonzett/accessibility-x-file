import Image from 'next/image';

export default function FuncitonsBar() {
  return (
    <div className='px-[25%] py-[2%] flex flex-row gap-10 bg-blue-950'>
      <div className='w-4 h-4'>
        <Image
          src='/letter.png'
          alt='Ein großes A und ein Pluszeichen'
          width={2}
          height={2}
        />
      </div>
      <div className='w-4 h-4'>
        <Image
          src='/contrast.png'
          alt='Eine schwarz weiße Sonne die Kontrast abbilden soll.'
          width={2}
          height={2}
        />
      </div>
    </div>
  );
}
