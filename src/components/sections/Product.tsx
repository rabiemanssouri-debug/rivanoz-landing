"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ChevronRight, Truck, Lock, Shield, Star } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { WHATSAPP_LINK } from "@/lib/contact";

interface ProductProps {
  title: string;
  productName: string;
  benefits: string[];
  ctaText: string;
  price?: string;
  originalPrice?: string;
  productImage: string;
  imageAlt: string;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Product({
  title,
  productName,
  benefits,
  ctaText,
  price = "48€",
  originalPrice,
  productImage,
  imageAlt,
}: ProductProps) {
  return (
    <section id="producto" className="relative overflow-hidden bg-[#0a0f1e]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1b35] to-[#0a0f1e]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0f3460]/20 rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4"
          >
            {title}
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="w-12 h-1 bg-amber-500 rounded-full mx-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          {/* Product image */}
          <motion.div
            variants={fadeUp}
            className="relative flex items-center justify-center"
          >
            {/* Glow behind image */}
            <div className="absolute inset-8 rounded-full bg-amber-500/8 blur-3xl" />

            <div className="relative group pb-6">
              <motion.div
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
              >
                <Image
                  src={productImage}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 300px, 340px"
                  priority
                />
                {/* Subtle dark overlay at bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-amber-500/40"
              >
                Más vendido
              </motion.div>

              {/* Star rating */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0d1b35] border border-white/10 px-4 py-2 rounded-full shadow-xl">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white/60 text-xs ml-1 whitespace-nowrap">4.8 · +1.247 pedidos en España</span>
              </div>
            </div>
          </motion.div>

          {/* Product details */}
          <div className="pt-6 md:pt-0">
            <motion.p variants={fadeUp} className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
              {productName}
            </motion.p>

            <motion.div variants={stagger} className="space-y-3 mb-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-amber-400" strokeWidth={3} />
                  </div>
                  <p className="text-white/75 text-sm md:text-base leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Price block */}
            <motion.div variants={fadeUp} className="flex items-end gap-3 mb-6">
              <span className="text-5xl font-bold text-white tracking-tight leading-none">
                {price}
              </span>
              {originalPrice && (
                <span className="text-white/30 line-through text-xl mb-1">
                  {originalPrice}
                </span>
              )}
              <Badge variant="green" className="mb-1">desde 1 caja</Badge>
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4.5 py-[18px] px-8 rounded-xl text-base tracking-wide shadow-xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 mb-4"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                <span>{ctaText}</span>
                <ChevronRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>

              <div className="flex items-center justify-center gap-5 text-white/30 text-xs flex-wrap">
                {[
                  { icon: Truck, text: "Envío discreto" },
                  { icon: Lock, text: "Contra reembolso / Bizum" },
                  { icon: Shield, text: "100% confidencial" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-amber-500/50" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
