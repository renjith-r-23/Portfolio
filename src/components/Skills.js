import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">
          Skills & Technologies
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="rounded-lg p-3 shadow-md">
              <div className="flex items-center">
                <BadgeCheckIcon className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-lg font-medium text-gray-800">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
