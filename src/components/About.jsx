import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg leading-relaxed text-gray-300 mb-6"
        >
          Hi, I’m <span className="font-semibold text-yellow-400">Krishna Priya</span>, a{" "}
          <span className="font-semibold">Full Stack Developer in progress</span> with a strong
          passion for both <span className="text-teal-400">code</span> and{" "}
          <span className="text-pink-400">creative design</span>. I love transforming ideas into
          interactive, user-friendly applications that not only function smoothly but also look
          visually appealing.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg leading-relaxed text-gray-300 mb-6"
        >
          I’m currently pursuing a <span className="font-semibold">Full Stack Development course</span>{" "}
          at <span className="font-semibold">I5 Technology Solutions Pvt Ltd</span>, where I’m
          sharpening my skills in <span className="text-blue-400">React, JavaScript, Tailwind CSS, SQL</span>,{" "}
          and <span className="text-red-400">Java</span>. Alongside coding, I also explore{" "}
          <span className="text-pink-400">UI/UX design with Figma</span> and{" "}
          <span className="text-orange-400">graphic design in Illustrator</span>, giving me the
          ability to bridge the gap between design and development.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg leading-relaxed text-gray-300"
        >
          My goal is simple: to keep learning, keep building, and create{" "}
          <span className="text-yellow-300">digital experiences</span> that feel effortless and
          engaging for users. 🚀
        </motion.p>
      </div>
    </section>
  );
}
