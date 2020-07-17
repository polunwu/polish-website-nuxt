<template>
  <section id="feature-work" class="feature-work">
    <div class="feature-work__container">
      <h2 class="feature-work__label">Works</h2>
      <ul class="feature-work__list">
        <FeatureWorkCard v-for="work in works" :key="work.id" :work="work" />
      </ul>
    </div>
  </section>
</template>

<script>
import FeatureWorkCard from '@/components/FeatureWorkCard.vue'

export default {
  components: {
    FeatureWorkCard,
  },
  data() {
    return {
      works: [
        {
          id: 1,
          numString: '01',
          name: 'shiftstudioco',
          title: '快速成長的新銳品牌值得擁有的獨特印象',
          category: 'Website',
          client: 'Shift Studio 轉轉影像',
          keywords: 'Work Display',
          thumbnailImageUrl: 'https://via.placeholder.com/615x346',
        },
        {
          id: 2,
          numString: '02',
          name: 'wassup',
          title: 'KOL 的跨界篇章一觸即發，跨界經營、創業、販售',
          category: 'Website',
          client: 'Wassup 挖砂貓砂',
          keywords: 'Landing Page',
          thumbnailImageUrl: 'https://via.placeholder.com/615x346',
        },
        {
          id: 3,
          numString: '03',
          name: 'trans',
          title: '大型論壇活動宣傳的最佳流程、節目資訊、訂票',
          category: 'Website',
          client: '永齡基金會 Trans',
          keywords: 'Information & Action',
          thumbnailImageUrl: 'https://via.placeholder.com/615x346',
        },
        {
          id: 4,
          numString: '04',
          name: 'legere',
          title: '顧問服務的催化劑，降低疑慮、增強信心',
          category: 'Website',
          client: 'Legere 里格',
          keywords: 'Reservation guide',
          thumbnailImageUrl: 'https://via.placeholder.com/615x346',
        },
        {
          id: 5,
          numString: '05',
          name: 'zuker',
          title: '大房東的最佳秘書，把包租公變成品牌房東',
          category: 'System',
          client: 'Zuker',
          keywords: 'System',
          thumbnailImageUrl: 'https://via.placeholder.com/615x346',
        },
        {
          id: 6,
          numString: '06',
          name: 'rawnfresh',
          title: '帶著走的電影院，影像作品展示、加速客戶溝通',
          category: 'Website',
          client: '沙西米 RawNFresh',
          keywords: 'Video Display',
          thumbnailImageUrl: 'https://via.placeholder.com/615x346',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.feature-work {
  padding: 267px 45px 132px 45px;

  @media screen and (max-width: 1399px) {
    padding-top: 175px;
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
  }
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
      }
      .feature-work__keywords {
        line-height: 21px;
        padding-bottom: 35px;
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
    margin-bottom: 35px;
    line-height: 18px;
    font-weight: $font-weight--light;
    margin-bottom: 0px;
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
