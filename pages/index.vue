<template>
  <div class="container">
    <HeaderHome />
    <About />
    <Service />
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue'
import Service from '@/components/Service.vue'
import About from '@/components/About.vue'

export default {
  components: {
    HeaderHome,
    Service,
    About,
  },
}
</script>

<style></style>
