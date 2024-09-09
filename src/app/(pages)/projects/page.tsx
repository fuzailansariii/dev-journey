"use client";
import React from "react";
import { IdentityCardData, ProjectDetails } from "@/utils/CardData";
import IconCloud from "@/components/magicui/icon-cloud";
import ProjectList from "@/components/ProjectList";
import { Separator } from "@/components/ui/separator";
import IdentityCard from "@/components/IdentityCard";
import { slugs } from "@/utils/ResumeData";

function projects() {
  return (
    <div className="md:max-w-screen-xl md:mx-auto my-8 items-center font-nunito">
      <div className="md:w-full md:h-[70%] md:flex">
        <div>
          <IconCloud iconSlugs={slugs} />
        </div>
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

export default projects;
