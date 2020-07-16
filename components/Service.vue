<template>
  <section id="service" class="service">
    <h2 class="service__label">What We Do</h2>
    <ul class="service__list">
      <li class="service__item">
        <span class="service__index">01</span>
        <span class="service__name">Branding</span>
      </li>
      <li class="service__item">
        <span class="service__index">02</span>
        <span class="service__name">Website</span>
      </li>
      <li class="service__item">
        <span class="service__index">03</span>
        <span class="service__name">System</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.service {
  padding: 149px 150px 214px 150px;

  @media screen and (max-width: 768px) {
    padding: 126px 56px 193px 56px;
  }
  @media screen and (max-width: 524px) {
    padding-top: 147px;
  }
  @media screen and (max-width: 414px) {
    padding-right: 20px;
    padding-left: 20px;
  }

  &__label,
  &__index {
    font-weight: $font-weight--medium;
    color: $third-color;
  }
  &__label {
    font-size: 15px;
    line-height: 18px;
    margin: 0px auto 64px 0px;
  }
  &__item {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 64px;

    @media screen and (max-width: 524px) {
      margin-bottom: 33px;
    }
  }
  &__index {
    font-size: 17px;
    line-height: 26px;
    opacity: 0.5;
    padding-top: 7px;
  }
  &__name {
    font-size: 80px;
    line-height: 95px;
    font-weight: $font-weight--light;
    padding-left: 35px;

    @media screen and (max-width: 524px) {
      font-size: 50px;
      line-height: 60px;
      padding-left: 26px;
    }
  }
}
</style>
