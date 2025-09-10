import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    //eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src/', import.meta.url)),
        '@orcative/ui': fileURLToPath(new URL('../../../packages/ui/src', import.meta.url)),
      },
    },
  },
  srcDir: 'src',
  title: 'Orcative',
  description: 'Documentation',
  themeConfig: {
    logo: '',
    siteTitle: 'ORCATIVE',
    socialLinks: [{ icon: 'github', link: 'https://github.com/orcative' }],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Oleg Zaytsev',
    },
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          {
            text: 'What is Orcative?',
            link: '/guide/introduction/what-is-orcative',
          },
          {
            text: 'Getting Started',
            link: '/guide/introduction/getting-started',
          },
        ],
      },
    ],
  },
});
