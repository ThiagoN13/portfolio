<template>
  <div class="page-article">
    <c-menu class="mb-5" :categories="categories"></c-menu>

    <div class="container">
      <p class="text-center c-date">
        {{ formatDate(post.published_at) }}
      </p>

      <h1 class="text-center my-4">
        {{ post.title }}
      </h1>

      <div class="row">
        <div class="col">
          <p class="c-description text-center mx-0 mx-md-5">
            {{ post.description }}
          </p>
        </div>
      </div>

      <div class="row align-items-center mb-4">
        <div class="col">
          <span class="c-author">{{ (post.author || {}).name }}</span>
          <span class="c-profession">{{ (post.author || {}).profession }}</span>
        </div>

        <div class="col text-right">
          Compartilhar:
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <img class="c-banner" src="https://apostrophecms.com/uploads/attachments/ckm3jvpoj07ffu8oci3dta5a9-apos-docker-header.full.jpg" alt="">
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <p v-html="post.content">

          </p>
        </div>
      </div>

      <p class="text-center mb-3 mt-5">
        Gostou deste artigo? Sinta-se à vontade para compartilhar e se inscrever
      </p>

      <div class="row mb-5 text-center">
        <div class="col">
          <button type="button" class="btn btn-light">Tweeter</button>
          <button type="button" class="btn btn-light">Facebook</button>
          <button type="button" class="btn btn-light">LinkedIn</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cMenu from '../../../shared/components/blog/c-menu'

export default {
  async asyncData({ $axios, params }) {
    const post = await $axios.$get(`/api/posts/${params.id}`)
    const categories = await $axios.$get('/api/categorias')

    return { post, categories }
  },

  head () {
    return {
      title: this.post.title,
      meta: [
        { name: 'description', content: this.post.description, hid: 'description' },
        { name: 'author', content: this.post.author.name },
        { name: 'copyright', content: 'Copyright © ' + new Date().getFullYear() + ' ' + this.post.author.name },
        { name: 'robots', content: 'index, follow' }
      ]
    }
  },

  components: {
    cMenu
  },

  data () {
    return {
      categories: [],
      post: {
        author: {},
        category: {}
      }
    }
  },

  methods: {
    formatDate (date) {
      if (!date) {
        return '-'
      }

      return new Date(date).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.c-author {
  display: block;
  font-size: 14px;
}

.c-profession {
  display: block;
  font-size: 14px;
}

.c-date {
  font-size: 12px;
  color: #7b7b88;
}

.c-banner {
  width: 100%;
  height: 460px;
  border-radius: 20px;
}

@media (max-width: 603px) {
  .c-banner {
    height: 280px;
  }
}
</style>
