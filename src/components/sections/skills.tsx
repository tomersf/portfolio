import React from "react";
import FrontendContainer from "../containers/frontend";
import BackendContainer from "../containers/backend";
import DevopsContainer from "../containers/devops";
import Image from "next/image";
import { rings } from "@/lib/constant";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="https://cdn-icons-png.flaticon.com/512/10255/10255704.png"
        alt="Skills"
        width={256}
        height={256}
      />
      <div className="flex flex-col items-center justify-center -rotate-6">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold">Skills</h1>
        <div className="w-full h-2 bg-indigo-500 rounded-full "></div>
        <div className="w-full h-2 bg-purple-950 rounded-full translate-x-2"></div>
      </div>
      <div className="flex flex-col mt-10  md:flex-row">
        <FrontendContainer />
        <BackendContainer />
      </div>
      <div>
        <DevopsContainer />
      </div>
    </div>
  );
};

export default Skills;
