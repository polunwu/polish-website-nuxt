<template>
  <div class="page-work__paragraph-image">
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
.page-work__paragraph-image {
  margin: 14px auto;
  padding: 0px 30px;
  max-width: 780px;
  img {
    width: 100%;
  }
  @media screen and (max-width: 414px) {
    padding: 0px 20px;
    margin-top: -32px;
  }
}
</style>
