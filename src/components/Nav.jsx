import React, { useState } from "react";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaFileAlt, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="fixed top-0 left-0 w-full bg-white text-gray-900 shadow-md z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#home" className="text-2xl font-bold text-yellow-400">
          Krishna Priya
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a href="#home" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <FaUser /> About
            </a>
          </li>
          <li>
            <a href="#skills" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <FaCode /> Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <FaProjectDiagram /> Projects
            </a>
          </li>
          <li>
            <a href="#resume" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <FaFileAlt /> Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <FaEnvelope /> Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <a href="#home" className="flex items-center gap-2 hover:text-yellow-400 transition">
            <FaHome /> Home
          </a>
          <a href="#about" className="flex items-center gap-2 hover:text-yellow-400 transition">
            <FaUser /> About
          </a>
          <a href="#skills" className="flex items-center gap-2 hover:text-yellow-400 transition">
            <FaCode /> Skills
          </a>
          <a href="#projects" className="flex items-center gap-2 hover:text-yellow-400 transition">
            <FaProjectDiagram /> Projects
          </a>
          <a href="#resume" className="flex items-center gap-2 hover:text-yellow-400 transition">
            <FaFileAlt /> Resume
          </a>
          <a href="#contact" className="flex items-center gap-2 hover:text-yellow-400 transition">
            <FaEnvelope /> Contact
          </a>
        </div>
      )}
    </nav>
  );
}
