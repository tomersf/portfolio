import React from "react";
import Container from "../container";
import { ContainerProps } from "../container";

type Props = ContainerProps;

const ExperienceContainer = (props: Props) => {
  return <Container {...props} />;
};

export default ExperienceContainer;
