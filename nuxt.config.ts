import tailwindcss from "@tailwindcss/vite";

import './lib/env'

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
  ],
  experimental: {
    typedPages: true
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
    bundle: {
      optimizeTranslationDirective: false,
    },
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
  devtools: { enabled: true },
});