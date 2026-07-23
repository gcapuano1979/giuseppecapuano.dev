"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8">
      <div className="max-w-4xl">
        <p className="text-zinc-400 mb-4">
          Software Engineer
        </p>

        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold tracking-tight"
        >
          Giuseppe Capuano
        </motion.h1>

        <h2 className="mt-6 text-3xl text-zinc-400">
          Backend Java Engineer
          <br />
          Full Stack Angular Developer
        </h2>

        <p className="mt-8 text-lg text-zinc-500 max-w-xl">
          Sviluppo applicazioni enterprise,
          API REST e soluzioni web moderne.
          Mi piace costruire software pulito,
          scalabile e mantenibile.
        </p>

        <button className="mt-10 rounded-full bg-white px-6 py-3 text-black">
          Scopri i miei progetti
        </button>
      </div>
    </section>
  );
}