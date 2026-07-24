"use client";

import { motion } from "framer-motion";

interface BackgroundProps {
  children: React.ReactNode;
}

export default function Background({
  children,
}: BackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
            linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />

        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/3
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/20
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}