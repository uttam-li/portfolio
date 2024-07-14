import React from "react";
import { button as buttonStyles } from "@nextui-org/theme";
import { Link } from "@nextui-org/link";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container mx-auto text-center">
        <p className="">&copy; 2024 Uttam Likhiya</p>
        <p className="mt-2 text-sm text-gray-400">
          Licensed under the{" "}
          <a
            className="hover:underline text-blue-400"
            href="https://opensource.org/licenses/MIT"
          >
            MIT License
          </a>
          .
        </p>
        <Link
          isExternal
          className={buttonStyles({
            variant: "light",
            radius: "full",
            isIconOnly: true,
          })}
          href="https://github.com/uttam-li/portfolio"
        >
          <FaGithub className="text-default-600" size={24} />
        </Link>
      </div>
    </footer>
  );
}
