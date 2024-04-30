import { createElement } from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsBoxArrowUpRight,
  BsReddit,
  BsTwitter,
  BsTools,
} from "react-icons/bs";
import { UserIcon, Briefcase05Icon, BulbIcon, StarIcon } from "hugeicons-react";
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
  SiRedis,
} from "react-icons/si";

export const navItems = [
  {
    name: "About",
    hash: "#about",
    icon: createElement(UserIcon, { size: 24 }),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: createElement(BulbIcon),
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: createElement(Briefcase05Icon),
  },
  { name: "Skill", hash: "#skill", icon: createElement(StarIcon) },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/uttam-li",
    icon: createElement(BsGithub),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/uttamlikhiya",
    icon: createElement(BsLinkedin),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/l1kh1yauttam",
    icon: createElement(BsTwitter),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/uttam_likhiya",
    icon: createElement(BsInstagram),
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
        icon: createElement(BsGithub),
      },
      {
        name: "Demo",
        url: "https://billify-psi.vercel.app",
        icon: createElement(BsBoxArrowUpRight),
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
    title: "YT Playlist Length",
    description:
      "Effortlessly calculate the total duration of any YouTube playlist with advanced filter option and at different speeds. Simply paste the playlist URL and get the total time instantly.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/uttam-li/yt-playlist-length",
        icon: createElement(BsGithub),
      },
      {
        name: "Demo",
        url: "https://yt-playlist-duration.vercel.app/",
        icon: createElement(BsBoxArrowUpRight),
      },
    ],
    bagdes: [
      "NextJS",
      "TailwindCSS",
      "Youtube Data API",
      "Axios",
      "Zod"
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
        icon: createElement(BsGithub),
      },
      {
        name: "Demo",
        url: "https://uttam-technotes.onrender.com",
        icon: createElement(BsBoxArrowUpRight),
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
  { name: "TypeScript", icon: createElement(SiTypescript) },
  { name: "Git", icon: createElement(SiGit) },
  { name: "React", icon: createElement(SiReact) },
  { name: "Nextjs", icon: createElement(SiNextdotjs) },
  { name: "TailwindCSS", icon: createElement(SiTailwindcss) },
  { name: "Redux", icon: createElement(SiRedux) },
  { name: "Nodejs", icon: createElement(SiNodedotjs) },
  { name: "Express", icon: createElement(SiExpress) },
  { name: "Redis", icon: createElement(SiRedis) },
  { name: "PostgreSQL", icon: createElement(SiPostgresql) },
  { name: "Prisma", icon: createElement(SiPrisma) },
  { name: "MongoDB", icon: createElement(SiMongodb) },
  { name: "Python", icon: createElement(SiPython) },
  { name: "Docker", icon: createElement(SiDocker) },
  { name: "React Native", icon: createElement(SiReact) },
  { name: "ESLint", icon: createElement(SiEslint) },
  { name: "ESbuild", icon: createElement(SiEsbuild) },
  { name: "Webpack", icon: createElement(SiWebpack) },
  { name: "Figma", icon: createElement(SiFigma) },
  { name: "Framer Motion", icon: createElement(SiFramer) },
];
