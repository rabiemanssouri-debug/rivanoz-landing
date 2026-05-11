"use client";

import { motion } from "framer-motion";
import { Activity, Brain, Smile } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

interface ExplanationProps {
  title: string;
  copy: string[];
  aspects: { icon: string; label: string }[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  Brain,
  Smile,
};

export default function Explanation({ title, copy, aspects }: ExplanationProps) {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          <div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-[#0a0f1e] leading-tight tracking-tight mb-4"
            >
              {title}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="w-12 h-1 bg-amber-500 rounded-full mb-8"
            />

            <motion.div variants={stagger} className="space-y-4">
              {copy.map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-[#475569] leading-relaxed text-base md:text-lg"
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          </div>

          <motion.div variants={stagger} className="flex flex-col gap-4">
            {aspects.map(({ icon, label }, i) => {
              const Icon = iconMap[icon] || Activity;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0a0f1e] capitalize">
                      Enfoque {label}
                    </p>
                    <p className="text-sm text-[#94a3b8] mt-0.5">
                      Tratado desde la raíz
                    </p>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-amber-400" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
