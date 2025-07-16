import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-portfolio/",
  build: {
    outDir: "docs", // ✅ dist 대신 docs 폴더로 빌드
  },
  plugins: [react()],
});
