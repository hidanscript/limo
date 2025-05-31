import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Limo - El Limón más Minimalista",
  description: "Limo es un limón minimalista con una sonrisa :3 que se transforma en una experiencia terrorífica. ¡Cuidado con hacer clic!",
  keywords: ["limo", "limón", "minimalista", "terror", "juego", "interactivo", "experiencia", "horror"],
  authors: [{ name: "Limo Team" }],
  creator: "Limo Team",
  publisher: "Limo Team",
  robots: "index, follow",
  openGraph: {
    title: "Limo - El Limón más Minimalista",
    description: "Limo es un limón minimalista con una sonrisa :3 que se transforma en una experiencia terrorífica. ¡Cuidado con hacer clic!",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/limo-og.jpg",
        width: 1200,
        height: 630,
        alt: "Limo - El Limón más Minimalista"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Limo - El Limón más Minimalista",
    description: "Limo es un limón minimalista con una sonrisa :3 que se transforma en una experiencia terrorífica. ¡Cuidado con hacer clic!",
    images: ["/limo-og.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#FFEB3B",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
