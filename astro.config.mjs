import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Kanri',
    logo: {
      light: '/src/assets/kanri_logo_light.svg',
      dark: '/src/assets/kanri_logo.svg',
      replacesTitle: false
    },
    social: {
      github: 'https://github.com/trobonox/kanri',
      discord: 'https://discord.gg/AVqHrvxB9C'
    },
    editLink: {
      baseUrl: 'https://github.com/trobonox/kanri-website'
    },
    sidebar: [{
      label: 'Getting started',
      items: [
        {
          label: 'What is Kanri?',
          link: '/getting-started/what-is-kanri/'
        },
        {
          label: 'Frequently asked questions',
          link: '/getting-started/faq'
        }
      ]
    },
    {
      label: 'Guides',
      items: [
        {
          label: 'Import boards from Trello®',
          link: '/guides/import-from-trello/'
        }
      ]
    },
    {
      label: 'Reference',
      items: [
        {
          label: 'Troubleshooting',
          link: '/reference/troubleshooting/'
        }
      ]
    }],
    customCss: ['./src/assets/landing.css']
  }), solidJs()],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});