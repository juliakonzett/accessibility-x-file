import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
