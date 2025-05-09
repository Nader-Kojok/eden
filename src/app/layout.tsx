import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://edentours.com'),
  title: {
    default: "Eden Tours & Travel | Votre Agence de Voyage de Confiance",
    template: "%s | Eden Tours & Travel"
  },
  description: "Votre partenaire de confiance pour les vols, circuits et pèlerinages dans le monde entier. Découvrez nos offres exclusives et nos services personnalisés.",
  keywords: [
    "voyage",
    "agence de voyage",
    "pèlerinage",
    "circuits",
    "vols",
    "tourisme",
    "voyage organisé",
    "vacances",
    "tour opérateur",
    "réservation de vol",
    "voyage sur mesure"
  ],
  authors: [{ name: "Eden Tours & Travel" }],
  creator: "Eden Tours & Travel",
  publisher: "Eden Tours & Travel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://edentours.com",
    siteName: "Eden Tours & Travel",
    title: "Eden Tours & Travel | Votre Agence de Voyage de Confiance",
    description: "Votre partenaire de confiance pour les vols, circuits et pèlerinages dans le monde entier.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eden Tours & Travel"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eden Tours & Travel | Votre Agence de Voyage de Confiance",
    description: "Votre partenaire de confiance pour les vols, circuits et pèlerinages dans le monde entier.",
    images: ["/twitter-image.jpg"],
    creator: "@edentours",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2563EB'
      }
    ]
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://edentours.com",
    languages: {
      'fr-FR': 'https://edentours.com',
      'en-US': 'https://edentours.com/en',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-white antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
