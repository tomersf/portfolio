import React from "react";
import Image from "next/image";
import { InnerSkill, skills } from "@/lib/constant";
import SkillsImage from "../skills-image";
import Container from "../container";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import BadgeLevel from "../badge-level";
import { ScrollArea } from "../ui/scroll-area";
type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-8 sm:gap-3">
      <SkillsImage />
      <div className="flex flex-col -rotate-6">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold">Skills</h1>
        <div className="w-full h-2 bg-indigo-500 rounded-full "></div>
        <div className="w-full h-2 bg-purple-950 rounded-full translate-x-2"></div>
      </div>
      <div className="flex flex-col mt-10 gap-8 sm:gap-0 md:flex-row w-5/6 md:w-fit">
        <ScrollArea className="h-[300px] sm:h-full">
          <Container
            title={skills.frontend.title}
            badge={
              <Avatar>
                <AvatarImage src={skills.frontend.badge.avatarUrl} />
                <AvatarFallback>
                  {skills.frontend.badge.avatarFallback}
                </AvatarFallback>
              </Avatar>
            }
            body={buildSkillsBody(skills.frontend.skills)}
            titleBorderColor="border-primary"
            containerClassName="p-0 pr-5 py-4 sm:p-8 md:p-10"
          />
        </ScrollArea>
        <ScrollArea className="h-[300px] sm:h-full">
          <Container
            title={skills.backend.title}
            badge={
              <Avatar className="p-0.5">
                <AvatarImage src={skills.backend.badge.avatarUrl} />
                <AvatarFallback>
                  {skills.backend.badge.avatarFallback}
                </AvatarFallback>
              </Avatar>
            }
            body={buildSkillsBody(skills.backend.skills)}
            titleBorderColor="border-primary"
            containerClassName="p-0 pr-5 py-4 sm:p-8 md:p-10"
          />
        </ScrollArea>
      </div>
      <div className="w-5/6 md:w-1/2">
        <ScrollArea className="h-[300px] sm:h-full">
          <Container
            title={skills.devops.title}
            badge={
              <Avatar className="p-0.5">
                <AvatarImage src={skills.devops.badge.avatarUrl} />
                <AvatarFallback>
                  {skills.devops.badge.avatarFallback}
                </AvatarFallback>
              </Avatar>
            }
            body={buildSkillsBody(skills.devops.skills)}
            bgColor="bg-indigo-500"
            ring="ring-indigo-500"
            titleBorderColor="border-indigo-500"
            containerClassName="p-0 pr-5 py-4 sm:p-6 md:p-10"
          />
        </ScrollArea>
      </div>
    </div>
  );
};

function buildSkillsBody(skills: InnerSkill[]) {
  return (
    <div className="grid xss:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:p-4 md:m-2 md:mx-6 md:gap-12 md:gap-x-20 p-2 gap-6">
      {skills.map((skill) => {
        return (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center"
          >
            <Image src={skill.url} alt={skill.name} width={30} height={30} />
            <span className="font-bold text-sm md:text-base lg:text-lg text-nowrap">
              {skill.name}
            </span>
            <BadgeLevel level={skill.level} />
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
