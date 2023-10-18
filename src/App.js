import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-5">
          {/* Content */}
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
