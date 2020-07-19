<template>
  <div class="page-work__see-more">
    <pre>探索 <a :href="pageUrl" target="_blank">{{ link }}</a> 了解更多網站的細節吧</pre>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
  },
  computed: {
    pageUrl() {
      return this.link.includes('https://') ? this.link : 'https://' + this.link
    },
  },
}
</script>

<style lang="scss">
.page-work__see-more {
  pre {
    margin: 65px auto 82px auto;
    padding: 0px 35px;
    max-width: 770px;
    font-size: 16px;
    line-height: 30px;
    font-weight: $font-weight--medium;
    white-space: pre-wrap; // 空白字元都會被保留，換行會發生在：換行字元、<br>、被文字空間限制時
    word-wrap: break-word; // 文字超出容器時，截斷文字
    font-family: inherit;

    a {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 79px auto 66px auto;
  }
  @media screen and (max-width: 414px) {
    margin: 63px auto 50px auto;
    pre {
      padding: 0px 20px;
    }
  }
}
</style>
