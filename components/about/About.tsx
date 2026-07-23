"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
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
          mb-8
          text-3xl
          font-bold
          text-white
        "
      >
        About Me
      </motion.h2>


      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="
          max-w-3xl
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-8
        "
      >

        <p
          className="
            text-lg
            leading-relaxed
            text-zinc-300
          "
        >
          I am a Senior Software Engineer with over
          20 years of experience in designing and
          developing reliable software systems.
        </p>


        <p
          className="
            mt-5
            text-lg
            leading-relaxed
            text-zinc-300
          "
        >
          My background spans from embedded and
          real-time systems to modern enterprise
          applications built with Java, Spring Boot
          and Angular.
        </p>


        <p
          className="
            mt-5
            text-lg
            leading-relaxed
            text-zinc-300
          "
        >
          I focus on clean architecture,
          maintainability and software quality,
          creating solutions designed to evolve
          over time.
        </p>

      </motion.div>

    </section>
  );
}