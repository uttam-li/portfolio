'use client'

import { Button } from "@/components/ui/button";
import { DrawerDemo as Contect } from "@/components/contect";
import { easeIn, easeInOut, motion, stagger } from 'framer-motion'
import { socialLinks } from "@/lib/data";
import Link from "next/link";

export default function About() {
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
        transition={{delay: 0.1}}
      >Uttam Likhiya</motion.h1>
      <motion.span
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay: 0.2}}
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
          transition={{delay: 0.3}}
        >Hey, I'm Uttam Likhiya, a <span className="text-white">self-taught</span> developer residing in <span className="text-white">Surat, Gujarat</span>, skilled in both <span className="text-white">Frontend</span> and <span className="text-white">Backend</span> web development with an year of hands-on experience. Currently pursuing a degree in <span className="text-white">Computer Engineering</span>, I'm passionate about crafting seamless digital experiences from databases to CSS stylesheets.</motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.4}}
        >In my spare time, I delve into various subjects through books, ranging from <span className="text-white">Psychology</span> and <span className="text-white">Science</span>. Additionally, I have a keen interest in photography, capturing moments that inspire my creativity and broaden my perspective on the world.</motion.p>
      </motion.article>
      <motion.div
        className="inline-block"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay: 0.5}}
        >
        {/* <Button variant="outline" size='lg' className="mr-5">Get in touch</Button> */}
        <Contect />
        <Button variant="default" className="ml-5">Resume</Button>
      </motion.div>
      <motion.hr className="mt-12 text-muted-foreground" 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay: 0.6}}/>
      <motion.p className="mt-5 text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay: 0.7}}>Find me on</motion.p>
      <motion.div className="my-2 flex gap-x-5 flex-wrap gap-y-2 text-muted-foreground" 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay: 0.8}}>
        {
          socialLinks.map((link) => (
            <Link key={link.name} href={link.url} className="underline-offset-4 hover:underline hover:text-accent-foreground">
              <span className="flex items-center justify-center gap-2">
                {link.icon}{link.name}
              </span>
            </Link>
          ))
        }
      </motion.div>
      <motion.hr className="mt-5 text-muted-foreground" initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay: 0.9}} />
    </motion.main>
  )
}
