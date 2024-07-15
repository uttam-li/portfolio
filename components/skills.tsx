import React, { createElement } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

import { skills } from "@/config/site";

export default function Skills() {
  return (
    <section className="flex flex-col gap-4 md:flex-row max-w-xl md:max-w-4xl">
      {skills.map((item) => (
        <Card
          key={item.category}
          isBlurred
          className="p-2 border-1 dark:border-white/20 md:p-4 md:min-w-56"
          shadow="none"
        >
          <CardHeader className="flex items-center gap-2 text-xl font-semibold md:mb-4">
            {item.icon}
            {item.category}
          </CardHeader>
          <Divider className="w-[93%] h-[0.05rem] mx-auto sm:w-[95%]" />
          <CardBody>
            <ul className="inline-flex flex-wrap items-end gap-4 md:block sm:space-y-4 text-default-600 group transition-all">
              {item.lang.map((el) => (
                <li
                  key={el.name}
                  className="flex items-center gap-2 text-sm mt-2 md:mt-4"
                >
                  <span>
                    {createElement(el.icon, { size: 24, color: el.color })}
                  </span>
                  {el.name}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}
