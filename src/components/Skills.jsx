import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { 
  SiMongodb, 
  SiTailwindcss, 
  SiJavascript, 
  SiMysql, 
  SiBootstrap, 
  SiFigma, 
  SiAdobeillustrator 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 text-5xl" /> },
  { name: "Java", icon: <FaJava className="text-red-500 text-5xl" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 text-5xl" /> },
  { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-600 text-5xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="flex flex-col items-center justify-center gap-3 bg-gray-800 rounded-xl py-6 px-4 shadow-lg hover:shadow-2xl transition-shadow"
            >
              {skill.icon}
              <span className="text-lg font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
