import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: "./docs", clean: true },
  server: { open: true },
  css: {
    devSourcemap: true,
  },
});
