"use client";

import { motion } from "framer-motion";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { PixelImage } from "@/components/magicui/pixel-image";

export default function Home() {
  const socialIcons = [
    { src: "/instagram_15713420.png", alt: "Instagram" },
    { src: "/tiktok.png", alt: "TikTok" },
    { src: "/youtube.png", alt: "YouTube" },
    { src: "/linkedin.png", alt: "LinkedIn" },
    { src: "/substack.png", alt: "Substack" },
  ];

  const iconVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <main className="flex flex-col items-center justify-start mt-20 h-screen md:p-0 px-4">
      <div className="flex flex-col items-start justify-start gap-8 md:gap-16">
        <div>
          <PixelImage src="/profile.JPG" />
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-xl md:text-2xl font-semibold mt-6">
              Hi, my name is Jose
            </p>
          </BoxReveal>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 md:gap-0">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="flex items-center justify-start gap-4">
              <p className="text-xl md:text-2xl">I like to build things</p>
              <a href="https://www.fastresume.dev/" target="_blank">
                <motion.img
                  key="indie-kit"
                  src="/indie-kit.svg"
                  alt="indie-kit"
                  className="w-10 h-10 cursor-pointer"
                  variants={iconVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                />
              </a>
            </div>
          </BoxReveal>

          <div className="flex flex-col md:flex-row md:items-center justify-start gap-2 md:gap-4 md:h-16">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p className="text-xl md:text-2xl">and create content on</p>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <div className="flex items-center justify-start gap-4 h-10 md:h-auto">
                {socialIcons.map((icon) => (
                  <motion.img
                    key={icon.alt}
                    src={icon.src}
                    alt={icon.alt}
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
                    variants={iconVariants}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  />
                ))}
              </div>
            </BoxReveal>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-4">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-xl md:text-2xl">
              Currently a product engineer at{" "}
              <a
                href="https://oidotipi.com/"
                target="_blank"
                className="text-blue-500"
              >
                Tipi
              </a>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-lg md:text-2xl">
              Building the first voice assistant created for chefs and kitchen
              managers.
            </p>
          </BoxReveal>
        </div>
        <hr className="w-full border-t-2 border-gray-200" />
        <div className="flex flex-col items-start justify-start gap-4">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-lg md:text-xl">
              Want to sponsor my videos?{" "}
              <a
                href="mailto:elrincondeldev.collabs@gmail.com"
                target="_blank"
                className="text-blue-500"
              >
                Contact me
              </a>
            </p>
          </BoxReveal>
        </div>
      </div>
    </main>
  );
}
