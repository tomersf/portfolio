import { BadgeLevel as Level } from "@/lib/constant";
import React from "react";
import { Badge } from "./ui/badge";

type Props = {
  level: Level;
};

const BadgeLevel = ({ level }: Props) => {
  const getLevel = () => {
    switch (level) {
      case Level.Beginner:
        return <Badge className="bg-lime-500">{level}</Badge>;

      case Level.Novice:
        return <Badge className="bg-orange-500">{level}</Badge>;

      case Level.Competent:
        return <Badge className="bg-gray-500">{level}</Badge>;

      case Level.Proficient:
        return <Badge className="bg-blue-800">{level}</Badge>;

      case Level.Skilled:
        return <Badge className="bg-red-500">{level}</Badge>;

      case Level.Intermediate:
        return <Badge className="bg-stone-700">{level}</Badge>;

      case Level.Advanced:
        return <Badge className="bg-amber-700">{level}</Badge>;

      default:
        return null;
    }
  };

  return <div>{getLevel()}</div>;
};

export default BadgeLevel;
