import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {},
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  base: "./", // Use relative paths for GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined, // Ensures proper bundling
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      }
    },
  },
});
