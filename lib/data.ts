import React from "react";
import {} from "react-icons";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import {
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiGit,
  SiDocker,
  SiFigma,
  SiFramer,
} from "react-icons/si";

export const navItems = [
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Experience", hash: "#experience" },
  { name: "Skill", hash: "#skill" },
  // { name: "Contact", hash: "#contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: React.createElement(BsGithub),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: React.createElement(BsLinkedin),
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: React.createElement(BsTwitter),
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: React.createElement(BsInstagram),
  },
];

export const projects = [
  {
    title: "Project 1",
    description:
      "This is a project similar to Project 1 but with additional features and improvements. It showcases my ability to build upon existing knowledge and apply it in new contexts.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com",
        icon: React.createElement(BsGithub),
      },
      {
        name: "Demo",
        url: "https://demo.com",
        icon: React.createElement(BsBoxArrowUpRight),
      },
    ],
    bagdes: ["React", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Project 2",
    description:
      "This is a project similar to Project 1 but with additional features and improvements. It showcases my ability to build upon existing knowledge and apply it in new contexts.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com",
        icon: React.createElement(BsGithub),
      },
      {
        name: "Demo",
        url: "https://demo.com",
        icon: React.createElement(BsBoxArrowUpRight),
      },
    ],
    bagdes: ["React", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Project 3",
    description:
      "This is a project similar to Project 1 but with additional features and improvements. It showcases my ability to build upon existing knowledge and apply it in new contexts.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com",
        icon: React.createElement(BsGithub),
      },
      {
        name: "Demo",
        url: "https://demo.com",
        icon: React.createElement(BsBoxArrowUpRight),
      },
    ],
    bagdes: ["React", "TailwindCSS", "TypeScript"],
  },
];

export const experience = [
  {
    key: 1,
    name: "Telis International",
    company: "Adis Technologies",
    date: "Dec 2023 - Feb 2024",
    description:
      "I work on a team of software engineers to build and maintain a suite of applications that are used to manage and track data.",
  },
  {
    key: 2,
    name: "React Native App",
    company: "Adis Technologies",
    date: "Feb 2024 - Mar 2024",
    description:
      "I worked on a team of software engineers to build and maintain a suite of applications that are used to manage and track data.",
  },
];

export const skills = [
  { name: "JavaScript", icon: React.createElement(SiJavascript) },
  { name: "Git", icon: React.createElement(SiGit) },
  { name: "React", icon: React.createElement(SiReact) },
  { name: "Nodejs", icon: React.createElement(SiNodedotjs) },
  { name: "Express", icon: React.createElement(SiExpress) },
  { name: "MongoDB", icon: React.createElement(SiMongodb) },
  { name: "MySQL", icon: React.createElement(SiMysql) },
  { name: "Python", icon: React.createElement(SiPython) },
  { name: "Docker", icon: React.createElement(SiDocker) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "React Native", icon: React.createElement(SiReact) },
  { name: "Nextjs", icon: React.createElement(SiNextdotjs) },
  { name: "TailwindCSS", icon: React.createElement(SiTailwindcss) },
  { name: "Figma", icon: React.createElement(SiFigma) },
  { name: "Framer Motion", icon: React.createElement(SiFramer) },
];
