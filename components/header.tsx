"use client"

import { navItems } from '@/lib/data'
import { Alex_Brush } from 'next/font/google'
import React, { useEffect, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";

const font = Alex_Brush({
    subsets: ['latin'],
    weight: ['400']
})

export default function Header() {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.2) {
                setVisible(true);
            } else if (scrollYProgress.get() > 1) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });
    return (
        <AnimatePresence mode="wait">
            <motion.header
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    type: "tween",
                    // stiffness: 100,
                    duration: 0.2
                }}
                className="fixed inset-4 ring-1 ring-secondary rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-[3rem] sm:h-[3.5rem] max-w-[1000px] flex items-center justify-between z-999 backdrop-blur-lg backdrop-brightness-10 pr-4 mx-auto"
            >
                <aside className='pl-3 md:pl-4 animate-pulse'>
                    <h1 className={`text-4xl ${font.className} text-muted-foreground mr-5 mt-1`}>
                        UL
                    </h1>
                </aside>
                <nav className='text-muted-foreground hidden sm:block'>
                    <ul className='flex gap-x-3 justify-end'>
                        {
                            navItems.map((item) => (
                                <li className='active:scale-90 transition-all' key={item.hash}>
                                    <Link href={item.hash} className="hover:text-accent-foreground p-2">{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <nav className='text-muted-foreground sm:hidden'>
                    <ul className='flex gap-x-4 justify-end'>
                        {
                            navItems.map((item) => (
                                <li className='active:scale-90 transition-all' key={item.hash}>
                                    <Link href={item.hash} className="hover:text-accent-foreground p-2">{item.icon}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </motion.header>
        </AnimatePresence>
    )
}
