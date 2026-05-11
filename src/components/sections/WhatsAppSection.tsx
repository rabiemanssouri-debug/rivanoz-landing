"use client";

import { motion } from "framer-motion";
import { Lock, ChevronRight } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from "@/lib/contact";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppSection() {
  return (
    <section className="relative overflow-hidden bg-white border-y border-[#e2e8f0]">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4] via-white to-white" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          {/* Left — copy */}
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#25D366]">
                Atención directa
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-[#0a0f1e] leading-tight tracking-tight mb-4"
            >
              Habla directamente con nosotros.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#475569] text-base md:text-lg leading-relaxed mb-8"
            >
              Resolvemos tus dudas de forma privada y personalizada por
              WhatsApp. Sin formularios complicados y sin pagos online
              obligatorios.
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col gap-2.5 mb-8">
              {[
                "Respuesta rápida y discreta",
                "Sin formularios ni registros",
                "Pago contra reembolso disponible",
                "Tu privacidad es prioridad",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  </div>
                  <span className="text-sm text-[#334155]">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4.5 py-[18px] rounded-xl text-sm tracking-wide shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 mb-4"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>HABLAR POR WHATSAPP</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-1.5 mt-3">
                <Lock className="w-3.5 h-3.5 text-[#94a3b8]" />
                <span className="text-xs text-[#94a3b8]">
                  Proceso 100% confidencial · Tu privacidad es prioridad
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right — contact card */}
          <motion.div variants={fadeUp}>
            <div className="bg-[#0a0f1e] rounded-3xl p-8 shadow-2xl shadow-[#0a0f1e]/20">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 flex items-center justify-center">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">RivaNoz</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block" />
                    <span className="text-[#25D366] text-xs font-medium">
                      En línea · respuesta rápida
                    </span>
                  </div>
                </div>
              </div>

              {/* Simulated chat bubble */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-end">
                  <div className="bg-[#25D366] text-white text-sm rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm">
                    Hola, quiero recibir información de forma privada sobre el
                    tratamiento.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white/8 text-white/80 text-sm rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm">
                    ¡Hola! Con mucho gusto te atendemos de forma privada y
                    personalizada. ¿En qué podemos ayudarte?
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-white/40 text-xs mb-2">Número de contacto</p>
                <p className="text-white font-bold text-xl tracking-wider">
                  {WHATSAPP_DISPLAY}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
