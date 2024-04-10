"use client";
import React from "react";
import { motion } from "framer-motion";
import { fontNotoSerif } from "@/lib/fonts";
import TomerSvg from "./self-portrait-svg";
import Container from "./container";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="w-full h-full flex justify-between p-2 bg-red-200">
      <div className="w-1/2 h-full flex flex-col">
        <div>
          <Container />
        </div>
      </div>
      <div className="flex justify-end">
        <TomerSvg />
      </div>
    </div>
  );
};

export default About;
