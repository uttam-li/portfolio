import React, { createElement } from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsBoxArrowUpRight,
  BsReddit,
  BsTwitter,
  BsTools,
} from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import {
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiGit,
  SiDocker,
  SiFigma,
  SiFramer,
  SiRedux,
  SiPostgresql,
  SiEslint,
  SiEsbuild,
  SiWebpack,
  SiPrisma,
} from "react-icons/si";

export const navItems = [
  {
    name: "About",
    hash: "#about",
    icon: createElement(AiOutlineUser, { size: 24 }),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: createElement(RiLightbulbFlashLine, { size: 24 }),
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: createElement(MdOutlineWorkspacePremium, { size: 24 }),
  },
  { name: "Skill", hash: "#skill", icon: createElement(BsTools, { size: 24 }) },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/uttam-li",
    icon: React.createElement(BsGithub),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/uttamlikhiya",
    icon: React.createElement(BsLinkedin),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/l1kh1yauttam",
    icon: React.createElement(BsTwitter),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/uttam_likhiya",
    icon: React.createElement(BsInstagram),
  },
  {
    name: "Reddit",
    url: "https://reddit.com/user/dhokla_diplomat",
    icon: React.createElement(BsReddit),
  },
];

export const projects = [
  {
    title: "Billify",
    description:
      "Billify, leveraging Next.js, Typescript, and NextAuth, streamlined invoicing for potential 500,000 MSMEs. Integrated CRM enabled effortless e-invoice generation in PDF format, optimizing efficiency and enhancing client relations for hassle-free invoicing.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/uttam-li/billify",
        icon: React.createElement(BsGithub),
      },
      {
        name: "Demo",
        url: "https://billify-psi.vercel.app",
        icon: React.createElement(BsBoxArrowUpRight),
      },
    ],
    bagdes: [
      "TypeScript",
      "NextJS",
      "Tailwind",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "React Query",
      "Zod",
    ],
  },
  {
    title: "TechNotes",
    description:
      "techNotes is for a small buisness to track and manage their notes. It offers an intuitive interface with features like role based autherization. It is a full stack application with a React frontend and Node.js backend.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/uttam-li/techNotes",
        icon: React.createElement(BsGithub),
      },
      {
        name: "Demo",
        url: "https://uttam-technotes.onrender.com",
        icon: React.createElement(BsBoxArrowUpRight),
      },
    ],
    bagdes: [
      "React",
      "Redux",
      "NodeJs",
      "Express",
      "MongoDB",
      "JWT",
      "RTK Query",
    ],
  },
];

export const experience = [
  {
    key: 1,
    companyName: "Adis Technologies",
    date: "Dec 2023 - Feb 2024",
    position: "Project Contributor",
    projects: [
      {
        name: "TELUS International",
        description: [
          {
            key: 1,
            text: "Contributed to a project serving 15 million users, enhancing the front-end architecture with advanced functionalities, comprising 350,000 lines of code.",
          },
          {
            key: 3,
            text: "Enhanced frontend performance by implementing 2 new features and addressing 30+ minor bugs, culminating in a notable 10% enhancement. This overhaul ensures a seamless user experience across platforms.",
          },
        ],
      },
      {
        name: "Unicron",
        description: [
          {
            key: 1,
            text: "Participated in the refinement of Inventory management React Native applications, expanding their capabilities through the integration of 2 new APIs into the search filter and various core functionalities.",
          },
          {
            key: 2,
            text: "Played a role in troubleshooting and resolving minor bugs within React Native app, ensuring stability and usability for end-users. Additionally, Had a opportunity to implement 3 new features in total, enhancing overall functionality and user experience.",
          },
        ],
      },
    ],
  },
];

export const skills = [
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "Git", icon: React.createElement(SiGit) },
  { name: "React", icon: React.createElement(SiReact) },
  { name: "Nextjs", icon: React.createElement(SiNextdotjs) },
  { name: "TailwindCSS", icon: React.createElement(SiTailwindcss) },
  { name: "Redux", icon: React.createElement(SiRedux) },
  { name: "Nodejs", icon: React.createElement(SiNodedotjs) },
  { name: "Express", icon: React.createElement(SiExpress) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { name: "Prisma", icon: React.createElement(SiPrisma) },
  { name: "MongoDB", icon: React.createElement(SiMongodb) },
  { name: "Python", icon: React.createElement(SiPython) },
  { name: "Docker", icon: React.createElement(SiDocker) },
  { name: "React Native", icon: React.createElement(SiReact) },
  { name: "ESLint", icon: React.createElement(SiEslint) },
  { name: "ESbuild", icon: React.createElement(SiEsbuild) },
  { name: "Webpack", icon: React.createElement(SiWebpack) },
  { name: "Figma", icon: React.createElement(SiFigma) },
  { name: "Framer Motion", icon: React.createElement(SiFramer) },
];
