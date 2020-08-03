<template>
  <div class="container page-work">
    <HeaderWork
      :num-string="work.numString"
      :title="work.title"
      :category="work.category"
      :client="work.client"
      :keywords="work.keywords"
      :cover-image-url="work.coverImageUrl"
      :bg-color="work.bgColor"
      :title-color="work.titleColor"
    />
    <div class="page-work__article-wrapper">
      <Paragraph :content="work.content[0]" />
      <ParagraphImage :url="work.paragraphImageUrl" />
      <Paragraph :content="work.content[1]" />
      <FullWidthImage :url="work.fullWidthImageUrl[0]" />
      <Paragraph :content="work.content[2]" />
      <FullWidthImage :url="work.fullWidthImageUrl[1]" />
      <Paragraph :content="work.content[3]" />
      <FullWidthImage :url="work.fullWidthImageUrl[2]" />
      <SeeMore :link="work.link" />
      <TechScope :scopes="work.scopes" />
    </div>
    <Members />
  </div>
</template>

<script>
import HeaderWork from '@/components/HeaderWork.vue'
import Paragraph from '@/components/Paragraph.vue'
import ParagraphImage from '@/components/ParagraphImage.vue'
import FullWidthImage from '@/components/FullWidthImage.vue'
import SeeMore from '@/components/SeeMore.vue'
import TechScope from '@/components/TechScope.vue'
import Members from '@/components/Members.vue'

export default {
  components: {
    HeaderWork,
    Paragraph,
    ParagraphImage,
    FullWidthImage,
    SeeMore,
    TechScope,
    Members,
  },
  data() {
    return {
      work: {
        id: 6,
        bgColor: '#EDE5D8',
        titleColor: '#000000',
        customCoverImgClass: 'header-work__cover-image--legere',
        numString: '06',
        name: 'legere',
        title: '顧問服務的催化劑，降低疑慮、增強信心',
        category: 'Website',
        client: 'Legere 里格',
        keywords: 'Landing Page',
        thumbnailImageUrl: require('~/assets/images/p-legere/p-legere_cover.jpg'),
        coverImageUrl: require('~/assets/images/p-legere/p-legere_cover.jpg'),
        paragraphImageUrl: require('~/assets/images/p-legere/p-legere_work_0_780x450.jpg'),
        fullWidthImageUrl: [
          require('~/assets/images/p-legere/p-legere_work_1.jpg'),
          require('~/assets/images/p-legere/p-legere_work_2.jpg'),
          require('~/assets/images/p-legere/p-legere_work_3.jpg'),
        ],
        content: [
          '把台灣高端男裝帶進網路\n\n「訂製」是對細節的堅持，是否真的與快速的消費時代格格不入嗎？\n里格主理人 Issac 熟悉歐洲的訂製供應鏈，希望提供台灣的西服愛好者們一個全新的平衡點，我們不需在傳統手工訂製的漫長等待、與快速消費時尚的大量複製之間做抉擇。\n\n里格網站想表達一種觀點，原來預約制的訂製流程也可以很簡單、快速。我們可以清楚知道店主的品味，更重要的是，還可以參與社群、參加工作坊、持續與有相同愛好的人們交流。',
          '在專案過程中，和 Isaac 聊了許多，Legere 在市場上有許多很棒的競爭優勢：\n1. 相對於傳統訂製，Legere 國際一線品牌的供應鏈的品質是非常穩定及高產能的\n2. Legere 選購義大利布料，讓台灣訂製男裝不再受限於厚重精紡料，有更適合的麻料、泡泡紗、毛混絲等更舒適的布料可以選擇\n3. 台灣缺少的不只是高端男裝品牌，部分台灣男性更缺乏的是內在的自信以及對於商務社交的理解，所以 Legere 更提供了「外在」及「內在」的免費工作坊，讓顧客不只是換上最棒的男裝，同時也能夠透過學習如何在自信面對各種場合',
          '在預算有限的形況下，所幸我們有了解決方案，我們選擇了一頁式網站作為跟線上顧客溝通的一到窗口，在一頁式網站中，我們安排了許多很棒的環節，目的在於強化用戶對品牌的印象、了解品牌的服務內容及商品內容、後續行動「預約」。\n\n在前端開發及特效規劃中，我們花費了許多心思，桌機版本的 Service Process 是我們最喜歡的部份！',
          '最終專案取得了 Isaac 贊同，聽說還被土耳其布商稱讚網站做得非常精緻呢！',
        ],
        quote: {
          content: '',
          by: '',
          job: '',
        },
        link: 'www.legere.tw',
        scopes: {
          branding: ['品牌形象規劃', '品牌色彩計畫', '品牌視覺識別'],
          design: [
            '藝術指導',
            '視覺情境版',
            '使用者體驗（UX）',
            '使用者介面設計（UI）',
          ],
          development: ['前端工程開發', '特效製作'],
        },
      },
    }
  },
  head: {
    title: 'Legere 里格 - 磨人設計 | Polish Design',
  },
}
</script>

<style lang="scss">
.page-work {
  user-select: none;
  &__article-wrapper {
    padding-top: 24px;

    @media screen and (max-width: 414px) {
      padding-top: 20px;
    }
  }
}
</style>
