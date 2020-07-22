<template>
  <div>
    <transition name="fade">
      <Loader v-show="isLoading" />
    </transition>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
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
    return {
      isLoading: true,
    }
  },
  mounted() {
    this.isLoading = false
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
        // fb
        {
          property: 'fb:admins',
          content: 'polishdesigntw',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/_general.scss';

.fade-enter-active {
  transition: opacity 1s;
  .loader__logo {
    transition: opacity 0.6s;
    transition-delay: 1s;
  }
}
.fade-leave-active {
  transition: opacity 1.2s;
  transition-delay: 0.6s;
  .loader__logo {
    transition: opacity 0.6s, transform 1s cubic-bezier(0.33, 1, 0.68, 1);
  }
}
.fade-enter {
  opacity: 0;
  .loader__logo {
    opacity: 0;
    transform: translateY(20px);
  }
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  .loader__logo {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
