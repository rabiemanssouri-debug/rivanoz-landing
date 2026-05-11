"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

interface Testimonial {
  text: string;
  author: string;
  age: number;
  stars?: number;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export default function Testimonials({ title, testimonials }: TestimonialsProps) {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-[#0a0f1e]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1b35] to-[#0a0f1e]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
              {title}
            </h2>
            <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto" />
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map(({ text, author, age, stars = 5 }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative p-7 rounded-2xl bg-white/[0.04] border border-white/8 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 group"
              >
                <Quote className="w-8 h-8 text-amber-500/30 mb-4 group-hover:text-amber-500/50 transition-colors" />

                <p className="text-white/80 text-base leading-relaxed mb-6 italic">
                  &ldquo;{text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{author}</p>
                    <p className="text-white/40 text-xs mt-0.5">{age} años</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(stars)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Verified badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-semibold text-amber-400/70 bg-amber-500/10 px-2 py-1 rounded-full">
                    Verificado
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
