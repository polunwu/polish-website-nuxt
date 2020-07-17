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
