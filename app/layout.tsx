import type { Metadata } from "next";
import { Inter, Roboto, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import {CascadiaCode, geist} from "@/fonts/font";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
});
const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uttam | Portfolio",
  description: "I am a full-stack developer. I love to build things that are useful and beautiful.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <body className={`${inter.className} flex flex-col items-center justify-center relative bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}>
        <div className="fixed inset-0 bg-[linear-gradient(to top left,#152331,#000000)] bg- z-[-1]"/>
        {/* <div className="absolute top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
