import type { Metadata } from "next";
import { Roboto, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-montserrat",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: {
    default: "El Tanque | Corralón y Ferretería",
    template: "%s | El Tanque"
  },
  description: "Materiales de construcción y ferretería en San Clemente del Tuyú. Desde 1975 proveemos todo para tu obra con la mejor atención y precios.",
  keywords: ["ferretería", "corralón", "materiales de construcción", "san clemente del tuyú", "herramientas", "sanitarios", "pinturería"],
  authors: [{ name: "El Tanque" }],
  creator: "El Tanque",
  metadataBase: new URL('https://ferreteriaeltanque.com.ar'), // Replace with actual domain when known or use env var
  openGraph: {
    title: "El Tanque | Corralón y Ferretería",
    description: "Materiales de construcción y ferretería en San Clemente del Tuyú. Desde 1975.",
    url: 'https://ferreteriaeltanque.com.ar', // Replace with actual domain
    siteName: 'El Tanque',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "El Tanque | Corralón y Ferretería",
    description: "Materiales de construcción y ferretería en San Clemente del Tuyú.",
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
  themeColor: '#CC3333',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'El Tanque',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

import { ShopProvider } from "./context/ShopContext";

import ContactModal from "./components/ContactModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${roboto.variable} ${montserrat.variable} ${greatVibes.variable}`} style={{
        fontFamily: 'var(--font-roboto)',
      }} suppressHydrationWarning={true}>
        <ShopProvider>
          {children}
          <ContactModal />
        </ShopProvider>
      </body>
    </html>
  );
}
