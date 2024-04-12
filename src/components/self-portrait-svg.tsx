"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Portrait,
  SvgPortraitNoColor,
  SvgPortraitWithColor,
  variants,
} from "@/lib/image";

export default function TomerSvg() {
  const [scope, animate] = useAnimate();
  const [showColorfulSvg, setShowColorfulSvg] = useState(false);
  const [showPortrait, setShowPortrait] = useState(false);
  const handleFirstAnimation = async () => {
    await animate("#mysvg-no-color", { opacity: 0.5 }, { duration: 2 });
    await animate("#mysvg-no-color", { opacity: 0 }, { duration: 2 });
    setShowColorfulSvg(true);
  };

  const handleSecondAnimation = async () => {
    await animate("#mysvg-color", { opacity: 0.5 }, { duration: 2 });
    await animate("#mysvg-color", { opacity: 0 }, { duration: 2 });
    setShowColorfulSvg(false);
    setShowPortrait(true);
  };

  const handleThirdAnimation = async () => {
    await animate("#myportrait", { opacity: 0.5 }, { duration: 2 });
    await animate("#myportrait", { opacity: 0 }, { duration: 2 });
    setShowPortrait(false);
  };

  return (
    <div ref={scope} className="w-full  relative">
      {!showColorfulSvg && !showPortrait && (
        <SvgPortraitNoColor
          onAnimationComplete={() => handleFirstAnimation()}
        />
      )}
      {showColorfulSvg && (
        <SvgPortraitWithColor
          onAnimationComplete={() => handleSecondAnimation()}
        />
      )}
      {showPortrait && (
        <Portrait onAnimationComplete={() => handleThirdAnimation()} />
      )}
    </div>
  );
}
