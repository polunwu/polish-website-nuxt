<template>
  <div class="container">
    <HeaderWork
      :num-string="work.numString"
      :title="work.title"
      :category="work.category"
      :client="work.client"
      :keywords="work.keywords"
      :cover-image-url="work.coverImageUrl"
    />
  </div>
</template>

<script>
import HeaderWork from '@/components/HeaderWork.vue'

export default {
  components: {
    HeaderWork,
  },
  data() {
    return {
      work: {
        id: 1,
        numString: '01',
        name: 'shiftstudioco',
        title: '快速成長的新銳品牌值得擁有的獨特印象',
        category: 'Website',
        client: 'Shift Studio 轉轉影像',
        keywords: 'Work Display',
        thumbnailImageUrl: 'https://via.placeholder.com/615x346',
        coverImageUrl: 'https://via.placeholder.com/615x346',
      },
    }
  },
}
</script>

<style lang="scss"></style>
