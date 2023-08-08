import image from "@astrojs/image"
import mdx from "@astrojs/mdx"
import vercel from "@astrojs/vercel/serverless"
import { defaultLocaleSitemapFilter, i18n } from "astro-i18n-aut"
import { defineConfig } from "astro/config"
import fs from "node:fs"

import prefetch from "@astrojs/prefetch"
import sitemap from "@astrojs/sitemap"
import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"

/* https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables */
const NETLIFY_PREVIEW_SITE = process.env.CONTEXT !== "production" && process.env.DEPLOY_PRIME_URL

// https://astro.build/config
export default defineConfig({
	// site: NETLIFY_PREVIEW_SITE || "https://shopconna.com",
	// integrations: [
	// 	sitemap(),
	experimental: {
		redirects: true,
	},
	site: NETLIFY_PREVIEW_SITE || "https://shopconna.com",
	// trailingSlash: "always",
	build: {
		format: "directory",
	},
	integrations: [
		i18n({
			locales,
			defaultLocale,
		}),
		sitemap({
			i18n: {
				locales,
				defaultLocale,
			},
			filter: defaultLocaleSitemapFilter({ defaultLocale }),
		}),	
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		solidJs(),
		mdx(),
		prefetch(),
	],
	markdown: {
		shikiConfig: {
			theme: JSON.parse(fs.readFileSync("./houston.theme.json", { encoding: "utf-8" })),
		},
	},
	vite: {
		ssr: {
			noExternal: ["smartypants"],
		},
	},
	output: "server",
	adapter: vercel(),
})
