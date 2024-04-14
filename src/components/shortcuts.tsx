"use client";
import React from "react";
import { motion } from "framer-motion";
import icons from "@/lib/icons";
import { animationFadeInStaggerVariants } from "@/lib/animation";

type Props = {};

const Shortcuts = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.ul
        className="flex gap-2 md:gap-6"
        variants={animationFadeInStaggerVariants(0.5, 1.5)}
        initial="hidden"
        animate="show"
      >
        {icons.map((icon) => (
          <motion.li
            key={icon.href}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          >
            <MyLink href={icon.href} svg={icon.svg} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

type MyLinkProps = {
  href: string;
  svg: JSX.Element;
};
export function MyLink({ href, svg }: MyLinkProps) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {svg}
    </a>
  );
}

export default Shortcuts;
