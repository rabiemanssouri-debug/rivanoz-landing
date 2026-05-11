"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Zap, Shield } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

interface EmotionalConsequenceProps {
  title: string;
  intro: string;
  items: string[];
  closing: string;
}

const icons = [Brain, Heart, Zap, Shield];

export default function EmotionalConsequence({
  title,
  intro,
  items,
  closing,
}: EmotionalConsequenceProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-[#0a0f1e] leading-tight tracking-tight mb-4 max-w-lg"
          >
            {title}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="w-12 h-1 bg-amber-500 rounded-full mb-8"
          />

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#334155] mb-10 max-w-xl"
          >
            {intro}
          </motion.p>

          <motion.div
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#0f3460]/30 hover:bg-[#0f3460]/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f3460]/10 flex items-center justify-center mb-4 group-hover:bg-[#0f3460]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#0f3460]" />
                  </div>
                  <p className="text-sm font-medium text-[#334155] capitalize leading-tight">
                    {item}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#0f3460]/5 to-transparent border-l-4 border-[#0f3460]"
          >
            <p className="text-[#334155] italic text-base md:text-lg leading-relaxed">
              {closing}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
