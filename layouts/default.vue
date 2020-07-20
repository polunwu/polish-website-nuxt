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
