import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";

import { experience } from "@/config/site";

export default function Experience() {
  const [avatarSize, setAvatarSize] = useState<"sm" | "md">("sm");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setAvatarSize("md");
      } else {
        setAvatarSize("sm");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col gap-4 max-w-xl">
      {experience.map((item) => (
        <Card
          key={item.role}
          isBlurred
          className="p-2 border-1 dark:border-white/20 md:p-4 md:min-w-56"
          shadow="none"
        >
          <CardHeader className="flex flex-col items-start">
            <p className="text-sm text-default-400">{item.period}</p>
            <h3 className="font-semibold text-xl">{item.role}</h3>
          </CardHeader>
          <Divider className="w-[93%] mx-auto sm:w-[95%]" />
          <CardBody>
            <p className="text-sm text-default-800 md:text-base">
              <ul className="space-y-2">
                {item.description.map((el) => (
                  <li key={el.key}>
                    <span className="px-2">·</span> {el.para}
                  </li>
                ))}
              </ul>
            </p>
          </CardBody>
          <CardFooter className="flex flex-wrap gap-2 pt-2 text-sm">
            <AvatarGroup isBordered max={20} size={avatarSize}>
              {item.lang.map((el) => (
                <Avatar
                  key={el.name}
                  classNames={{
                    icon: "p-2",
                    base: "bg-background",
                  }}
                  icon={el.icon}
                />
              ))}
            </AvatarGroup>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
