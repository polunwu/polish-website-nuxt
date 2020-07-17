<template>
  <div class="container">
    <HeaderHome />
    <FeatureWork />
    <About />
    <Service />
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue'
import FeatureWork from '@/components/FeatureWork.vue'
import Service from '@/components/Service.vue'
import About from '@/components/About.vue'

export default {
  components: {
    HeaderHome,
    FeatureWork,
    Service,
    About,
  },
}
</script>

<style></style>
