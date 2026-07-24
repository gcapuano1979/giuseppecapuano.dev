"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    heading: "20+",
    title: "Years Building Software",
  },
  {
    heading: "Enterprise",
    title: "Java Platforms",
  },
  {
    heading: "Defense • Railway",
    title: "Healthcare • Cybersecurity",
    description: "Mission-Critical Domains",
  },
  {
    heading: "Full Stack",
    title: "Angular Applications",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Career Highlights
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={`${item.heading}-${index}`}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-sm
                transition-all
                hover:-translate-y-2
                hover:border-blue-400/40
                hover:bg-white/10
              "
            >
              <div className="text-3xl font-bold text-blue-400">
                {item.heading}
              </div>

              <div className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </div>

              {item.description && (
                <div className="text-zinc-400">
                    {item.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}