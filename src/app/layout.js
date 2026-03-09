import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Portfolio | Creative Developer',
  description: 'A full-stack developer passionate about building beautiful, performant digital experiences. View my projects, skills, and get in touch.',
  keywords: ['developer', 'portfolio', 'full-stack', 'web development', 'react', 'next.js'],
  openGraph: {
    title: 'Portfolio | Creative Developer',
    description: 'A full-stack developer passionate about building beautiful, performant digital experiences.',
    type: 'website',
  },
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
