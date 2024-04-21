'use client'

import { skills } from '@/lib/data'
import React from 'react'
import { motion } from 'framer-motion'

export default function TechStack() {
  return (
    <motion.section className='md:w-[41rem] m-auto px-7 text-muted-foreground mb-10'
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.5 }}
    >
      <h1 className='text-3xl font-semibold text-white my-10 scroll-m-[10rem]' id='skill'>Skill</h1>
      <ul className='my-2 flex gap-x-5 flex-wrap gap-y-2 text-muted-foreground'>
        {
          skills.map((item) => (
            <li key={item.name} className="underline-offset-4 underline decoration-muted hover:decoration-white hover:text-accent-foreground transition-all">
              <span className="flex items-center justify-center gap-2">
                {item.icon}{item.name}
              </span>
            </li>
          ))
        }
      </ul>
    </motion.section>
  )
}