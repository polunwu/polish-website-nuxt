<template>
  <div>
    <Loader />
    <Navbar />
    <Nuxt />
    <Footer v-if="currentRouteName !== 'index'" />
    <client-only>
      <noscript
        ><iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PR8JZD5"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe
      ></noscript>
    </client-only>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import head from './default.head'

export default {
  data() {
    return {}
  },
  head() {
    return head
  },
  computed: {
    currentRouteName() {
      return this.$route.name
    },
  },
  mounted() {
    setTimeout(() => {
      this.playLeaveLoaderAnimation()
    }, 200)
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
}
</script>

<style lang="scss">
@import '~/assets/scss/_general.scss';
@import '~/assets/scss/_page-work.scss';
</style>
