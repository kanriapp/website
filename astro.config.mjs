import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Kanri',
			logo: {
				light: '/src/assets/kanri_logo_light.svg',
				dark: '/src/assets/kanri_logo.svg',
				replacesTitle: false,
			},
			social: {
				github: 'https://github.com/trobonox/kanri',
				discord: 'https://discord.gg/AVqHrvxB9C'
			},
			editLink: {
				baseUrl: 'https://github.com/trobonox/kanri-website',
			},
			sidebar: [
				{
					label: 'Getting started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is Kanri?', link: '/getting-started/what-is-kanri/' },
					]
				}
			],
			customCss: ['./src/assets/landing.css']
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
