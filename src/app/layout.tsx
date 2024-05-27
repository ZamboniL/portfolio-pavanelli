import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lucas Pavanelli - Designer & Desenvolvedor',
  icons: { icon: '/favicon.svg' },
  description: 'Portfolio de Lucas Pavanelli, designer e desenvolvedor de interfaces.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center bg-black tracking-tight`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
