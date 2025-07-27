"use client";

import { ProfileSection } from "@/components/ProfileSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start mt-20 h-screen md:p-0 px-4">
      <div className="flex flex-col items-start justify-start gap-8 md:gap-16">
        <ProfileSection />
        <AboutSection />
        <WorkSection />
        <hr className="w-full border-t-2 border-gray-200" />
        <ContactSection />
      </div>
    </main>
  );
}
