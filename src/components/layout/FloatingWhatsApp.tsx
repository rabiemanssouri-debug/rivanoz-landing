"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChevronDown } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from "@/lib/contact";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const QUICK_REPLIES = [
  "¿Cómo funciona el Erkexin?",
  "¿Cuánto tarda el envío?",
  "¿Puedo pagar contra reembolso?",
  "Quiero hacer un pedido",
];

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showNotif, setShowNotif] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 1500);
    const t2 = setTimeout(() => setShowNotif(true), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (open) {
      setShowNotif(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  function sendToWhatsApp(text?: string) {
    const msg = text ?? message;
    if (!msg.trim()) return;
    const encoded = encodeURIComponent(msg.trim());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    setMessage("");
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendToWhatsApp();
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="fixed bottom-24 md:bottom-8 right-4 md:right-7 z-50 flex flex-col items-end gap-3"
        >
          {/* ── Chat window ── */}
          <AnimatePresence>
            {open && (
              <motion.div
                key="chat"
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="w-[320px] sm:w-[350px] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10"
                style={{ transformOrigin: "bottom right" }}
              >
                {/* Header */}
                <div className="bg-[#0a0f1e] px-4 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border-2 border-[#25D366]/40 flex items-center justify-center">
                        <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#0a0f1e]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold leading-tight">RivaNoz</p>
                      <p className="text-[#25D366] text-[11px] font-medium">● En línea ahora</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-white/40 hover:text-white/80 transition-colors p-1 rounded-lg hover:bg-white/8"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>

                {/* Chat body */}
                <div className="bg-[#ECE5DD] px-4 py-4 flex flex-col gap-3 min-h-[180px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4c5b0' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}
                >
                  {/* Agent message bubble */}
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-sm px-3.5 py-2.5 max-w-[240px] shadow-sm">
                      <p className="text-[#0a0f1e] text-sm leading-snug">
                        ¡Hola! 👋 Soy el equipo de <strong>RivaNoz</strong>. ¿En qué te puedo ayudar hoy?
                      </p>
                      <p className="text-[#94a3b8] text-[10px] text-right mt-1">ahora ✓✓</p>
                    </div>
                  </div>

                  {/* Quick replies */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {QUICK_REPLIES.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => sendToWhatsApp(reply)}
                        className="text-[11px] font-medium text-[#075E54] bg-white border border-[#075E54]/20 hover:bg-[#075E54] hover:text-white px-3 py-1.5 rounded-full transition-all duration-200 shadow-sm"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input area */}
                <div className="bg-[#F0F0F0] px-3 py-2.5 flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Escribe un mensaje..."
                    className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-[#0a0f1e] placeholder-[#94a3b8] outline-none border border-transparent focus:border-[#25D366]/40 shadow-sm transition-colors"
                  />
                  <button
                    onClick={() => sendToWhatsApp()}
                    disabled={!message.trim()}
                    className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#20bd5a] disabled:bg-[#94a3b8] flex items-center justify-center transition-colors shadow-sm flex-shrink-0"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Footer */}
                <div className="bg-[#F0F0F0] py-1.5 text-center border-t border-black/5">
                  <p className="text-[10px] text-[#94a3b8]">
                    Continúa en{" "}
                    <span className="font-semibold text-[#25D366]">WhatsApp</span>
                    {" · "}{WHATSAPP_DISPLAY}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Floating button ── */}
          <div className="relative">
            {/* Notification badge */}
            <AnimatePresence>
              {showNotif && !open && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 8 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-12 right-0 bg-white rounded-xl shadow-lg px-3 py-1.5 border border-[#e2e8f0] whitespace-nowrap"
                >
                  <p className="text-xs font-semibold text-[#0a0f1e]">¿Tienes dudas? 💬</p>
                  <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white border-r border-b border-[#e2e8f0] rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Abrir chat"
              className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <WhatsAppIcon className="w-7 h-7 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Pulse */}
              {!open && <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />}
              {/* Unread dot */}
              {!open && showNotif && (
                <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
              )}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
