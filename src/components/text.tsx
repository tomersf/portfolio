"use client";
import React from "react";
import { ReactTyped } from "react-typed";

const TextAnimation = ({ startAnimation }: { startAnimation: boolean }) => {
  if (!startAnimation) return null;
  const strings = ["Developer.", "Devops.", "Full-Stack."];

  return (
    <div className=" sm:text-2xl md:text-5xl lg:text-6xl font-merriweather font-thin tracking-wider text-secondary md:m-2">
      <ReactTyped
        strings={strings}
        typeSpeed={110}
        backSpeed={130}
        loop
        className="bg-primary rounded-md pl-2"
      />
    </div>
  );
};

export default TextAnimation;
