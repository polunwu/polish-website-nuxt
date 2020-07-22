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
      <ParagraphImage :url="work.paragraphImageUrl" />
      <Quote :quote="work.quote" />
      <FullWidthImage :url="work.fullWidthImageUrl[0]" />
      <Paragraph :content="work.content[1]" />
      <FullWidthImage :url="work.fullWidthImageUrl[1]" />
      <SeeMore :link="work.link" />
      <TechScope :scopes="work.scopes" />
    </div>
    <Members />
  </div>
</template>

<script>
import HeaderWork from '@/components/HeaderWork.vue'
import Paragraph from '@/components/Paragraph.vue'
import Quote from '@/components/Quote.vue'
import ParagraphImage from '@/components/ParagraphImage.vue'
import FullWidthImage from '@/components/FullWidthImage.vue'
import SeeMore from '@/components/SeeMore.vue'
import TechScope from '@/components/TechScope.vue'
import Members from '@/components/Members.vue'

export default {
  components: {
    HeaderWork,
    Paragraph,
    Quote,
    ParagraphImage,
    FullWidthImage,
    SeeMore,
    TechScope,
    Members,
  },
  data() {
    return {
      work: {
        id: 5,
        numString: '05',
        name: 'zuker',
        title: '大房東的最佳秘書，把包租公變成品牌房東',
        category: 'System',
        client: 'Zuker',
        keywords: 'System',
        thumbnailImageUrl: 'https://via.placeholder.com/615x346',
        coverImageUrl: 'https://via.placeholder.com/615x346',
        paragraphImageUrl: 'https://via.placeholder.com/780x450',
        fullWidthImageUrl: [
          'https://via.placeholder.com/1280x1134',
          'https://via.placeholder.com/1280x935',
        ],
        content: [
          '翻轉印象、探索傑作\n\n轉轉是囊括視覺創作各項領域的影像團隊，成員們揉合了各種特質，年輕、活力、創意、投入，在成立之初的三年之間，爆炸性地累積大量作品。\n\n設計轉轉團隊官網的過程，是一種多重發散與凝結的體驗，最後歸納出兩個執行重點：「翻轉」與「探索」。其一在於，以轉轉們（Shifters）心境上的轉變為契機，重新審視品牌定位，以釐清轉轉的視覺形象。我們抽取了轉轉成員們間高速協作、緊密契合的工作特質，具象化為ㄧ動作靈巧的精密機器，加上 SHIFT 的翻轉意涵，貫穿整個網站視覺主軸。翻轉，可以再翻轉。',
          '其二，網站的功能性著重於「作品的呈現」，我們設計出「探索式」的體驗，讓使用者能像瀏覽地圖般，不分階層地探索所有作品，因為，每個作品與合作夥伴的重要程度都是同等分量的（當然我們也設計了不錯的分類標籤~ )。',
        ],
        quote: {
          content:
            '探索地圖式的呈現方式，傳達作品種類的「量」及「廣」，透過探索營造出有趣的體驗。',
          by: 'Kevin 家豪',
          job: 'Polish Design Art Director',
        },
        link: 'www.shiftstudioco.com',
        scopes: {
          branding: ['品牌形象規劃', '品牌色彩計畫', '品牌視覺識別'],
          design: [
            '藝術指導',
            '視覺情境版',
            '使用者體驗（UX）',
            '使用者介面設計（UI）',
          ],
          development: ['使用者故事', '使用者體驗（UX）'],
        },
      },
    }
  },
  head: {
    title: 'Shift Studio 轉轉影像 - 磨人設計 | Polish Design',
  },
}
</script>

<style lang="scss">
.page-work {
  &__article-wrapper {
    padding-top: 24px;

    @media screen and (max-width: 414px) {
      padding-top: 20px;
    }
  }
}
</style>
