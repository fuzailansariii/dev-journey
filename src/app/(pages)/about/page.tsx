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
    <div className="md:max-w-screen-xl md:mx-auto my-8 items-center font-nunito">
      <div className="md:w-full md:h-[70%] md:flex">
        <div className="md:w-1/2 md:my-auto">
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
        </div>

        <div className="m-5 md:w-1/2">
          <h1 className="font-quicksand font-bold text-3xl my-2 py-2">
            Skills & Tools
            <Separator />
          </h1>
          {/* IconCloud to show the skillsIcons */}
          <div className="relative flex h-[70%] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg m-5 p-16">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>

      <div className="m-5">
        <h1 className="font-quicksand font-bold text-3xl my-2 py-2">
          Projects
          <Separator />
        </h1>
        <div className="md:grid md:grid-cols-3">
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
      </div>
    </div>
  );
}

export default About;
