"use client";
import ProjectList from "@/components/ProjectList";
import { ProjectDetails } from "@/utils/CardData";

function projects() {
  return (
    <div className="w-full md:w-3/4 mx-auto flex justify-center items-center">
      <div className="grid md:grid-cols-2 md:p-5 w-full md:w-full md:gap-4 gap-y-5">
        {ProjectDetails.map((project, index) => (
          <div key={index} className="">
            <ProjectList
              projectLink={project.projectLink}
              projectImage={project.projectImage}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubLink={project.githubLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default projects;
