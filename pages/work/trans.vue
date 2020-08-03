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
      <Quote :quote="work.quote" />
      <FullWidthImage :url="work.fullWidthImageUrl[0]" />
      <Paragraph :content="work.content[1]" />
      <FullWidthImage :url="work.fullWidthImageUrl[1]" />
      <Paragraph :content="work.content[2]" />
      <FullWidthImage :url="work.fullWidthImageUrl[2]" />
      <Spacer />
      <FullWidthImage :url="work.fullWidthImageUrl[3]" />
      <Spacer />
      <FullWidthImage :url="work.fullWidthImageUrl[4]" />
      <Spacer />
      <FullWidthImage :url="work.fullWidthImageUrl[5]" />
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
import Spacer from '@/components/Spacer.vue'

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
    Spacer,
  },
  data() {
    return {
      work: {
        id: 4,
        bgColor: '#83ECFC',
        titleColor: '#3B3736',
        numString: '04',
        name: 'trans',
        title: '大型論壇活動宣傳的最佳流程、節目資訊、訂票',
        category: 'Website',
        client: '永齡基金會',
        keywords: 'Large Forum Agenda',
        thumbnailImageUrl: require('~/assets/images/p-trans/p-trans_cover.jpg'),
        coverImageUrl: require('~/assets/images/p-trans/p-trans_cover.jpg'),
        paragraphImageUrl: require('~/assets/images/p-trans/p-trans_work_0_780x450@2x.jpg'),
        fullWidthImageUrl: [
          require('~/assets/images/p-trans/p-trans_work_1.jpg'),
          require('~/assets/images/p-trans/p-trans_work_2.jpg'),
          require('~/assets/images/p-trans/p-trans_work_3.jpg'),
          require('~/assets/images/p-trans/p-trans_work_4.jpg'),
          require('~/assets/images/p-trans/p-trans_work_5.jpg'),
        ],
        content: [
          '推動健康時代的浪潮\n\n永齡基金會為郭台銘創辦，旗下的健康基金會致力於培育尖端醫學研究。為了促進生醫領域與投資人在國際間的交流、對話，自 2017 年起主持 TRANS 生醫論壇，盼能引起多元領域的交互作用。\n\n在如此的使命下，TRANS 的官網設計整合了奧茲藝術的主視覺框架、並由我們設計體驗流程，目的為將實體活動所累積的厚度，延伸到網路上，增加討論聲浪、提升論壇的質量。多語系、國際化是論壇的初衷，也本網站設計的重點。在不同語言之間、我們取得設計呈現方式的平衡。並且將大量節目資訊、訂票流程轉化，達到即使在會場間奔走，也能輕鬆瀏覽的易用性。',
          '2017 年至 2019 年三年的論壇網站設計都依循著視覺設計師 Jimmy 莊的設計理念及脈絡，為了符合展場使用的目的，我們規避了首頁常有的繁瑣資訊，取而代之的是強烈且直接的視覺，如同「現場的導覽手冊」的封面。',
          '各別頁面在色彩上的比重配置，同時強調了論壇本身的特別色以及運用上的特色，加強用戶對品牌的印象。',
        ],
        quote: {
          content:
            '台灣以往的論壇、展覽、發表會等現場的節目流程都以紙本為主，我相信現今人們都有4G的時代，線上的瀏覽體驗會更清楚、更細節。',
          by: 'Kevin',
          job: 'Design Director',
        },
        link: 'www.transhs.asia',
        scopes: {
          design: ['視覺情境版', '使用者體驗（UX）', '使用者介面設計（UI）'],
          development: ['前端工程開發', '後端工程開發'],
        },
      },
    }
  },
  head: {
    title: '永齡基金會 - 磨人設計 | Polish Design',
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
