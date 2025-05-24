'use client';
import Image from 'next/image';

const highlights = [
  { title: 'Unicorn Duck', img: '/unicorn-duck.png' },
  { title: 'Duck', img: '/duck.png' },
  { title: 'Evil Duck', img: '/evil-duck.png' },
  { title: 'Love Duck', img: '/love-duck.png' },
];

export default function ProductSlider() {
  return (
    <div className='w-full px-4'>
      <h2 className='font-medium text-xl md:text-4xl my-8'># Produktslider</h2>

      <section className='max-w-6xl mx-auto'>
        <h3 className='text-xl mb-6'>Ducks in the House</h3>

        <div className='flex flex-col md:flex-row gap-2 overflow-x-auto overflow-y-visible'>
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className='m-4 flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden w-full md:w-64 flex-shrink-0'>
              <div className='relative w-full h-48'>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className='object-contain p-4'
                />
              </div>
              <div id='produktTitle' className='p-4 text-center'>
                <p className='font-medium'>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
