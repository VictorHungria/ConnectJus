

import path from 'path';
import { fileURLToPath } from 'url';
// FIX: Import defineConfig from 'vitest/config' to include Vitest types and fix config errors.
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The import map from index.html, used by our custom plugin.
const importmap = {
  "imports": {
    "path": "https://aistudiocdn.com/path@^0.12.7",
    "vite": "https://aistudiocdn.com/vite@^7.1.12",
    "@vitejs/plugin-react": "https://aistudiocdn.com/@vitejs/plugin-react@4.3.1",
    "react": "https://esm.sh/react@18.3.1?dev",
    "react/": "https://esm.sh/react@18.3.1/?dev",
    "react-dom/": "https://esm.sh/react-dom@18.3.1/?dev",
    "marked": "https://aistudiocdn.com/marked@13.0.2",
    "liquidjs": "https://cdn.jsdelivr.net/npm/liquidjs@10.16.0/+esm",
    "electron": "https://aistudiocdn.com/electron@^39.0.0",
    "fs": "https://aistudiocdn.com/fs@0.0.1-security",
    "url": "https://aistudiocdn.com/url@^0.11.4",
    "fs/": "https://aistudiocdn.com/fs@0.0.1-security/",
    "immer": "https://aistudiocdn.com/immer@10.1.1",
    "@monaco-editor/react": "https://aistudiocdn.com/@monaco-editor/react@4.6.0",
    "@uiw/react-codemirror": "https://aistudiocdn.com/@uiw/react-codemirror@4.21.21",
    "@codemirror/lang-markdown": "https://aistudiocdn.com/@codemirror/lang-markdown@6.2.2",
    "@codemirror/language-data": "https://aistudiocdn.com/@codemirror/language-data@6.3.1",
    "@codemirror/lint": "https://aistudiocdn.com/@codemirror/lint@6.9.1",
    "@codemirror/view": "https://aistudiocdn.com/@codemirror/view@6.12.0",
    "react-dnd": "https://aistudiocdn.com/react-dnd@16.0.1",
    "react-dnd-html5-backend": "https://aistudiocdn.com/react-dnd-html5-backend@16.0.1",
    "chokidar": "https://aistudiocdn.com/chokidar@^4.0.3",
    "fs-extra": "https://aistudiocdn.com/fs-extra@^11.3.2",
    "zustand/": "https://aistudiocdn.com/zustand@^5.0.8/",
    "react-mosaic-component": "https://aistudiocdn.com/react-mosaic-component@6.1.1",
    "react-mosaic-component/": "https://aistudiocdn.com/react-mosaic-component@^6.1.1/",
    "electron-store": "https://aistudiocdn.com/electron-store@^11.0.2",
    "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?dev",
    "@testing-library/user-event": "https://aistudiocdn.com/@testing-library/user-event@^14.6.1",
    "@testing-library/jest-dom/": "https://aistudiocdn.com/@testing-library/jest-dom@^6.9.1/",
    "vitest/": "https://aistudiocdn.com/vitest@^4.0.7/",
    "vitest": "https://aistudiocdn.com/vitest@^4.0.7",
    "@testing-library/react": "https://aistudiocdn.com/@testing-library/react@15.0.7",
    "react-dnd-test-backend": "https://aistudiocdn.com/react-dnd-test-backend@^16.0.1",
    "@codemirror/state": "https://aistudiocdn.com/@codemirror/state@^6.5.2",
    "@codemirror/commands": "https://aistudiocdn.com/@codemirror/commands@^6.10.0",
    "react-dom": "https://esm.sh/react-dom@18.3.1?dev",
    "electron-devtools-installer": "https://aistudiocdn.com/electron-devtools-installer@^4.0.0",
    "zustand": "https://aistudiocdn.com/zustand@^5.0.8",
    "nanoid": "https://aistudiocdn.com/nanoid@^5.1.6"
  }
};

/**
 * A Vite plugin to resolve bare module specifiers using the importmap.
 * This tells Vite to treat these imports as external, leaving them for the
 * browser to resolve at runtime.
 */
function importmapPlugin() {
  return {
    name: 'vite-plugin-importmap',
    resolveId(source: string) {
      if (importmap.imports.hasOwnProperty(source)) {
        // Mark the import as external, preventing Vite from trying to bundle it.
        return { id: source, external: true };
      }
      return null; // Let Vite handle other imports normally.
    },
  };
}


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
    // The importmap plugin is only for the browser-based dev/build.
    // For tests, Vitest should resolve from node_modules.
    mode !== 'test' && importmapPlugin(),
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