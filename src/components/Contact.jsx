import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-12">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email */}
          <div className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition">
            <FaEnvelope className="text-yellow-400 text-2xl" />
            <a href="mailto:krishnapriyam074@gmail.com" className="text-lg">
              krishnapriyam074@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition">
            <FaPhoneAlt className="text-yellow-400 text-2xl" />
            <a href="tel:+918589873756" className="text-lg">
              +91 8589873756
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition md:col-span-2">
            <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
            <span className="text-lg">Chennai, India</span>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-6 mt-6 w-full md:col-span-2">
            <a
              href="https://linkedin.com/in/krishna-priya-m-42451a278"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/Krishnapriya-2004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
