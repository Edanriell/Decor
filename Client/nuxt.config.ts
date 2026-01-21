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
		"@pinia/nuxt",
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
		"@features": fileURLToPath(new URL("./app/features", import.meta.url)),
		"@widgets": fileURLToPath(new URL("./app/widgets", import.meta.url)),
		"@pages": fileURLToPath(new URL("./app/pages", import.meta.url)),
		"@shared": fileURLToPath(new URL("./app/shared", import.meta.url)),
		"@entities": fileURLToPath(new URL("./app/entities", import.meta.url)),
		"@assets": fileURLToPath(new URL("./app/assets", import.meta.url))
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
