import { motion } from "framer-motion";

export default function ProjectCard({ title, summary, stack }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((s, i) => (
          <span key={i} className="bg-white/10 px-2 py-1 rounded text-xs">
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}


