"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Truck, Clock, CreditCard, MessageCircle, Star } from "lucide-react";
import { TRUST_BADGES } from "@/lib/contact";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface AuthorityProps {
  title: string;
  items?: string[];
}

const badgeIcons = [CreditCard, CreditCard, Truck, Clock, WhatsAppIcon];

export default function Authority({ title }: AuthorityProps) {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] border-y border-[#e2e8f0]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold text-[#0a0f1e] text-center mb-10 tracking-tight"
          >
            {title}
          </motion.h2>

          {/* Trust + Photo grid */}
          <motion.div
            variants={stagger}
            className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-12 items-start mb-10"
          >
            {/* Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {TRUST_BADGES.map((badge, i) => {
                const Icon = badgeIcons[i % badgeIcons.length];
                return (
                  <div
                    key={badge}
                    className="flex items-center gap-2.5 bg-white px-5 py-3 rounded-xl border border-[#e2e8f0] shadow-sm hover:shadow-md hover:border-amber-200 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-sm font-medium text-[#334155]">
                      {badge}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Doctor photo — desktop only */}
            <motion.div
              variants={fadeUp}
              className="hidden md:block relative w-[220px] h-[260px] rounded-2xl overflow-hidden shadow-xl border border-[#e2e8f0] flex-shrink-0"
            >
              <Image
                src="/images/doctor.png"
                alt="Atención profesional y discreta"
                fill
                className="object-cover object-top"
                sizes="220px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span className="text-[#0a0f1e] text-xs font-semibold">Atención privada</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Star rating */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-3 pt-10 border-t border-[#e2e8f0]"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-[#64748b] text-sm">
              Valorado con{" "}
              <span className="font-semibold text-[#0a0f1e]">4.8/5</span>{" "}
              por nuestros clientes
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
