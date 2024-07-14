import { createElement } from "react";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaLink,
} from "react-icons/fa6";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiDocker,
  SiFramer,
  SiRedux,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiZod,
  SiAxios,
  SiYoutube,
  SiGoogleauthenticator,
  SiReactquery,
  SiJavascript,
  SiReduxsaga,
  SiSequelize,
  SiExpo,
} from "react-icons/si";
import { GoDeviceDesktop, GoServer, GoDatabase } from "react-icons/go";

import { NextAuthIcon } from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  links: {
    github: "https://github.com/uttam-li",
    twitter: "https://twitter.com/l1kh1yauttam",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    linkedin: "https://linkedin.com/in/uttamlikhiya",
    instagram: "https://instagram.com/uttam_likhiya",
  },
};

export const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/l1kh1yauttam",
    icon: createElement(FaXTwitter, { size: 24 }),
  },
  {
    name: "GitHub",
    url: "https://github.com/uttam-li",
    icon: createElement(FaGithub, { size: 24 }),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/uttamlikhiya",
    icon: createElement(FaLinkedin, { size: 24 }),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/uttam_likhiya",
    icon: createElement(FaInstagram, { size: 24 }),
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
        icon: createElement(FaGithub, { size: 20 }),
      },
      {
        name: "Demo",
        url: "https://billify-psi.vercel.app",
        icon: createElement(FaLink, { size: 20 }),
      },
    ],
    stack: [
      {
        name: "Next.js",
        icon: createElement(SiNextdotjs, { size: 20 }),
      },
      {
        name: "TypeScript",
        icon: createElement(SiTypescript, { size: 20, color: "#3178C6" }),
      },
      {
        name: "Tailwind CSS",
        icon: createElement(SiTailwindcss, { size: 20, color: "#38B2AC" }),
      },
      {
        name: "Prisma",
        icon: createElement(SiPrisma, { size: 20, color: "#2D3748" }),
      },
      {
        name: "PostgreSQL",
        icon: createElement(SiPostgresql, { size: 20, color: "#336791" }),
      },
      {
        name: "NextAuth.js",
        icon: createElement(NextAuthIcon, { size: 20, color: "#0070F3" }),
      },
      {
        name: "React Query",
        icon: createElement(SiReactquery, { size: 20, color: "#FF4154" }),
      },
      {
        name: "Zod",
        icon: createElement(SiZod, { size: 20, color: "#3B82F6" }),
      },
    ],
  },
  {
    title: "YT Playlist Duration",
    description:
      "Effortlessly calculate the total duration of any YouTube playlist with advanced filter option and at different speeds. Simply paste the playlist URL and get the total time instantly.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/uttam-li/yt-playlist-length",
        icon: createElement(FaGithub, { size: 20 }),
      },
      {
        name: "Demo",
        url: "https://yt-playlist-duration.vercel.app/",
        icon: createElement(FaLink, { size: 20 }),
      },
    ],
    stack: [
      {
        name: "Next.js",
        icon: createElement(SiNextdotjs, { size: 20 }),
      },
      {
        name: "Tailwind CSS",
        icon: createElement(SiTailwindcss, { size: 20, color: "#38B2AC" }),
      },
      {
        name: "YouTube",
        icon: createElement(SiYoutube, { size: 20, color: "#FF0000" }),
      },
      {
        name: "Axios",
        icon: createElement(SiAxios, { size: 20, color: "#5A29E4" }),
      },
      {
        name: "Zod",
        icon: createElement(SiZod, { size: 20, color: "#3B82F6" }),
      },
    ],
  },
  {
    title: "TechNotes",
    description:
      "TechNotes is for a small buisness to track and manage their notes. It offers an intuitive interface with features like role based autherization. It is a full stack application with a React frontend and Node.js backend.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/uttam-li/techNotes",
        icon: createElement(FaGithub, { size: 20 }),
      },
      {
        name: "Demo",
        url: "https://uttam-technotes.onrender.com",
        icon: createElement(FaLink, { size: 20 }),
      },
    ],
    stack: [
      {
        name: "React",
        icon: createElement(SiReact, { size: 20, color: "#61DAFB" }),
      },
      {
        name: "Redux",
        icon: createElement(SiRedux, { size: 20, color: "#764ABC" }),
      },
      {
        name: "Node.js",
        icon: createElement(SiNodedotjs, { size: 20, color: "#339933" }),
      },
      {
        name: "Express",
        icon: createElement(SiExpress, { size: 20 }),
      },
      {
        name: "MongoDB",
        icon: createElement(SiMongodb, { size: 20, color: "#47A248" }),
      },
      {
        name: "Google Authenticator",
        icon: createElement(SiGoogleauthenticator, {
          size: 20,
          color: "#4285F4",
        }),
      },
    ],
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: createElement(GoDeviceDesktop, { size: 20 }),
    lang: [
      { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Framer Motion", icon: SiFramer, color: "#FF007A" },
    ],
  },
  {
    category: "Backend",
    icon: createElement(GoServer, { size: 20 }),
    lang: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
  },
  {
    category: "Databases",
    icon: createElement(GoDatabase, { size: 20 }),
    lang: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
];

export const experience = [
  {
    period: "DEC 2023 — FEB 2024",
    role: "Intern · Adis Technologies",
    description: [
      {
        key: 0,
        para: "I've contributed to two distinct projects: Firstly, I enhanced the front-end architecture for a project serving 15 million users, spanning 350,000 lines of code. This involved implementing 2 new features, resolving over 30 bugs, resulting in a 10% performance boost.",
      },
      {
        key: 1,
        para: "Secondly, I refined Inventory management React Native apps by integrating 2 APIs, addressing bugs, and introducing 3 new features, significantly enhancing functionality and user experience.",
      },
    ],
    lang: [
      {
        name: "JavaScript",
        icon: createElement(SiJavascript, { size: 20, color: "#F7DF1E" }),
      },
      {
        name: "ReactJS",
        icon: createElement(SiReact, { size: 20, color: "#61DAFB" }),
      },
      {
        name: "Redux",
        icon: createElement(SiRedux, { size: 20, color: "#764ABC" }),
      },
      {
        name: "Redux-Saga",
        icon: createElement(SiReduxsaga, { size: 20, color: "#999999" }),
      },
      {
        name: "React-Native",
        icon: createElement(SiReact, { size: 20, color: "#61DAFB" }),
      },
    ],
  },
  {
    peroid: "APR 2024 — APR 2024",
    role: "Freelance Developer",
    description: [
      {
        key: 0,
        para: "Worked on a university project management app for web (React) and mobile (Expo), adding search and file uploads for the web, and video support and file uploads for mobile.",
      },
      {
        key: 1,
        para: "I worked on frontend and backend, fixing bugs, and improving performance for a smooth user experience.",
      },
    ],
    lang: [
      {
        name: "ReactJS",
        icon: createElement(SiReact, { size: 20, color: "#61DAFB" }),
      },
      {
        name: "Expo",
        icon: createElement(SiExpo, { size: 20 }),
      },
      {
        name: "Typescript",
        icon: createElement(SiTypescript, { size: 20, color: "#007ACC" }),
      },
      {
        name: "PostgreSQL",
        icon: createElement(SiPostgresql, { size: 20, color: "#336791" }),
      },
      {
        name: "ExpressJS",
        icon: createElement(SiExpress, { size: 20 }),
      },
      {
        name: "Sequelize",
        icon: createElement(SiSequelize, { size: 20, color: "#52B0E7" }),
      },
    ],
  },
];
