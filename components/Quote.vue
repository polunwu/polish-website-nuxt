<template>
  <div class="page-work__qoute">
    <pre>{{ quote.content }}</pre>
    <div class="page-work__qoute-info">
      <p class="qoute-info__by">{{ quote.by }}</p>
      <p class="qoute-info__job">{{ quote.job }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.page-work__qoute {
  padding: 0px 35px;
  pre,
  .page-work__qoute-info {
    max-width: 852px;
    margin: 0px auto;
  }
  pre {
    font-size: 36px;
    line-height: 57px;
    font-family: inherit;
    font-weight: $font-weight--black;
    white-space: pre-wrap; // 空白字元都會被保留，換行會發生在：換行字元、<br>、被文字空間限制時
    word-wrap: break-word; // 文字超出容器時，截斷文字

    margin-top: 151px;
  }
  .page-work__qoute-info {
    margin-bottom: 85px;
    p {
      margin: 0px;
      font-size: 16px;
      line-height: 24px;
      padding-left: 41px;
    }
    p.qoute-info__by {
      padding-top: 47px;
      font-weight: $font-weight--black;
    }
    p.qoute-info__job {
      font-weight: $font-weight--light;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0px;
    pre {
      margin-left: 0px;
      margin-right: 51px;
      margin-top: 132px;
      max-width: 682px;
      padding-left: 25px;
      border-left: 10px solid $secondary-color;
    }
    .page-work__qoute-info {
      margin-bottom: 101px;
      p {
        padding-left: 35px;
      }
      p.qoute-info__by {
        padding-top: 60px;
      }
    }
  }
  @media screen and (max-width: 414px) {
    pre {
      font-size: 24px;
      line-height: 39px;
      margin-right: 20px;
      margin-top: 112px;
      max-width: 374px;
      padding-left: 20px;
      border-left: 5px solid $secondary-color;
    }
    .page-work__qoute-info {
      margin-bottom: 105px;
      p {
        padding-left: 20px;
      }
      p.qoute-info__by {
        padding-top: 36px;
      }
    }
  }
}
</style>
