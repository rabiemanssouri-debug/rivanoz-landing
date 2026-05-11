"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

interface NormalizationProps {
  title: string;
  copy: string[];
}

export default function Normalization({ title, copy }: NormalizationProps) {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#0f3460]/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#0f3460]" />
            </div>
            <div className="h-px flex-1 max-w-[60px] bg-[#0f3460]/20" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-[#0a0f1e] leading-tight tracking-tight mb-8"
          >
            {title}
          </motion.h2>

          <motion.div variants={stagger} className="space-y-4">
            {copy.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className={`text-base md:text-lg leading-relaxed ${
                  i === 0 ? "text-[#334155]" : "text-[#64748b]"
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block"
        >
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#0f3460]/5 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
