import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://logosestudiodj.com.ar";

export const metadata: Metadata = {
  title: "Logos Estudio DJ | Clases de DJ en La Plata",
  description:
    "Clases de DJ en La Plata con cabina profesional. Entrenamiento real, seguimiento personalizado y preparación para tocar en vivo.",
  keywords: [
    "clases de DJ",
    "DJ La Plata",
    "escuela de DJ",
    "cabina profesional",
    "cursos de DJ",
    "Logos Estudio DJ",
  ],
  icons: {
    icon: [{ url: "/logo-window.png", type: "image/png" }],
  },
  openGraph: {
    title: "Logos Estudio DJ | Clases de DJ en La Plata",
    description:
      "Clases de DJ en La Plata con cabina profesional. Entrenamiento real y seguimiento personalizado.",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/logos-estudio-info.jpeg`,
        width: 1200,
        height: 630,
        alt: "Logos Estudio DJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logos Estudio DJ | Clases de DJ en La Plata",
    description:
      "Clases de DJ en La Plata con cabina profesional. Entrenamiento real y seguimiento personalizado.",
    images: [`${siteUrl}/logos-estudio-info.jpeg`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MusicSchool",
  name: "Logos Estudio DJ",
  description:
    "Clases de DJ en La Plata con cabina profesional. Entrenamiento real y seguimiento personalizado.",
  url: "https://logosestudiodj.com",
  telephone: "+54 9 221 351-3585",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida 66 1077",
    addressLocality: "La Plata",
    addressRegion: "Buenos Aires",
    postalCode: "C1900",
    addressCountry: "AR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "12:00",
      closes: "20:00",
    },
  ],
  sameAs: ["https://soundcloud.com/facundo-fuente-398481768/sets/logos"],
  image: ["/logos-estudio-info.JPG", "/logo-estudio-dj.png"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <a
          href="https://wa.me/5492213513585?text=Hola%2C%20estaba%20interesado%20en%20las%20clases%20de%20DJ"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Logos Estudio DJ"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:scale-105 hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-9 w-9 fill-current block"
          >
            <path d="M20.52 3.48A11.77 11.77 0 0 0 12.04 0C5.44 0 .07 5.37.07 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.24-1.63a11.9 11.9 0 0 0 5.8 1.48h.01c6.6 0 11.97-5.37 11.97-11.97a11.9 11.9 0 0 0-3.5-8.4zm-8.48 18.3h-.01a9.93 9.93 0 0 1-5.07-1.39l-.36-.21-3.7.97.99-3.61-.23-.37a9.93 9.93 0 0 1-1.52-5.2c0-5.49 4.47-9.96 9.96-9.96a9.9 9.9 0 0 1 7.04 2.93 9.9 9.9 0 0 1 2.92 7.03c0 5.49-4.47 9.96-9.95 9.96zm5.46-7.48c-.3-.15-1.77-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.47-2.4-1.5-.89-.79-1.5-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.94-2.24-.25-.6-.5-.52-.68-.53-.18-.01-.38-.01-.58-.01-.2 0-.53.08-.8.38-.27.3-1.06 1.03-1.06 2.52 0 1.49 1.09 2.93 1.24 3.13.15.2 2.14 3.27 5.17 4.58.72.31 1.29.5 1.73.64.73.23 1.4.2 1.92.12.59-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.07-.13-.28-.2-.58-.35z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
