"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";
import Link from "next/link";
import SocialIcons from "@/components/ui/SocialIcons";
import { WHATSAPP_LINK } from "@/lib/contact";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0f1e]/96 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-shadow">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold tracking-tight text-lg">
              RivaNoz
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#precios" className="text-white/60 hover:text-white transition-colors font-medium">
              Precios
            </a>
            <a href="#beneficios" className="text-white/60 hover:text-white transition-colors font-medium">
              Beneficios
            </a>
            <a href="#testimonios" className="text-white/60 hover:text-white transition-colors font-medium">
              Testimonios
            </a>
            <a href="#faq" className="text-white/60 hover:text-white transition-colors font-medium">
              FAQ
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Social icons — desktop only */}
            <div className="hidden md:block">
              <SocialIcons size="sm" />
            </div>

            {/* Separator */}
            <div className="hidden md:block w-px h-5 bg-white/10" />

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-[#25D366]/20"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0a0f1e]/98 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="max-w-5xl mx-auto px-5 py-6 flex flex-col gap-4">
              {[
                { href: "#precios", label: "Precios" },
                { href: "#beneficios", label: "Beneficios" },
                { href: "#testimonios", label: "Testimonios" },
                { href: "#faq", label: "FAQ" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-white text-base font-medium py-2 border-b border-white/5 last:border-0"
                >
                  {label}
                </a>
              ))}

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 w-full flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold py-4 rounded-xl text-sm"
              >
                <WhatsAppIcon className="w-5 h-5" />
                HABLAR POR WHATSAPP
              </a>

              {/* Social icons mobile */}
              <div className="flex items-center justify-center pt-2">
                <SocialIcons size="md" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
