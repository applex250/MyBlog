import { defineConfig } from "astro/config";
import tailwindcss from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

// https://astro.build/config
export default defineConfig({
  site: "https://yourdomain.com", // 后续替换为实际域名
  base: "/",
  trailingSlash: "ignore",
  integrations: [
    tailwindcss(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  compressHTML: true,
  build: {
    format: "file",
  },
  output: "static",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  vite: {
    resolve: {
      alias: {
        "@": resolve("./src"),
      },
    },
  },
});
