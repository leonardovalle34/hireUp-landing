import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HireUp — Inglês Profissional com IA",
  description:
    "Pratique inglês para entrevistas e reuniões com tutores de IA personalizados. Feedback real, evolução rápida.",
  metadataBase: new URL("https://hireup.online"),
  keywords: [
    "inglês profissional",
    "inglês para entrevistas",
    "aprender inglês com IA",
    "simulação de entrevista",
    "inglês corporativo",
    "tutor de inglês online",
  ],
  authors: [{ name: "HireUp" }],
  creator: "HireUp",
  publisher: "HireUp",
  openGraph: {
    title: "HireUp — Inglês Profissional com IA",
    description:
      "Pratique inglês para entrevistas e reuniões com tutores de IA personalizados. Feedback real, evolução rápida.",
    url: "https://hireup.online",
    siteName: "HireUp",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HireUp — Inglês Profissional com IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HireUp — Inglês Profissional com IA",
    description:
      "Pratique inglês para entrevistas e reuniões com tutores de IA personalizados. Feedback real, evolução rápida.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://hireup.online",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HireUp",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web, PWA, iOS, Android",
  url: "https://hireup.online",
  description:
    "Pratique inglês profissional com tutores de IA. Simulação de entrevistas, tutor personalizado e teste de nivelamento para adultos brasileiros.",
  inLanguage: "pt-BR",
  audience: {
    "@type": "Audience",
    audienceType: "Adultos brasileiros que querem melhorar inglês profissional",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Plano Free",
      price: "0",
      priceCurrency: "BRL",
      description: "5 práticas por mês, tutor básico, teste de nivelamento",
    },
    {
      "@type": "Offer",
      name: "Plano Practice",
      price: "29.00",
      priceCurrency: "BRL",
      description:
        "Práticas ilimitadas, tutor personalizado, feedback detalhado",
    },
    {
      "@type": "Offer",
      name: "Plano Fluent",
      price: "99.00",
      priceCurrency: "BRL",
      description:
        "Tudo do Practice mais mentoria ao vivo e certificado de conclusão",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1247",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
