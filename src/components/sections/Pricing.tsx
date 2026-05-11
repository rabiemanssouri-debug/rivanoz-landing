"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Truck, Lock, CreditCard } from "lucide-react";
import { WHATSAPP_PRICING_LINK } from "@/lib/contact";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const MIEL_PLANS = [
  {
    qty: "1 Caja",
    price: 48,
    badge: null as string | null,
    featured: false,
    perks: ["Envío incluido", "Proceso confidencial"],
    note: null as string | null,
  },
  {
    qty: "2 Cajas",
    price: 88,
    badge: "Más vendido",
    featured: true,
    perks: ["Envío incluido", "Tratamiento completo", "Ahorro de 8€"],
    note: "44€ / caja",
  },
  {
    qty: "3 Cajas",
    price: 120,
    badge: "Mejor valor",
    featured: false,
    perks: ["Envío incluido", "Máximo rendimiento", "Ahorro de 24€"],
    note: "40€ / caja",
  },
];

const CREMA_PLANS = [
  {
    qty: "1 Unidad",
    price: 25,
    badge: null as string | null,
    featured: false,
    perks: ["Uso discreto", "Fácil aplicación"],
    note: null as string | null,
  },
  {
    qty: "2 Unidades",
    price: 45,
    badge: "Más recomendado",
    featured: true,
    perks: ["Ahorro de 5€", "Tratamiento continuo", "Envío conjunto disponible"],
    note: "22,50€ / ud.",
  },
  {
    qty: "3 Unidades",
    price: 60,
    badge: "Mejor valor",
    featured: false,
    perks: ["Ahorro de 15€", "Máxima duración", "Envío conjunto disponible"],
    note: "20€ / ud.",
  },
];

const PACK_PLAN = {
  contents: ["1 Bote de Miel Erkexin", "1 Crema Super Viga 150000"],
  price: 58,
  savings: 15,
  perks: [
    "Pack combinado para máxima eficacia",
    "Acción interna + acción externa",
    "Envío discreto incluido",
    "Ahorro de 15€ respecto a precio individual",
  ],
};

// ─── CTA Button ───────────────────────────────────────────────────────────────

