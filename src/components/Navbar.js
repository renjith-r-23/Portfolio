import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-blue-900 md:sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-semibold text-white mb-4 md:mb-0 text-3xl">
          <a href="#about" className="ml-3">
            Renjith R
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-gray-300">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-gray-300">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-gray-300">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white">
          Connect with me
          <ArrowRightIcon className="w-5 h-5 ml-1" />
        </a>
      </div>
    </header>
  );
}
