"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Package, MapPin, User, Phone, Mail, Home, ChevronRight, AlertCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/contact";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

type DeliveryType = "domicilio" | "recogida";
type Product = "erkexin_1" | "erkexin_2" | "erkexin_3" | "superviga_1" | "superviga_2" | "superviga_3" | "pack";

const PRODUCTS: { value: Product; label: string; price: string }[] = [
  { value: "erkexin_1", label: "Miel Erkexin VIP — 1 caja", price: "48€" },
  { value: "erkexin_2", label: "Miel Erkexin VIP — 2 cajas", price: "88€" },
  { value: "erkexin_3", label: "Miel Erkexin VIP — 3 cajas", price: "120€" },
  { value: "superviga_1", label: "Crema Super Viga — 1 unidad", price: "25€" },
  { value: "superviga_2", label: "Crema Super Viga — 2 unidades", price: "45€" },
  { value: "superviga_3", label: "Crema Super Viga — 3 unidades", price: "60€" },
  { value: "pack", label: "Pack Combinado (Erkexin + Super Viga)", price: "58€" },
];

const PICKUP_POINTS = [
  "Correos (oficina más cercana a mi domicilio)",
  "InPost (locker automático)",
  "MRW (punto de recogida)",
  "SEUR (punto de recogida)",
  "DHL ServicePoint",
];

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  codigoPostal: string;
  producto: Product | "";
  entrega: DeliveryType;
  direccion: string;
  ciudad: string;
  puntoRecogida: string;
  notas: string;
}

const EMPTY: FormData = {
  nombre: "",
  telefono: "",
  email: "",
  codigoPostal: "",
  producto: "",
  entrega: "domicilio",
  direccion: "",
  ciudad: "",
  puntoRecogida: "",
  notas: "",
};

function field(label: string, required = true) {
  return (
    <span className="text-sm font-semibold text-[#334155]">
      {label}{required && <span className="text-red-500 ml-0.5">*</span>}
    </span>
  );
}

function inputCls(error: boolean) {
  return `w-full px-4 py-3 rounded-xl border text-sm text-[#0a0f1e] placeholder-[#94a3b8] outline-none transition-all duration-200 focus:ring-2 ${
    error
      ? "border-red-400 bg-red-50 focus:ring-red-200"
      : "border-[#e2e8f0] bg-white focus:border-amber-400 focus:ring-amber-100"
  }`;
}

