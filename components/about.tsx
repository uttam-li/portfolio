'use client'

import { Button } from "@/components/ui/button";
import { DrawerDemo as Contect } from "@/components/contect";
import { easeIn, easeInOut, motion, stagger } from 'framer-motion'
import { socialLinks } from "@/lib/data";
import Link from "next/link";
import { downloadResume } from "@/lib/utils";

export default function About() {

  const UnderlinedText = ({ children }: { children: React.ReactNode }) => (
    <span className="text-white underline decoration-muted hover:decoration-white underline-offset-4 transition-all">
      {children}
    </span>
  );
  
  return (
    <motion.main
      className="md:w-[41rem] m-auto px-7 py-10 mt-24"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeInOut }}
    >
      <motion.h1 className="font-bold text-4xl scroll-m-[40rem]"
        id="about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, }}
        transition={{ delay: 0.1 }}
      >Uttam Likhiya</motion.h1>
      <motion.span
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >&lt;supercelluttam@gmail.com&gt;</motion.span>
      <motion.article
        className="mt-12 mb-8 text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      // transition={{delay: 0.8}}
      >
        <motion.p
          className="mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >Hey, I&apos;m Uttam Likhiya, a <UnderlinedText>self-taught</UnderlinedText> developer residing in <UnderlinedText>Surat, Gujarat</UnderlinedText>, skilled in both <UnderlinedText>Frontend</UnderlinedText> and <UnderlinedText>Backend</UnderlinedText> web development with an year of hands-on experience. Currently pursuing a degree in <UnderlinedText>Computer Engineering</UnderlinedText>, I&apos;m passionate about crafting seamless digital experiences from databases to CSS stylesheets.</motion.p>

        <motion.p
          className="transition-all"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >In my spare time, I delve into various subjects through books, ranging from <UnderlinedText>Psychology</UnderlinedText>, <UnderlinedText>Political Fiction</UnderlinedText> and <UnderlinedText>Science</UnderlinedText>. Additionally, I have a keen interest in photography, capturing moments that inspire my creativity and broaden my perspective on the world.</motion.p>
      </motion.article>
      <motion.div
        className="inline-block"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* <Button variant="outline" size='lg' className="mr-5">Get in touch</Button> */}
        <Contect />
        <Button variant="default" className="ml-5" onClick={() => downloadResume()}>Resume</Button>
      </motion.div>
      <motion.hr className="mt-12 text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }} />
      <motion.p className="mt-5 text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}>Find me on</motion.p>
      <motion.div className="my-2 flex gap-x-5 flex-wrap gap-y-2 text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}>
        {
          socialLinks.map((link) => (
            <Link key={link.name} href={link.url} className="underline-offset-4 underline decoration-muted hover:decoration-white hover:text-accent-foreground">
              <span className="flex items-center justify-center gap-2 transition-all">
                {link.icon}{link.name}
              </span>
            </Link>
          ))
        }
      </motion.div>
      <motion.hr className="mt-5 text-muted-foreground" initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }} />
    </motion.main>
  )
}
