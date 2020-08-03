<template>
  <div>
    <header class="header-work">
      <div
        class="header-work__cover-image-wrapper"
        :style="{
          backgroundColor: bgColor,
        }"
      >
        <img
          ref="jsCoverImg"
          :src="coverImageUrl"
          alt=""
          class="header-work__cover-image"
          :class="[customCoverImgClass]"
        />
        <div
          ref="jsContent"
          class="header-work__content"
          :style="{ color: titleColor }"
        >
          <span class="header-work__number">{{ numString }}</span>
          <h3 ref="jsContent" class="header-work__title">
            {{ title }}
          </h3>
          <h4 class="header-work__subtitle">
            <span class="subtitle__category">{{ category }}</span
            >&nbsp;-&nbsp;
            <span class="subtitle__client">{{ client }}</span>
          </h4>
          <p class="header-work__keywords">{{ keywords }}</p>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: {
    numString: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
    client: {
      type: String,
      default: '',
    },
    keywords: {
      type: String,
      default: '',
    },
    coverImageUrl: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '#121212',
    },
    titleColor: {
      type: String,
      default: '#fff',
    },
    customImgClass: {
      type: String,
      default: '',
    },
  },
  mounted() {
    const texts = this.$refs.jsContent.children
    const coverImg = this.$refs.jsCoverImg
    gsap
      .timeline()
      .from(texts, {
        y: 20,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'Power4.easeOut',
      })
      .from(
        coverImg,
        {
          y: 80,
          autoAlpha: 0,
          duration: 2,
          ease: 'Power4.easeOut',
        },
        '0.3'
      )
  },
}
</script>

<style lang="scss">
.header-work {
  position: relative;
  z-index: 1;
  &__cover-image-wrapper {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      justify-content: left;
    }
  }
  &__cover-image {
    position: absolute;
    right: -6.5vw;
    bottom: 0;
    width: 50vw;

    @media screen and (max-width: 767px) {
      right: -20vw;
      width: 140vw;
    }
    @media screen and (max-width: 414px) and (min-aspect-ratio: 4/7) {
      right: -10vw;
      width: 120vw;
    }
  }
  // CUSTOM COVER IMG CLASS
  &__cover-image--shiftstudioco {
    right: 0;
    width: 45vw;
    @media screen and (max-width: 767px) {
      right: 0;
      width: 100vw;
    }
  }
  &__cover-image--zuker {
    right: -3vw;
    width: 45vw;
    @media screen and (max-width: 767px) {
      right: -67vw;
      width: 150vw;
    }
    @media screen and (max-width: 414px) and (min-aspect-ratio: 4/7) {
      right: -50vw;
      width: 120vw;
    }
  }
  // END OF CUSTOM COVER IMG CLASS
  &__content {
    max-width: 580px;
    margin: 156px 35px 42px 35px;

    @media screen and (max-width: 768px) {
      margin-top: 175px;
    }
    @media screen and (max-width: 414px) {
      margin-left: 18px;
      margin-right: 18px;
      max-width: 270px;
    }
    @media screen and (max-width: 414px) and (min-aspect-ratio: 4/7) {
      margin-top: 20vh;
    }
  }
  &__number {
    font-size: 15px;
    line-height: 18px;
  }
  &__title {
    font-size: 50px;
    line-height: 62px;
    padding-bottom: 36px;
    margin: 0px;
    margin-bottom: 172px;
    margin-top: 29px;

    @media screen and (max-width: 414px) {
      font-size: 24px;
      line-height: 36px;
      padding-bottom: 0px;
      margin-bottom: 48px;
    }

    @media screen and (max-width: 414px) and (min-aspect-ratio: 4/7) {
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }
  &__subtitle,
  &__keywords {
    font-size: 15px;
    margin: 0px;
  }
  &__subtitle {
    font-weight: $font-weight--medium;
    line-height: 23px;
  }
  &__keywords {
    font-weight: $font-weight--light;
    line-height: 20px;
  }
}
</style>
