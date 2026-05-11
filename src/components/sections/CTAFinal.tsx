"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Truck } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/contact";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface CTAFinalProps {
  headline: string;
  subheadline?: string;
  ctaText: string;
}

export default function CTAFinal({
  headline,
  subheadline = "Da el primer paso hoy.",
  ctaText,
}: CTAFinalProps) {
  return (
    <section id="checkout" className="relative overflow-hidden bg-[#0a0f1e]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0f3460]/30 to-[#0a0f1e]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 py-24 md:py-32 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
          >
            <Shield className="w-3.5 h-3.5" />
            Proceso 100% confidencial
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4 text-balance"
          >
            {headline}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-white/50 mb-10"
          >
            {subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-5 rounded-xl text-base md:text-lg tracking-wide shadow-2xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>{ctaText}</span>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            {[
              "Atención personalizada y discreta",
              "Tu privacidad es prioridad",
              "Proceso 100% confidencial",
            ].map((text) => (
              <span
                key={text}
                className="text-white/30 text-xs px-3 py-1 rounded-full border border-white/8"
              >
                {text}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/25 text-sm"
          >
            {[
              { icon: Truck, text: "Envío discreto 24-72h" },
              { icon: Lock, text: "Pago contra reembolso / Bizum" },
              { icon: Shield, text: "Datos protegidos" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-amber-500/40" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
