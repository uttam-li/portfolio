import { experience } from '@/lib/data'
import React from 'react'
import { Badge } from './ui/badge'
import ExperienceProject from './exp-projects'

export default function Experience() {
  return (
    <section className='md:w-[41rem] m-auto px-4 py-5 text-muted-foreground'>
      <h1 className='text-3xl font-semibold text-white scroll-m-[10rem]' id='experience'>Experience</h1>
      {experience.map((exp) => (
        <article key={exp.key} className="my-8">
          <span>{exp.date}</span>
          <div className="sm:flex items-center gap-2 pt-2">  
          <h3 className='text-2xl text-nowrap font-bold underline decoration-muted hover:decoration-white text-accent-foreground underline-offset-4 transition-all'>{exp.companyName}</h3>
          <p className='hidden sm:block'>&mdash;</p>
          <p className=' text-muted-foreground sm:text-lg italic'>{exp.position}</p>
          </div>
          {exp.projects.map((project) => (
            <ExperienceProject key={project.name} project={project} />
          ))}
        </article>
      ))}
      <hr className="mt-12 mx-auto w-24 text-muted-foreground" />
    </section>
  )
}
