<template>
  <li
    class="feature-work__card"
    :class="{ 'feature-work__card--leaving': isLeaving }"
  >
    <nuxt-link :to="/work/ + work.name" class="feature-work__thumbnail-wrapper">
      <div
        ref="thumbnail"
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
    }
  },
  methods: {
    pageTargetClicked(event) {
      this.isLeaving = true
      this.animateThumbnail()
    },
    animateThumbnail() {
      const { thumbnail } = this.$refs
      // eslint-disable-next-line
      const thumbnailWrapper = thumbnail.parentNode
      gsap.to(thumbnailWrapper, {
        width: '100vw',
        height: '100vh',
        top: '0px',
        left: '0px',
      })
    },
  },
}
</script>

<style lang="scss"></style>
