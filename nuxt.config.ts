// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
    baseURL: "/Frontend/",
  },
  nitro: {
    preset: "github-pages",
    prerender: {
      routes: ["/"],
    },
  },
  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  css: ["@/assets/scss/main.scss", "@/assets/scss/tailwind.css"],
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
  alias: {
    "~": resolve(__dirname, "./app"),
    "@": resolve(__dirname, "./app"),
    "~~": resolve(__dirname, "./"),
    "@@": resolve(__dirname, "./"),
    "#shared": resolve(__dirname, "./app/shared"),
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/scss/mixins.scss" as *;
          @use "@/assets/scss/variables.scss" as *;
        `,
        },
      },
    },
  },
  colorMode: {
    classSuffix: "",
  },
});
