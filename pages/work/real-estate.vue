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
      <Spacer />
      <FullWidthImage :url="work.fullWidthImageUrl[0]" />
      <Spacer />
      <FullWidthImage :url="work.fullWidthImageUrl[1]" />
      <Paragraph :content="work.content[1]" />
      <FullWidthImage :url="work.fullWidthImageUrl[2]" />
      <Paragraph :content="work.content[2]" />
      <FullWidthImage :url="work.fullWidthImageUrl[3]" />
      <Quote :quote="work.quote" />
      <Paragraph :content="work.content[3]" />
      <Spacer />
      <TechScope :scopes="work.scopes" />
    </div>
    <Members />
  </div>
</template>

<script>
export default {
  data() {
    return {
      work: {
        id: 2,
        bgColor: '#FFCA27',
        titleColor: '#000000',
        customCoverImgClass: 'header-work__cover-image--real-estate',
        numString: '02',
        name: 'real-estate',
        title: '大房東的最佳秘書，把包租公變成品牌房東',
        category: 'Custom Software',
        client: '客製租賃系統',
        keywords: 'Rental system',
        thumbnailImageUrl: require('~/assets/images/p-real-estate/p-real-estate_cover.jpg'),
        coverImageUrl: require('~/assets/images/p-real-estate/p-real-estate_cover.jpg'),
        paragraphImageUrl: require('~/assets/images/p-real-estate/p-real-estate_work_0_780x450@2x.jpg'),
        fullWidthImageUrl: [
          require('~/assets/images/p-real-estate/p-real-estate_work_1.png'),
          require('~/assets/images/p-real-estate/p-real-estate_work_2.png'),
          require('~/assets/images/p-real-estate/p-real-estate_work_3.png'),
          require('~/assets/images/p-real-estate/p-real-estate_work_4.png'),
        ],
        content: [
          '房東 Jason 的日常\n\n每天傳 LINE 給房客催繳房租，請水電師傅維修，處理房客的代墊收據，一筆一筆打進 Excel 進行對帳，對於是否有達到當初預估的投報率，Jason 心中並不是很確定，但下禮拜又要開始刊登招租廣告了，Jason 也不是很想去計算，只想趕快出租出去。這是目前管理三十間出租套房的 Jason 的生活。\n\n談不上勞累，但似乎也跟當初想像的包租公生活有點不一樣。最近朋友又在問要不要一起投資商圈旁邊整棟的二十間套房，於是 Jason 找到我們，打算對這整件事情做出一番改造。',
          'Jason 與許多朋友合作，藉此擴大投資規模，因此我們不只要整合目前的管理數據，還要規劃適用多人共同管理的架構。',
          '對於住客來說，租屋是一個困難的決定，因此我們設計了隨手可用的溝通視窗，並將簽約過程融合其中，一切有如面對面一般真實且有紀錄可循。\n\n後續住客可以透過便利商店直接繳納租金，Jason 可在後台查看每天入帳的金額，並且系統會定期自動提醒住客。',
          '隨著投資規模更大，分工更細之後，招租的負責人透過全盤整合的顯示模式，推薦空屋的精準度非常高，有效降低了空屋率，也輕鬆達成最大化投報率的初衷。\n\n出租產業是一門投資，透過雲端系統的多人共同協作，真正讓被動收入的價值得以體現。',
        ],
        quote: {
          content: '租賃產業透過系統倍化效率的典範。',
          by: 'Hungmi',
          job: 'CTO',
        },
        link: '',
        scopes: {
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
  head() {
    const baseUrl = process.env.baseUrl || 'http://localhost:3000'
    const description = `客戶：${this.work.client}｜類型：${this.work.category}`
    const title = '作品案例｜' + this.work.title + ' - 磨人設計 Polish Design'
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

<style lang="scss"></style>
