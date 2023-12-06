import { builtinModules } from "module";
import { fileURLToPath } from 'url';
import { createVuePlugin } from 'vite-plugin-vue2'
import path from "path";

const __dirname = fileURLToPath(new URL('.', import.meta.url))


const config = {
  root: process.cwd(),
  base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../dist/render"),
    minify: true,
    assetsInlineLimit: 1048576,
    emptyOutDir: true,
    brotliSize: false,
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      external: [...builtinModules],
    },
  },
  plugins: [createVuePlugin()],
};
export default config;
