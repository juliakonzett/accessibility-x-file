import Intro from '@/components/Intro';
import ReducedNavigation from '@/components/ReducedNavigation';
import Scaling from '@/components/Scaling';
import HighContrast from '@/components/HighContrast';
import BackToTop from '@/components/BackToTop';
import Contact from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      <div className='mx-[10%] md:mx-[25%] my-[10%] flex flex-col gap-10'>
        <section id='intro'>
          <Intro />
        </section>
        <section id='module'>
          <Contact />
          <ReducedNavigation />
          <Scaling />
          <HighContrast />
          <BackToTop />
        </section>
      </div>
    </main>
  );
}
