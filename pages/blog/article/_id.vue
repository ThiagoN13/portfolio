<template>
  <div class="page-article">
    <c-menu class="mb-5" :categories="categories"></c-menu>

    <div class="container">
      <p class="text-center c-date">
        {{ formatDate(post.fields.date) }}
      </p>

      <h1 class="text-center my-4">
        {{ post.fields.title }}
      </h1>

      <div class="row">
        <div class="col">
          <p class="c-description text-center mx-0 mx-md-5">
            {{ post.fields.description }}
          </p>
        </div>
      </div>

      <div class="row align-items-end mb-3">
        <div class="col-12 col-md-6 my-2 my-md-0">
          <div class="row text-center text-md-left">
            <div class="col-12 col-md-auto">
              <img class="c-avatar" :src="post.fields.writer.fields.avatar.url" alt="">
            </div>
            <div class="col col-md-8 pl-md-0">
              <span class="c-author">{{ (post.fields.writer.fields || {}).name }}</span>
              <span class="c-profession">{{ (post.fields.writer.fields || {}).profession }}</span>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 text-center text-md-right my-3 my-md-0">
          Compartilhar:
          <a
            :href="`https://twitter.com/share?url=${urlPath}`"
            class="btn btn-link p-0 mx-1"
            target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a
            :href="`https://www.facebook.com/sharer/sharer.php?u=${urlPath}`"
            class="btn btn-link p-0 mx-1"
            target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
          <a
            :href="`https://www.linkedin.com/shareArticle?mini=true&url=${urlPath}`"
            class="btn btn-link p-0 mx-1"
            target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <img class="c-banner" :src="post.fields.image.url" alt="">
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-12">
          <div v-html="post.fields.content" />
        </div>
      </div>

      <div class="card mx-0 mx-md-5">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-auto">
              <img class="c-card-image" :src="post.fields.writer.fields.avatar.url" alt="">
            </div>

            <div class="col">
              <h5 class="c-card-author">{{ post.fields.writer.fields.name }}</h5>
              <span class="c-card-profession">{{ post.fields.writer.fields.profession }}</span>
              <p class="c-date mb-0">
                Publicado em: {{ formatDate(post.fields.date) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="text-center mb-3 mt-5">
        Gostou deste artigo? Sinta-se à vontade para compartilhar e se inscrever
      </p>

      <div class="row mb-5 text-center">
        <div class="col">
          <a
            :href="`https://twitter.com/share?url=${urlPath}`"
            class="btn btn-link"
            target="_blank">
            <i class="fab fa-twitter"></i>
            Twitter
          </a>
          <a
            :href="`https://www.facebook.com/sharer/sharer.php?u=${urlPath}`"
            class="btn btn-link"
            target="_blank">
            <i class="fab fa-facebook"></i>
            Facebook
          </a>
          <a
            :href="`https://www.linkedin.com/shareArticle?mini=true&url=${urlPath}`"
            class="btn btn-link"
            target="_blank">
            <i class="fab fa-linkedin"></i>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cMenu from '@/shared/components/blog/c-menu'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export default {
  async asyncData({ $axios, params, error }) {
    const post = await $axios.$get(`/api/posts/${params.id}`)
    const categories = await $axios.$get('/api/categorias')

    if (Object.keys(post).length === 0) {
      return error({ statusCode: 404, message: 'Publicação não encontrada' })
    }

    return { post, categories }
  },

  head () {
    return {
      title: this.post.fields.title,
      meta: [
        { name: 'description', content: this.post.fields.description, hid: 'description' },
        { name: 'author', content: this.post.fields.writer.name },
        { name: 'copyright', content: 'Copyright © ' + new Date().getFullYear() + ' ' + this.post.fields.writer.name },
        { name: 'robots', content: 'index, follow' }
      ]
    }
  },

  components: {
    cMenu
  },

  mounted () {
    document.querySelectorAll('code')
      .forEach(el => hljs.highlightBlock(el))
  },

  computed: {
    urlPath () {
      if (process.client) {
        return window.location.href
      }

      return `${process.env.DOMAIN_URL}${this.$route.fullPath}`
    }
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

<style>
.page-article code {
  padding: 0 10px 0 10px !important;
}
</style>

<style scoped>
.c-author {
  display: block;
  font-size: 14px;
}

.c-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.c-description {
  color: #7b7b88;
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

.c-card-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #ccc;
}

@media (max-width: 603px) {
  .c-banner {
    height: 280px;
  }
}
</style>
