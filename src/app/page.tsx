import Intro from '@/components/Intro';
import ButtonIntro from '@/components/ButtonIntro';

export default function Home() {
  return (
    <main>
      <div className='mx-[25%] my-[10%] hyphens-auto flex flex-col gap-10'>
        <Intro />
        <ButtonIntro />
      </div>
    </main>
  );
}
