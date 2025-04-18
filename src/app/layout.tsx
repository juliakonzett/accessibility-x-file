import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
