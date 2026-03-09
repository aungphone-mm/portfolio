import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://your-portfolio-domain.com'),
  title: 'Portfolio | Creative Developer',
  description: 'A full-stack developer passionate about building beautiful, performant digital experiences. View my projects, skills, and get in touch.',
  keywords: ['developer', 'portfolio', 'full-stack', 'web development', 'react', 'next.js', 'myanmar'],
  authors: [{ name: 'Aung P.M.' }],
  creator: 'Aung Phone Myat',
  openGraph: {
    title: 'Portfolio | Full Stack Developer',
    description: 'A full-stack developer passionate about building beautiful, performant digital experiences. Based in Yangon.',
    url: 'https://your-portfolio-domain.com',
    siteName: 'Developer Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Creative Developer',
    description: 'A full-stack developer passionate about building beautiful, performant digital experiences.',
    images: ['/og-image.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
