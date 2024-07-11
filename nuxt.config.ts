// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@nuxt/image', "@nuxtjs/i18n"],
  app: {
    head: {
      title: 'My Dash',
      meta: [
        {name: 'description', content: 'Everything about My Dash'}
      ],
    }
  }
})