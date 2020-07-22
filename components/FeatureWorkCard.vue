<template>
  <li
    class="feature-work__card"
    :class="{ 'feature-work__card--leaving': isLeaving }"
  >
    <nuxt-link :to="/work/ + work.name" class="feature-work__thumbnail-wrapper">
      <div
        ref="jsThumbnail"
        class="feature-work__thumbnail"
        :style="{ backgroundImage: `url(${work.thumbnailImageUrl})` }"
        @click="pageTargetClicked"
      ></div>
    </nuxt-link>
    <div class="feature-work__content">
      <span class="feature-work__number">{{ work.numString }}</span>
      <nuxt-link :to="/work/ + work.name">
        <h3 class="feature-work__title" @click="pageTargetClicked">
          {{ work.title }}
        </h3>
      </nuxt-link>
      <h4 class="feature-work__subtitle">
        <span class="subtitle__category">{{ work.category }}</span
        >&nbsp;-&nbsp;
        <span class="subtitle__client">{{ work.client }}</span>
      </h4>
      <p class="feature-work__keywords">{{ work.keywords }}</p>
      <nuxt-link :to="/work/ + work.name" class="feature-work__link"
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
      this.animateThumbnail()
    },
    animateThumbnail() {
      const thumbnailWrapper = this.$refs.jsThumbnail.parentNode
      const thumbnailWrapperRect = thumbnailWrapper.getBoundingClientRect()

      gsap.to(thumbnailWrapper, {
        x:
          this.viewRect.width / 2 -
          thumbnailWrapperRect.x -
          thumbnailWrapperRect.width / 2,
        y:
          this.viewRect.height / 2 -
          thumbnailWrapperRect.y -
          thumbnailWrapperRect.height / 2,
        scale: this.viewRect.height / thumbnailWrapperRect.height,
        duration: 0.6,
        ease: 'Back.easeInOut',
      })
    },
  },
}
</script>

<style lang="scss"></style>
