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

<style lang="scss">
.page-work__paragraph {
  pre {
    margin: 107px auto;
    padding: 0px 35px;
    max-width: 770px;
    font-size: 16px;
    line-height: 30px;
    font-weight: $font-weight--medium;
    white-space: pre-wrap; // 空白字元都會被保留，換行會發生在：換行字元、<br>、被文字空間限制時
    word-wrap: break-word; // 文字超出容器時，截斷文字
    font-family: inherit;
  }
  @media screen and (max-width: 768px) {
    margin: 121px auto;
  }
  @media screen and (max-width: 414px) {
    margin: 112px auto;
    pre {
      padding: 0px 20px;
    }
  }
}
</style>
