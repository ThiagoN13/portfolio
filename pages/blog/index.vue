<template>
  <c-blog :posts="posts" :categories="categories" />
</template>

<script>
import cBlog from '@/shared/components/blog/c-blog'

export default {
  async asyncData({ $axios }) {
    const posts = await $axios.$get('/api/posts')
    const categories = await $axios.$get('/api/categorias')

    return { posts, categories }
  },

  components: {
    cBlog
  },

  data () {
    return {
      posts: [],
      categories: [],
    }
  }
}
</script>