export default function OrderForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [sent, setSent] = useState(false);

  function set(key: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.nombre.trim()) e.nombre = "Campo obligatorio";
    if (!form.telefono.trim()) e.telefono = "Campo obligatorio";
    else if (!/^[+\d\s\-()]{7,15}$/.test(form.telefono.trim())) e.telefono = "Teléfono no válido";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email no válido";
    if (!form.codigoPostal.trim()) e.codigoPostal = "Campo obligatorio";
    else if (!/^\d{5}$/.test(form.codigoPostal.trim())) e.codigoPostal = "5 dígitos";
    if (!form.producto) e.producto = "Selecciona un producto";
    if (form.entrega === "domicilio" && !form.direccion.trim()) e.direccion = "Campo obligatorio";
    if (form.entrega === "domicilio" && !form.ciudad.trim()) e.ciudad = "Campo obligatorio";
    if (form.entrega === "recogida" && !form.puntoRecogida) e.puntoRecogida = "Selecciona un punto";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function buildMessage(): string {
    const product = PRODUCTS.find((p) => p.value === form.producto);
    const lines = [
      "🛍️ *NUEVO PEDIDO — RivaNoz*",
      "",
      `👤 *Nombre:* ${form.nombre.trim()}`,
      `📱 *Teléfono:* ${form.telefono.trim()}`,
      form.email ? `📧 *Email:* ${form.email.trim()}` : null,
      `📦 *Producto:* ${product?.label} — ${product?.price}`,
      `📮 *Código Postal:* ${form.codigoPostal.trim()}`,
      "",
      form.entrega === "domicilio"
        ? `🏠 *Entrega a domicilio*\n   ${form.direccion.trim()}\n   ${form.ciudad.trim()}`
        : `📍 *Punto de recogida:* ${form.puntoRecogida}`,
      form.notas.trim() ? `\n💬 *Notas:* ${form.notas.trim()}` : null,
      "",
      "Confirmo que quiero realizar este pedido.",
    ]
      .filter(Boolean)
      .join("\n");

    return lines;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm(EMPTY);
    }, 8000);
  }

  return (
    <section id="pedido" className="relative overflow-hidden bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-amber-600 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full mb-5">
              <Package className="w-3.5 h-3.5" />
              Hacer un pedido
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0f1e] tracking-tight mb-3">
              Formulario de pedido discreto
            </h2>
            <p className="text-[#64748b] text-sm max-w-md mx-auto leading-relaxed">
              Rellena el formulario y te contactamos por WhatsApp para confirmar. Proceso privado y sin complicaciones.
            </p>
          </motion.div>

          {/* Success state */}
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl border border-amber-200 shadow-sm p-10 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-[#0a0f1e] mb-2">¡Pedido enviado!</h3>
              <p className="text-[#64748b] text-sm leading-relaxed max-w-xs mx-auto">
                Se ha abierto WhatsApp con tu pedido completo. En breve te contactamos para confirmarlo.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden"
            >
              {/* Section: datos personales */}
              <div className="px-6 pt-7 pb-5 border-b border-[#f1f5f9]">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-[#0a0f1e] flex items-center justify-center flex-shrink-0">
                    <User className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-bold text-[#0a0f1e] text-sm uppercase tracking-wider">Datos personales</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    {field("Nombre completo")}
                    <input
                      type="text"
                      value={form.nombre}
                      onChange={(e) => set("nombre", e.target.value)}
                      placeholder="Ej: Juan García López"
                      className={`${inputCls(!!errors.nombre)} mt-1.5`}
                      autoComplete="name"
                    />
                    {errors.nombre && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.nombre}</p>}
                  </div>

                  <div>
                    {field("Teléfono")}
                    <input
                      type="tel"
                      value={form.telefono}
                      onChange={(e) => set("telefono", e.target.value)}
                      placeholder="Ej: +34 612 345 678"
                      className={`${inputCls(!!errors.telefono)} mt-1.5`}
                      autoComplete="tel"
                    />
                    {errors.telefono && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.telefono}</p>}
                  </div>

                  <div>
                    {field("Email", false)}
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="tucorreo@gmail.com (opcional)"
                      className={`${inputCls(!!errors.email)} mt-1.5`}
                      autoComplete="email"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                  </div>

                  <div>
                    {field("Código postal")}
                    <input
                      type="text"
                      value={form.codigoPostal}
                      onChange={(e) => set("codigoPostal", e.target.value.replace(/\D/g, "").slice(0, 5))}
                      placeholder="Ej: 28001"
                      maxLength={5}
                      className={`${inputCls(!!errors.codigoPostal)} mt-1.5`}
                      autoComplete="postal-code"
                    />
                    {errors.codigoPostal && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.codigoPostal}</p>}
                  </div>
                </div>
              </div>

              {/* Section: producto */}
              <div className="px-6 py-5 border-b border-[#f1f5f9]">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-[#0a0f1e] flex items-center justify-center flex-shrink-0">
                    <Package className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-bold text-[#0a0f1e] text-sm uppercase tracking-wider">Producto</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {PRODUCTS.map(({ value, label, price }) => (
                    <label
                      key={value}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                        form.producto === value
                          ? "border-amber-400 bg-amber-50 shadow-sm"
                          : "border-[#e2e8f0] hover:border-amber-200 hover:bg-amber-50/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="producto"
                        value={value}
                        checked={form.producto === value}
                        onChange={() => set("producto", value)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        form.producto === value ? "border-amber-500 bg-amber-500" : "border-[#cbd5e1]"
                      }`}>
                        {form.producto === value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-[#0a0f1e] leading-tight">{label}</p>
                      </div>
                      <span className="text-xs font-bold text-amber-600 flex-shrink-0">{price}</span>
                    </label>
                  ))}
                </div>
                {errors.producto && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.producto}</p>}
              </div>

              {/* Section: entrega */}
              <div className="px-6 py-5 border-b border-[#f1f5f9]">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-[#0a0f1e] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-bold text-[#0a0f1e] text-sm uppercase tracking-wider">Método de entrega</span>
                </div>

                {/* Toggle */}
                <div className="flex rounded-xl overflow-hidden border border-[#e2e8f0] mb-5 w-full sm:w-auto sm:inline-flex">
                  {(["domicilio", "recogida"] as DeliveryType[]).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => { set("entrega", opt); }}
                      className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        form.entrega === opt
                          ? "bg-[#0a0f1e] text-white"
                          : "bg-white text-[#64748b] hover:bg-[#f8fafc]"
                      }`}
                    >
                      {opt === "domicilio" ? <Home className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                      {opt === "domicilio" ? "A domicilio" : "Punto de recogida"}
                    </button>
                  ))}
                </div>

                {form.entrega === "domicilio" ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      {field("Dirección postal completa")}
                      <input
                        type="text"
                        value={form.direccion}
                        onChange={(e) => set("direccion", e.target.value)}
                        placeholder="Calle, número, piso, puerta"
                        className={`${inputCls(!!errors.direccion)} mt-1.5`}
                        autoComplete="street-address"
                      />
                      {errors.direccion && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.direccion}</p>}
                    </div>
                    <div>
                      {field("Ciudad / Municipio")}
                      <input
                        type="text"
                        value={form.ciudad}
                        onChange={(e) => set("ciudad", e.target.value)}
                        placeholder="Ej: Madrid"
                        className={`${inputCls(!!errors.ciudad)} mt-1.5`}
                        autoComplete="address-level2"
                      />
                      {errors.ciudad && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.ciudad}</p>}
                    </div>
                  </div>
                ) : (
                  <div>
                    {field("Punto de recogida preferido")}
                    <select
                      value={form.puntoRecogida}
                      onChange={(e) => set("puntoRecogida", e.target.value)}
                      className={`${inputCls(!!errors.puntoRecogida)} mt-1.5 cursor-pointer`}
                    >
                      <option value="">Selecciona una opción…</option>
                      {PICKUP_POINTS.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    {errors.puntoRecogida && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.puntoRecogida}</p>}
                    <p className="text-[#94a3b8] text-xs mt-2">
                      Te confirmaremos el punto exacto más cercano a tu código postal.
                    </p>
                  </div>
                )}
              </div>

              {/* Notas */}
              <div className="px-6 py-5">
                <div className="mb-1.5">
                  {field("Notas adicionales", false)}
                </div>
                <textarea
                  value={form.notas}
                  onChange={(e) => set("notas", e.target.value)}
                  placeholder="Instrucciones especiales, dudas, horario preferido de entrega…"
                  rows={3}
                  maxLength={300}
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-white text-sm text-[#0a0f1e] placeholder-[#94a3b8] outline-none transition-all duration-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 resize-none"
                />
                <p className="text-[#94a3b8] text-xs text-right mt-0.5">{form.notas.length}/300</p>
              </div>

              {/* Submit */}
              <div className="px-6 pb-7">
                <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex items-start gap-2.5 mb-5">
                  <Phone className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-amber-800 text-xs leading-relaxed">
                    Al enviar, se abrirá WhatsApp con tu pedido completo para que lo confirmes. <strong>No se cobra nada hasta recibir el paquete.</strong>
                  </p>
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl text-sm tracking-wide shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Enviar pedido por WhatsApp</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-auto" />
                </button>
                <p className="text-[#94a3b8] text-xs text-center mt-3">
                  🔒 Tus datos solo se usan para gestionar tu pedido y se envían directamente por WhatsApp
                </p>
              </div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
