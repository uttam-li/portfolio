import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Avatar, AvatarIcon } from "@nextui-org/avatar";
import { Divider } from "@nextui-org/divider";

export default function Testimonials() {
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
    <section>
      <Card
        isBlurred
        className="max-w-md p-2 border-1 dark:border-white/20 md:p-4 md:max-w-xl"
        shadow="none"
      >
        <CardHeader className="justify-between">
          <div className="flex gap-4">
            <Avatar
              isBordered
              icon={<AvatarIcon />}
              radius="full"
              size={avatarSize}
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-xl font-semibold leading-none text-default-800">
                Hemang Vekariya
              </h4>
            </div>
          </div>
        </CardHeader>
        <Divider className="w-[93%] my-2 mx-auto sm:w-[95%]" />
        <CardBody className="text-small space-y-2 text-default-600 md:text-base">
          <p>
            <span className="px-2">·</span>
            {
              "Uttam expertise as a full stack developer has been invaluable to our team. His ability to seamlessly navigate both front-end and back-end development has consistently impressed us."
            }
          </p>
          <p>
            <span className="px-2">·</span>
            {
              "Uttam dedication to delivering high-quality code and innovative solutions has significantly contributed to the success of our projects. His collaborative nature and strong communication skills make him a pleasure to work with."
            }
          </p>
          <p>
            <span className="px-2">·</span>
            {
              "I highly recommend Uttam for any development project, as his passion for excellence and drive for results make him an invaluable asset to any team."
            }
          </p>
        </CardBody>
      </Card>
    </section>
  );
}
