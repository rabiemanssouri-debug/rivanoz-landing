import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rivanoz.com"),
  title: {
    default: "RivaNoz — Miel Erkexin VIP y Crema Super Viga | Salud Masculina Discreta España",
    template: "%s | RivaNoz",
  },
  description:
    "Soluciones naturales para la erección y eyaculación precoz. Miel Erkexin VIP y Crema Super Viga 150000. Envío discreto 24-72h en España. Pago contra reembolso o Bizum. Sin receta. +1.247 pedidos.",
  keywords: [
    "miel erkexin vip",
    "crema super viga 150000",
    "retardante eyaculacion precoz",
    "mejorar ereccion natural",
    "crema retardante hombre",
    "suplemento masculino natural",
    "eyaculacion precoz solucion",
    "potencia sexual hombre",
    "rendimiento masculino",
    "erkexin herbal paste",
    "super viga delay cream",
    "pastillas erección sin receta",
    "envío discreto salud masculina",
    "comprar erkexin españa",
    "comprar super viga españa",
    "solución erección discreta",
    "mejorar rendimiento sexual hombre",
    "crema retardante discreta españa",
    "pago contra reembolso salud masculina",
    "bienestar masculino suplemento",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "RivaNoz",
    title: "RivaNoz — Recupera la Erección y el Control | Envío Discreto España",
    description:
      "Miel Erkexin VIP y Crema Super Viga 150000. Fórmulas naturales para mejorar la erección y controlar la eyaculación. Desde 25€. Pago al recibirlo. Envío discreto garantizado.",
    images: [
      {
        url: "/images/erkexin.png",
        width: 1200,
        height: 630,
        alt: "RivaNoz — Miel Erkexin VIP y Crema Super Viga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RivaNoz — Salud Masculina Discreta | España",
    description:
      "Miel Erkexin VIP y Crema Super Viga 150000. Envío discreto 24-72h. Pago contra reembolso. +1.247 pedidos en España.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.rivanoz.com",
  },
  authors: [{ name: "RivaNoz" }],
  category: "health",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.rivanoz.com/#organization",
      name: "RivaNoz",
      url: "https://www.rivanoz.com",
      logo: "https://www.rivanoz.com/images/erkexin.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+34632656435",
        contactType: "customer service",
        availableLanguage: "Spanish",
      },
      sameAs: [
        "https://www.instagram.com/vitafitness22/",
        "https://www.facebook.com/profile.php?id=61581890916113",
        "https://www.tiktok.com/@vitaasex",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rivanoz.com/#website",
      url: "https://www.rivanoz.com",
      name: "RivaNoz",
      publisher: { "@id": "https://www.rivanoz.com/#organization" },
    },
    {
      "@type": "Product",
      name: "Miel Erkexin VIP",
      description:
        "Complemento herbal natural para mejorar la erección, potencia sexual y vitalidad masculina. Ginseng siberiano, jalea real y propóleo.",
      image: "https://www.rivanoz.com/images/erkexin.png",
      brand: { "@type": "Brand", name: "RivaNoz" },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "48",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://www.rivanoz.com/#organization" },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1247",
        bestRating: "5",
      },
    },
    {
      "@type": "Product",
      name: "Crema Super Viga 150000",
      description:
        "Crema retardante de aplicación tópica para controlar la eyaculación precoz. Efecto activo 30-60 minutos. Formato discreto 15ml.",
      image: "https://www.rivanoz.com/images/superviga.png",
      brand: { "@type": "Brand", name: "RivaNoz" },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "25",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://www.rivanoz.com/#organization" },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1247",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo funciona la Crema Super Viga 150000?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es una crema retardante de aplicación tópica. Actúa reduciendo la hipersensibilidad de forma local. El efecto dura entre 30 y 60 minutos.",
          },
        },
        {
          "@type": "Question",
          name: "¿El envío es discreto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El paquete llega sin referencias visibles al contenido ni en el exterior ni en los datos del remitente.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo pagar contra reembolso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Puedes pagar al recibir el pedido (contra reembolso) o por Bizum antes del envío. No necesitas introducir datos bancarios online.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
