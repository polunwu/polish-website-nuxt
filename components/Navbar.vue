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
    <div class="email">
      <a href="mailto:Hello@polish-design.com">Hello@polish-design.com</a>
    </div>
    <div class="arrow">
      <a href="">
        <img src="~/assets/images/header_arrow.svg" alt="header-arrow" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.logo {
  position: fixed;
  top: 32px;
  left: 35px;
  width: 94px;
  height: 55px;
}
.email {
  position: fixed;
  left: 34px;
  bottom: 33px;
  color: $secondary-color;
  font-size: 15px;
  writing-mode: vertical-rl;

  mix-blend-mode: difference;
}
.email > a {
  text-decoration: none;
}
.arrow {
  position: fixed;
  right: 38px;
  bottom: 40px;
  animation: arrow_fade_down 1.5s cubic-bezier(0.33, 1, 0.68, 1) infinite;
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
}
</style>
