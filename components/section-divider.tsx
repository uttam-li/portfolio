'use client'

import React from 'react'
import {motion} from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div className='w-[0.1rem] h-16 bg-secondary my-8' initial={{opacity:0, y: 10}} animate={{opacity:1, y:0}} transition={{delay: 1}}/>
  )
}
