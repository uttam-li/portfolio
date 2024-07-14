"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";

import Projects from "./projects";
import Experience from "./experience";
import Skills from "./skills";
import Testimonials from "./testimonials";

export default function TabSection() {
  return (
    <div className="flex flex-col w-full gap-4 sm:items-center pb-20">
      <Tabs
        aria-label="Profile"
        defaultSelectedKey="projects"
        radius="full"
        variant="bordered"
      >
        <Tab key="projects" title="Projects">
          <Projects />
        </Tab>
        <Tab key="experience" title="Experience">
          <Experience />
        </Tab>
        <Tab key="skills" title="Skills">
          <Skills />
        </Tab>
        <Tab key="testimonial" title="Testimonial">
          <Testimonials />
        </Tab>
      </Tabs>
    </div>
  );
}
