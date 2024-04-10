"use client";
import React from "react";
import { motion } from "framer-motion";
import { fontNotoSerif } from "@/lib/fonts";
import TomerSvg from "./self-portrait-svg";
import Container from "./container";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="w-full h-full flex justify-between p-2">
      <div className="w-1/3 h-full flex flex-col">
        <div>
          <Container />
        </div>
        <motion.div className="h-full p-2 shadow-lg rounded-md rounded-r-2xl shadow-primary bg-background/50">
          <motion.div></motion.div>
        </motion.div>
      </div>
      <div className="h-full w-2/3 flex justify-center items-center">
        <TomerSvg />
      </div>
    </div>
  );
};

export default About;
