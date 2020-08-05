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
      <Spacer />
      <FullWidthImage :url="work.fullWidthImageUrl[3]" />
      <Spacer />
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
        id: 1,
        bgColor: '#FF6100',
        titleColor: '#FFFFFF',
        customCoverImgClass: 'header-work__cover-image--rawnfresh',
        numString: '01',
        name: 'rawnfresh',
        title: '帶著走的電影院，影像作品展示、加速客戶溝通',
        category: 'Website',
        client: '沙西米影像',
        keywords: 'Viewing experience',
        thumbnailImageUrl: require('~/assets/images/p-sashimi/p-sashimi_cover.jpg'),
        coverImageUrl: require('~/assets/images/p-sashimi/p-sashimi_cover.jpg'),
        paragraphImageUrl: require('~/assets/images/p-sashimi/p-sashimi_work_0_780x450@2x.jpg'),
        fullWidthImageUrl: [
          require('~/assets/images/p-sashimi/p-sashimi_work_1.jpg'),
          require('~/assets/images/p-sashimi/p-sashimi_work_2.jpg'),
          require('~/assets/images/p-sashimi/p-sashimi_work_3.jpg'),
          require('~/assets/images/p-sashimi/p-sashimi_work_4.jpg'),
          require('~/assets/images/p-sashimi/p-sashimi_work_5.jpg'),
        ],
        content: [
          '歡迎來到影像創作者們的瀏覽場域\n\n我們在 2020 年與快速成長中的流行 MV 團隊們密切合作。在一個接一個的影像製作空檔之間，我們與客戶反覆討論、推敲細節。我們梳理了沙西米團隊們實力累積下的豐富素材，設計出最大空間展示影像作品的網站體驗。\n\n沙西米之所以能有高品質的作品，是因一群各司其職的專業人士合作打造而成。我們設計了一個能呈現每位團員的工作角色、真實樣貌的互動方式，讓使用者能以「人」為出發點，選擇感興趣的成員，對其有更完整的認知。',
          '這次是個很特別的合作，是個網站建置及品牌翻新的專案，我們從新定位了沙西米影像的品牌調性。經過數月的討論，我們將其定位在「新鮮」、「逆流而上」、「鮭魚」等，鮮明的意象。色彩計畫的策略上，我們選用了鮮豔的柳橙橘，文字及標誌的設計找到了日本風格的文字元素，當然，最吸睛的就是那「鮭魚頭」，我們團隊相信他會是非常有記憶點的存在，對品牌長遠期的發展會相當有幫助。',
          '網站製作上，我們被客戶丟了許多業界中很棒的製作，經過一番參考轟炸後，當然，我們學習到了在台灣影像業界，商業合作客戶通常會在意以及期待的內容，我們透過這些討論，我們設計了針對B2B客戶的使用者體驗路徑，同時針對路徑中不同節點設計對應能夠「加深品牌印象」、「加強沈浸式觀影」的環節。我們覺得最有趣的一個環節莫過於，當進入網站時的 LOGO 展示以及有趣的同心圓動畫了吧！',
          '成員 Members 頁面，人物的風格搭配鮮明的橘色，這正是經典電影猜火車（1996）的風格！我們團隊花費了相當多的時間在實驗及開發上，在 RWD（響應式設計）的彈性中找到可行的解方。我想這一頁也是讓用戶會為之驚豔的一個環節，「製作團隊」、「爆炸」、「相機」、「貓咪（？）」\n\n回到我們網站中最重要的環節「觀影體驗」，設計團隊依據品牌視覺調性，延伸設計了影片播放器中的 icon 元素，成果相當有趣。',
        ],
        quote: {
          content: '',
          by: '',
          job: '',
        },
        link: 'rawnfresh.com.tw',
        scopes: {
          branding: ['品牌形象規劃', '品牌色彩計畫', '品牌視覺識別'],
          design: [
            '藝術指導',
            '視覺情境版',
            '使用者體驗（UX）',
            '使用者介面設計（UI）',
          ],
          development: ['前端工程開發', '後端工程開發', '特效製作'],
        },
      },
    }
  },
  head() {
    const baseUrl = process.env.baseUrl || 'http://localhost:3000'
    const description = `${this.work.title} | ${this.work.category} - ${this.work.client} | 磨人設計 - Polish Design`
    const title = this.work.client + ' - 磨人設計 | Polish Design'
    const imgUrl =
      baseUrl + require('~/assets/images/p-sashimi/p-sashimi_cover.jpg')

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        // og
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: imgUrl,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://polish-design.com.tw/work/' + this.work.name,
        },
        // twitter
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: description,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: imgUrl,
        },
      ],
    }
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
