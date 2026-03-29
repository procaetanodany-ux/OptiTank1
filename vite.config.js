import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [basicSsl()],
  server: {
    proxy: {
      '/api/tcs': {
        target: 'https://firestore.googleapis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/tcs/, ''),
        headers: {
          'Referer': 'https://benzin.tcs.ch/',
          'Origin': 'https://benzin.tcs.ch'
        }
      }
    }
  }
});
