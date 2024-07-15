import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Divider } from "@nextui-org/divider";

import { projects } from "@/config/site";

export default function Projects() {
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
    <section className="flex flex-wrap gap-4 max-w-xl">
      {projects.map((item) => (
        <div key={item.title}>
          <Card
            isBlurred
            className="dark:border-white/20 border-1 p-2 md:p-4 "
            shadow="none"
          >
            <CardHeader className="text-xl font-semibold">
              {item.title}
              <span className="px-2 text-gray-500">·</span>
              <div className="inline-flex items-center gap-2">
                {item.links.map((el) => (
                  <Link key={el.url} isExternal href={el.url}>
                    {el.icon}
                  </Link>
                ))}
              </div>
            </CardHeader>
            <Divider className="w-[93%] h-[0.05rem] mx-auto sm:w-[95%]" />
            <CardBody className="overflow-visible text-sm py-2 md:text-base text-default-600">
              {item.description}
            </CardBody>
            <CardFooter className="">
              <AvatarGroup isBordered max={8} size={avatarSize}>
                {item.stack.map((el) => (
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
        </div>
      ))}
    </section>
  );
}
