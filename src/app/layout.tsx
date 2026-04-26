import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Libre_Baskerville } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Site metadata configuration
export const metadata: Metadata = {
  title: {
    default: 'Fallow Ground Ministries — Break Up Your Fallow Ground',
    template: '%s | Fallow Ground',
  },
  description:
    'A biblical studies and theological platform focused on true discipleship, deep communion with Christ, and the quiet hour that empowers evangelism. By Emmett Yeagley.',
  keywords: [
    'biblical studies',
    'theology',
    'discipleship',
    'exegesis',
    'systematic theology',
    'Emmett Yeagley',
  ],
  openGraph: {
    title: 'Fallow Ground Ministries',
    description:
      'A biblical studies and theological platform focused on true discipleship, deep communion with Christ, and the quiet hour that empowers evangelism.',
    url: 'https://fallowground.org',
    siteName: 'Fallow Ground Ministries',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fallow Ground Ministries',
    description:
      'A biblical studies and theological platform focused on true discipleship, deep communion with Christ, and the quiet hour.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} ${baskerville.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='flex min-h-screen flex-col'>
            <Header />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}