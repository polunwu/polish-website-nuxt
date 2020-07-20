<template>
  <div class="loader">
    <img
      class="loader__logo"
      src="~/assets/images/header_logo.svg"
      alt="Polish Design Logo"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.loader {
  position: fixed;
  background: $primary-color;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 140px;
  }
}
</style>
