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
    <div className="flex flex-col sm:px-0 md:gap-11 items-center justify-center px-4">
      <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-8xl border-b-2 border-b-primary tracking-wide">
        Experience
      </h1>
      <div className="w-5/6">
        <Carousel
          opts={{
            loop: false,
          }}
          className="relative"
        >
          <CarouselContent>
            {experiences.map((experience, index) => {
              const { ring, bg, border } =
                rings[Math.floor(Math.random() * rings.length)];
              return (
                <CarouselItem
                  key={index}
                  className=" md:basis-1/2 lg:basis-1/3"
                >
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
          <CarouselPrevious className="mx-6 sm:mx-0" />
          <CarouselNext className="mx-4 sm:mx-0" />
        </Carousel>
      </div>
    </div>
  );
}
