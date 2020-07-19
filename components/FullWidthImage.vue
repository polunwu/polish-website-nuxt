<template>
  <div class="page-work__full-width-image">
    <img :src="url" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.page-work__full-width-image {
  margin: 0px auto;
  padding: 0px;
  width: 100vw;
  img {
    width: 100%;
  }
}
</style>
