"use client";

import { BoxReveal } from "@/components/magicui/box-reveal";

export function WorkSection() {
  return (
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
  );
} 