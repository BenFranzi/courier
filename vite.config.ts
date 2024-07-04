import { join } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNested from 'postcss-nested';
import DevServiceWorkerPlugin from './plugins/DevServiceWorkerPlugin.ts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), DevServiceWorkerPlugin()],
  resolve: {
    alias: {
      '@/': join(__dirname, 'src/'),
    },
  },
  css: {
    postcss: {
      plugins: [postcssNested],
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      input: {
        'main': './index.html',
        'service-worker': './src/service-worker/index.ts',
        'server': './server/index.ts'
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (['service-worker', 'server'].includes(chunkInfo.name)) {
            return '[name].js';
          }

          return 'assets/[name]-[hash].js';
        },
      },
    },
  },
});