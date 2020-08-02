<template>
  <div>
    <Loader />
    <Navbar />
    <Nuxt />
    <Footer v-if="currentRouteName !== 'index'" />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import Loader from '@/components/Loader.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Loader,
    Navbar,
    Footer,
  },
  data() {
    return {}
  },
  computed: {
    currentRouteName() {
      return this.$route.name
    },
  },
  mounted() {
    setTimeout(() => {
      this.playLeaveLoaderAnimation()
    }, 500)
  },
  methods: {
    playLeaveLoaderAnimation() {
      const el = document.querySelector('.js-loader')

      gsap
        .timeline({
          delay: 1,
          defaults: {
            ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
          },
        })
        .to(
          el.firstChild,
          {
            y: -20,
            duration: 1,
          },
          '0'
        )
        .to(
          el.firstChild,
          {
            autoAlpha: 0,
            duration: 0.6,
          },
          '0'
        )
        .to(
          el,
          {
            autoAlpha: 0,
            duration: 0.6,
          },
          '1'
        ) // timeline total 2.6 secs
    },
  },
  head() {
    return {
      meta: [
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
          content: 'https://polish-design.com.tw/',
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
        { property: 'og:site_name', content: '磨人設計 | Polish Design' },
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
        // fb
        {
          property: 'fb:admins',
          content: 'polishdesigntw',
        },
        // favicon
        {
          name: 'msapplication-TileColor',
          content: '#000000',
        },
        {
          name: 'theme-color',
          content: '#000000',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/android-chrome-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          href: '/android-chrome-512x512.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#333333',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/_general.scss';
</style>
