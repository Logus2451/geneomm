import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/components/providers/ModalProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AppointmentModal from '@/components/layout/AppointmentModal';
import SocialSidebar from '@/components/ui/SocialSidebar';
import FloatingSocial from '@/components/ui/FloatingSocial';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Geneomm Medical Center - Pediatric Genetics & Rare Disease Care',
    template: '%s | Geneomm Medical Center',
  },
  description: "India's leading destination for Pediatric Genetics, providing hope through advanced diagnosis and compassionate care.",
  keywords: ['pediatric genetics', 'genetic counseling', 'rare diseases', 'Coimbatore', 'genetic testing', 'fetal genetics'],
  authors: [{ name: 'Geneomm Medical Center' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://geneomm.com',
    siteName: 'Geneomm Medical Center',
    title: 'Geneomm Medical Center - Pediatric Genetics',
    description: "India's leading destination for Pediatric Genetics and Rare Disease Care",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geneomm Medical Center',
    description: 'Pediatric Genetics & Rare Disease Care',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <ModalProvider>
          <div className="flex flex-col min-h-screen bg-neutral">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <AppointmentModal />
            <SocialSidebar />
            <FloatingSocial />
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
