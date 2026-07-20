import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import alchemy from "alchemy/cloudflare/react-router";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true
  },
  plugins: [
    alchemy(),
    tailwindcss(),
    reactRouter(),
  ],
});
