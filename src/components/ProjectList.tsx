import { ProjectsType } from "@/utils/CardData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectList({
  projectLink,
  title,
  description,
  projectImage,
  tech,
  githubLink,
}: ProjectsType) {
  return (
    <div className="mx-3 px-4 py-4 border rounded-md shadow-md">
      <h1 className="text-xl font-bold text-gray-800 mb-2">
        <Link
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline cursor-pointer hover:text-blue-500 transition-all duration-200"
        >
          {title}
        </Link>
      </h1>
      <p className="text-gray-600 mb-2">{description}</p>
      <Image
        src={projectImage}
        alt={title}
        className="border-2 rounded-lg mb-2"
      />
      <div className="flex justify-between items-center">
        <p className="">{tech}</p>
        <div className="text-2xl cursor-pointer hover:text-red-600 transition-all duration-200">
          {githubLink.map((github, index) => (
            <Link
              key={index}
              href={github.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <github.icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
