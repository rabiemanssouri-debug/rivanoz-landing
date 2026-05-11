"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const STEPS = [
  {
    number: "01",
    title: "Limpia y seca",
    description: "Limpia y seca la zona de aplicación antes de usar la crema.",
  },
  {
    number: "02",
    title: "Aplica y masajea",
    description: "Aplica una pequeña cantidad y masajea suavemente hasta su absorción completa.",
  },
  {
    number: "03",
    title: "Espera 5-10 min",
    description: "Espera entre 5 y 10 minutos para que el efecto se active correctamente.",
  },
  {
    number: "04",
    title: "Disfruta hasta 60 min",
    description: "El efecto retardante dura entre 30 y 60 minutos, permitiéndote disfrutar sin presión.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] border-y border-[#e2e8f0]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3">
              Crema Super Viga 150000
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0f1e] tracking-tight">
              Cómo se usa. Simple y discreto.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {STEPS.map(({ number, title, description }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative flex flex-col"
              >
                {/* Connector line (desktop) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] right-[-calc(50%-28px)] h-px bg-[#e2e8f0] z-0" />
                )}

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#0f3460] flex items-center justify-center mb-4 shadow-lg shadow-[#0f3460]/20">
                    <span className="text-white font-bold text-sm">{number}</span>
                  </div>
                  <h3 className="font-bold text-[#0a0f1e] text-sm mb-2">{title}</h3>
                  <p className="text-[#64748b] text-xs leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Ingredient note */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-start gap-3 max-w-2xl mx-auto p-5 rounded-2xl bg-white border border-[#e2e8f0]"
          >
            <div className="w-8 h-8 rounded-xl bg-[#0f3460]/8 flex items-center justify-center flex-shrink-0">
              <span className="text-[#0f3460] text-xs font-bold">i</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0a0f1e] mb-1">
                Fórmula con acción tópica suave
              </p>
              <p className="text-xs text-[#64748b] leading-relaxed">
                La crema actúa de forma local, reduciendo la hipersensibilidad sin afectar la sensación general. Efecto progresivo y controlado. Formato discreto de 15ml, fácil de guardar y transportar.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
