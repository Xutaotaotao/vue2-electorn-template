import { builtinModules } from 'module'
import { fileURLToPath } from 'url';
import path from "path";
const __dirname = fileURLToPath(new URL('.', import.meta.url))

const config = {
  root: path.resolve(__dirname, '../src/webview'),
  envDir:process.cwd(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../dist/webview"),
    assetsDir: '.',
    minify: false,
    target: `node16`,
    lib: {
      entry: path.resolve(__dirname, '../src/webview/index.ts'),
      formats: ['cjs']
    },
    rollupOptions: {
      external: ['electron',...builtinModules],
      output: {
        entryFileNames: '[name].cjs',
      },
    },
    emptyOutDir: true,
    brotliSize: false,
    chunkSizeWarningLimit: 2048,
  },
};
export default config;
