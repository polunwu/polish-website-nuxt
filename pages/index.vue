<template>
  <div class="container">
    <HeaderHome />
    <Scroller />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeaderHome from '@/components/HeaderHome.vue'
import Scroller from '@/components/Scroller.vue'
gsap.registerPlugin(ScrollTrigger)

export default {
  layout: 'intro',
  components: {
    HeaderHome,
    Scroller,
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style></style>