function CTAButton({ featured = false }: { featured?: boolean }) {
  return (
    <a
      href={WHATSAPP_PRICING_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
        featured
          ? "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40"
          : "bg-white/8 hover:bg-white/14 text-white border border-white/10 hover:border-white/20"
      }`}
    >
      <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
      <span>Solicitar de forma privada</span>
      <ChevronRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
    </a>
  );
}

// ─── Plan card ───────────────────────────────────────────────────────────────

interface PlanCardProps {
  qty: string;
  price: number;
  badge: string | null;
  featured: boolean;
  perks: string[];
  note: string | null;
  productImage: string;
  imageAlt: string;
}

function PlanCard({ qty, price, badge, featured, perks, note, productImage, imageAlt }: PlanCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
        featured
          ? "bg-gradient-to-b from-[#0f3460] to-[#0a2645] border border-[#1a5a9a]/60 shadow-2xl shadow-[#0f3460]/40 ring-1 ring-white/10"
          : "bg-white/[0.04] border border-white/8 hover:border-white/16 hover:bg-white/[0.07]"
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold tracking-wide whitespace-nowrap ${
              badge === "Más vendido"
                ? "bg-amber-500 text-white"
                : "bg-amber-400 text-[#0a0f1e]"
            }`}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Product image strip */}
      <div className={`relative h-44 w-full overflow-hidden ${featured ? "bg-[#0a2240]" : "bg-white/[0.03]"}`}>
        <Image
          src={productImage}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 90vw, 280px"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {/* Quantity label on image */}
        <div className="absolute bottom-3 left-4">
          <p className="text-white font-bold text-base drop-shadow-lg">{qty}</p>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Price */}
        <div className="flex items-end gap-1 mb-0.5">
          <span className="text-4xl font-bold text-white tracking-tight leading-none">
            {price}
          </span>
          <span className={`text-lg font-semibold mb-0.5 ${featured ? "text-white/60" : "text-white/35"}`}>
            €
          </span>
        </div>
        {note ? (
          <p className={`text-xs mb-4 ${featured ? "text-amber-400/80" : "text-white/35"}`}>
            {note}
          </p>
        ) : (
          <div className="mb-4" />
        )}

        {/* Divider */}
        <div className={`h-px mb-4 ${featured ? "bg-white/10" : "bg-white/5"}`} />

        {/* Perks */}
        <ul className="flex flex-col gap-2 mb-5 flex-1">
          {perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2">
              <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                featured ? "bg-amber-500/20" : "bg-white/8"
              }`}>
                <Check className={`w-2.5 h-2.5 ${featured ? "text-amber-400" : "text-white/40"}`} strokeWidth={3} />
              </div>
              <span className={`text-xs leading-snug ${featured ? "text-white/80" : "text-white/50"}`}>
                {perk}
              </span>
            </li>
          ))}
        </ul>

        <CTAButton featured={featured} />
      </div>
    </motion.div>
  );
}

// ─── Tab types ────────────────────────────────────────────────────────────────

type Tab = "miel" | "crema" | "pack";

const TABS: { id: Tab; label: string; sub: string; img: string }[] = [
  { id: "miel", label: "Miel Erkexin", sub: "Producto principal", img: "/images/erkexin.png" },
  { id: "crema", label: "Crema Super Viga", sub: "Uso externo", img: "/images/superviga.png" },
  { id: "pack", label: "Pack Combinado", sub: "Mejor experiencia", img: "/images/pack.png" },
];

// ─── Main component ───────────────────────────────────────────────────────────

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<Tab>("miel");

  return (
    <section id="precios" className="relative overflow-hidden bg-[#0a0f1e]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b35] via-[#0a0f1e] to-[#0a0f1e]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0f3460]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
          >
            Precios y packs
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4"
          >
            Elige lo que mejor se adapta a ti.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/45 text-base md:text-lg max-w-xl mx-auto">
            Sin compromisos. Sin suscripciones. Pedido directo por WhatsApp con total discreción.
          </motion.p>
        </motion.div>

        {/* Tab selector con miniaturas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-2 p-2 bg-white/[0.04] rounded-2xl border border-white/8 mb-12 max-w-2xl mx-auto"
        >
          {TABS.map(({ id, label, sub, img }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`relative flex-1 flex items-center gap-3 py-3 px-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                activeTab === id
                  ? "bg-[#0f3460] shadow-lg"
                  : "hover:bg-white/5"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                <Image src={img} alt={label} fill className="object-cover" sizes="40px" />
              </div>
              <div>
                <p className={`text-xs font-semibold leading-tight ${activeTab === id ? "text-white" : "text-white/50"}`}>
                  {label}
                </p>
                <p className={`text-[10px] mt-0.5 ${activeTab === id ? "text-white/50" : "text-white/25"}`}>
                  {sub}
                </p>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          {activeTab === "miel" && (
            <motion.div
              key="miel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="grid md:grid-cols-3 gap-5"
              >
                {MIEL_PLANS.map((plan) => (
                  <PlanCard
                    key={plan.qty}
                    {...plan}
                    productImage="/images/erkexin.png"
                    imageAlt="Miel Erkexin VIP"
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {activeTab === "crema" && (
            <motion.div
              key="crema"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="grid md:grid-cols-3 gap-5"
              >
                {CREMA_PLANS.map((plan) => (
                  <PlanCard
                    key={plan.qty}
                    {...plan}
                    productImage="/images/superviga.png"
                    imageAlt="Crema Super Viga 150000"
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {activeTab === "pack" && (
            <motion.div
              key="pack"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <PackCard />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust microcopy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            { icon: CreditCard, text: "Pago contra reembolso disponible" },
            { icon: CreditCard, text: "También puedes pagar por Bizum" },
            { icon: Truck, text: "Envío discreto 24-72h" },
            { icon: Lock, text: "Atención privada por WhatsApp" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-amber-400/60 flex-shrink-0" />
              <span className="text-white/35 text-xs">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Pack card ────────────────────────────────────────────────────────────────

function PackCard() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="max-w-2xl mx-auto"
    >
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="relative rounded-2xl overflow-hidden"
      >
        {/* Gradient border */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-[#0f3460]/40 to-[#25D366]/10 rounded-2xl" />
        <div className="relative m-px bg-[#0d1b35] rounded-2xl overflow-hidden">

          {/* Pack image — full width hero */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <Image
              src="/images/pack.png"
              alt="Pack Combinado Erkexin + Super Viga"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 90vw, 640px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b35] via-black/20 to-transparent" />

            {/* Badge over image */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-amber-500/30">
                <Check className="w-3 h-3" strokeWidth={3} />
                Mejor experiencia completa
              </span>
            </div>
          </div>

          {/* Card body */}
          <div className="p-7">
            {/* Contents pills */}
            <div className="flex flex-col sm:flex-row gap-2.5 mb-7">
              {PACK_PLAN.contents.map((item) => (
                <div
                  key={item}
                  className="flex-1 flex items-center gap-2.5 bg-white/5 border border-white/8 rounded-xl px-4 py-3"
                >
                  <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Price row */}
            <div className="flex items-end gap-3 mb-1">
              <span className="text-6xl font-bold text-white tracking-tight leading-none">
                {PACK_PLAN.price}
              </span>
              <span className="text-2xl font-semibold text-white/40 mb-1.5">€</span>
              <div className="mb-2 ml-1">
                <span className="line-through text-white/25 text-lg">73€</span>
                <p className="text-amber-400 text-xs font-semibold">Ahorras {PACK_PLAN.savings}€</p>
              </div>
            </div>

            <div className="h-px bg-white/8 my-6" />

            {/* Perks */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-7">
              {PACK_PLAN.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-amber-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/65 text-sm leading-snug">{perk}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={WHATSAPP_PRICING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl text-sm tracking-wide shadow-xl shadow-[#25D366]/20 hover:shadow-[#25D366]/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              <span>Solicitar de forma privada</span>
              <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
