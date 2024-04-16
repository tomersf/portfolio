import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ExperienceContainer from "../containers/experience";
import { rings } from "@/lib/constant";
import { experiences } from "@/lib/constant";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Experience() {
  return (
    <div className="flex flex-col md:gap-11 items-center justify-center">
      <h1 className="text-3xl md:text-5xl lg:text-8xl border-b-2 border-b-primary tracking-wide">
        Experience
      </h1>
      <div className="w-2/3 md:w-4/5 lg:h-5/6">
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {experiences.map((experience, index) => {
              const { ring, bg, border } =
                rings[Math.floor(Math.random() * rings.length)];
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <ExperienceContainer
                    title={experience.title}
                    subtitle={experience.subtitle}
                    badge={
                      <Avatar className="p-0.5">
                        <AvatarImage src={experience.avatarUrl} />
                        <AvatarFallback>
                          {experience.avatarFallback}
                        </AvatarFallback>
                      </Avatar>
                    }
                    ring={ring}
                    bgColor={bg}
                    titleBorderColor={border}
                    body={experience.body}
                    footer={experience.techStack}
                    stage={experience.stage ? experience.stage : null}
                    linkBtnUrl={experience.linkBtnUrl}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
