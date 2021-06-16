<template>
  <div class="container page-posts">
    <h1>Page Posts</h1>
    <p>Posts:</p>
    <pre>
      <code>
      {{ JSON.stringify(posts, null, 2) }}
      </code>
    </pre>
    <div v-for="post in posts" :key="post.id" class="post">
      <NuxtLink :to="`/posts/${post.attributes.slug}`">
        <h3>Title: {{ post.attributes.title }}</h3>
      </NuxtLink>
      <h4>Author: {{ post.attributes.author }}</h4>
      <p>
        Tags:
        <span v-for="tag in post.attributes.tags" :key="tag">{{ tag }}</span>
      </p>
      <p>Update at: {{ new Date(post.attributes.updated_at) }}</p>
      <p>Published at: {{ new Date(post.attributes.published_at) }}</p>
      <p v-html="post.attributes.content"></p>
    </div>
    <hr />
    <p>Tags:</p>
    <pre>
      <code>
      {{ JSON.stringify(tags, null, 2) }}
      </code>
    </pre>
  </div>
</template>

<script>
import { parseActionTextAttachment } from '../../utils/blog.utils'
export default {
  async asyncData({ $axios, error }) {
    const postsUrl = '/api/v1/posts.json'
    const tagsUrl = '/api/v1/tags.json'
    try {
      const [postsResponse, tagsResponse] = await Promise.all([
        $axios.get(postsUrl),
        $axios.get(tagsUrl),
      ])

      const { data: posts } = postsResponse.data
      const { data: tags } = tagsResponse.data

      return {
        posts,
        tags,
      }
    } catch (e) {
      error(e) // Show the nuxt error page with the thrown error
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.parseContent()
  },
  methods: {
    parseContent() {
      parseActionTextAttachment(this.$el)
    },
  },
}
</script>

<style lang="scss">
.page-posts {
  min-height: 100vh;
  padding: 100px 35px;
}
.post {
  padding: 20px;
  background-color: #212324;
  border-radius: 10px;
}
</style>
