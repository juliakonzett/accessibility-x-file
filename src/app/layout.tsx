import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FuncitonsBar from '@/components/FunctionsBar';
import BackToTopButton from '@/components/BackToTopButton';

export const metadata: Metadata = {
  title: 'Barrierefreiheit',
  description: 'Wirtschaftliche Auswirkungen des Barrierefreiheitsgesetzes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body className='flex min-h-screen flex-col'>
        <FuncitonsBar />
        <Navbar />
        <main className='flex-grow'>{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
