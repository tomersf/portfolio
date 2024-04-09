"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect } from "react";

const Logo = () => {
  const controls = useAnimationControls();
  const { theme } = useTheme();

  useEffect(() => {
    controls.set({ opacity: 0, y: -100 });
    controls.start({ opacity: 1, y: 0 });
  }, [theme, controls]);

  return (
    <div className="hover:cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
      <motion.div
        className="dark:bg-primary dark:rounded-r-full !dark:hidden w-64 h-40 relative"
        animate={controls}
        initial={{ opacity: 0, y: -100 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: 0.1,
        }}
      />
      <Image
        src="/logo.png"
        alt="logo"
        width={260}
        height={382}
        className="absolute top-0 left-0"
      />
    </div>
  );
};

export default Logo;
