// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-portfolio/",
  build: {
    outDir: "docs", // ✅ 반드시 docs
  },
  plugins: [react()],
});
