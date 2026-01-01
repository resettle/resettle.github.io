import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5174,
  },
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths({ projectDiscovery: 'lazy' }),
  ],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === 'MODULE_LEVEL_DIRECTIVE' ||
          warning.code === 'SOURCEMAP_ERROR'
        ) {
          return
        }

        warn(warning)
      },
    },
  },
})
