<template>
  <footer id="footer" class="footer">
    <div class="footer__info-wrapper">
      <div class="footer__contact-us">
        <h3>Contact Us</h3>
        <p>與我們討論</p>
      </div>
      <div class="footer__messenger">
        <p>With Messenger</p>
        <a
          href="http://m.me/polishdesigntw"
          class="messenger__link"
          target="_blank"
        >
          <img src="~/assets/images/msg.png" alt="Messenger" />
        </a>
      </div>
      <div class="footer__email">
        <p>Email</p>
        <a href="mailto:Hello@polish-design.com.tw" class="email__link">
          Hello@polish-design.com.tw
        </a>
      </div>
      <div class="footer__follow-us">
        <h3>Follow Us</h3>
        <p>關注我們的 Insta & Facebook</p>
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
    <div class="footer__bottom">
      <p>© Polish Design TW</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  background-color: #1c1c1c;

  &__info-wrapper {
    margin: 0px 75px 0px 151px;
    padding: 57px 0px 125px 0px;
    display: flex;
    flex-wrap: wrap;

    h3 {
      font-weight: $font-weight--black;
      font-size: 24px;
      line-height: 29px;
      margin: 0;
      margin-bottom: 9px;
    }
    p {
      font-family: $arial;
      font-size: 14px;
      line-height: 20px;
      margin: 0;
    }
  }
  &__contact-us {
    width: 135px;
    padding-right: 92px;
  }
  &__messenger,
  &__email,
  &__follow-us {
    padding-left: 26.5px;
    border-left: 1px solid $secondary-color;
    height: 184px;
    p {
      padding-top: 5.5px;
      line-height: 16px;
    }
  }
  &__email,
  &__follow-us {
    // 大尺寸時自適應縮放
    margin: 0 auto;
  }
  &__follow-us {
    p {
      padding-top: 0px;
      margin-bottom: 26px;
      line-height: 20px;
    }
  }
  .social__link {
    display: inline-block;
    padding: 10px 20px;
  }
  .social__link--fb {
    margin-left: -15.5px;
  }
  .messenger__link {
    display: block;
    height: 111px;
    margin: 36px 67.5px 20px 38px;
    img {
      width: 111px;
    }
  }
  .email__link {
    font-family: $arial;
    font-size: 24px;
    font-weight: bold;
    line-height: 48px;
    margin-right: 55.5px;
  }

  &__bottom {
    font-size: 13px;
    font-family: $arial;
    margin: 0px 34px;
    padding-bottom: 27px;
    p {
      margin: 0;
    }
  }

  @media screen and (max-width: 1350px) {
    &__email {
      order: 4;
      flex-basis: 100%;
      margin-left: 227px;
      margin-top: 58px;
    }
  }
  @media screen and (max-width: 990px) {
    &__info-wrapper {
      margin: 0px 10px 0px 56px;
    }
    &__contact-us {
      padding-right: 54px;
    }
    &__email {
      margin-left: 188px;
    }
  }
  @media screen and (max-width: 767px) {
    &__info-wrapper {
      flex-direction: column;
      margin-left: 37px;
    }
    &__email {
      order: 0;
      margin-top: 0px;
      margin-left: 0px;

      p {
        padding-top: 11px;
      }

      .email__link {
        font-size: 20px;
        padding-top: 14px;
        margin-right: 10px;
      }
    }
    &__messenger {
      margin-top: 33.5px;
      display: flex;
      height: 115px;

      .messenger__link {
        margin: 5.5px auto;
      }
    }
    &__follow-us {
      margin-top: 37px;
      margin-left: 0px;
    }
  }
  @media screen and (max-width: 414px) {
    &__info-wrapper {
      margin-left: 20px;
      padding-bottom: 28px;
    }
    &__bottom {
      margin: 0px 20px;
    }
  }
  @media screen and (max-width: 350px) {
    .email__link {
      font-size: 17px;
    }
  }
}
</style>
