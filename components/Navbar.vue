<template>
  <nav>
    <div class="logo">
      <nuxt-link to="/">
        <img src="~/assets/images/header_logo.svg" alt="Polish Design Logo" />
      </nuxt-link>
    </div>
    <div class="top" @click="scrollTop">
      <a>
        <span>TOP</span>
      </a>
    </div>
    <div ref="jsNavArrow" class="arrow">
      <a>
        <img src="~/assets/images/header_arrow.svg" alt="header-arrow" />
      </a>
    </div>
    <transition :css="false" @enter="enterMenu" @leave="leaveMenu">
      <div v-show="isOpen" ref="jsMenu" class="navigation__menu">
        <div ref="jsMenuLogo" class="navigation__logo">
          <nuxt-link to="/">
            <img
              src="~/assets/images/header_logo.svg"
              alt="Polish Design Logo"
            />
          </nuxt-link>
        </div>
        <div class="navigation__links">
          <ul>
            <nuxt-link to="/work#feature-work"
              ><li ref="jsMenuWork" class="navigation__link" @click="toggleNav">
                Work
              </li></nuxt-link
            >
            <nuxt-link to="/work#about"
              ><li
                ref="jsMenuAbout"
                class="navigation__link"
                @click="toggleNav"
              >
                About us
              </li></nuxt-link
            >
            <nuxt-link to="/work#footer"
              ><li
                ref="jsMenuContact"
                class="navigation__link"
                @click="toggleNav"
              >
                Contact us
              </li></nuxt-link
            >
          </ul>
        </div>
        <div ref="jsMenuInfo" class="navigation__info">
          <div class="navigation__messenger">
            <p>With Messenger</p>
            <a
              href="http://m.me/polishdesigntw"
              class="messenger__link"
              target="_blank"
            >
              <img src="~/assets/images/msg.png" alt="Messenger" />
            </a>
          </div>
          <div class="info-wrapper__second-row">
            <div class="navigation__email">
              <p>Email</p>
              <a href="mailto:Hello@polish-design.com.tw" class="email__link">
                Hello@polish-design.com.tw
              </a>
            </div>
            <div class="navigation__follow-us">
              <p>Follow Us</p>
              <a
                href="https://www.facebook.com/polishdesigntw/"
                class="social__link social__link--fb"
                target="_blank"
              >
                <img src="~/assets/images/social_fb.svg" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/polishdesigntw/"
                class="social__link social__link--ig"
                target="_blank"
              >
                <img src="~/assets/images/social_ig.svg" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div
      class="menu-trigger"
      @click="toggleNav"
      @mouseenter="enterHamburger"
      @mouseleave="leaveHamburger"
    >
      <i ref="jsTriggerLayer" class="menu-trigger__layer"></i>
      <i
        ref="jsTriggerBarTop"
        class="menu-trigger__bar menu-trigger__bar--top"
      ></i>
      <i
        ref="jsTriggerBarMid"
        class="menu-trigger__bar menu-trigger__bar--middle"
      ></i>
      <i
        ref="jsTriggerBarBot"
        class="menu-trigger__bar menu-trigger__bar--bottom"
      ></i>
    </div>
  </nav>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      isOpen: false,
    }
  },
  mounted() {
    // 進入 footer 時，隱藏箭頭
    gsap.to(this.$refs.jsNavArrow, {
      scrollTrigger: {
        trigger: '#footer', // Footer.vue -> #footer 元件
        start: 'top 99%',
        toggleActions: 'play none none reset',
      },
      autoAlpha: 0,
      duration: 0.5,
    })
  },
  methods: {
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    toggleNav() {
      const jsTriggerBarTop = this.$refs.jsTriggerBarTop
      const jsTriggerBarBot = this.$refs.jsTriggerBarBot
      if (!this.isOpen) {
        this.openHamgurger()
          .to(
            jsTriggerBarTop,
            {
              x: -30,
              autoAlpha: 0,
              duration: 0.4,
            },
            '0'
          )
          .to(
            jsTriggerBarBot,
            {
              x: 30,
              autoAlpha: 0,
              duration: 0.4,
            },
            '0'
          )
      } else {
        this.closeHamburger()
      }
      this.isOpen = !this.isOpen
    },
    enterHamburger() {
      // 滑鼠移入時
      if (!this.isOpen) {
        // 如果 Menu 未展開，展開漢堡
        this.openHamgurger()
      }
    },
    leaveHamburger() {
      // 滑鼠離開時
      if (!this.isOpen) {
        // 如果 Menu 未展開，關閉漢堡
        this.closeHamburger()
      }
    },
    openHamgurger() {
      const jsTriggerLayer = this.$refs.jsTriggerLayer
      const jsTriggerBarTop = this.$refs.jsTriggerBarTop
      const jsTriggerBarBot = this.$refs.jsTriggerBarBot
      return gsap
        .timeline()
        .to(jsTriggerLayer, {
          scale: 1.2,
          duration: 0.4,
          ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
        })
        .to(
          jsTriggerBarTop,
          {
            x: -10,
            duration: 0.2,
            ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
          },
          '0'
        )
        .to(
          jsTriggerBarBot,
          {
            x: 10,
            duration: 0.2,
            ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
          },
          '0'
        )
    },
    closeHamburger() {
      const jsTriggerLayer = this.$refs.jsTriggerLayer
      const jsTriggerBarTop = this.$refs.jsTriggerBarTop
      const jsTriggerBarBot = this.$refs.jsTriggerBarBot
      return gsap
        .timeline()
        .to(jsTriggerLayer, {
          scale: 0.2,
          duration: 0.4,
          ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
        })
        .to(
          jsTriggerBarTop,
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.2,
          },
          '0'
        )
        .to(
          jsTriggerBarBot,
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.2,
          },
          '0'
        )
    },
    enterMenu(el, done) {
      // this is a transition js hook bind with v-enter
      // el = menu
      const {
        jsMenuLogo,
        jsMenuWork,
        jsMenuAbout,
        jsMenuContact,
        jsMenuInfo,
      } = this.$refs
      gsap
        .timeline({
          onComplete: done, // complete js hook
          defaults: {
            duration: 0.5,
            ease: 'Power4.easeOut',
          },
        })
        .fromTo(el, { x: '100%' }, { x: '0%', duration: 0.6 }, '0.35') // wait 0.35 for hamburger open
        .fromTo(
          jsMenuLogo,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0 },
          '0.6'
        )
        .fromTo(
          jsMenuWork,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0 },
          '0.7'
        )
        .fromTo(
          jsMenuAbout,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0 },
          '0.8'
        )
        .fromTo(
          jsMenuContact,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0 },
          '0.9'
        )
        .fromTo(
          jsMenuInfo,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0 },
          '0.10'
        )
    },
    leaveMenu(el, done) {
      // this is a transition js hook bind with v-leave
      // el = menu
      const {
        jsMenuLogo,
        jsMenuWork,
        jsMenuAbout,
        jsMenuContact,
        jsMenuInfo,
      } = this.$refs
      gsap
        .timeline({
          onComplete: done, // complete js hook
          defaults: {
            duration: 0.6,
            ease: 'Power4.easeOut',
          },
        })
        .fromTo(
          jsMenuLogo,
          { autoAlpha: 1, y: 0 },
          { autoAlpha: 0, y: -150 },
          '0.2'
        )
        .fromTo(
          jsMenuWork,
          { autoAlpha: 1, y: 0 },
          { autoAlpha: 0, y: -150 },
          '0.2'
        )
        .fromTo(
          jsMenuAbout,
          { autoAlpha: 1, y: 0 },
          { autoAlpha: 0, y: -150 },
          '0.2'
        )
        .fromTo(
          jsMenuContact,
          { autoAlpha: 1, y: 0 },
          { autoAlpha: 0, y: -150 },
          '0.2'
        )
        .fromTo(
          jsMenuInfo,
          { autoAlpha: 1, y: 0 },
          { autoAlpha: 0, y: -150 },
          '0.2'
        )
        .fromTo(
          el,
          { x: '0%' },
          { x: '100%', duration: 0.6, ease: 'Power4.easeIn' },
          '0.2'
        )
    },
  },
}
</script>

