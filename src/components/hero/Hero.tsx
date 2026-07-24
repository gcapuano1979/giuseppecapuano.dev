"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        flex
        min-h-screen
        items-center
        px-6
        pt-20
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl
          w-full
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p
            className="
              mb-4
              font-mono
              text-sm
              uppercase
              tracking-[0.3em]
              text-blue-400
            "
          >
            Software Engineer
          </p>


          <h1
            className="
              max-w-4xl
              text-5xl
              font-bold
              leading-tight
              text-white
              md:text-7xl
            "
          >
            Giuseppe Capuano
          </h1>


          <h2
            className="
              mt-6
              max-w-3xl
              text-3xl
              font-semibold
              text-zinc-200
              md:text-5xl
            "
          >
            Senior Software Engineer
          </h2>


          <p
            className="
              mt-8
              max-w-2xl
              text-xl
              leading-relaxed
              text-zinc-400
            "
          >
            Designing reliable software systems
            for over 20 years.
          </p>


          <p
            className="
              mt-4
              max-w-2xl
              text-lg
              leading-relaxed
              text-zinc-500
            "
          >
            Building enterprise and mission-critical
            solutions with a focus on architecture,
            quality and maintainability.
          </p>


          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >
            {[
              "Java",
              "Spring Boot",
              "Angular",
            ].map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  text-sm
                  text-zinc-300
                "
              >
                {technology}
              </span>
            ))}
          </div>


          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              mt-10
              inline-flex
              rounded-full
              bg-white
              px-7
              py-3
              font-medium
              text-black
              transition
              hover:bg-zinc-200
            "
          >
            Explore my work
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}