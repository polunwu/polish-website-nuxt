<template>
  <div class="container">
    <FeatureWork />
    <About />
    <Service />
  </div>
</template>

<script>
import FeatureWork from '@/components/FeatureWork.vue'
import Service from '@/components/Service.vue'
import About from '@/components/About.vue'

export default {
  scrollToTop: false,
  components: {
    FeatureWork,
    Service,
    About,
  },
  methods: {},
  transition: {
    leave(el, done) {
      setTimeout(() => {
        done()
      }, 600)
    },
  },
}
</script>

<style></style>
