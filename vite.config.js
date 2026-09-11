import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  // GitHub Pages needs the repository base path in production.
  // Local development uses "/" so assets and navigation resolve normally.
  base: mode === "production" ? "/Piyush-Portfolio/" : "/",

  plugins: [react(), tailwindcss()],

  server: {
    hmr: true,
    watch: {
      // Helps Vite reliably detect file edits on macOS/Windows setups.
      usePolling: true,
      interval: 100,
    },
  },
}));
