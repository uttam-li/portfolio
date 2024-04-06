import type { Metadata } from "next";
import { Inter, Roboto, DM_Sans, Fira_Mono, Fira_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { CascadiaCode, geist } from "@/fonts/font";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });
const roboto = Fira_Sans({
  subsets: ["latin"],
  weight: "400"
});
const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uttam | Portfolio",
  description: "I am a full-stack developer. I love to build things that are useful and beautiful.",
  generator: "Next.js",
  applicationName: "Uttam | Portfolio",
  keywords: ["Uttam", "Uttam Likhiya", "Uttam | Portfolio", "Likhiya", "Portfolio",  "Developer",  "Full-stack",  "React", "Next.js",  "TailwindCSS", "JavaScript", "Web Development", "Frontend Development", "Backend Development", "Node.js", "Express.js", "MongoDB", "SQL", "HTML", "CSS", "Responsive Design", "Web Design", "UI/UX", "Software Engineer", "Coding", "Programming"],
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
      <body className={`${dmsans.className} flex flex-col items-center justify-center relative bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}>
        {/* <div className="fixed inset-0 bg-[linear-gradient(to top left,#152331,#000000)] bg- z-[-1]"/> */}
        {/* <div className="absolute top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
