<template>
  <div>
    <header class="header-work">
      <div
        class="header-work__cover-image-wrapper"
        :style="{ backgroundImage: `url(${coverImageUrl})` }"
      >
        <div class="header-work__content">
          <span class="header-work__number">{{ numString }}</span>
          <h3 class="header-work__title">
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
export default {
  props: {
    numString: {
      type: String,
      default: 'xx',
    },
    title: {
      type: String,
      default: 'TITLE',
    },
    category: {
      type: String,
      default: 'CATEGORY',
    },
    client: {
      type: String,
      default: 'CLIENT',
    },
    keywords: {
      type: String,
      default: 'KEYWORDS',
    },
    coverImageUrl: {
      type: String,
      default: 'COVERIMAGEURL',
    },
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
    align-items: flex-end;

    @media screen and (max-width: 768px) {
      justify-content: left;
      align-items: flex-start;
    }
  }
  &__content {
    max-width: 580px;
    margin: 0px 35px 42px 35px;

    @media screen and (max-width: 768px) {
      margin-top: 175px;
    }
    @media screen and (max-width: 414px) {
      margin-left: 18px;
      margin-right: 18px;
      max-width: 270px;
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
