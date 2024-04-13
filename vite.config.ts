import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  build: {
    target: 'node18.10.0',
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['cjs'],
    },
  },

  plugins: [
    nodePolyfills({
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      protocolImports: true,
    }),
  ],
})
