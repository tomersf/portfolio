"use client";
import React from "react";
import TomerSvg from "./self-portrait-svg";
import Container from "./container";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="w-full h-full flex justify-between p-2">
      <div className="w-1/2 h-full flex flex-col">
        <div>
          <Container />
        </div>
      </div>
      <div className="w-1/3 ">
        <TomerSvg />
      </div>
    </div>
  );
};

export default About;
