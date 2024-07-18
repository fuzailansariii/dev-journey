"use client";
import React from "react";
import { IdentityCardData, ProjectDetails } from "@/utils/CardData";
import IconCloud from "@/components/magicui/icon-cloud";
import ProjectList from "@/components/ProjectList";
import { Separator } from "@/components/ui/separator";
import IdentityCard from "@/components/IdentityCard";

function About() {
  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "nodedotjs",
    "express",
    "nextdotjs",
    "vercel",
    "git",
    "github",
    "tailwindcss",
  ];
  return (
    <div className="md:max-w-screen-xl md:mx-auto md:flex md:justify-between md:gap-x-3 my-8 items-center font-nunito">
      {IdentityCardData.map((data, index) => (
        <IdentityCard
          key={index}
          title={data.title}
          name={data.name}
          email={data.email}
          image={data.image}
          icons={data.icons}
        />
      ))}

      <div className="m-5">
        <h1 className="font-quicksand font-bold text-3xl my-2 py-2">
          Skills & Tools
          <Separator />
        </h1>
        {/* IconCloud to show the skillsIcons */}
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>

        <h1 className="font-quicksand font-bold text-3xl my-2 py-2">
          Projects
          <Separator />
        </h1>
        <div>
          {ProjectDetails.map((project, index) => (
            <div key={index} className="mb-8">
              <ProjectList
                projectLink={project.projectLink}
                title={project.title}
                description={project.description}
                icons={project.icons}
              />
            </div>
          ))}
        </div>
        <Separator />
      </div>
    </div>
  );
}

export default About;
