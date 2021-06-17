<template>
  <section id="feature-work" class="feature-work">
    <div class="feature-work__container">
      <h2 class="feature-work__label js-scroll-t-work js-anime-text">
        Our work
      </h2>
      <ul class="feature-work__list">
        <FeatureWorkCard v-for="work in works" :key="work.id" :work="work" />
      </ul>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FeatureWorkCard from '@/components/FeatureWorkCard.vue'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    FeatureWorkCard,
  },
  data() {
    return {
      viewRect: null,
      works: [
        {
          id: 1,
          bgColor: '#FF6100',
          titleColor: '#FFFFFF',
          customThumbnailImgClass: '',
          customCoverImgClass: 'header-work__cover-image--rawnfresh',
          numString: '01',
          name: 'rawnfresh',
          title: '帶著走的電影院，影像作品展示、加速客戶溝通',
          category: 'Website',
          client: '沙西米影像',
          keywords: 'Viewing experience',
          thumbnailImageUrl: require('~/assets/images/p-sashimi/p-sashimi_cover.jpg'),
        },
        {
          id: 2,
          bgColor: '#FFCA27',
          titleColor: '#000000',
          customThumbnailImgClass: 'feature-work__thumbnail-img--real-estate',
          customCoverImgClass: 'header-work__cover-image--real-estate',
          numString: '02',
          name: 'real-estate',
          title: '大房東的最佳秘書，把包租公變成品牌房東',
          category: 'Custom Software',
          client: '客製租賃系統',
          keywords: 'Rental system',
          thumbnailImageUrl: require('~/assets/images/p-real-estate/p-real-estate_cover.jpg'),
        },
        {
          id: 3,
          bgColor: '#EFD833',
          titleColor: '#3B3736',
          customThumbnailImgClass: '',
          customCoverImgClass: 'header-work__cover-image--shiftstudioco',
          numString: '03',
          name: 'shiftstudioco',
          title: '快速成長的新銳品牌值得擁有的獨特印象',
          category: 'Website',
          client: '轉轉影像事業',
          keywords: 'Work Display',
          thumbnailImageUrl: require('~/assets/images/p-shift/p-shift_cover.jpg'),
        },
        {
          id: 4,
          bgColor: '#83ECFC',
          titleColor: '#3B3736',
          customThumbnailImgClass: '',
          customCoverImgClass: 'header-work__cover-image--trans',
          numString: '04',
          name: 'trans',
          title: '大型論壇活動宣傳的最佳流程、節目資訊、訂票',
          category: 'Website',
          client: '永齡基金會',
          keywords: 'Large Forum Agenda',
          thumbnailImageUrl: require('~/assets/images/p-trans/p-trans_cover.jpg'),
        },
        {
          id: 5,
          bgColor: '#019165',
          titleColor: '#FFFFFF',
          customThumbnailImgClass: '',
          customCoverImgClass: 'header-work__cover-image--wassup',
          numString: '05',
          name: 'wassup',
          title: 'KOL 的跨界篇章一觸即發，跨界經營、販售',
          category: 'Website',
          client: 'Wassup 挖砂貓砂',
          keywords: 'Landing Page',
          thumbnailImageUrl: require('~/assets/images/p-wassup/p-wassup_cover.jpg'),
        },
        {
          id: 6,
          bgColor: '#EDE5D8',
          titleColor: '#000000',
          customThumbnailImgClass: '',
          customCoverImgClass: 'header-work__cover-image--legere',
          numString: '06',
          name: 'legere',
          title: '顧問服務的催化劑，降低疑慮、增強信心',
          category: 'Website',
          client: 'Legere 里格',
          keywords: 'Landing Page',
          thumbnailImageUrl: require('~/assets/images/p-legere/p-legere_cover.jpg'),
        },
      ],
    }
  },
  mounted() {
    // 取得裝置寬高
    this.viewRect = this.getViewRect()

    // Register reveal elements when desktop, iPad
    if (this.viewRect.width >= 768) {
      // 設定初始值
      gsap.utils.toArray('.js-scroll-t-work').forEach((el) => {
        gsap.set(el, { autoAlpha: 0 })
      })
      const texts = gsap.utils.toArray('.js-anime-text')
      const imgs = gsap.utils.toArray('.js-anime-img')
      const imgTexts = gsap.utils.toArray('.js-anime-imgText')
      // 桌機版順序：圖(imgs)-> 文(texts) -> 圖中的文(imagTexts)
      setTimeout(() => {
        gsap
          .timeline()
          .fromTo(
            imgs,
            {
              y: 60,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              stagger: 0.02,
              ease: 'Circ.easIn',
              duration: 1.2,
            }
          )
          .fromTo(
            texts,
            {
              y: 40,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              stagger: 0.1,
              ease: 'Circ.easIn',
              duration: 1.2,
            },
            '0.8'
          )
          .fromTo(
            imgTexts,
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              ease: 'Circ.easIn',
              duration: 1.2,
            },
            '2'
          )
      }, 500)
    }
  },
  methods: {
    getViewRect() {
      return {
        width: Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        height: Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        ),
      }
    },
  },
}
</script>

