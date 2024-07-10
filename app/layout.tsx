import type { Metadata } from "next";
import "./globals.css";
// import { Inter } from "next/font/google";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://puli.vercel.app'),
  title: "Uttam | Portfolio",
  description: "I am a full-stack developer. I love to build things that are useful and beautiful.",
  generator: "Next.js",
  applicationName: "Uttam | Portfolio",
  keywords: ["Uttam", "Uttam Likhiya", "Uttam | Portfolio", "Likhiya", "Portfolio", "Developer", "Full-stack", "React", "Next.js", "TailwindCSS", "JavaScript", "Web Development", "Frontend Development", "Backend Development", "Node.js", "Express.js", "MongoDB", "SQL", "HTML", "CSS", "Responsive Design", "Web Design", "UI/UX", "Software Engineer", "Coding", "Programming"],
  authors: [{ name: 'Uttam Likhiya', url: 'https://puli.vercel.app' }],
  openGraph: {
    title: 'Uttam | Portfolio',
    description: 'I am a full-stack developer. I love to build things that are useful and beautiful.',
    url: 'https://puli.vercel.app',
    images: [
      {
        url: 'https://puli.vercel.app/UL.png',
        width: 1213,
        height: 661,
        alt: 'UL',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uttam | Portfolio',
    description: 'I am a full-stack developer. I love to build things that are useful and beautiful.',
    creator: 'Uttam Likhiya',
    creatorId: '@L1KH1YAUTTAM',
    images: ['https://puli.vercel.app/UL.png',],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <body className={`relative text-sm md:text-base flex flex-col items-center justify-center bg-[#050505]`}>
        <Header />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
