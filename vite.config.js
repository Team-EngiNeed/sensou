import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/sensou/", 
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
