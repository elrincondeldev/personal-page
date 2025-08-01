"use client";

import { BoxReveal } from "@/components/magicui/box-reveal";

const sponsorLinks = [
  {
    sponsorText: "Máster Online en Programación para Creativos LABASAD",
    link: "https://www.labasad.com/master/master-online-en-programacion-para-creativos/",
  },
  {
    sponsorText: "Emergent.sh",
    link: "https://app.emergent.sh/",
  },
];

export function SponsorSection() {
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="flex flex-col tems-start justify-start gap-4">
          {sponsorLinks.map((sponsor) => (
            <a
              className="underline"
              href={sponsor.link}
              target="_blank"
              key={sponsor.sponsorText}
            >
              <p className="text-lg md:text-xl">{sponsor.sponsorText}</p>
            </a>
          ))}
        </div>
      </BoxReveal>
    </div>
  );
}
