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
      :custom-img-class="work.customImgClass"
    />
    <div class="page-work__article-wrapper">
      <Paragraph :content="work.content[0]" />
      <ParagraphImage :url="work.paragraphImageUrl" />
      <Paragraph :content="work.content[1]" />
      <FullWidthImage :url="work.fullWidthImageUrl[0]" />
      <Paragraph :content="work.content[2]" />
      <FullWidthImage :url="work.fullWidthImageUrl[1]" />
      <Spacer />
      <FullWidthImage :url="work.fullWidthImageUrl[2]" />
      <Quote :quote="work.quote" />
      <FullWidthImage :url="work.fullWidthImageUrl[3]" />
      <Paragraph :content="work.content[3]" />
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
        id: 3,
        bgColor: '#EFD833',
        titleColor: '#3B3736',
        customCoverImgClass: 'header-work__cover-image--shiftstudioco',
        numString: '03',
        name: 'shiftstudioco',
        title: '快速成長的新銳品牌值得擁有的獨特印象',
        category: 'Website',
        client: '轉轉影像事業',
        keywords: 'Work Display',
        thumbnailImageUrl: require('~/assets/images/p-shift/p-shift_cover.jpg'),
        coverImageUrl: require('~/assets/images/p-shift/p-shift_cover.jpg'),
        paragraphImageUrl: require('~/assets/images/p-shift/p-shift_work_0_780x450@2x.jpg'),
        fullWidthImageUrl: [
          require('~/assets/images/p-shift/p-shift_work_1.jpg'),
          require('~/assets/images/p-shift/p-shift_work_2.jpg'),
          require('~/assets/images/p-shift/p-shift_work_3.jpg'),
          require('~/assets/images/p-shift/p-shift_work_4.jpg'),
          require('~/assets/images/p-shift/p-shift_work_5.jpg'),
        ],
        content: [
          '翻轉印象、探索傑作\n\n轉轉是囊括視覺創作各項領域的影像團隊，成員們揉合了各種特質，年輕、活力、創意、投入，在成立之初的三年之間，爆炸性地累積大量作品。\n\n設計轉轉團隊官網的過程，是一種多重發散與凝結的體驗，最後歸納出兩個執行重點：「翻轉」與「探索」。其一在於，以轉轉們（Shifters）心境上的轉變為契機，重新審視品牌定位，以釐清轉轉的視覺形象。我們抽取了轉轉成員們間高速協作、緊密契合的工作特質，具象化為ㄧ動作靈巧的精密機器，加上 SHIFT 的翻轉意涵，貫穿整個網站視覺主軸。翻轉，可以再翻轉。',
          '這些設計元素的不斷出現，也就創造品牌獨特的視覺意象，將他們刻意安排於產品（網站）的各處，繽紛強烈的色彩、有趣且有機的品牌元素，讓用戶體驗時印象深刻。',
          '首頁的設計，我們翻新了品牌舊有的 Logo 以這次新的品牌風格再造，同時在下方規劃了「最新作品」的列表。\n\n其中在網站 Members 成員頁，我們規劃了一個很有趣的環節，依循著這次的品牌語言，「年輕」「創意」「翻轉」，我們拍攝了一系列表情特別的成員照片，透過3D合成，置入品牌色藍色的彩帶；設計體驗上，我們設計了翻牌的動態特效，讓整體更佳好玩！',
          '這次的目標功能著重於「作品的呈現」，我們規劃了「探索式」的體驗，讓使用者能像瀏覽地圖般，不分階層地探索所有作品，每個作品與合作夥伴的重要程度都是同等分量的，當然我們也設計了不錯的分類標籤～\n\n過程中，技術上團隊在有限地時間內做了相當大的突破，從如何透過自動化製造一個地圖，到系統後端上架體驗規劃。看見最後的成品，我們確實與客戶創造了一個嶄新的作品體驗網站。',
        ],
        quote: {
          content:
            '探索地圖式的呈現方式，傳達作品種類的「量」及「廣」，透過探索營造出有趣的體驗。',
          by: 'Kevin',
          job: 'Design Director',
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
          development: ['前端工程開發', '後端工程開發', '特效製作'],
        },
      },
    }
  },
  head() {
    const baseUrl = process.env.baseUrl || 'http://localhost:3000'
    const description = `客戶：${this.work.client}｜類型：${this.work.category}`
    const title = '作品案例｜' + this.work.title + ' - 磨人設計｜Polish Design'
    const imgUrl = baseUrl + this.work.coverImageUrl

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
