import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test-setup.ts",
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: "./src/index.tsx",
      formats: ["es"],
      fileName: "index-[hash]",
    },
    rollupOptions: {
      output: {
        assetFileNames: "index-[hash][extname]",
      },
    },
  },
});
