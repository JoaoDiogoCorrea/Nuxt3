// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      title: 'Nuxt 3',
      meta: [
        {name: 'Nuxt 3', content: 'Nuxt 3'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  runtimeConfig: {
    //currencyKey: process.env.CURRENCY_API_KEY
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  /* tailwindcss: {
    // Options
  } */
  css: [
    '~/css/main.css'
  ],
})
