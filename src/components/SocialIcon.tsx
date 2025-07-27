"use client";

import { motion } from "framer-motion";

interface SocialIconProps {
  src: string;
  alt: string;
  className?: string;
}

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

export function SocialIcon({ src, alt, className = "w-8 h-8 md:w-10 md:h-10 cursor-pointer" }: SocialIconProps) {
  return (
    <motion.img
      key={alt}
      src={src}
      alt={alt}
      className={className}
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
  );
} 