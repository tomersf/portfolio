"use client";
import React from "react";
import TomerSvg from "../self-portrait-svg";
import AboutContainer from "../containers/about";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex gap-11 ">
      <div className="w-full ">
        <div>
          <AboutContainer />
        </div>
      </div>
      <div className="md:flex w-full h-full hidden">
        <div className="w-full">
          <TomerSvg />
        </div>
      </div>
    </div>
  );
};

export default About;
