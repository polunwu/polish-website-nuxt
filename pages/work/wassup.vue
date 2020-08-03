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
      <Spacer />
      <FullWidthImage :url="work.fullWidthImageUrl[1]" />
      <Paragraph :content="work.content[1]" />
      <FullWidthImage :url="work.fullWidthImageUrl[2]" />
      <Spacer />
      <FullWidthImage :url="work.fullWidthImageUrl[3]" />
      <Paragraph :content="work.content[2]" />
      <FullWidthImage :url="work.fullWidthImageUrl[4]" />
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
        id: 5,
        bgColor: '#019165',
        titleColor: '#FFFFFF',
        customCoverImgClass: 'header-work__cover-image--wassup',
        numString: '05',
        name: 'wassup',
        title: 'KOL 的跨界篇章一觸即發，跨界經營、販售',
        category: 'Website',
        client: 'Wassup 挖砂貓砂',
        keywords: 'Landing Page',
        thumbnailImageUrl: require('~/assets/images/p-wassup/p-wassup_cover.jpg'),
        coverImageUrl: require('~/assets/images/p-wassup/p-wassup_cover.jpg'),
        paragraphImageUrl: require('~/assets/images/p-wassup/p-wassup_work_0_780x450@2x.jpg'),
        fullWidthImageUrl: [
          require('~/assets/images/p-wassup/p-wassup_work_1.jpg'),
          require('~/assets/images/p-wassup/p-wassup_work_2.jpg'),
          require('~/assets/images/p-wassup/p-wassup_work_3.jpg'),
          require('~/assets/images/p-wassup/p-wassup_work_4.jpg'),
          require('~/assets/images/p-wassup/p-wassup_work_5.jpg'),
        ],
        content: [
          '來自饒舌歌手的讚美 — “KOL 的事業就該如此” by 砂石大亨\n\n音樂創作？天天挖砂？賣自己的貓砂？\n\nWHY NOT.\n\nＷassup 挖砂貓砂，骨子裡繼承了饒舌歌手們義無反顧的嘻哈精神。市場上沒有合適的貓砂？沒關係，自己出一款。我們協助 Ｗassup 製作了一頁式的完整體驗。從品牌精神、用戶數據、人氣貓奴企劃，再到製砂程序、貓砂工法，毫不保留的娓娓道來。只為了，讓廣大的貓奴們，清爽又輕鬆地在滑動與點擊之間，為至上貓皇，奉上一盆，絕妙好砂。',
          '顏色總是網站設計之初最重要需要規劃的部分，青綠色與青白色兩個有趣得搭配正是 Wassup 貓砂最令人印象深刻的重點之一，所以在許多 icon 及文字配色的選擇都環繞著他們。',
          '中間大量的顧客使用照片，我們期待用戶感受到這個商品是備受許多使用者喜愛的，同樣地我們在許多環節規劃了很有趣的設計：突兀的工作服流程、饒舌歌手們的節目影片、塞入新台幣的產品特色，每個環節都嘗試突破人們對一頁式網頁的框架。\n\n為什麼我們將這次網站的主視覺風格打造在叢林中呢？事實上，這算是我們私心想嘗試的創意哈哈哈～同時符合產品年度的 Slogan 「從零『砂』出一條血路」實驗了情境場景在 RWD （響應式設計）的彈性底下是不是也能夠有很棒的使用者體驗，最終效果客戶與我們都非常喜歡甚至驚艷。',
        ],
        quote: {
          content:
            '我相信一頁式商品頁除了強調功能、價格、性價比，獨特的視覺更能夠讓品牌深植消費者心中，印象往往更深刻。',
          by: 'Kevin',
          job: 'Design Director',
        },
        link: 'wassup.com.tw',
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
    title: 'Wassup 挖砂貓砂 - 磨人設計 | Polish Design',
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
