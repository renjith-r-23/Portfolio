import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Renjith R.
            <br className="hidden lg:inline-block" />I love to build amazing websites &
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm a dedicated developer who excels at transforming concepts into exceptional applications. My journey in the realm of web development, particularly with React, has been both exhilarating and fulfilling. With a strong design sensibility and a passion for crafting efficient, clean code, I breathe life into ideas and craft captivating user experiences.
          </p>
          <p className="mb-8 leading-relaxed">
          Welcome to my corner of the internet, where I showcase my projects and share my love for coding. Let's explore the world of web development together and bring your ideas to life!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Come and join
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past all works
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./renjith.jpg"
          />
        </div>
      </div>
    </section>
  );
}
