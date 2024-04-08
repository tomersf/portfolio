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

type NavOption = {
  label: string;
  href: string;
};

const navOptions: NavOption[] = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
  { label: "Projects", href: "/projects" },
];

const Navarbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {navOptions.map((option) => (
            <Link href={option.href} legacyBehavior passHref key={option.label}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {option.label}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navarbar;
