'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type ExperienceProjectProps = {
    name: string;
    description: {
        key: number;
        text: string;
    }[];
}

export default function ExperienceProject({ project }: { project: ExperienceProjectProps }) {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            key={project.name}
            className="mt-4 px-4 py-4 rounded-lg ring-[0.1rem] ring-muted"
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
        >
            <h4 className="text-lg pb-4 font-medium">{project.name}</h4>
            <ul className="list-disc list-inside">
                {project.description.map((desc) => (
                    <li key={desc.key} className="py-2 text-sm sm:text-base text-muted-foreground">
                        {desc.text}
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}
