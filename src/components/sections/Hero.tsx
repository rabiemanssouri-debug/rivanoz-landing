"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ChevronRight, Shield, Truck, Lock, Star } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

interface HeroProps {
  headline: string;
  subheadline: string;
  bullets: string[];
  ctaText: string;
  ctaHref?: string;
  ctaExternal?: boolean;
  variant?: "erection" | "control";
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Hero({
  headline,
  subheadline,
  bullets,
  ctaText,
  ctaHref = "#producto",
  ctaExternal = false,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1e]">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1b35] to-[#0a0f1e]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0f3460]/30 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">

          {/* ── LEFT: Product image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative flex items-center justify-center order-first"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-amber-500/6 rounded-full blur-3xl" />

            <div className="relative w-full max-w-[380px] lg:max-w-full">
              {/* Product image card */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/8 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                <Image
                  src="/images/erkexin.png"
                  alt="Miel Erkexin VIP — fórmula herbal masculina"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 480px"
                  priority
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/70 via-transparent to-transparent" />

                {/* Product label at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Miel Erkexin VIP</p>
                      <p className="text-white/60 text-xs">Fórmula herbal 100% natural</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">desde</p>
                      <p className="text-white text-2xl font-bold leading-none">48€</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating "Más vendido" badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-amber-500/40 z-10"
              >
                Más vendido
              </motion.div>

              {/* Star rating chip */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-[#0d1b35] border border-white/10 px-4 py-2 rounded-full shadow-xl whitespace-nowrap">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-white/55 text-xs ml-1">4.8 · +1.247 pedidos</span>
              </div>

              {/* Small thumbnail of Super Viga — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -left-4 bottom-10 hidden sm:block"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-white/15 shadow-xl">
                  <Image src="/images/superviga.png" alt="Crema Super Viga" fill className="object-cover" sizes="64px" />
                </div>
                <div className="mt-1 text-center">
                  <p className="text-white/40 text-[9px] font-medium leading-tight">+ Super Viga</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text & CTA ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:pl-2"
          >
            {/* Pill badge */}
            <motion.div variants={fadeUp} className="mb-5">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Solución masculina premium
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white leading-[1.1] tracking-tight mb-5"
            >
              {headline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/55 text-sm md:text-base leading-relaxed mb-7"
            >
              {subheadline}
            </motion.p>

            {/* Bullets */}
            <motion.ul variants={stagger} className="flex flex-col gap-2.5 mb-8">
              {bullets.map((bullet, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-amber-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/70 text-sm leading-relaxed">{bullet}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={ctaHref}
                {...(ctaExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-4 rounded-xl text-sm tracking-wide shadow-2xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                <span>{ctaText}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#precios"
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold px-6 py-4 rounded-xl text-sm transition-all duration-200"
              >
                Ver precios
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              {[
                { icon: Truck, text: "Envío discreto 24-72h" },
                { icon: Lock, text: "Contra reembolso / Bizum" },
                { icon: Shield, text: "100% confidencial" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-amber-400/60 flex-shrink-0" />
                  <span className="text-white/35 text-xs">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
