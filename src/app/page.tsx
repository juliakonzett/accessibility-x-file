import Intro from '@/components/Intro';
import ReducedNavigation from '@/components/ReducedNavigation';
import Scaling from '@/components/Scaling';
import HighContrast from '@/components/HighContrast';
import BackToTop from '@/components/BackToTop';
import Contact from '@/components/ContactForm';
// import ProductSlider from '@/components/ProductSlider';
// import KpiTeaser from '@/components/KpiTeaser';

export default function Home() {
  return (
    <main>
      <div className='mx-[10%] md:mx-[25%] mt-[5%] mb-[10%] flex flex-col gap-10'>
        <section id='intro'>
          <Intro />
        </section>
        <section id='module' className='flex flex-col gap-10'>
          <Contact />
          {/* <KpiTeaser /> NOT important for accessibility, so it will not be shown in presentation*/}
          {/* <ProductSlider />  NOT fixed yet, so it will not be shown in presentation*/}
          <ReducedNavigation />
          <Scaling />
          <HighContrast />
          <BackToTop />
        </section>
      </div>
    </main>
  );
}
