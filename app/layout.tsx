import type { Metadata } from "next";
import localFont from "next/font/local";
import {Playfair_Display} from "next/font/google";
import {Nanum_Myeongjo} from "next/font/google";
import "./globals.css";
import { Contact } from "@/components/Contact";

import { cn } from "@/lib/utils";


const impact = localFont({
  src: "./fonts/impact.woff",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`font-impact bg-default-black text-default-white `)}>{children}<Contact/></body>

    </html>
  );
}
