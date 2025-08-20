import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6"
    >
      {/* Left: Intro Text */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-yellow-400">Krishna Priya</span>
        </h1>
        <h2 className="text-2xl text-gray-300">
          Aspiring Full Stack Developer & Creative Designer
        </h2>
        <p className="text-lg text-gray-400 max-w-lg">
          Passionate about building modern web apps and crafting beautiful
          user experiences. Currently pursuing Full Stack Development at{" "}
          <span className="font-semibold text-teal-400">
            I5 Technology Solutions Pvt Ltd
          </span>.
        </p>

        <div className="space-x-4 mt-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right: Profile Image in a Box */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="profile.jpg"  // 👉 make sure your image is in public/
          alt="Krishna Priya"
          className="w-72 h-80 object-cover rounded-xl border-4 border-yellow-400 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
