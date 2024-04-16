import React from "react";
import Container from "../container";
import { ContainerProps } from "../container";

type Props = ContainerProps;

const ExperienceContainer = ({ footer: techStack, ...props }: Props) => {
  const stack = techStack ? (
    <footer className="text-opacity-90 text-zinc-600">
      <span className="font-bold text-sm md:text-lg">Stack: </span>
      <span className="text-xs font-light md:text-base lg:text-lg">
        {techStack}
      </span>
    </footer>
  ) : null;
  return <Container {...props} footer={stack} />;
};

export default ExperienceContainer;
