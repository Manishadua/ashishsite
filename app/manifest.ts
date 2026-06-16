import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ashish Bhagat — Relationship Manager",
    short_name: "Ashish Bhagat",
    description:
      "Ashish Bhagat - Relationship Manager with 5+ years across insurance, banking and customer service, managing client relationships, branch performance and business growth.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a3d62",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["business", "finance", "insurance", "professional"],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
