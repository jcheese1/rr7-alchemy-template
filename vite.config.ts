import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import alchemy from "alchemy/cloudflare/react-router";
import { defineConfig, type PluginOption } from "vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true
  },
  plugins: [
    alchemy() as PluginOption,
    tailwindcss(),
    reactRouter(),
  ],
});
