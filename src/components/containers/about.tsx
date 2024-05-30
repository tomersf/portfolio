import React from "react";
import Container from "../container";

type Props = {};

const AboutContainer = (props: Props) => {
  const body = getAboutBody();
  return (
    <Container
      body={body}
      badge="About Me"
      footer="@tomersf"
      title="Hey, I'm Tomer."
      containerClassName="p-5"
    />
  );
};

function getAboutBody() {
  return (
    <div className="tracking-wide">
      <p className="font-medium line-clamp-2 mb-0.5">
        Computer science graduate from Israel.
      </p>
      <p>
        A passionate <span className="font-bold">Developer</span>, seeking for
        opportunities to grow professionally and contribute in a meaningful way.
      </p>
      <p>Constantly learning and always ready for an advenutre!</p>
    </div>
  );
}

export default AboutContainer;
