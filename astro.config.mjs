// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// 公開 URL は src/data/site.ts の SITE_URL を単一ソースにする（<head> 側も同じ定数を参照）
import { SITE_URL } from './src/data/site';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()]
  }
});