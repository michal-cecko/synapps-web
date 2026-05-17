# synapps.sk

Marketing site for **Synapps s.r.o.** — Slovak software studio building web apps, internal tools and mobile solutions on commission.

Live at **[synapps.sk](https://synapps.sk)**.

## Stack

- **Nuxt 3** + **Vue 3**
- **Tailwind CSS** (via `@nuxtjs/tailwindcss`)
- **AOS** for scroll-triggered animations
- **typed.js** for the rotating hero headline
- **vue-gtag** for Google Analytics
- **nuxt-svgo-loader** for inline SVGs
- ESLint via `@nuxt/eslint`
- Slovak UI (`lang="sk"`)

## Layout

```
├── app.vue                   # root, mounts <NuxtLayout><NuxtPage/></NuxtLayout>
├── pages/
│   ├── index.vue             # homepage
│   └── Projekty/             # /projekty (case studies)
├── components/
│   ├── Header.vue
│   └── Footer.vue
├── data/
│   └── projects.js           # case-study content
├── assets/css/               # fonts.css + global.css
├── plugins/
│   ├── aos.client.js         # AOS init (client-only)
│   └── gtag.js               # analytics
└── nuxt.config.ts
```

## Local dev

```bash
npm install
npm run dev                   # http://localhost:3000
```

## Build

```bash
npm run build                 # SSR build
npm run preview               # preview the production build locally

# OR for static export:
npm run generate              # output in .output/public/
```

## Deploy

Dockerised via `docker-compose.override.yml`. Deployed to a Dokploy host.

## License

[MIT](LICENSE) © Michal Čečko
