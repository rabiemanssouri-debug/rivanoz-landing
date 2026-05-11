"use client";

import { motion } from "framer-motion";
import { Brain, Shield, TrendingUp, EyeOff } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

interface BenefitsProps {
  title: string;
  benefits: { title: string; description: string }[];
}

const icons = [Brain, Shield, TrendingUp, EyeOff];
const gradients = [
  "from-blue-500/10 to-blue-500/5",
  "from-amber-500/10 to-amber-500/5",
  "from-purple-500/10 to-purple-500/5",
  "from-amber-500/10 to-amber-500/5",
];
const iconColors = [
  "text-blue-400",
  "text-amber-400",
  "text-purple-400",
  "text-amber-400",
];

export default function Benefits({ title, benefits }: BenefitsProps) {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0f1e] leading-tight tracking-tight mb-4">
              {title}
            </h2>
            <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto" />
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {benefits.map(({ title: benTitle, description }, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} border border-[#e2e8f0] hover:border-[#0f3460]/20 transition-all duration-300 group`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:shadow-md transition-shadow">
                    <Icon className={`w-5 h-5 ${iconColors[i % iconColors.length]}`} />
                  </div>
                  <h3 className="font-bold text-[#0a0f1e] text-base mb-2">
                    {benTitle}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
