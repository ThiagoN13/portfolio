<template>
  <c-blog :category="category" :posts="posts" :categories="categories"/>
</template>

<script>
import cBlog from '@/shared/components/blog/c-blog'

export default {
  async asyncData({ $axios, params }) {
    const categories = await $axios.$get('/api/categorias')
    const category = categories.find(c => c.fields.slug === params.category)
    const posts = await $axios.$get(`/api/posts?category=${category.contentID}`)

    return { category, posts, categories }
  },

  components: {
    cBlog
  },

  data () {
    return {
      category: {},
      posts: [],
      categories: []
    }
  }
}
</script>

<style>

</style>
