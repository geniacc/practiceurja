import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/urja-mobility-final/' : '/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: 'CNAME', dest: '.' }],
    }),
  ],
});
