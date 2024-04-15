"use client";

import React from "react";
import { Button } from "./ui/button";

const ResumeButton = () => {
  return (
    <div className="rounded-md">
      <a href="/resume.pdf">
        <Button variant="outline">Download CV</Button>
      </a>
    </div>
  );
};

export default ResumeButton;
