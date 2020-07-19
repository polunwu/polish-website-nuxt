<template>
  <div class="page-work__tech-scope">
    <div class="page-work__scope-card">
      <h3>技術範圍</h3>
      <div class="scope-list__wrapper">
        <div
          v-for="(items, name, index) in scopes"
          :key="index"
          class="scope-list__block"
        >
          <h4 class="scope-list__category">{{ name | capitalize }}</h4>
          <ul class="scope-list__list">
            <li v-for="(item, i) in items" :key="i" class="scope-list__item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="page-work__discuss">
      <a
        href="http://m.me/polishdesigntw"
        target="_blank"
        class="page-work__discuss-button"
        >和我們討論你的構想吧</a
      >
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  props: {
    scopes: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.page-work__tech-scope {
  padding: 0px 30px;

  .page-work__scope-card {
    margin: 0px auto;
    max-width: 764px;
    padding: 53px 118px 67px 118px;
    background-color: $dark-grey;
    border-radius: 34px;

    h3 {
      font-size: 36px;
      line-height: 57px;
      font-weight: $font-weight--black;
      margin: 0px;
      margin-bottom: 67px;
    }

    .scope-list {
      &__wrapper {
        display: flex;
        justify-content: space-between;
      }
      &__block {
        flex-grow: 1;
        max-width: 170px;
        padding-right: 20px;
      }
      &__category {
        margin: 0px;
        margin-bottom: 25px;
        font-size: 16px;
        line-height: 19px;
        font-weight: $font-weight--black;
      }
      &__item {
        font-size: 16px;
        line-height: 16px;
        padding-bottom: 16px;
        font-weight: $font-weight--light;
      }
    }
  }

  .page-work__discuss-button {
    display: block;
    background-color: $secondary-color;
    color: $primary-color;
    font-weight: $font-weight--medium;
    font-size: 24px;
    margin: 51px auto;
    padding: 21px;
    text-align: center;
    max-width: 780px;
    border-radius: 12px;
  }

  @media screen and (max-width: 768px) {
    .page-work__scope-card {
      padding: 53px 47px 67px 47px;
    }
    .page-work__discuss-button {
      margin: 68px auto;
    }
  }
  @media screen and (max-width: 615px) {
    .scope-list__wrapper {
      flex-direction: column;
    }
    .scope-list__list {
      margin-bottom: 51px;
    }
    .page-work__scope-card {
      padding-bottom: 28px;
    }
  }
  @media screen and (max-width: 414px) {
    padding: 0px 20px;
    .page-work__scope-card {
      padding: 53px 26px 28px 26px;
    }
    .page-work__discuss-button {
      margin: 94px auto;
      font-size: 20px;
    }
  }
}
</style>
