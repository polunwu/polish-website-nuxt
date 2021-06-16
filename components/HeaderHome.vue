<template>
  <header class="header-home">
    <div>
      <video
        ref="jsHeroVideo"
        poster=""
        class="video-background"
        autoplay="true"
        loop=""
        muted=""
        playsinline=""
        preload="auto"
        data-poster="/header_poster.png"
      >
        <source
          src="https://storage.googleapis.com/polish-design.com.tw/polish-man-compressed.mp4"
          type="video/mp4"
        />
      </video>
      <div
        ref="jsGradientLayer"
        class="layer"
        @touchstart.prevent="handleHold"
        @touchend.prevent="handleUnHold"
        @mousedown="handleHold"
        @mouseup="handleUnHold"
      ></div>
      <div
        ref="jsHolder"
        class="holder"
        @touchstart.prevent="handleHold"
        @touchend.prevent="handleUnHold"
        @mousedown="handleHold"
        @mouseup="handleUnHold"
        @mouseenter="mouseEnterHold"
        @mouseleave="mouseOutHold"
      >
        <svg
          ref="jsHolderPulse"
          xmlns="http://www.w3.org/2000/svg"
          width="112"
          height="112"
          class="holder__pulse"
        >
          <g data-name="Path 225" fill="none">
            <path
              d="M56 0a55.832 55.832 0 0126.4 6.618 56.72 56.72 0 0119.126 16.759A56 56 0 1156 0z"
            />
            <path
              d="M56 1c-7.425 0-14.628 1.454-21.408 4.322a55.002 55.002 0 00-9.342 5.07 55.401 55.401 0 00-8.14 6.717 55.401 55.401 0 00-6.717 8.14 55.002 55.002 0 00-5.071 9.343C2.454 41.372 1 48.575 1 56c0 7.425 1.454 14.628 4.322 21.408a55.002 55.002 0 005.07 9.342 55.402 55.402 0 006.717 8.14 55.401 55.401 0 008.14 6.717 55.002 55.002 0 009.343 5.071C41.372 109.546 48.575 111 56 111c7.425 0 14.628-1.454 21.408-4.322a55.002 55.002 0 009.342-5.07 55.402 55.402 0 008.14-6.717 55.402 55.402 0 006.717-8.14 55.002 55.002 0 005.071-9.343C109.546 70.628 111 63.425 111 56c0-5.89-.922-11.689-2.742-17.233a53.573 53.573 0 00-7.546-14.803c-5.015-6.908-11.51-12.6-18.786-16.463C73.803 3.187 65.08 1 56 1m0-1c9.437 0 18.328 2.334 26.395 6.618 7.393 3.925 14.013 9.714 19.126 16.759C108.048 32.366 112 43.72 112 56c0 30.928-25.072 56-56 56S0 86.928 0 56 25.072 0 56 0z"
              fill="#fff"
            />
          </g>
        </svg>
        <svg
          ref="jsHolderHold"
          xmlns="http://www.w3.org/2000/svg"
          width="112"
          height="112"
          class="holder__hold"
        >
          <g data-name="Group 71">
            <g data-name="Path 222" fill="none">
              <circle
                ref="jsHolderCircleLayer"
                class="holder__circle-layer"
                cx="56"
                cy="56"
                r="56"
                stroke-width="none"
                fill="#fff"
              />
              <path
                d="M56 0a55.832 55.832 0 0126.4 6.618 56.72 56.72 0 0119.126 16.759A56 56 0 1156 0z"
              />
              <path
                d="M56 1c-7.425 0-14.628 1.454-21.408 4.322a55.002 55.002 0 00-9.342 5.07 55.401 55.401 0 00-8.14 6.717 55.401 55.401 0 00-6.717 8.14 55.002 55.002 0 00-5.071 9.343C2.454 41.372 1 48.575 1 56c0 7.425 1.454 14.628 4.322 21.408a55.002 55.002 0 005.07 9.342 55.402 55.402 0 006.717 8.14 55.401 55.401 0 008.14 6.717 55.002 55.002 0 009.343 5.071C41.372 109.546 48.575 111 56 111c7.425 0 14.628-1.454 21.408-4.322a55.002 55.002 0 009.342-5.07 55.402 55.402 0 008.14-6.717 55.402 55.402 0 006.717-8.14 55.002 55.002 0 005.071-9.343C109.546 70.628 111 63.425 111 56c0-5.89-.922-11.689-2.742-17.233a53.573 53.573 0 00-7.546-14.803c-5.015-6.908-11.51-12.6-18.786-16.463C73.803 3.187 65.08 1 56 1m0-1c9.437 0 18.328 2.334 26.395 6.618 7.393 3.925 14.013 9.714 19.126 16.759C108.048 32.366 112 43.72 112 56c0 30.928-25.072 56-56 56S0 86.928 0 56 25.072 0 56 0z"
                fill="#fff"
              />
            </g>
            <path
              data-name="Path 223"
              d="M48.017 63V48.908h-2.949v5.723H38.72v-5.723h-2.949V63h2.949v-5.937h6.348V63zm6.9.225c3.168 0 5.189-2.025 5.189-5.469 0-3.4-2.051-5.449-5.186-5.449s-5.185 2.06-5.185 5.449c0 3.437 2.022 5.469 5.186 5.469zm0-2.178c-1.406 0-2.295-1.182-2.295-3.281 0-2.08.908-3.281 2.295-3.281s2.285 1.2 2.285 3.281c.004 2.099-.885 3.281-2.281 3.281zM61.64 63h2.851V48.908H61.64zm8.66.166a3.452 3.452 0 003.263-1.966h.049V63h2.813V48.908h-2.852v5.42h-.059a3.366 3.366 0 00-3.193-1.963c-2.627 0-4.287 2.061-4.287 5.381 0 3.354 1.651 5.42 4.266 5.42zm.967-8.516c1.416 0 2.324 1.211 2.324 3.115s-.908 3.105-2.324 3.105c-1.436 0-2.314-1.182-2.314-3.105s.88-3.115 2.316-3.115z"
              fill="#fff"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="112"
          height="112"
          class="holder__bar"
        >
          <g data-name="Path 224" fill="none">
            <circle
              id="bar"
              r="53.5"
              cx="56"
              cy="56"
              stroke="#fff"
              stroke-width="5px"
              :style="{ strokeDashoffset: dashoffset }"
            ></circle>
          </g>
        </svg>
      </div>
      <div class="email">
        <a href="mailto:Hello@polish-design.com.tw"
          >Hello@polish-design.com.tw</a
        >
      </div>
      <nuxt-link
        to="/work"
        prefetch
        style="position: fixed; width: 100vw; height: 20px"
      ></nuxt-link>
    </div>
  </header>
