<template>
  <nav>
    <div class="logo">
      <nuxt-link to="/">
        <img src="~/assets/images/header_logo.svg" alt="Polish Design Logo" />
      </nuxt-link>
    </div>
    <div class="menu-trigger">
      <i class="menu-trigger__bar menu-trigger__bar--top"></i>
      <i class="menu-trigger__bar menu-trigger__bar--middle"></i>
      <i class="menu-trigger__bar menu-trigger__bar--bottom"></i>
    </div>
    <div class="top" @click="scrollTop">
      <a>
        <span>TOP</span>
      </a>
    </div>
    <div class="arrow">
      <a>
        <img src="~/assets/images/header_arrow.svg" alt="header-arrow" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  z-index: 2;
}
.logo {
  position: fixed;
  top: 32px;
  left: 35px;
  width: 94px;
  height: 55px;

  @media screen and (max-width: 414px) {
    top: 18px;
    left: 18px;
    width: 76px;
    height: 45px;
  }
}
.top {
  position: fixed;
  right: 33px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  font-weight: $font-weight--black;
  writing-mode: vertical-rl;

  @media screen and (max-width: 767px) {
    display: none;
  }
}
.arrow {
  position: fixed;
  right: 38px;
  bottom: 40px;
  animation: arrow_fade_down 1.5s cubic-bezier(0.33, 1, 0.68, 1) infinite;

  @media screen and (max-width: 414px) {
    right: 18px;
  }
}
@keyframes arrow_fade_down {
  0% {
    transform: translate(0, -10px);
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 10px);
    opacity: 0;
  }
}
.menu-trigger {
  position: fixed;
  top: 31px;
  right: 34px;
  width: 25px;
  height: 26px;
  background-color: $secondary-color;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 7px 7.5px;
  font-size: 0px;

  &__bar {
    background-color: $primary-color;
    width: 25px;
    height: 4px;
    display: inline-block;
    padding: 0;
    font-size: 0px;
    border-radius: 0.5px;
    margin: 0px 0px 7px 0px;
  }

  &__bar--bottom {
    margin: 0px;
  }

  @media screen and (max-width: 414px) {
    top: 19px;
    right: 14px;
  }
}
</style>