import Intro from '@/components/Intro';
import ReducedNavigation from '@/components/ReducedNavigation';
import Scaling from '@/components/Scaling';
import HighContrast from '@/components/HighContrast';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main>
      <div className='mx-[25%] my-[10%] hyphens-auto flex flex-col gap-10'>
        <section id='intro'>
          <Intro />
        </section>
        <section id='navigation'>
          <ReducedNavigation />
        </section>
        <section id='scaling'>
          <Scaling />
        </section>
        <section id='contrast'>
          <HighContrast />
        </section>
        <section id='backToTop'>
          <BackToTop />
        </section>
      </div>
    </main>
  );
}
