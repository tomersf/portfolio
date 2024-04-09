"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { motion } from "framer-motion";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <div className="relative flex md:flex-col w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} dark:text-slate-300 !dark:text-white`}
        onClick={() => {
          setTheme("light");
        }}
      >
        <SunIcon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} dark:text-slate-300 !dark:text-white}`}
        onClick={() => {
          setTheme("dark");
        }}
      >
        <MoonIcon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div className="absolute inset-0 z-0 flex md:flex-col dark:justify-end !dark:justify-start">
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="w-1/2 h-full md:w-full md:h-1/2 rounded-full bg-gradient-to-r from-accent to-accent"
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
