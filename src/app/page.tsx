import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Ticker from "@/components/layout/Ticker";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import Normalization from "@/components/sections/Normalization";
import Identification from "@/components/sections/Identification";
import EmotionalConsequence from "@/components/sections/EmotionalConsequence";
import Explanation from "@/components/sections/Explanation";
import Product from "@/components/sections/Product";
import Pricing from "@/components/sections/Pricing";
import Benefits from "@/components/sections/Benefits";
import WhatsAppSection from "@/components/sections/WhatsAppSection";
import Comparison from "@/components/sections/Comparison";
import Authority from "@/components/sections/Authority";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import OrderForm from "@/components/sections/OrderForm";
import HowItWorks from "@/components/sections/HowItWorks";
import Ingredients from "@/components/sections/Ingredients";
import PhotoGallery from "@/components/sections/PhotoGallery";
import { WHATSAPP_LINK } from "@/lib/contact";

export const metadata: Metadata = {
  title: "RivaNoz | Confianza, Control y Bienestar Masculino",
  description:
    "Soluciones masculinas discretas para mejorar el rendimiento y recuperar el control. Miel Erkexin VIP y Crema Super Viga 150000. Envío discreto, pago contra reembolso o Bizum.",
  keywords: [
    "mejorar erección",
    "rendimiento masculino",
    "confianza masculina",
    "controlar eyaculación precoz",
    "tranquilidad íntima",
    "solución masculina discreta",
    "miel erkexin",
    "super viga crema",
  ],
  openGraph: {
    title: "RivaNoz — Recupera tu Confianza y Control",
    description:
      "Soluciones masculinas discretas. Envío discreto garantizado. Pago contra reembolso disponible.",
    url: "https://www.tudominio.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Ticker />
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <Hero
          headline="Acabas demasiado rápido. Tu erección falla cuando más importa. Eso se acaba hoy."
          subheadline="Soluciones masculinas discretas para recuperar la firmeza y el control. Más de 1.247 pedidos en España. Envío 24-72h, pago al recibirlo."
          bullets={[
            "Fórmula natural testada — sin receta médica",
            "Envío discreto 24-72h sin referencias visibles",
            "Pago al recibirlo (contra reembolso) o por Bizum",
            "Atención privada por WhatsApp — sin formularios",
            "+1.247 pedidos en España",
          ]}
          ctaText="QUIERO INFORMACIÓN PRIVADA"
          ctaHref={WHATSAPP_LINK}
          ctaExternal
        />

        {/* ── Normalización ────────────────────────────────────── */}
        <Normalization
          title="No eres el único. Y tiene solución."
          copy={[
            "Más de 1.247 hombres en España ya han pedido nuestros productos. La mayoría llegó aquí sintiéndose solo con este problema.",
            "La eyaculación precoz y los problemas de erección son mucho más comunes de lo que se habla. El estrés, la ansiedad y la presión del día a día afectan directamente al rendimiento.",
            "La diferencia está en dar el primer paso. Y hacerlo de forma discreta, sin complicaciones.",
          ]}
        />

        {/* ── Identificación ───────────────────────────────────── */}
        <Identification
          title="¿Te identificas con alguna de estas situaciones?"
          items={[
            "Te cuesta mantener la firmeza como antes",
            "Sientes que todo ocurre demasiado rápido",
            "La ansiedad aparece antes del momento íntimo",
            "Piensas demasiado en si vas a rendir",
            "Te cuesta relajarte completamente",
            "Evitas ciertas situaciones por miedo a fallar",
            "Tu confianza ya no es la misma",
            "La frustración afecta tu relación con tu pareja",
          ]}
        />

        {/* ── Consecuencia emocional ───────────────────────────── */}
        <EmotionalConsequence
          title="El problema va mucho más allá de lo físico."
          intro="Con el tiempo, la inseguridad empieza a afectar aspectos que van mucho más allá del momento íntimo."
          items={[
            "la confianza",
            "la tranquilidad mental",
            "la espontaneidad",
            "tu autoestima",
          ]}
          closing="Muchos hombres creen que tienen que resignarse. No es cierto. Existe solución."
        />

        {/* ── Explicación ──────────────────────────────────────── */}
        <Explanation
          title="¿Por qué ocurre y cómo se aborda?"
          copy={[
            "El estrés, la presión psicológica, la circulación y el equilibrio hormonal influyen directamente en el rendimiento y el control masculino.",
            "Cuando aparece la ansiedad anticipatoria, el problema suele empeorar con cada intento — es un ciclo que se puede romper.",
            "Por eso nuestros productos actúan desde dos ángulos: la Miel Erkexin trabaja internamente con ingredientes naturales como ginseng y jalea real, mientras la Crema Super Viga actúa de forma tópica local para dar control inmediato.",
          ]}
          aspects={[
            { icon: "Activity", label: "físico" },
            { icon: "Brain", label: "mental" },
            { icon: "Smile", label: "emocional" },
          ]}
        />

        {/* ── Producto 1: Erkexin ──────────────────────────────── */}
        <Product
          title="Para recuperar la potencia, la firmeza y la vitalidad."
          productName="Miel Erkexin VIP"
          productImage="/images/erkexin.png"
          imageAlt="Miel Erkexin VIP — fórmula herbal masculina"
          benefits={[
            "Prolonga la duración y mejora la firmeza de la erección",
            "Estimula la potencia sexual y aumenta la resistencia",
            "Ginseng siberiano, jalea real y propóleo — fórmula herbal 100% natural",
            "Mejora la energía y la vitalidad general en pocas semanas",
            "Sin receta médica — formato discreto en sobres individuales",
          ]}
          ctaText="QUIERO INFORMACIÓN PRIVADA"
          price="desde 48€"
        />

        {/* ── Ingredientes Erkexin ─────────────────────────────── */}
        <Ingredients />

        {/* ── Galería de fotos ─────────────────────────────────── */}
        <PhotoGallery />

        {/* ── Producto 2: Super Viga ───────────────────────────── */}
        <Product
          title="Para recuperar el control y disfrutar sin presión."
          productName="Crema Super Viga 150000"
          productImage="/images/superviga.png"
          imageAlt="Crema Super Viga 150000 Delay Cream"
          benefits={[
            "Acción tópica suave — reduce la hipersensibilidad de forma local y controlada",
            "Efecto activo entre 30 y 60 minutos",
            "Aplicación rápida: lista en 5-10 minutos",
            "Formato discreto 15ml — fácil de guardar y transportar",
            "Compatible con el uso del preservativo",
          ]}
          ctaText="QUIERO INFORMACIÓN PRIVADA"
          price="desde 25€"
        />

        {/* ── Cómo se usa: Super Viga ──────────────────────────── */}
        <HowItWorks />

        {/* ── Precios ──────────────────────────────────────────── */}
        <Pricing />

        {/* ── Formulario de pedido ─────────────────────────────── */}
        <OrderForm />

        {/* ── Beneficios ───────────────────────────────────────── */}
        <Benefits
          title="Lo que más valoran quienes lo prueban."
          benefits={[
            {
              title: "Seguridad mental",
              description: "Dejas de anticipar el fallo. Tu mente se relaja antes del momento íntimo.",
            },
            {
              title: "Más control",
              description: "Sientes que manejas la situación en lugar de que la situación te maneje a ti.",
            },
            {
              title: "Confianza real",
              description: "Recuperas tranquilidad y seguridad en los momentos que importan.",
            },
            {
              title: "Discreción total",
              description: "Todo el proceso, desde la consulta hasta la entrega, es completamente privado.",
            },
          ]}
        />

        {/* ── WhatsApp ─────────────────────────────────────────── */}
        <WhatsAppSection />

        {/* ── Comparativa ──────────────────────────────────────── */}
        <Comparison
          title="El cambio que marca la diferencia."
          before={[
            "Ansiedad constante antes del momento íntimo",
            "Frustración que se acumula con el tiempo",
            "Evitar situaciones por miedo a fallar",
            "Distancia emocional con la pareja",
            "Inseguridad que crece con cada intento",
          ]}
          after={[
            "Tranquilidad mental en los momentos íntimos",
            "Confianza y control recuperados",
            "Vivir sin evitar situaciones íntimas",
            "Mayor conexión emocional con tu pareja",
            "Seguridad que crece con cada experiencia",
          ]}
        />

        {/* ── Autoridad ────────────────────────────────────────── */}
        <Authority title="Calidad, discreción y confianza." />

        {/* ── Testimonios ──────────────────────────────────────── */}
        <Testimonials
          title="Experiencias reales."
          testimonials={[
            {
              text: "La mayor diferencia fue mental. Dejé de preocuparme constantemente. Ahora disfruto sin esa presión.",
              author: "Carlos M.",
              age: 42,
              stars: 5,
            },
            {
              text: "Ahora siento mucho más control y tranquilidad. La diferencia es enorme comparado con antes.",
              author: "Daniel R.",
              age: 38,
              stars: 5,
            },
            {
              text: "El cambio no fue solo físico. Recuperé la confianza que creía haber perdido para siempre.",
              author: "Alejandro P.",
              age: 45,
              stars: 5,
            },
          ]}
        />

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <FAQ
          title="Preguntas habituales."
          items={[
            {
              question: "¿Cómo funciona la Crema Super Viga 150000?",
              answer:
                "Es una crema retardante de aplicación tópica. Actúa de forma local reduciendo la hipersensibilidad en la zona de aplicación, lo que ayuda a prolongar el rendimiento. El efecto es suave y controlado, sin afectar la sensación general. Dura entre 30 y 60 minutos.",
            },
            {
              question: "¿Cómo se aplica la crema? ¿Es complicado?",
              answer:
                "No, es muy sencillo. Limpia y seca la zona, aplica una pequeña cantidad y masajea hasta que se absorba. Espera 5-10 minutos antes de la actividad. Después lávate las manos. El tubo de 15ml es compacto y fácil de guardar.",
            },
            {
              question: "¿Qué es la Miel Erkexin y cómo se toma?",
              answer:
                "Erkexin Herbal Mixed Paste es un complemento herbal de uso oral. Se toma 1-2 cucharaditas al día, directamente o diluido en agua. Cada sobre contiene la dosis individual para mayor comodidad. Los resultados en energía y rendimiento suelen notarse en pocas semanas de uso regular.",
            },
            {
              question: "¿Cuáles son los ingredientes del Erkexin?",
              answer:
                "La fórmula combina ginseng siberiano, jalea real, propóleo de abeja, tribulus terrestris, raíz de maca y fenogreco. Todos ingredientes de uso tradicional, conocidos por apoyar la vitalidad masculina, el rendimiento y el equilibrio hormonal natural.",
            },
            {
              question: "¿En cuánto tiempo se notan los resultados del Erkexin?",
              answer:
                "La mayoría de usuarios reportan mejoras en energía y resistencia en las primeras semanas de uso regular. Los efectos sobre el rendimiento íntimo pueden variar según cada persona y la constancia de uso.",
            },
            {
              question: "¿Puedo usar los dos productos a la vez?",
              answer:
                "Sí. Muchos clientes combinan la Miel Erkexin (acción interna) con la Crema Super Viga (acción externa) para una experiencia completa. Por eso tenemos el Pack Combinado a 58€, con ahorro de 15€ respecto al precio individual.",
            },
            {
              question: "¿El envío es discreto?",
              answer:
                "Sí. El paquete llega sin referencias visibles al contenido — ni en el exterior del paquete ni en los datos del remitente. Total discreción garantizada desde la compra hasta la entrega en tu puerta.",
            },
            {
              question: "¿Puedo pagar contra reembolso o por Bizum?",
              answer:
                "Sí. No necesitas pagar online. Puedes pagar al recibir el pedido (contra reembolso) o por Bizum antes del envío. Sin introducir datos bancarios. Hablamos por WhatsApp para coordinar todo.",
            },
            {
              question: "¿Cuánto tarda en llegar?",
              answer:
                "Normalmente entre 24 y 72 horas en España. Te enviamos el número de seguimiento para que puedas controlar la entrega de forma discreta.",
            },
            {
              question: "¿Cómo hago mi pedido?",
              answer:
                "Escríbenos por WhatsApp al +34 632 65 64 35. Te atendemos de forma privada y personalizada. Sin formularios, sin registros, sin complicaciones.",
            },
          ]}
        />

        {/* ── CTA Final ────────────────────────────────────────── */}
        <CTAFinal
          headline="Recuperar la confianza empieza con una decisión."
          subheadline="Escríbenos por WhatsApp. Atención privada, discreta y personalizada."
          ctaText="QUIERO INFORMACIÓN PRIVADA"
        />

      </main>
      <Footer />
      <StickyMobileCTA text="INFORMACIÓN PRIVADA · WHATSAPP" />
      <FloatingWhatsApp />
    </>
  );
}
