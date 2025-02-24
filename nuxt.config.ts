// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Cinzel': [300, 400, 500, 600, 700],
      'Zen Old Mincho':  [300, 400, 500, 600, 700]// 使いたいフォントの太さを指定
    },
  }
})
