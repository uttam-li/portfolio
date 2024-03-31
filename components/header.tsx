"use client"

import React from 'react'
import Link from 'next/link'
import { navItems } from '@/lib/data'
import { motion } from 'framer-motion'
import { Alex_Brush } from 'next/font/google'
import Image from 'next/image'
import {CascadiaCode, geist} from "@/fonts/font";

const font = Alex_Brush({
    subsets: ['latin'],
    weight: ['400']
})

export default function Header() {
    return (
        <motion.header
            className='fixed h-[4rem] top-0 w-full flex items-center justify-between pl-4 sm:pl-[3rem] pr-[1rem] md:p-[2rem] z-999 backdrop-blur-lg border-b-[0.1rem] backdrop-brightness-10'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <aside>
                <h1 className={`text-4xl ${font.className} text-muted-foreground mr-5`}>
                    UL
                </h1>
            </aside>
            <nav className='text-muted-foreground w-[15rem] hidden sm:block'>
                <ul className='flex gap-x-3 justify-end'>
                    {
                        navItems.map((item) => (
                            <li key={item.hash}>
                                <Link href={item.hash} className="underline-offset-4 hover:underline hover:text-accent-foreground p-2 transition-all">{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <nav className='text-muted-foreground w-[15rem] sm:hidden'>
                <ul className='flex gap-x-4 justify-end'>
                    {
                        navItems.map((item) => (
                            <li key={item.hash}>
                                <Link href={item.hash} className="underline-offset-4 hover:underline hover:text-accent-foreground p-2">{item.icon}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </motion.header>
    )
}
