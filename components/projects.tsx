'use client'

import { projects } from '@/lib/data'
import React from 'react'
import { motion } from 'framer-motion'
import Project from './project'
import { IconBaseProps } from 'react-icons'

export default function Projects() {
    
    type ProjectType = {
        title: string;
        description: string;
        links: {
            name: string;
            url: string;
            icon: React.FunctionComponentElement<IconBaseProps>;
        }[];
        bagdes: string[];
    }

    return (
        <section className='md:w-[41rem] m-auto px-4 py-10 text-muted-foreground'>
            <motion.h1 className='text-3xl font-semibold text-white scroll-m-[10rem] pl-3' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} id='projects'>
                Projects
            </motion.h1>
            <div className='my-6 flex flex-col items-start'>
                {
                    projects.map((project: ProjectType) => (
                        <Project {...project} key={project.title}/>
                    ))
                }
            </div>
            <hr className="mt-12 text-muted-foreground" />
        </section>
    )
}
