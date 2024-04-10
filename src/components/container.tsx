import React from "react";
import { Badge } from "./ui/badge";

export default function Container() {
  return (
    <div className="w-full mx-auto py-10 px-10 md:p-5 gap-y-20 gap-10 ">
      <div className="relative group">
        <div className="border border-primary rounded-md p-2 space-y-2 bg-secondary group-hover:translate-x-3 group-hover:translate-y-3 transition-all relative z-50">
          <div className="p-3 font-mono">
            <h1 className="font-bold">{"Hey, I'm Tomer."}</h1>
            <p className="font-medium line-clamp-2">
              Computer science graduate from Israel.
            </p>
            <p>
              A passionate <span className="font-semibold">Developer</span> and{" "}
              <span className="font-semibold">DevOps</span> enthusiast, seeking
              for an opportunity to grow professionally and contribute in a
              meaningful way.
            </p>
            <p>Constantly learning and always ready for an advenutre!</p>
          </div>
          <span className=" absolute -top-8 right-0 text-3xl">
            <Badge className="hover:bg-primary/100 text-xl">About Me</Badge>
          </span>
          <div>
            <h1 className="text-base">@tomersf</h1>
          </div>
        </div>
        <div className="absolute top-0 right-0 translate-x-3 translate-y-3 w-full h-full rounded-md bg-primary" />
      </div>
    </div>
  );
}
