// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-03-23',
    devtools: {enabled: true},
    modules: [
        '@nuxt/eslint',
        '@nuxtjs/tailwindcss',
        'nuxt-svgo-loader'
    ],
    css: [
        '~/assets/css/fonts.css',
        '~/assets/css/global.css',
    ],
    plugins: [
        {src: '~/plugins/aos.client.js', mode: 'client'},
    ],
    app: {
        head: {
            title: 'Synapps | Digitálne riešenia',
            meta: [
                {
                    name: 'description',
                    content: 'Vyvíjame webové aplikácie, informačné systémy a mobilné riešenia, ktoré zefektívňujú podnikanie. Tvoríme prehľadné digitálne nástroje na mieru vašim potrebám.'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:title',
                    content: 'Synapps | Moderné digitálne riešenia pre váš biznis'
                },
                {
                    property: 'og:description',
                    content: 'Pomáhame firmám aj jednotlivcom zefektívniť prácu pomocou moderných digitálnych riešení. Tvoríme webové aplikácie, informačné systémy a mobilné appky.'
                },
                {
                    property: 'og:url',
                    content: 'https://synapps.sk'
                },
                {
                    property: 'og:image',
                    content: '/images/og-image.jpg'
                },
                {
                    property: 'og:site_name',
                    content: 'Synapps'
                },
                {
                    property: 'og:locale',
                    content: 'sk_SK'
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                {
                    name: 'twitter:title',
                    content: 'Synapps | Moderné digitálne riešenia pre váš biznis'
                },
                {
                    name: 'twitter:description',
                    content: 'Pomáhame firmám aj jednotlivcom zefektívniť prácu pomocou moderných digitálnych riešení.'
                },
                {
                    name: 'twitter:image',
                    content: '/images/og-image.jpg'
                }
            ],
            link: [
                {
                    rel: 'canonical',
                    href: 'https://synapps.sk'
                }
            ]
        }
    }
})