import { Shield, Lock, Truck, Clock, CreditCard, MessageCircle } from "lucide-react";
import SocialIcons from "@/components/ui/SocialIcons";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, TRUST_BADGES } from "@/lib/contact";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const trustIconMap = [CreditCard, CreditCard, Truck, Clock, MessageCircle];

export default function Footer() {
  return (
    <footer className="bg-[#060912] text-white">
      {/* Trust badges bar */}
      <div className="border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST_BADGES.map((badge, i) => {
              const Icon = trustIconMap[i % trustIconMap.length];
              return (
                <div key={badge} className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="text-white/50 text-xs font-medium">
                    {badge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-white font-bold tracking-tight text-lg">
                RivaNoz
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              Soluciones masculinas premium diseñadas con discreción, calidad y
              respeto a tu privacidad.
            </p>
            <SocialIcons size="sm" />
          </div>

          {/* Contact column */}
          <div>
            <p className="text-white/70 font-semibold text-sm mb-4 uppercase tracking-wider">
              Contacto discreto
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 mb-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  {WHATSAPP_DISPLAY}
                </p>
                <p className="text-white/40 text-xs">WhatsApp · respuesta rápida</p>
              </div>
            </a>
            <div className="flex items-start gap-2 mt-4 p-3 rounded-xl bg-white/[0.04] border border-white/5">
              <Lock className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
              <p className="text-white/40 text-xs leading-relaxed">
                Atención personalizada y discreta. Tu privacidad es nuestra
                prioridad.
              </p>
            </div>
          </div>

          {/* Links column */}
          <div>
            <p className="text-white/70 font-semibold text-sm mb-4 uppercase tracking-wider">
              Información
            </p>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "#beneficios", label: "Beneficios" },
                { href: "#testimonios", label: "Testimonios" },
                { href: "#faq", label: "Preguntas frecuentes" },
                { href: "#", label: "Política de privacidad" },
                { href: "#", label: "Términos y condiciones" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/40 hover:text-white/70 text-sm transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} RivaNoz. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs text-center max-w-md leading-relaxed">
            Los resultados pueden variar. Este producto no está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad.
          </p>
        </div>
      </div>
    </footer>
  );
}
