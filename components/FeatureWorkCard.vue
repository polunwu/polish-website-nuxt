<template>
  <li class="feature-work__card">
    <nuxt-link :to="/work/ + work.name" class="feature-work__thumbnail-wrapper">
      <div
        class="feature-work__thumbnail"
        :style="{ backgroundImage: `url(${work.thumbnailImageUrl})` }"
      ></div>
    </nuxt-link>
    <div class="feature-work__content">
      <span class="feature-work__number">{{ work.numString }}</span>
      <nuxt-link :to="/work/ + work.name">
        <h3 class="feature-work__title">
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
        ><span>完整內容</span></nuxt-link
      >
    </div>
  </li>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss"></style>
