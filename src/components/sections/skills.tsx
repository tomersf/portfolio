import React from "react";
import FrontendContainer from "../containers/frontend";
import BackendContainer from "../containers/backend";
import DevopsContainer from "../containers/devops";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row">
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
