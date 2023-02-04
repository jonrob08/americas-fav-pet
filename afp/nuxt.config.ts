// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    css: [
        '~/assets/css/tailwind.css',
    ],
    colorMode: {
        classSuffix: '',
        preference: 'system', 
        fallback: 'dark',
      },
})
