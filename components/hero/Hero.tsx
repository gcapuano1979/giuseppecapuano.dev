"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        flex
        min-h-[85vh]
        items-center
        px-6
        md:px-8
      "
    >
      <div className="mx-auto w-full max-w-6xl">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-sm
            text-zinc-400
          "
        >
          <span className="
            h-2
            w-2
            rounded-full
            bg-green-400
          " />

          Available for interesting projects
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            mb-6
            font-mono
            text-sm
            text-blue-400
          "
        >
          &gt; building scalable software systems
        </motion.p>


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            text-6xl
            font-bold
            tracking-tight
            text-white
            md:text-8xl
          "
        >
          Giuseppe
          <br />
          Capuano
        </motion.h1>


        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-8
            text-2xl
            text-zinc-400
            md:text-4xl
          "
        >
          Backend Java Engineer
          <br />
          Full Stack Angular Developer
        </motion.h2>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="
            mt-8
            max-w-xl
            text-lg
            leading-relaxed
            text-zinc-500
          "
        >
          I design and build reliable backend systems,
          REST APIs and modern web applications
          focused on scalability and maintainability.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="
            mt-10
            flex
            gap-4
          "
        >

          <button
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-6
              py-3
              font-medium
              text-black
              transition
              hover:bg-zinc-200
            "
          >
            View Projects
            <ArrowRight size={18} />
          </button>


          <button
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              px-6
              py-3
              text-white
              transition
              hover:bg-white/10
            "
          >
            <FaGithub size={18} />
            GitHub
          </button>

        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="
            mt-16
            font-mono
            text-sm
            text-zinc-600
          "
        >
          Java&nbsp;&nbsp;•&nbsp;&nbsp;
          Spring Boot&nbsp;&nbsp;•&nbsp;&nbsp;
          Angular&nbsp;&nbsp;•&nbsp;&nbsp;
          Docker
        </motion.div>

      </div>
    </section>
  );
}