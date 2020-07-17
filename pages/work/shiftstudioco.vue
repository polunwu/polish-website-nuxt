<template>
  <div class="container page-work">
    <HeaderWork
      :num-string="work.numString"
      :title="work.title"
      :category="work.category"
      :client="work.client"
      :keywords="work.keywords"
      :cover-image-url="work.coverImageUrl"
    />
    <div class="page-work__article-wrapper">
      <Paragraph :content="work.content[0]" />
      <Paragraph :content="work.content[1]" />
    </div>
  </div>
</template>

<script>
import HeaderWork from '@/components/HeaderWork.vue'
import Paragraph from '@/components/Paragraph.vue'

export default {
  components: {
    HeaderWork,
    Paragraph,
  },
  data() {
    return {
      work: {
        id: 1,
        numString: '01',
        name: 'shiftstudioco',
        title: '快速成長的新銳品牌值得擁有的獨特印象',
        category: 'Website',
        client: 'Shift Studio 轉轉影像',
        keywords: 'Work Display',
        thumbnailImageUrl: 'https://via.placeholder.com/615x346',
        coverImageUrl: 'https://via.placeholder.com/615x346',
        content: [
          '翻轉印象、探索傑作\n\n轉轉是囊括視覺創作各項領域的影像團隊，成員們揉合了各種特質，年輕、活力、創意、投入，在成立之初的三年之間，爆炸性地累積大量作品。\n\n設計轉轉團隊官網的過程，是一種多重發散與凝結的體驗，最後歸納出兩個執行重點：「翻轉」與「探索」。其一在於，以轉轉們（Shifters）心境上的轉變為契機，重新審視品牌定位，以釐清轉轉的視覺形象。我們抽取了轉轉成員們間高速協作、緊密契合的工作特質，具象化為ㄧ動作靈巧的精密機器，加上 SHIFT 的翻轉意涵，貫穿整個網站視覺主軸。翻轉，可以再翻轉。',
          '其二，網站的功能性著重於「作品的呈現」，我們設計出「探索式」的體驗，讓使用者能像瀏覽地圖般，不分階層地探索所有作品，因為，每個作品與合作夥伴的重要程度都是同等分量的（當然我們也設計了不錯的分類標籤~ )。',
        ],
      },
    }
  },
}
</script>

<style lang="scss">
.page-work {
  &__article-wrapper {
    padding-top: 24px;
  }
  &__paragraph {
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
    }
  }
}
</style>