<style lang="scss">
.feature-work {
  padding: 131px 45px 132px 45px;
  user-select: none;

  @media screen and (max-width: 1399px) {
    padding-top: 145px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0px;
    padding-right: 0px;
  }
  @media screen and (max-width: 615px) {
    padding-bottom: 31px;
  }

  &__label {
    color: $third-color;
    font-size: 15px;
    line-height: 23px;
    margin: 0px 0px 19px 20px;
    padding-left: 5px;

    @media screen and (max-width: 1399px) {
      margin-left: 0px;
    }
    @media screen and (max-width: 615px) {
      padding-left: 34px;
    }
    @media screen and (max-width: 414px) {
      padding-left: 18px;
    }
  }
  &__container {
    margin: 0px auto;
    max-width: 1310px;

    @media screen and (max-width: 1399px) {
      max-width: 615px;
    }
  }
  &__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
  &__card {
    display: flex;
    flex-direction: column;
    margin-bottom: 49px;
    margin-right: 20px;
    margin-left: 20px;

    @media screen and (max-width: 1399px) {
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 0px;
    }
  }
  &__thumbnail-wrapper {
    position: relative;
    display: block;
    width: 615px;
    height: 346px;
    border-radius: 7px;
    overflow: hidden;

    @media screen and (max-width: 615px) {
      border-radius: 0px;
      width: 100vw;
      height: 100vw;
    }
  }
  &__thumbnail {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__thumbnail-img {
    height: 100%;
  }
  // CUSTOM THUMBNAIL IMG CLASS: x position
  &__thumbnail-img--real-estate {
    @media screen and (max-width: 615px) {
      transform: translateX(40vw);
    }
  }
  // END OF CUSTOM THUMBNAIL IMG CLASS
  &__content {
    margin: 19px 0px 0px 5px;
    min-width: 336px;
    max-width: 605px;

    /*** 偏移部分文字，到縮圖位置內 ***/
    position: relative;
    .feature-work__number,
    .feature-work__subtitle {
      position: absolute;
    }
    .feature-work__number {
      display: inline-block;
      top: -82px;
      line-height: 18px;
    }
    .feature-work__subtitle {
      top: -57px;
      line-height: 21px;
    }

    // <= 767
    @media screen and (max-width: 767px) {
      margin: 23px 19px 60px 20px;
      min-width: 281px;
      display: block;

      /*** 還原偏移文字 ***/
      position: static;
      .feature-work__number,
      .feature-work__subtitle,
      .feature-work__keywords {
        position: static;
        padding-left: 0px;
      }
      .feature-work__title {
        display: block;
        margin-top: 12px;
        margin-bottom: 30px;
      }
      .feature-work__subtitle {
        padding-bottom: 1px;
        opacity: 0.3;
      }
      .feature-work__keywords {
        line-height: 21px;
        padding-bottom: 35px;
        opacity: 0.3;
      }
      .feature-work__link {
        display: inline-block;
        visibility: visible;
        width: 121px;
        height: 30px;
        line-height: 30px;
      }
    }
  }
  &__number {
    padding-left: 12px;
    font-size: 15px;
    letter-spacing: 0px;
  }
  &__title {
    font-size: 24px;
    line-height: 33px;
    font-weight: $font-weight--black;
    margin-top: 0px;
    margin-bottom: 12px;
    padding: 5px 0px;
  }
  &__subtitle,
  &__keywords {
    font-size: 15px;
    font-weight: $font-weight--medium;
    margin: 0;
  }
  &__subtitle {
    padding-left: 12px;
    line-height: 21px;
  }
  &__keywords {
    line-height: 18px;
    font-weight: $font-weight--light;
    margin-bottom: 0px;
    opacity: 0.7;
  }
  &__link {
    display: none;
    visibility: hidden;
    background-color: $secondary-color;
    color: $primary-color;
    font-size: 13px;
    font-weight: $font-weight--medium;
    text-align: center;
    line-height: 30px;
    border-radius: 4px;
    width: 121px;
    height: 30px;
  }
}
</style>
