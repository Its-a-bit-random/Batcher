import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Batcher",
	description: "Lightweight batching utility",
	base: "/Batcher/",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Getting Started", link: "/Tutorial/Installing" },
			{ text: "API", link: "/API/Batcher" },
		],

		sidebar: [
			{
				text: "Tutorial",
				collapsed: false,
				items: [
					{ text: "Why batcher?", link: "/Tutorial/Why" },
					{ text: "Installing", link: "/Tutorial/Installing" },
				],
			},
			{
				text: "API",
				collapsed: false,
				items: [{ text: "Batcher", link: "/API/Batcher" }],
			},
		],

		socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
	},
});
