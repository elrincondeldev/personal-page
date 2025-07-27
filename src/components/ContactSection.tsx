"use client";

import { BoxReveal } from "@/components/magicui/box-reveal";

export function ContactSection() {
  return (
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
  );
}
