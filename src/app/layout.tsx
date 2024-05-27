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
      <body className={`h-min min-h-screen w-auto bg-black`}>
        <div
          className={`${inter.className} flex h-min flex-col items-center overflow-clip bg-black tracking-tight`}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
