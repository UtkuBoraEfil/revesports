import type { Metadata } from "next";
import "../globals.css";
import { Footer } from "@/components/layouts/footer";

import { Navbar } from "@/components/layouts/navbar";
import { impact } from "@/app/fonts/fonts";

export const metadata: Metadata = {
  title: "Revesports",
  description: "@Revesports",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
