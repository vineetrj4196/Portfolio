import { siteConfig } from "@/lib/site-data";

export default function manifest() {
  return {
    name: `${siteConfig.name} — Portfolio`,
    short_name: "Vineet RJ",
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#2563eb",
    lang: "en",
    icons: [
      { src: "/assets/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/assets/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { src: "/assets/icons/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
