"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fontNotoSerif } from "@/lib/fonts";
import TextAnimation from "../text";

type Props = {};

const Hero = (props: Props) => {
  const [animationEnded, setAnimationEnded] = useState(false);

  return (
    <div>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <div className="">
          <h1 className="text-xl xss:text-2xl xs:text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light">
            TOMER SHAFIR
          </h1>
          <motion.div
            transition={{ delay: 3 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            onAnimationComplete={() => setAnimationEnded(true)}
          >
            <TextAnimation startAnimation={animationEnded} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
