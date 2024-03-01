"use client"

import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { navItems } from '@/lib/data'
import { motion } from 'framer-motion'

export default function Header() {
    return (
        <motion.header
            className='fixed h-[5.625rem] top-0 w-full flex items-center justify-between pl-4 sm:pl-[3rem] pr-[1rem] md:p-[2rem] z-999 backdrop-blur-md backdrop-brightness-10'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <aside>
                <h1 className="text-2xl font-extralight italic text-muted-foreground mr-5">
                    UL
                </h1>
            </aside>
            <nav className='text-muted-foreground w-[15rem] sm:w-full'>
                <ul className='flex flex-wrap gap-x-3 gap-y-1 justify-end md:flex'>
                    {
                        navItems.map((item) => (
                            <li key={item.hash}>
                                <Link href={item.hash} className="underline-offset-4 hover:underline hover:text-accent-foreground p-2">{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </motion.header>
    )
}
