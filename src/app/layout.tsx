import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kore Ramesh | Assistant Professor | Blockchain Researcher',
  description:
    'Academic portfolio of Kore Ramesh, Assistant Professor of CSE at Pallavi Engineering College. Blockchain Technology researcher specializing in distributed ledger systems, smart contracts, and decentralized applications.',
  keywords: [
    'Kore Ramesh',
    'Blockchain Technology',
    'Assistant Professor',
    'Computer Science',
    'Pallavi Engineering College',
    'Smart Contracts',
    'DeFi',
    'Decentralized Systems',
  ],
  authors: [{ name: 'Kore Ramesh' }],
  openGraph: {
    title: 'Kore Ramesh | Blockchain Researcher & Educator',
    description:
      'Academic portfolio of Kore Ramesh — Assistant Professor of CSE specializing in Blockchain Technology, Smart Contracts, and Distributed Systems.',
    type: 'profile',
    locale: 'en_IN',
    siteName: 'Kore Ramesh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kore Ramesh | Blockchain Researcher & Educator',
    description:
      'Assistant Professor of CSE at Pallavi Engineering College. Blockchain Technology researcher.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-[#04071a] text-slate-100 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
