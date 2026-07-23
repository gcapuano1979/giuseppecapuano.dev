"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        mx-auto
        max-w-6xl
        px-6
        py-24
      "
    >
      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="
          mb-12
          text-3xl
          font-bold
          text-white
        "
      >
        Projects
      </motion.h2>


      <div
        className="
          grid
          gap-8
          md:grid-cols-2
        "
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-8
              transition
              hover:border-blue-400/40
            "
          >

            <span
              className="
                text-sm
                text-blue-400
              "
            >
              {project.type}
            </span>


            <h3
              className="
                mt-3
                text-2xl
                font-semibold
                text-white
              "
            >
              {project.title}
            </h3>


            <p
              className="
                mt-4
                text-zinc-400
              "
            >
              {project.description}
            </p>


            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2
              "
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-white/10
                    px-3
                    py-1
                    text-xs
                    text-zinc-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>


            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-white
                  hover:text-blue-400
                "
              >
                View repository
                <ArrowUpRight size={16} />
              </a>
            )}

          </motion.article>
        ))}
      </div>

    </section>
  );
}