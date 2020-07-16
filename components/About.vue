<template>
  <section id="about" class="about">
    <div class="about__wrapper">
      <div class="about__content">
        <h4 class="about__label">About Polish Man</h4>
        <h2 class="about__title">
          我們是長期關注 WWDC<br />及 Adobe 股價的開發團隊
        </h2>
        <div class="about__milestones">
          <div class="about__record">
            <p class="record__score">200</p>
            <p class="record__target">每年消費拉麵（碗）</p>
          </div>
          <div class="about__record">
            <p class="record__score">5</p>
            <p class="record__target record__target--dist">
              因工作破壞碟型鍵盤（組）
            </p>
          </div>
          <div class="about__record">
            <p class="record__score">99+</p>
            <p class="record__target record__target--tinder">
              Likes on Tinder ( per day )
            </p>
          </div>
        </div>
        <div class="about__members-wrapper">
          <img
            class="about__member about__member--d"
            src="~/assets/images/member_d.png"
            alt="Member Doppler"
          />
          <img
            class="about__member about__member--k"
            src="~/assets/images/member_k.png"
            alt="Member Kevin"
          />
          <img
            class="about__member about__member--h"
            src="~/assets/images/member_h.png"
            alt="Member Hungmi"
          />
          <img
            class="about__member about__member--p"
            src="~/assets/images/member_p.png"
            alt="Member Polun"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  padding: 20px 22px 0px 22px;

  @media screen and (max-width: 414px) {
    padding: 11px 11px 0px 11px;
  }

  &__wrapper {
    background-color: $dark-grey;
    margin: 0 auto;
    border-radius: 34px;
    padding-top: 75px;
  }
  &__content {
    margin: 0 auto;

    @media screen and (max-width: 767px) {
      position: relative;
      overflow: hidden;
    }
  }
  &__label {
    font-size: 15px;
    font-weight: $font-weight--medium;
    line-height: 18px;
    opacity: 0.37;
    margin-top: 0px;
    margin-bottom: 29px;
  }
  &__title {
    font-size: 30px;
    font-weight: $font-weight--black;
    line-height: 41px;
    padding: 0.5px 0px;
    margin: 0px auto 140px auto;
    max-width: 448px;

    @media screen and (max-width: 990px) {
      margin-bottom: 93px;
    }
    @media screen and (max-width: 524px) {
      font-size: 24px;
      line-height: 34px;
      padding: 0.5px 0px 14.5px 0px;
      margin-bottom: 98px;
    }
    @media screen and (max-width: 320px) {
      font-size: 22px;
      line-height: 31px;
      padding: 0.5px 0px 17.5px 0px;
    }
  }
  &__milestones {
    display: flex;
    justify-content: space-around;
    width: 80%;
    max-width: 1090px;
    margin: 0 auto;
    @media screen and (max-width: 990px) {
      flex-direction: column;
      padding-bottom: 23px;
    }
    @media screen and (max-width: 767px) {
      padding-bottom: 49px;
    }
    @media screen and (max-width: 414px) {
      padding-bottom: 8px;
    }

    .record__score {
      font-size: 120px;
      font-weight: $font-weight--black;
      line-height: 143px;
      margin: 0px;
      padding-bottom: 29px;

      @media screen and (max-width: 414px) {
        font-size: 70px;
        line-height: 84px;
        padding-bottom: 4px;
      }
    }
    .record__target {
      font-size: 18px;
      font-weight: $font-weight--medium;
      opacity: 0.37;
      line-height: 25px;
      margin-top: 0px;
      margin-bottom: 141px;

      @media screen and (max-width: 990px) {
        margin-bottom: 93px;
      }
      @media screen and (max-width: 524px) {
        margin-bottom: 98px;
      }
    }
    @media screen and (max-width: 414px) {
      .record__target--dist,
      .record__target--tinder {
        width: 136px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  &__members-wrapper {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 66%;
    max-width: 950px;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
      width: 80%;
    }
    @media screen and (max-width: 860px) {
      width: 97%;
      justify-content: center;
    }
  }
  &__member {
    height: 180px;
    margin-bottom: -10px;

    @media screen and (max-width: 767px) {
      height: 146px;
      position: absolute;
    }
    @media screen and (max-width: 414px) {
      height: 137px;
    }
  }
  &__member--d {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &__member--h {
    @media screen and (max-width: 767px) {
      top: 120px;
      right: -70px;
    }
  }
  &__member--p {
    @media screen and (max-width: 767px) {
      top: 380px;
      left: -54px;
    }
    @media screen and (max-width: 414px) {
      top: 337px;
    }
  }
  &__member--k {
    @media screen and (max-width: 767px) {
      top: 527px;
      right: -43px;
    }
  }
}
</style>
