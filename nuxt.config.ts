import tailwindcss from "@tailwindcss/vite";

// import './lib/env' // https://github.com/nuxt/nuxt/issues/26253

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "shadcn-nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxtjs/supabase",
    "@nuxt/image",
    "@nuxtjs/seo",
  ],
  experimental: {
    typedPages: true
  },
  app: {
    head: {
      titleTemplate: 'Portal RECONQUISTA | %s'
    }
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "pt",
    locales: [
      {
        code: "pt",
        language: "pt-PT",
        file: "pt.json",
        name: "Portuguese",
      },
    ],
  },
  googleFonts: {
    families: {
      Antonio: [400, 500, 700],
      Inter: [400, 500, 600, 700],
    },
  },
  supabase: {
    redirect: false
  },
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET
  },
  seo: {
    meta: {
      description: 'Espaço para comunicação e organização de membros da RECONQUISTA'
    }
  },
  devtools: { enabled: true },
});