import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-200 py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">
          Apps I've Built
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="rounded-lg shadow-md">
              <div className="relative">
                <img
                  alt="gallery"
                  className="object-cover object-center rounded-t-lg"
                  src={project.image}
                />
                <div className="p-5 bg-white rounded-b-lg">
                  <h2 className="text-sm font-medium text-gray-700 mb-2">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h1>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
