"use client";

import { BoxReveal } from "@/components/magicui/box-reveal";
import { SocialIcon } from "./SocialIcon";

const socialIcons = [
  {
    src: "/instagram_15713420.png",
    alt: "Instagram",
    link: "https://www.instagram.com/elrincondeldev/",
  },
  {
    src: "/tiktok.png",
    alt: "TikTok",
    link: "https://www.tiktok.com/@elrincondeldev",
  },
  {
    src: "/youtube.png",
    alt: "YouTube",
    link: "https://www.youtube.com/@elrincondeldev",
  },
  {
    src: "/linkedin.png",
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/elrincondeldev/",
  },
  {
    src: "/substack.png",
    alt: "Substack",
    link: "https://elrincondeldev.substack.com/",
  },
];

export function AboutSection() {
  return (
    <div className="flex flex-col items-start justify-start gap-2 md:gap-0">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="flex items-center justify-start gap-4">
          <p className="text-xl md:text-2xl">I like to build things</p>
          <a href="https://www.fastresume.dev/" target="_blank">
            <SocialIcon
              src="/indie-kit.svg"
              alt="indie-kit"
              className="w-10 h-10 cursor-pointer"
            />
          </a>
        </div>
      </BoxReveal>

      <div className="flex flex-col md:flex-row md:items-center justify-start gap-2 md:gap-4 h-16">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-xl md:text-2xl">and create content on</p>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="flex items-center justify-start gap-4 h-8 md:h-[3.5rem]">
            {socialIcons.map((icon) => (
              <a href={icon.link} target="_blank" key={icon.alt}>
                <SocialIcon key={icon.alt} {...icon} />
              </a>
            ))}
          </div>
        </BoxReveal>
      </div>
    </div>
  );
}
