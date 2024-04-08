import React from "react";
import ThemeToggle from "./theme-toggle";
import Logo from "./logo";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="sticky z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex min-h-14 justify-between items-center pr-5">
        <div className="mr-4 hidden md:flex flex-grow">
          <Logo />
          <div className="flex w-full justify-center">
            <Navbar />
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
