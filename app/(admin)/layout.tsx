import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

import { cn } from "@/lib/utils";

const impact = localFont({
  src: "../fonts/impact.woff",
});

export const metadata: Metadata = {
  title: {
    default: "Revesports",
    template: "%s | Revesports",
  },
  description: "@Revesports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`font-impact bg-default-black text-default-white`)}>
        {children}
      </body>
    </html>
  );
}
