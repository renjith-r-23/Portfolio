import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-5">
    {<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Renjith R.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm a passionate developer who thrives on turning ideas into amazing apps. My journey in the world of web development through React has been nothing short of exciting. With a keen eye for design and a love for clean, efficient code, I bring concepts to life and create engaging user experiences.
          </p>
          <p className="mb-8 leading-relaxed">
          Welcome to my corner of the internet, where I showcase my projects and share my love for coding. Let's explore the world of web development together and bring your ideas to life!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>}
        </div>
        <div className="md:w-1/2 p-5">
          <img
            className="object-cover object-center rounded-lg shadow-md"
            alt="hero"
            src="renjith1.jpg"
          />
        </div>
      </div>
    </section>
  );
}
