"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { motion } from "framer-motion";
import { animationFadeInStaggerVariants } from "@/lib/animation";
import { navOptions } from "@/lib/constant";

const Navarbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <motion.section
          variants={animationFadeInStaggerVariants()}
          className="flex"
          initial="hidden"
          animate="show"
        >
          {navOptions.map((option) => (
            <motion.div
              key={option.label}
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            >
              <NavigationMenuItem>
                <Link href={option.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent`}
                  >
                    {option.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </motion.div>
          ))}
        </motion.section>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navarbar;
