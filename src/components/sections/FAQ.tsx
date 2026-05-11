"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  items: FAQItem[];
}

function FAQItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? "border-[#0f3460]/30 bg-[#0f3460]/5"
          : "border-[#e2e8f0] bg-white hover:border-[#0f3460]/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
      >
        <span className="font-semibold text-[#0a0f1e] text-sm md:text-base pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#0f3460]/10 flex items-center justify-center"
        >
          <ChevronDown className="w-4 h-4 text-[#0f3460]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-[#e2e8f0] mb-4" />
              <p className="text-[#475569] text-sm md:text-base leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({
  title = "Preguntas habituales.",
  items,
}: FAQProps) {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0f1e] leading-tight tracking-tight mb-4">
              {title}
            </h2>
            <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto" />
          </motion.div>

          <motion.div variants={stagger} className="flex flex-col gap-3">
            {items.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FAQItem {...item} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
