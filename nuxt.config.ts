// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  srcDir: "app/",
  serverDir: "server/",
  routeRules: {
    "/backend/api/**": {
      proxy: process.env.URL + "/api/**",
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
    baseURL: "/",
  },
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  runtimeConfig: {
    public: {
      url: process.env["URL"],
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
});
