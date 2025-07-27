"use client";

import { BoxReveal } from "@/components/magicui/box-reveal";
import { PixelImage } from "@/components/magicui/pixel-image";

export function ProfileSection() {
  return (
    <div>
      <PixelImage src="/profile.JPG" />
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-xl md:text-2xl font-semibold mt-6">
          Hi, my name is Jose
        </p>
      </BoxReveal>
    </div>
  );
} 