import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio Website",
    period: "2024",
    stack: ["React", "Tailwind CSS", "Vite"],
    summary:
      "Built and deployed a responsive personal portfolio website to showcase projects, skills, and resume. Designed with React and Tailwind CSS, optimized using Vite.",
  },
  {
    title: "SB Works – Freelancing Platform",
    period: "2024",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    summary:
      "Developed a MERN-based platform connecting freelancers and clients. Features job posting, proposals, hiring workflows, and secure authentication with RESTful APIs.",
  },
  {
    title: "React Task Manager App",
    period: "2024",
    stack: ["React.js", "LocalStorage"],
    summary:
      "Created a task management app with add, update, and delete features. Used React hooks with localStorage for persistent storage and reusable components.",
  },
  {
    title: "Early-Stage Sepsis Prediction",
    period: "2024",
    stack: ["Python", "Scikit-learn", "Gradio"],
    summary:
      "Machine learning tool predicting early sepsis from patient vitals. Achieved 92% accuracy with Random Forest and built an interactive interface with Gradio.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{project.period}</p>
              <p className="text-gray-300 mb-4">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
