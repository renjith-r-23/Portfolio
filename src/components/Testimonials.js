import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-200 py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">
          Client Testimonials
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div className="bg-white rounded-lg p-5 shadow-md">
              <div className="mb-4">
                <TerminalIcon className="w-8 h-8 text-gray-500 mb-2" />
                <p className="text-gray-600 leading-relaxed">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <img
                  alt="testimonial"
                  src={testimonial.image}
                  className="w-12 h-12 rounded-full object-cover object-center mr-3"
                />
                <div>
                  <span className="text-lg font-medium text-gray-800">
                    {testimonial.name}
                  </span>
                  <span className="text-gray-600 text-sm">{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
