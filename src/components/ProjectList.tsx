import { ProjectsType } from "@/utils/CardData";
import Link from "next/link";
import React from "react";

export default function ProjectList({
  projectLink,
  title,
  description,
  icons,
}: ProjectsType) {
  return (
    <div className="mx-3 px-2 py-4 border rounded-md shadow-md">
      <h1 className="text-xl font-bold text-gray-800 mb-2">
        <Link
          href={projectLink}
          className="inline cursor-pointer hover:text-blue-500"
        >
          {title}
        </Link>
      </h1>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex space-x-4">
        {icons.map((TechIcon, i) => (
          <TechIcon
            key={i}
            className="h-6 w-6 text-gray-500 hover:text-blue-500 transition-colors duration-300 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}
