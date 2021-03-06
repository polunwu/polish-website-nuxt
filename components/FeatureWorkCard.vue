<template>
  <li class="feature-work__card">
    <nuxt-link :to="/work/ + work.name" class="feature-work__thumbnail-wrapper">
      <div
        ref="jsThumbnail"
        class="feature-work__thumbnail js-scroll-t-work js-anime-img"
        :style="{ backgroundColor: work.bgColor }"
        @click="pageTargetClicked"
        @mouseenter="cardEnter"
        @mouseleave="cardLeave"
      >
        <img
          ref="jsThumbnailImg"
          :src="work.thumbnailImageUrl"
          :class="[work.customThumbnailImgClass]"
          alt="work.name"
          class="feature-work__thumbnail-img"
        />
      </div>
    </nuxt-link>
    <div ref="jsContent" class="feature-work__content">
      <span
        ref="jsNumber"
        class="feature-work__number js-scroll-t-work js-anime-imgText"
        >{{ work.numString }}</span
      >
      <nuxt-link :to="/work/ + work.name">
        <h3
          ref="jsTitle"
          class="feature-work__title js-scroll-t-work js-anime-text"
          @click="pageTargetClicked"
          @mouseenter="cardEnter"
          @mouseleave="cardLeave"
        >
          {{ work.title }}
        </h3>
      </nuxt-link>
      <h4
        ref="jsSubtitle"
        class="feature-work__subtitle js-scroll-t-work js-anime-imgText"
      >
        <span class="subtitle__category">{{ work.category }}</span
        >&nbsp;-&nbsp;
        <span class="subtitle__client">{{ work.client }}</span>
      </h4>
      <p
        ref="jsKeywords"
        class="feature-work__keywords js-scroll-t-work js-anime-text"
      >
        {{ work.keywords }}
      </p>
      <nuxt-link
        :to="/work/ + work.name"
        class="feature-work__link js-scroll-t-work js-anime-text"
        ><span @click="pageTargetClicked">完整內容</span></nuxt-link
      >
    </div>
  </li>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: {
    work: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isLeaving: false,
      viewRect: null,
    }
  },
  mounted() {
    const getViewRect = function () {
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
    }
    // get view rect
    this.viewRect = getViewRect()
    // update view rect when resized
    window.addEventListener('resize', () => {
      this.viewRect = getViewRect()
    })
  },
  methods: {
    pageTargetClicked(event) {
      this.isLeaving = true
      this.thumbnailLeaving()
    },
    thumbnailLeaving() {
      const jsContent = this.$refs.jsContent
      const thumbnailImg = this.$refs.jsThumbnailImg
      const thumbnailWrapper = this.$refs.jsThumbnail.parentNode
      const thumbnailWrapperRect = thumbnailWrapper.getBoundingClientRect()

      gsap.set(thumbnailWrapper, { zIndex: 100 })
      gsap
        .timeline()
        .to(thumbnailWrapper, {
          x:
            this.viewRect.width / 2 -
            thumbnailWrapperRect.x -
            thumbnailWrapperRect.width / 2,
          y:
            this.viewRect.height / 2 -
            thumbnailWrapperRect.y -
            thumbnailWrapperRect.height / 2,
          scale: (this.viewRect.height / thumbnailWrapperRect.height) * 1.06,
          duration: 1,
          ease: 'Back.easeInOut',
        })
        .to(
          thumbnailImg,
          {
            x: 0,
            scale:
              2 / ((this.viewRect.height / thumbnailWrapperRect.height) * 1.06),
            duration: 0.6,
            ease: 'Back.easeInOut',
          },
          '0'
        )
        .to(
          thumbnailImg,
          {
            autoAlpha: 0,
            duration: 0.3,
          },
          '0.3'
        )
        .to(
          jsContent,
          {
            x: 150,
            autoAlpha: 0,
            duration: 0.3,
            ease: 'Back.easeInOut',
          },
          '0'
        )
    },
    cardEnter() {
      const { jsNumber, jsSubtitle, jsKeywords, jsTitle } = this.$refs

      // 只有桌機以上有 hover 效果
      if (this.viewRect.width >= 768) {
        gsap
          .timeline()
          .to(
            jsNumber,
            {
              y: -10,
              autoAlpha: 0,
              duration: 0.3,
              ease: 'Circ.easIn',
            },
            '0'
          )
          .to(
            jsSubtitle,
            {
              x: 5,
              opacity: 1,
              duration: 0.3,
              ease: 'Circ.easIn',
            },
            '0'
          )
          .to(
            jsKeywords,
            {
              x: 28,
              opacity: 0.7,
              duration: 0.3,
              ease: 'Circ.easIn',
            },
            '0'
          )
          .to(
            jsTitle,
            {
              x: 25,
              duration: 0.3,
              ease: 'Circ.easIn',
            },
            '0'
          )
      }
    },
    cardLeave() {
      const { jsNumber, jsSubtitle, jsKeywords, jsTitle } = this.$refs

      // 只有桌機以上有 hover 效果
      if (this.viewRect.width >= 768) {
        gsap
          .timeline()
          .to(
            jsNumber,
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.3,
              ease: 'Circ.easIn',
            },
            '0'
          )
          .to(
            jsSubtitle,
            {
              x: 0,
              opacity: 1,
              duration: 0.3,
              ease: 'Circ.easIn',
            },
            '0'
          )
          .to(
            jsKeywords,
            {
              x: 0,
              opacity: 0.7,
              duration: 0.3,
              ease: 'Circ.easIn',
            },
            '0'
          )
          .to(
            jsTitle,
            {
              x: 0,
              duration: 0.3,
              ease: 'Circ.easIn',
            },
            '0'
          )
      }
    },
  },
}
</script>

<style lang="scss"></style>
