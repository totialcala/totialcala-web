import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Toti Alcalà — Director Técnico de Lanzamientos y Directos de Venta",
  description:
    "Llevo más de 10 años produciendo livestreams para grandes corporaciones. Los últimos 3, volcado en lanzamientos de creadores e infoproductores. Más de 120 días en directo de lanzamientos.",
  keywords: [
    "director técnico lanzamientos",
    "producción directos de venta",
    "webinar técnico profesional",
    "realización directos online",
    "lanzamientos infoproductores",
    "streaming profesional",
  ],
  authors: [{ name: "Toti Alcalà" }],
  openGraph: {
    title: "Toti Alcalà — Director Técnico de Lanzamientos",
    description:
      "Cuando hay dinero en juego en un directo, la parte técnica no puede fallar.",
    url: "https://totialcala.com",
    siteName: "Toti Alcalà",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toti Alcalà — Director Técnico de Lanzamientos",
    description:
      "Cuando hay dinero en juego en un directo, la parte técnica no puede fallar.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="es" className={dmSans.variable}>
        <body className="bg-slate-950 text-white antialiased font-sans">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
