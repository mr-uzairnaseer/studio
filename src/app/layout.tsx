import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import PageWrapper from '@/components/animations/page-wrapper';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AuraWatch | Digital Content Integrity',
  description: 'Detect hate speech and fake content with AuraWatch. AI-powered analysis for text, audio, and video.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body 
        className={cn(
          geistSans.variable, 
          geistMono.variable, 
          "antialiased min-h-screen flex flex-col"
        )}
      >
        <Header />
        <main className="flex-grow">
          <PageWrapper>
            {children}
          </PageWrapper>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
