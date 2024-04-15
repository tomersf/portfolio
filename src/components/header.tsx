import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Shortcuts from "./shortcuts";

const Header = () => {
  return (
    <header className="sticky top-0 z-[60] w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex md:pr-5">
        <div className="flex flex-grow">
          <div className="">
            <Logo />
          </div>
          <div className="hidden md:flex w-full">
            <Navbar />
          </div>
        </div>
        <div className="flex items-center">
          <div className="md:hidden mx-5 hover:bg-accent p-2 hover:rounded-lg">
            <Sidebar />
          </div>
          <div className="pb-1 min-w-24 h-full hidden md:flex sm:items-center md:items-end">
            <Shortcuts />
          </div>
        </div>
        {/* Ability to add dark theme */}
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
};

export default Header;
