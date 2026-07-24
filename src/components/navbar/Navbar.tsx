"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Stack",
    href: "#stack",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];


export default function Navbar() {
  return (
    <motion.nav
      initial={{
        y: -20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        fixed
        top-6
        left-1/2
        z-50
        -translate-x-1/2
        rounded-full
        border
        border-white/10
        bg-black/40
        px-6
        py-3
        backdrop-blur-xl
      "
    >

      <div
        className="
          flex
          items-center
          gap-6
        "
      >

        <span
          className="
            font-bold
            text-white
          "
        >
          GC
        </span>


        <div
          className="
            hidden
            items-center
            gap-5
            md:flex
          "
        >

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-sm
                text-zinc-400
                transition
                hover:text-white
              "
            >
              {link.label}
            </a>
          ))}

        </div>

      </div>

    </motion.nav>
  );
}