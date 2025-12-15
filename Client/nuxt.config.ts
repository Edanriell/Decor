import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/tailwind.css", "~/assets/css/styles.css"],
	vite: {
		plugins: [tailwindcss()]
	},
	modules: [
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/hints",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxt/scripts",
		"@nuxt/test-utils",
		[
			"@nuxtjs/stylelint-module",
			{
				configFile: ".stylelintrc.json"
			}
		]
	],
	alias: {
		"@app": fileURLToPath(new URL("./app", import.meta.url)),
		"@features": fileURLToPath(new URL("./features", import.meta.url)),
		"@widgets": fileURLToPath(new URL("./widgets", import.meta.url)),
		"@pages": fileURLToPath(new URL("./pages", import.meta.url)),
		"@shared": fileURLToPath(new URL("./shared", import.meta.url)),
		"@entities": fileURLToPath(new URL("./entities", import.meta.url)),
		"@assets": fileURLToPath(new URL("./assets", import.meta.url))
	},
	fonts: {
		families: [
			{
				name: "Urbanist",
				provider: "google",
				weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
				styles: ["normal", "italic"]
			}
		]
	},
	image: {
		screens: {
			sm: 390,
			md: 834,
			lg: 1024,
			xl: 1280,
			"2xl": 1536
		}
	}
});
