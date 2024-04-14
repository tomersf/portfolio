import React from "react";
import Container from "../container";

type Props = {};

const AboutContainer = (props: Props) => {
  const body = getAboutBody();
  return <Container body={body} badge="About Me" footer="@tomersf" />;
};

function getAboutBody() {
  return (
    <>
      <h1 className="font-bold">{"Hey, I'm Tomer."}</h1>
      <p className="font-medium line-clamp-2">
        Computer science graduate from Israel.
      </p>
      <p>
        A passionate <span className="font-semibold">Developer</span> and{" "}
        <span className="font-semibold">DevOps</span> enthusiast, seeking for an
        opportunity to grow professionally and contribute in a meaningful way.
      </p>
      <p>Constantly learning and always ready for an advenutre!</p>
    </>
  );
}

export default AboutContainer;
