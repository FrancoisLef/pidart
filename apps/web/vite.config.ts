import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsPaths()],
  build: {
    sourcemap: true,
  },
  clearScreen: false,
  server: {
    open: true,
    port: 8080,
  },
});
