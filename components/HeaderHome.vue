<template>
  <div>
    <header class="header-home">
      <div>
        <video
          class="video-background"
          autoplay="true"
          loop=""
          muted=""
          playsinline=""
          preload="auto"
        >
          <source
            src="https://storage.googleapis.com/polish_shop_bucket/polish-man-compressed.mp4"
            type="video/mp4"
          />
        </video>
        <div class="email">
          <a href="mailto:Hello@polish-design.com">Hello@polish-design.com</a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header-home {
  position: relative;
  z-index: 1;
  .video-background {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .email {
    position: absolute;
    left: 34px;
    top: calc(100vh - 209px);
    color: $secondary-color;
    font-size: 15px;
    writing-mode: vertical-rl;

    @media screen and (max-width: 414px) {
      left: 18px;
    }
  }
  .email > a {
    text-decoration: none;
  }
}
</style>
