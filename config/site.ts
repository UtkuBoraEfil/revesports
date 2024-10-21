export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Revesports",
  description: "Get a volleyball scholarship in USA",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://revesports.vercel.app",
  links: {
    whatsapp: "https://github.com/ardaydilek",
    instagram: "https://github.com/ardaydilek",
  },
};
