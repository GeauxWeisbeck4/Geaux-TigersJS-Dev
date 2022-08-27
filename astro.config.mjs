import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://sunny-arithmetic-1e866e.netlify.app",
  integrations: [mdx(), sitemap(), tailwind(), compress({
    css: true,
    html: false,
    js: true,
    img: false,
    svg: false,
  })],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});