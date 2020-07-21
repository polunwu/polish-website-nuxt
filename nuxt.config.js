export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '磨人設計 | Polish Design' || process.env.npm_package_name,
    meta: [
      { htmlAttrs: { lang: 'zh-Hant-TW' } },
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'viewport',
        content:
          'initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '磨人設計 POLISH DESIGN 成立於2020年，作品橫跨品牌規劃、網頁設計、網站系統解決方案，我們喜歡有心意的設計、微互動、拉麵 🍜。' ||
          process.env.npm_package_description,
      },
      // og
      {
        hid: 'og:title',
        property: 'og:title',
        content: '磨人設計 | Polish Design',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'POLISH DESIGN 成立於2020年，作品橫跨品牌規劃、網頁設計、網站系統解決方案，我們喜歡有心意的設計、微互動、拉麵 🍜。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'http://polish-design.com.tw/',
      },
      {
        property: 'og:video',
        content:
          'https://storage.googleapis.com/polish_shop_bucket/polish-man-compressed.mp4',
      },
      {
        property: 'og:video:secure_url',
        content:
          'https://storage.googleapis.com/polish_shop_bucket/polish-man-compressed.mp4',
      },
      {
        property: 'og:video:type',
        content: 'video/mp4',
      },
      {
        property: 'og:video:width',
        content: '480',
      },
      {
        property: 'og:video:height',
        content: '270',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'POLISHDESIGN' },
      { property: 'og:locale', content: 'zh_tw' },
      // twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: '磨人設計 | Polish Design',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'POLISH DESIGN 成立於2020年，作品橫跨品牌規劃、網頁設計、網站系統解決方案，我們喜歡有心意的設計、微互動、拉麵 🍜。',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  /*
   ** Style Resources for SASS global variables
   */
  styleResources: {
    scss: ['assets/scss/_variable.scss'],
  },
}
