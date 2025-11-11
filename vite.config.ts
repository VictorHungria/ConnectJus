import path from 'path';
import { fileURLToPath } from 'url';
// FIX: Import defineConfig from 'vitest/config' to include Vitest types and fix config errors.
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => ({
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: {
      host: 'localhost',
    },
  },
  plugins: [
    react(),
    // Plugin to inject React DevTools script in development.
    // This ensures the DevTools hook is available before React initializes.
    {
      name: 'inject-react-devtools',
      apply: 'serve', // Only apply in development server
      transformIndexHtml() {
        return [
          {
            tag: 'script',
            injectTo: 'head-prepend',
            attrs: {
              src: 'http://localhost:8097',
            },
          },
        ];
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@connectjus/docs-api': path.resolve(__dirname, './packages/docs-api/src'),
      '@connectjus/ui-primitives': path.resolve(__dirname, './packages/ui-primitives/src'),
      '@connectjus/docs-calculator-ui': path.resolve(__dirname, './packages/docs-calculator-ui/src'),
      '@connectjus/docs-ui': path.resolve(__dirname, './packages/docs-ui/src'),
    }
  },

  // ESTA É A LINHA QUE VOCÊ PRECISA ADICIONAR:
  base: './',

  build: {
    outDir: 'dist'
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
}));