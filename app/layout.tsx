import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE_URL, inicio } from "@/content/site";
import "./globals.css";

const jetbrains = localFont({
  src: "./fonts/JetBrainsMono-Variable.ttf",
  weight: "100 800",
  style: "normal",
  display: "swap",
  variable: "--font-jetbrains",
});

const descripcion =
  "Constructora boutique en Montevideo. Tu proyecto, pensado para vos, con el presupuesto exacto. Lo construimos juntos, sin sorpresas en el camino.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Chacra Once | Constructora boutique en Montevideo",
  description: descripcion,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: SITE_URL,
    siteName: "Chacra Once",
    title: "Chacra Once | Constructora boutique en Montevideo",
    description: descripcion,
    images: [{ url: inicio.imagen.src, alt: inicio.imagen.alt }],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-light.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
      // Con sizes "any" Chrome elegía el .ico y lo escalaba; así prioriza el SVG
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-UY" className={jetbrains.variable}>
      <body>{children}</body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
