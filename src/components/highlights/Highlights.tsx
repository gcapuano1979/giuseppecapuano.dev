"use client";

import { highlights } from "@/data/highlights";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";

export default function Highlights() {
  return (
    <Section id="highlights">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            Career Highlights
          </SectionTitle>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={`${item.heading}-${index}`}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-sm
                  transition-all
                  hover:-translate-y-2
                  hover:border-blue-400/40
                  hover:bg-white/10
                "
              >
                <div className="text-3xl font-bold text-blue-400">
                  {item.heading}
                </div>

                <div className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </div>

                {item.description && (
                  <div className="text-zinc-400">
                      {item.description}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}