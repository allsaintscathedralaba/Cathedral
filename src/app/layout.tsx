import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { DataProvider } from '../context/DataContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'All Saints\' Cathedral Abayi-Umuocham | Diocese of Aba Ngwa North',
  description: 'Welcome to All Saints\' Cathedral Abayi-Umuocham, under the Diocese of Aba Ngwa North (Anglican Communion). A place of worship, fellowship, spiritual growth, and transformation.',
  keywords: 'All Saints Cathedral, Anglican Communion, Diocese of Aba Ngwa North, Abayi-Umuocham, Church Aba, Anglican Church Nigeria, Rt Rev Nathan Kanu, Ven Precious Okereke',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://allsaintscathedralaba.org',
    title: 'All Saints\' Cathedral Abayi-Umuocham',
    description: 'A Place of Worship, Fellowship, Spiritual Growth, and Transformation.',
    siteName: 'All Saints\' Cathedral Abayi-Umuocham',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-brand-grey text-brand-charcoal dark:bg-slate-950 dark:text-slate-200">
        <DataProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
