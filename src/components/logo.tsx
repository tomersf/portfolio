"use client";

import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <div className="hidden md:block">
        <Image src="/logo.png" alt="logo" width={260} height={382} />
      </div>
      <div className="md:hidden">
        <Image src="/logo.png" alt="logo" width={100} height={162} />
      </div>
    </>
  );
};

export default Logo;
