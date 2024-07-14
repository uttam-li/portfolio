import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

import { siteConfig } from "@/config/site";
import { title, paragraph } from "@/components/primitives";

export default function About() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 py-8 md:mt-12 md:px-16 md:py-10">
      <div className="inline-block max-w-xl justify-center">
        <h1 className={title({ size: "md" })}>Uttam Likhiya</h1>
        <p className={paragraph()}>
          {
            "Hello 👋🏼! I am a software developer based in 📍Surat, Gujarat, currently pursuing a Bachelor's degree 🎓 in Computer Engineering. I am capable of building for 🌐 web and 📱 mobile platforms. I’m looking to work on interesting and challenging projects. 💻📚"
          }
        </p>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={"/resume.pdf"}
        >
          Resume
        </Link>

        <Link
          isExternal
          className={buttonStyles({
            variant: "bordered",
            radius: "full",
          })}
          href="mailto:supercelluttam@gmail.com"
        >
          Contact Me
        </Link>
      </div>

      <div className="my-4 inline-flex items-center gap-2">
        <Link
          isExternal
          className={buttonStyles({
            variant: "light",
            radius: "full",
            isIconOnly: true,
          })}
          href={siteConfig.links.twitter}
        >
          <FaXTwitter className="text-default-600" size={24} />
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "light",
            radius: "full",
            isIconOnly: true,
          })}
          href={siteConfig.links.github}
        >
          <FaGithub className="text-default-600" size={24} />
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "light",
            radius: "full",
            isIconOnly: true,
          })}
          href={siteConfig.links.linkedin}
        >
          <FaLinkedin className="text-default-600" size={24} />
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "light",
            radius: "full",
            isIconOnly: true,
          })}
          href={siteConfig.links.instagram}
        >
          <FaInstagram className="text-default-600" size={24} />
        </Link>
      </div>
    </section>
  );
}
