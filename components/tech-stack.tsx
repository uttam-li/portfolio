'use client'

import { skills } from '@/lib/data'
import React from 'react'
import { Button } from './ui/button'

export default function TechStack() {
  return (
    <section className='md:w-[41rem] m-auto px-7 text-muted-foreground mb-10'>
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
    </section>
  )
}