</template>

<script>
import { gsap } from 'gsap'

export default {
  data() {
    return {
      timeline: null,
      dashoffset: 336,
      circleHover: null,
      pulse: null,
    }
  },
  watch: {
    // #bar 到 100% 時 (dashoffset == 0)，跳轉 work 頁
    dashoffset(newValue, oldValue) {
      if (newValue === '0') {
        this.$router.push({ name: 'work' })
      }
    },
  },
  mounted() {
    const {
      jsHeroVideo,
      jsGradientLayer,
      jsHolderPulse,
      jsHolder,
      jsHolderCircleLayer,
    } = this.$refs

    // 偵測 Safari 省電模式
    if (jsHeroVideo.paused) {
      // ;(async function playLoaderVideo() {
      //   try {
      //     await jsHeroVideo.play()
      //   } catch (err) {
      //     // eslint-disable-next-line
      //     console.log(err)
      //     if (jsHeroVideo.getAttribute('poster') === '') {
      //       jsHeroVideo.setAttribute(
      //         'poster',
      //         jsHeroVideo.getAttribute('data-poster')
      //       )
      //     }
      //   }
      // })()
    }

    // 動態改變 dashoffset 的數值: 336 -> 0%, 0 -> 100%
    const barCounter = {
      dashoffset: 336,
    }
    // 定義時間軸
    this.timeline = gsap
      .timeline({ paused: true })
      .fromTo(
        barCounter,
        { dashoffset: 336 },
        {
          dashoffset: 0,
          duration: 1.5,
          ease: 'Power1.easeOut',
          onUpdate: () => {
            // 更新 data，並綁定到 svg#bar 的 style 上
            this.dashoffset = barCounter.dashoffset.toFixed(0)
          },
        }
      )
      .fromTo(
        jsGradientLayer,
        { autoAlpha: 0.1 },
        {
          autoAlpha: 1,
          duration: 1.5,
          ease: 'Power1.easeOut',
        },
        '0'
      )

    // 心臟跳動
    this.pulse = gsap
      .timeline({ repeat: -1 })
      .to(jsHolderPulse, {
        scale: 1.8,
        duration: 1.65,
        ease: 'Back.easeInOut',
      })
      .to(
        jsHolderPulse,
        {
          autoAlpha: 0.01,
          duration: 1.65,
          ease: 'Circ.easeOut',
        },
        '0'
      )
      .to(
        jsHolder,
        {
          scale: 1.04,
          duration: 0.825,
          ease: 'linear',
          yoyo: true,
        },
        '0.1'
      )

    // 滑鼠互動
    this.circleUp = gsap.timeline({ paused: true }).fromTo(
      jsHolderCircleLayer,
      { opacity: 0, scale: 0 },
      {
        opacity: 0.3,
        scale: 1,
        duration: 0.35,
        ease: 'Power1.easeOut',
      }
    )
  },
  methods: {
    handleHold(e) {
      // 按住時以一倍速正轉
      this.timeline.timeScale(1).play()
      this.circleUp.timeScale(1).play()
    },
    handleUnHold(e) {
      // 放開時以零點五倍速反轉
      this.timeline.timeScale(0.5).reverse()
      this.circleUp.timeScale(0.5).reverse()
    },
    leaveToWork() {},
    mouseEnterHold(e) {
      this.circleUp.timeScale(1).play()
    },
    mouseOutHold(e) {
      this.circleUp.timeScale(1).reverse()
    },
  },
}
</script>

<style lang="scss">
.header-home {
  position: relative;
  z-index: 1;

  .video-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    overflow: auto;
  }
  .layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: transparent linear-gradient(240deg, #1423f4 0%, #f60002 100%)
      50% 50% no-repeat padding-box;
    background-size: 150% 150%;
    opacity: 0.1;
  }
  .holder {
    position: fixed;
    top: 65%;
    left: 77%;
    height: 112px;
    width: 112px;

    &__pulse,
    &__hold,
    &__bar {
      position: absolute;
    }

    &__circle-layer {
      transform: translate(50% 50%) scale(0);
      transform-origin: 56px 56px; // Safari: use absolute coordinates like px but not 'center' or '50%'
      opacity: 0;
    }

    #bar {
      transform-origin: center;
      transform: rotate(-90deg);
      stroke-dashoffset: 336;
      stroke-dasharray: 336;
    }

    @media screen and (max-width: 1024px) {
      top: 82%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .email {
    position: fixed;
    left: 34px;
    top: calc(100% - 229px);
    color: $secondary-color;
    font-size: 15px;
    writing-mode: vertical-rl;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .email > a {
    text-decoration: none;
  }
}
</style>
