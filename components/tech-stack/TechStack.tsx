"use client";

import { motion } from "framer-motion";
import {
  FaJava,
  FaAngular,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";


const technologies = [
  {
    name: "Java",
    description: "Backend Development",
    icon: FaJava,
  },
  {
    name: "Spring Boot",
    description: "Enterprise APIs",
    icon: SiSpringboot,
  },
  {
    name: "Angular",
    description: "Frontend Applications",
    icon: FaAngular,
  },
  {
    name: "TypeScript",
    description: "Modern Web Development",
    icon: SiTypescript,
  },
  {
    name: "Docker",
    description: "Containers & Deployment",
    icon: FaDocker,
  },
  {
    name: "PostgreSQL",
    description: "Database Design",
    icon: SiPostgresql,
  },
  {
    name: "Git",
    description: "Version Control",
    icon: FaGitAlt,
  },
];


export default function TechStack() {
  return (
    <section
      id="stack"
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
        Tech Stack
      </motion.h2>


      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {technologies.map(
          ({
            name,
            description,
            icon: Icon,
          },
          index) => (
            <motion.div
              key={name}
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
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                transition
                hover:border-blue-400/40
              "
            >

              <Icon
                size={36}
                className="
                  mb-5
                  text-blue-400
                "
              />

              <h3
                className="
                  text-xl
                  font-semibold
                  text-white
                "
              >
                {name}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-zinc-400
                "
              >
                {description}
              </p>

            </motion.div>
          )
        )}
      </div>

    </section>
  );
}