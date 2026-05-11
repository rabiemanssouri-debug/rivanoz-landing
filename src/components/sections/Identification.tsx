"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

interface IdentificationProps {
  title: string;
  items: string[];
}

export default function Identification({ title, items }: IdentificationProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1e]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1b35] to-[#0a0f1e]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4 max-w-lg"
          >
            {title}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="w-12 h-1 bg-amber-500 rounded-full mb-12"
          />

          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 gap-4"
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/8 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-white/70 text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
