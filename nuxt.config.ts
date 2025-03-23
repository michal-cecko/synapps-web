// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-03-23',
    devtools: {enabled: true},
    modules: [
        '@nuxt/eslint',
        '@nuxtjs/tailwindcss',
    ],
    css: [
        '~/assets/css/fonts.css',
        '~/assets/css/global.css',
    ]
})