<style lang="scss">
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
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: none;
  }
}
.arrow {
  position: fixed;
  right: 38px;
  bottom: 40px;
  animation: arrow_fade_down 1.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;

  @media screen and (max-width: 414px) {
    right: 18px;
  }
}
@keyframes arrow_fade_down {
  0% {
    transform: translate(0, -15px);
    opacity: 0.1;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 10px);
    opacity: 0.1;
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

  &__layer {
    position: absolute;
    background-color: white;
    width: 180px;
    height: 180px;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.2);
    border-radius: 50%;
  }

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
.navigation {
  &__menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    max-width: 768px;
    transform: translateX(100%);
    overflow: hidden;
    background-color: $primary-color;
  }
  &__logo {
    position: absolute;
    top: 63px;
    left: 47px;
    width: 94px;
    height: 55px;
  }
  &__links {
    position: absolute;
    left: 47px;
    top: 183px;
    font-size: 48px;
    line-height: 58px;
    font-weight: $font-weight--black;
  }
  &__link {
    margin-bottom: 4vh;
  }
  &__info {
    position: absolute;
    left: 30px;
    bottom: 70px;
    display: flex;

    @media screen and (min-aspect-ratio: 2/1) {
      top: 183px;
      left: 40vw;
      bottom: auto;
    }
  }
  &__messenger,
  &__email,
  &__follow-us {
    padding-left: 26.5px;
    border-left: 1px solid $secondary-color;
    p {
      font-weight: $font-weight--light;
      margin: 0;
      padding-top: 5.5px;
      line-height: 16px;
      font-size: 14px;
    }
  }
  &__messenger {
    .messenger__link {
      display: block;
      height: 111px;
      margin: 36px 94px 16px 35px;
      img {
        width: 111px;
      }
    }
  }
  &__email {
    padding-bottom: 50px;
    .email__link {
      font-size: 24px;
      font-weight: bold;
      line-height: 48px;
      margin-right: 55.5px;
    }
  }
  &__follow-us {
    .social__link {
      display: inline-block;
      padding: 22px 20px 0px 20px;
    }
    .social__link--fb {
      margin-left: -15.5px;
    }
  }

  @media screen and (max-width: 860px) {
    &__logo,
    &__links {
      left: 47px;
    }
    &__info {
      left: 30px;
    }
  }
  @media screen and (max-width: 414px) {
    &__logo {
      top: 43px;
    }
    &__messenger,
    &__email,
    &__follow-us {
      padding-left: 17px;
    }
    &__links {
      top: 22vh;
      font-size: 36px;
      line-height: 44px;
    }
    &__link {
      margin-bottom: 3vh;
    }
    &__info {
      bottom: 35px;
      flex-direction: column;
    }
    &__messenger {
      .messenger__link {
        margin: 8px 0px 3vh 130px;
        height: 13vh;
        img {
          width: 13vh;
        }
      }
    }
    &__email {
      padding-bottom: 0px;
      .email__link {
        margin-right: 0px;
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 414px) and (min-aspect-ratio: 2/3) {
    &__messenger {
      display: none;
    }
  }
  @media screen and (max-width: 374px) {
    &__links {
      font-size: 30px;
    }
    &__link {
      margin-bottom: 2vh;
    }
    &__email {
      .email__link {
        font-size: 17px;
      }
    }
  }
}
</style>
