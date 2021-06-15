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
      <h3>Title: {{ post.attributes.title }}</h3>
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
export default {
  async asyncData({ $axios }) {
    const postsUrl = 'https://blog.polish-design.com.tw/api/v1/posts'
    const tagsUrl = 'https://blog.polish-design.com.tw/api/v1/tags'
    const [postsResponse, tagsResponse] = await Promise.all([
      $axios.get(postsUrl),
      $axios.get(tagsUrl),
    ])
    console.log(postsResponse)

    const { data: posts } = postsResponse.data
    const { data: tags } = tagsResponse.data

    return {
      posts,
      tags,
    }
  },
  data() {
    return {}
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
