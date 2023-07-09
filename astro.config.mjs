import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000
  },
  integrations: [react(), tailwind()]
});