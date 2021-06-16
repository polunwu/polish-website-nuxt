<template>
  <div class="container page-post">
    {{ $route.params.slug }}
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.page-post {
  min-height: 100vh;
  padding: 100px 35px;
}
</style>
