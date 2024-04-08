"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="dark:bg-primary dark:rounded-r-full hover:cursor-pointer relative">
      <Image src="/logo.png" alt="logo" width={260} height={382} />
      <div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileHover={{ x: 200, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-0 h-full w-full"
        >
          <motion.p>Animated Text</motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Logo;
