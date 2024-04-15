import React from "react";
import { Badge } from "./ui/badge";

export type ContainerProps = {
  body: string | React.ReactNode;
  badge: string | React.ReactNode;
  bgColor?: string;
  ring?: string;
  badgeColor?: string;
  footer?: string | React.ReactNode;
};

export default function Container({
  body,
  badge,
  badgeColor,
  bgColor,
  footer,
  ring,
}: ContainerProps) {
  return (
    <div className="w-full mx-auto py-10 px-10 md:p-5">
      <div className="relative group">
        <div className="border border-primary rounded-md p-2 space-y-2 bg-secondary group-hover:translate-x-3 group-hover:translate-y-3 transition-all relative z-50">
          <div className="p-3 font-mono">{body}</div>
          <span className="absolute -top-8 right-0 text-3xl">
            {typeof badge !== "string" ? (
              badge
            ) : (
              <Badge className={`hover:${badgeColor ?? "bg-primary"} text-xl`}>
                {badge}
              </Badge>
            )}
          </span>
          <div>
            {typeof footer !== "string" ? (
              footer
            ) : (
              <h1 className="text-base">{footer}</h1>
            )}
          </div>
        </div>
        <div
          className={`absolute top-0 right-0 translate-x-3 translate-y-3 w-full h-full rounded-md bg-opacity-50 ${
            bgColor ?? "bg-primary"
          } ${ring} ${ring ? "ring-1" : ""}`}
        />
      </div>
    </div>
  );
}
