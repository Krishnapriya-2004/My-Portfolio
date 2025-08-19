import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Resume</h2>
      <p className="text-lg text-gray-300 mb-8">
        You can view or download my resume below.
      </p>
      <a
        href="/krishnaResumeFinal.pdf"  // place your PDF inside public/
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
      >
        <FaDownload className="text-xl" />
        Download Resume
      </a>
    </section>
  );
}
