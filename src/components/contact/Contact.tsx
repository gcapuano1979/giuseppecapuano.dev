"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  Mail,
} from "lucide-react";


export default function Contact() {
  return (
    <section
      id="contact"
      className="
        mx-auto
        max-w-6xl
        px-6
        py-24
      "
    >

      <motion.div
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
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-10
          text-center
        "
      >

        <h2
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          Let's build something great
        </h2>


        <p
          className="
            mx-auto
            mt-5
            max-w-xl
            text-lg
            text-zinc-400
          "
        >
          Interested in software architecture,
          enterprise applications or modern
          web development?
        </p>


        <div
          className="
            mt-8
            flex
            justify-center
            gap-4
          "
        >

          <a
            href="mailto:your.email@example.com"
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
            <Mail size={18} />
            Email
          </a>


          <a
            href="https://github.com/gcapuano1979"
            target="_blank"
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-white
              transition
              hover:bg-white/10
            "
          >
            <FaGithub />
            GitHub
          </a>


          <a
            href="#"
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-white
              transition
              hover:bg-white/10
            "
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </motion.div>

    </section>
  );
}