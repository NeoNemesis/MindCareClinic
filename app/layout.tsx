import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ÁGAPE - Cuidado de la Salud Domiciliaria",
  description: "Servicios de salud profesional a domicilio en Chile. Enfermería, terapia física, cuidado del adulto mayor y más.",
  keywords: ["salud domiciliaria", "enfermería", "cuidado adulto mayor", "terapia física", "Chile"],
  authors: [{ name: "ÁGAPE" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "ÁGAPE - Cuidado de la Salud Domiciliaria",
    description: "Servicios de salud profesional a domicilio en Chile",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfairDisplay.variable} smooth-scroll`}>
      <body>
        <a 
          href="#main-content" 
          className="skip-to-content"
        >
          Saltar al contenido principal
        </a>
        
        <Navbar />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
