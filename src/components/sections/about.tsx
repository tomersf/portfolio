import React from "react";
import TomerSvg from "../self-portrait-svg";
import AboutContainer from "../containers/about";
import ResumeButton from "../resume-button";

const About = () => {
  return (
    <div className="flex gap-11">
      <div className="w-full flex flex-col items-center md:items-end">
        <div>
          <AboutContainer />
        </div>
        <div className="relative flex justify-end  md:pr-2">
          <ResumeButton />
        </div>
      </div>
      <div className="md:block w-full hidden">
        <div className="w-full">
          <TomerSvg />
        </div>
      </div>
    </div>
  );
};

export default About;
