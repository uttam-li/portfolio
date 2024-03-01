import { experience } from '@/lib/data'
import React from 'react'

export default function Experience() {
  return (
    <section className='md:w-[41rem] m-auto px-7 py-5 text-muted-foreground'>
      <h1 className='text-3xl font-semibold text-white scroll-m-[10rem]' id='experience'>Experience</h1>
      {
        experience.map((item) => (
          <article key={item.key} className='flex flex-col justify-start gap-x-2 my-10'>
            <aside className='sm:text-nowrap text-white font-extralight'>{item.date}</aside>
            <div className='sm:ml-14 mt-3'>
              <h2 className='text-white text-2xl sm:text-nowrap'>{item.name}</h2>
              <p className='my-2'>{item.description}</p>
              <p className='text-semibold text-white'>At: {item.company}</p>
            </div>
          </article>
        ))
      }
      <hr className="mt-12 text-muted-foreground" />
    </section>
  )
}
