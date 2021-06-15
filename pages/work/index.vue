<template>
  <div class="container">
    <FeatureWork />
    <About />
    <Service />
  </div>
</template>

<script>
export default {
  scrollToTop: false,
  transition: {
    leave(el, done) {
      setTimeout(() => {
        done()
      }, 800)
    },
  },
}
</script>

<style></style>
