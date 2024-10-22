import type { Metadata } from "next";
import "../globals.css";
import { Footer } from "@/components/layouts/footer";

import { Navbar } from "@/components/layouts/navbar";
import { impact } from "@/app/fonts/fonts";

import { Toaster } from "sonner";
import { siteConfig } from "@/config/site";

import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: "ardakaanaydilek",
      url: "https://www.ardakaan.dev",
    },
    {
      name: "utkuboraefil",
      url: "https://utkubora.top",
    },
  ],
  creator: "@Notuscreativeworks",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.jpeg`],
    creator: "@notuscreativeworks",
  },
  icons: {
    icon: "/icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-default-black text-default-white ${impact.className}`}
      >
        <Toaster
          richColors
          position="top-center"
        />
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
