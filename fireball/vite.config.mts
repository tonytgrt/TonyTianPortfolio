import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

// Builds the hero background into a single static script, js/fireball.js,
// which index.html loads. Run from the portfolio root with
// `npm run build:fireball` (or `watch:fireball` while working on it).
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  publicDir: false,
  build: {
    outDir: '../js',
    // js/ sits outside this folder, so leave anything else in it alone and
    // just overwrite the bundle.
    emptyOutDir: false,
    rolldownOptions: {
      input: 'src/main.ts',
      output: {
        // A fixed name, so the <script> tag in index.html only ever changes by
        // the ?v= stamp that `npm run build` puts on it (scripts/stamp-assets.mjs).
        entryFileNames: 'fireball.js',
      },
    },
  },
});
