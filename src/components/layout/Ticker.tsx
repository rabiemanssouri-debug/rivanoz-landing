"use client";

const ITEMS = [
  "🚚 Envío discreto 24-72h a toda España",
  "💳 Pago contra reembolso — pagas al recibirlo",
  "🔒 Proceso 100% confidencial y privado",
  "⭐ +1.247 hombres ya han confiado en RivaNoz",
  "📦 Sin referencias visibles en el paquete",
  "💬 Atención privada por WhatsApp — respuesta inmediata",
  "✅ Sin receta médica — fórmula 100% natural",
  "🌿 Erkexin VIP desde 48€ · Super Viga desde 25€",
  "🎁 Pack combinado con ahorro de 15€",
  "⚡ Haz tu pedido hoy y lo recibes en 24h",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-amber-500 text-[#0a0f1e] text-xs font-bold overflow-hidden py-2 select-none">
      <div className="flex whitespace-nowrap animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-8">
            {item}
            <span className="text-[#0a0f1e]/40 text-base">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
