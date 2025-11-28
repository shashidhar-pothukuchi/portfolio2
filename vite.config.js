import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Use root path for custom domain, or set BASE_PATH env variable for subdirectory deployment
const BASE_PATH = process.env.BASE_PATH || "/";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: BASE_PATH,
  publicDir: "public",
  build: {
    outDir: "dist",
    // Copy CNAME file to dist for GitHub Pages custom domain
    copyPublicDir: true,
  },
});
