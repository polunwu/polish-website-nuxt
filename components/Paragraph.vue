<template>
  <div class="page-work__paragraph">
    <pre>{{ content }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>
