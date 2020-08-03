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
      <Spacer />
      <FullWidthImage :url="work.fullWidthImageUrl[0]" />
      <Spacer />
      <FullWidthImage :url="work.fullWidthImageUrl[1]" />
      <Spacer />
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
import Spacer from '@/components/Spacer.vue'

export default {
  components: {
    HeaderWork,
    Paragraph,
    ParagraphImage,
    FullWidthImage,
    SeeMore,
    TechScope,
    Members,
    Spacer,
  },
  data() {
    return {
      work: {
        id: 6,
        bgColor: '#EDE5D8',
        titleColor: '#000000',
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
  &__article-wrapper {
    padding-top: 24px;

    @media screen and (max-width: 414px) {
      padding-top: 20px;
    }
  }
}
</style>
