import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import node from "@astrojs/node";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs(), svelte()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});