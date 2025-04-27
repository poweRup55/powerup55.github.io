import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

// Create directory-based output for clean URLs
const generateCleanUrlOutputs = () => {
  const input = {
    main: resolve(__dirname, "index.html"),
  };

  // Add pages
  const pages = ["about", "film-editor", "developer", "artist"];
  pages.forEach((page) => {
    input[page] = resolve(__dirname, `${page}.html`);
  });

  return input;
};

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
      input: generateCleanUrlOutputs(),
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
