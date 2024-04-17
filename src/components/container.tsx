import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link2Icon } from "@radix-ui/react-icons";
import Stage from "./stage";

export type ContainerProps = {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  titleBorderColor?: string;
  body: string | React.ReactNode;
  badge: string | React.ReactNode;
  bgColor?: string;
  ring?: string;
  badgeColor?: string;
  footer?: string | React.ReactNode;
  linkBtnUrl?: string;
  stage?: "IN_PROGRESS" | "PLANNING" | null;
};

export default function Container({
  title,
  subtitle,
  titleBorderColor,
  body,
  badge,
  badgeColor,
  bgColor,
  footer,
  ring,
  linkBtnUrl,
  stage,
}: ContainerProps) {
  return (
    <div className="w-full mx-auto py-10 px-10 md:p-5 mt-2">
      <div className="relative group">
        <div className="border border-primary rounded-md p-2 space-y-2 bg-secondary group-hover:translate-x-3 group-hover:translate-y-3 transition-all relative z-50">
          <h1
            className={`text-xl md:text-2xl lg:text-3xl font-bold ${titleBorderColor} border-b-2 w-fit`}
          >
            {title}
          </h1>
          {subtitle ? (
            <h3
              className={`${titleBorderColor} font-medium lg:text-lg border-b-2 w-fit`}
            >
              {subtitle}
            </h3>
          ) : null}
          <div className="p-2 overflow-hidden font-mono text-sm sm:text-base lg:text-lg">
            {body}
          </div>
          <div className="absolute -top-8 right-0 text-3xl">
            {typeof badge !== "string" ? (
              badge
            ) : (
              <Badge className={`hover:${badgeColor ?? "bg-primary"} text-xl`}>
                {badge}
              </Badge>
            )}
          </div>

          <div>
            {typeof footer !== "string" ? (
              footer
            ) : (
              <footer className="text-base lg:text-lg font-light text-opacity-85 text-zinc-600">
                {footer}
              </footer>
            )}
          </div>
          <div className="flex flex-col xs:flex-row gap-1 justify-between items-center xs:items-baseline">
            {linkBtnUrl ? (
              <a
                href={linkBtnUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="text-primary"
              >
                <Button className={`${bgColor} gap-1`}>
                  <Link2Icon className="animate-bounce" />
                  Link
                </Button>
              </a>
            ) : null}
            {stage && <Stage stage={stage} />}
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
