<template>
  <div>
    <Navbar />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    Navbar,
    TheFooter,
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/_general.scss';
</style>
