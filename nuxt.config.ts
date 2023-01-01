// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'TinieUrl',
            meta: [
                { charset: 'utf-8' },
                {name: 'description', content: 'Url *shortener'},
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
            ],
            link: [
                {rel: 'stylesheet', type: 'text/css',
                href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    }
})
