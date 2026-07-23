"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
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
          mb-16
          text-3xl
          font-bold
          text-white
        "
      >
        Professional Journey
      </motion.h2>


      <div className="relative">

        <div
          className="
            absolute
            left-3
            top-0
            h-full
            w-px
            bg-white/10
            md:left-4
          "
        />


        <div
          className="
            space-y-12
          "
        >
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.period}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="
                relative
                pl-10
                md:pl-14
              "
            >

              <span
                className="
                  absolute
                  left-0
                  top-2
                  h-6
                  w-6
                  rounded-full
                  border
                  border-blue-400/50
                  bg-black
                "
              />


              <div
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

                <p
                  className="
                    font-mono
                    text-sm
                    text-blue-400
                  "
                >
                  {experience.period}
                </p>


                <h3
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  {experience.role}
                </h3>


                <h4
                  className="
                    mt-1
                    text-zinc-400
                  "
                >
                  {experience.company}
                </h4>


                <p
                  className="
                    mt-5
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {experience.description}
                </p>


                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {experience.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
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
                        {technology}
                      </span>
                    )
                  )}
                </div>

              </div>

            </motion.article>
          ))}
        </div>

      </div>

    </section>
  );
}