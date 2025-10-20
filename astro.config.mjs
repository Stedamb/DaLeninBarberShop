// https://astro.build/config
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.daleninbarbershop.it',
  output: 'server',
  adapter: vercel(),

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
