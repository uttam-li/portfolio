import "@/styles/globals.css";
import { ReactNode } from "react";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Albert_Sans } from "next/font/google";

import { ThemeSwitch } from "@/components/theme-switch";

import { Providers } from "./providers";

const albert_sans = Albert_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://puli.vercel.app"),
  title: "Uttam | Portfolio",
  description:
    "I am a full-stack developer. I’m looking to work on interesting and challenging projects.",
  generator: "Next.js",
  applicationName: "Uttam | Portfolio",
  keywords: [
    "Uttam",
    "Likhiya",
    "Portfolio",
    "Uttam Likhiya",
    "Uttam | Portfolio",
    "Surat",
    "Gujarat",
    "Developer",
    "Full-stack",
    "React",
    "Web Development",
    "Programming",
  ],
  authors: [{ name: "Uttam Likhiya", url: "https://puli.vercel.app" }],
  openGraph: {
    title: "Uttam | Portfolio",
    description:
      "I am a full-stack developer. I’m looking to work on interesting and challenging projects.",
    url: "https://puli.vercel.app",
    images: [
      {
        url: "https://puli.vercel.app/UL.png",
        width: 1200,
        height: 630,
        alt: "UL",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uttam | Portfolio",
    description:
      "I am a full-stack developer. I’m looking to work on interesting and challenging projects.",
    creator: "Uttam Likhiya",
    creatorId: "@L1KH1YAUTTAM",
    images: ["https://puli.vercel.app/UL.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
          albert_sans.className,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            enableSystem: true,
            defaultTheme: "system",
          }}
        >
          <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow flex flex-col items-center">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
}
