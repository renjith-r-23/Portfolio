import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <iframe
              title="map"
              width="100%"
              height="300"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=Pathanamthitta,+Kerala,+India&key=YOUR_API_KEY"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">ADDRESS</h2>
              <p className="text-gray-600">Pathanamtitta, 690504</p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">EMAIL</h2>
              <a href="mailto:renjithnrd3@gmail.com" className="text-indigo-500">
                renjithnrd3@gmail.com
              </a>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">PHONE</h2>
              <p className="text-gray-600">xxxx-xxxx-xx</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800">Get in touch</h2>
            <p className="text-gray-600 mb-5">
              I'd love to hear from you! Whether you have a project in mind, want to discuss collaboration, or simply want to say hello, don't hesitate to reach out. Feel free to contact me through the form provided below.
            </p>
            <form
              name="contact"
              className="text-left"
              // Add form fields here
            >
              <div className="mb-4">
                <label htmlFor="name" className="text-sm font-semibold text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="text-sm font-semibold text-gray-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
