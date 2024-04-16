import React from "react";
import { Badge } from "./ui/badge";
import { StageProgress } from "@/lib/constant";

type Props = {
  stage: StageProgress;
};

const Stage = ({ stage }: Props) => {
  const getStage = () => {
    switch (stage) {
      case "IN_PROGRESS":
        return <Badge className="bg-orange-400">{stage}</Badge>;

      case "PLANNING":
        return <Badge className="bg-rose-600">{stage}</Badge>;

      default:
        return null;
    }
  };

  return <div>{getStage()}</div>;
};

export default Stage;
