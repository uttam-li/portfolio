import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Badge } from './ui/badge'
import { IconBaseProps } from 'react-icons';

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

export default function Project(project: ProjectType) {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


    return (
        <motion.div className='ring-[0.1rem] ring-primary-foreground  rounded-sm my-4 p-4'
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}>
            <h2 className='text-xl text-white/80'>
                {project.title}
            </h2>
            <p className='my-5'>
                {project.description}
            </p>
            <div className='flex gap-5'>
                {
                    project.links.map((link) => (
                        <a key={link.url} href={link.url} className='flex items-center underline-offset-2 hover:underline gap-1 hover:text-white'>
                            {link.icon}{link.name}
                        </a>
                    ))
                }
            </div>
            <div className='my-5 flex gap-2 flex-wrap'>
                {
                    project.bagdes.map((badge) => (
                        <Badge key={badge} variant="secondary" className='flex gap-2'>{badge}</Badge>
                    ))
                }
            </div>
        </motion.div>
    )
}
