// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';

import type { Theme } from 'vitepress';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app, router, siteData }) {},
} satisfies Theme;
