"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

interface ComparisonProps {
  title?: string;
  before: string[];
  after: string[];
}

export default function Comparison({
  title = "El cambio que marcan la diferencia.",
  before,
  after,
}: ComparisonProps) {
  return (
    <section className="relative overflow-hidden bg-white">
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
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Before */}
            <motion.div
              variants={fadeUp}
              className="p-8 rounded-2xl bg-red-50/50 border border-red-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-500" strokeWidth={3} />
                </div>
                <h3 className="font-bold text-[#0a0f1e] text-lg">Sin solución</h3>
              </div>
              <ul className="space-y-3">
                {before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-red-400" strokeWidth={3} />
                    </div>
                    <span className="text-[#64748b] text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              variants={fadeUp}
              className="p-8 rounded-2xl bg-amber-50/50 border border-amber-100 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                  Con RivaNoz
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-amber-600" strokeWidth={3} />
                </div>
                <h3 className="font-bold text-[#0a0f1e] text-lg">Con apoyo</h3>
              </div>
              <ul className="space-y-3">
                {after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                      <Check
                        className="w-3 h-3 text-amber-600"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-[#334155] text-sm leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
