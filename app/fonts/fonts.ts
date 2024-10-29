import localFont from "next/font/local";
import { Roboto } from "next/font/google";

export const impact = localFont({
  src: "./impact.woff",
  display: "swap",
});

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
