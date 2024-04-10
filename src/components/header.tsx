import React from "react";
import ThemeToggle from "./theme-toggle";
import Logo from "./logo";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Shortcuts from "./shortcuts";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex min-h-14 pr-5 md:items-end items-center">
        <div className="hidden md:flex flex-grow">
          <Logo />
          <div className="flex w-full">
            <Navbar />
          </div>
        </div>
        <div className="md:hidden mx-5 hover:bg-accent p-2 hover:rounded-lg">
          <Sidebar />
        </div>
        <div className="pb-1 min-w-24">
          <Shortcuts />
        </div>
        {/* Ability to add dark theme */}
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
};

export default Header;
