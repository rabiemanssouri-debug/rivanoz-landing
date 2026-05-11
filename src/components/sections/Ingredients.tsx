"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const INGREDIENTS = [
  {
    name: "Ginseng Siberiano",
    role: "Energía y vitalidad",
    description:
      "Adaptógeno natural que ayuda a reducir la fatiga, mejorar la resistencia física y apoyar el equilibrio hormonal.",
  },
  {
    name: "Jalea Real",
    role: "Vigor y bienestar",
    description:
      "Rica en vitaminas y aminoácidos esenciales. Favorece la vitalidad general y el bienestar masculino.",
  },
  {
    name: "Propóleo de Abeja",
    role: "Protección natural",
    description:
      "Potente antioxidante natural con propiedades que refuerzan el organismo y contribuyen al equilibrio general.",
  },
  {
    name: "Tribulus Terrestris",
    role: "Rendimiento y libido",
    description:
      "Planta tradicional ampliamente usada para apoyar el rendimiento masculino y el deseo sexual.",
  },
  {
    name: "Raíz de Maca",
    role: "Energía y resistencia",
    description:
      "Superfood andino conocido por mejorar la energía, la resistencia y el rendimiento físico e íntimo.",
  },
  {
    name: "Fenogreco",
    role: "Equilibrio y bienestar",
    description:
      "Planta con propiedades que apoyan el equilibrio hormonal natural y la vitalidad masculina.",
  },
];

export default function Ingredients() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <Leaf className="w-3.5 h-3.5" />
              Miel Erkexin VIP
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0f1e] tracking-tight mb-3">
              Ingredientes naturales. Fórmula testada.
            </h2>
            <p className="text-[#64748b] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Ginseng siberiano, jalea real y propóleo de abeja trabajando en sinergia para mejorar la vitalidad, el rendimiento y el bienestar masculino.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {INGREDIENTS.map(({ name, role, description }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-amber-200 hover:bg-amber-50/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                    <Leaf className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0a0f1e] text-sm">{name}</p>
                    <p className="text-amber-600 text-xs font-medium">{role}</p>
                  </div>
                </div>
                <p className="text-[#64748b] text-xs leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-start gap-3 max-w-2xl mx-auto p-5 rounded-2xl bg-[#0a0f1e] text-white"
          >
            <Leaf className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold mb-1">
                Fórmula 100% natural · Sin receta médica
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                Erkexin Herbal Mixed Paste combina ingredientes de uso tradicional en un formato de pasta herbal de fácil consumo. Se recomienda consultar con un profesional de salud en caso de tomar medicación o tener condiciones médicas previas.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
