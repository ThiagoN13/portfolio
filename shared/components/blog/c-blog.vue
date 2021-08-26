<template>
  <div class="page">
    <c-menu class="mb-5" :categories="categories"></c-menu>

    <div class="container pb-5" v-if="posts.length > 0">
      <div class="row mb-3 mb-md-5">
        <div class="col-12 col-lg-6 mb-5 mb-lg-0">
          <c-card type="main" :post="mainPost" v-if="mainPost"></c-card>
        </div>

        <div class="col-12 col-lg-6">
          <div class="row">
            <div class="col-12 mb-3" v-for="post in horizontalPosts" :key="post._id">
              <c-card type="horizontal" :post="post"></c-card>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-12 col-xl-3 col-lg-4 col-md-6 mb-3" v-for="post in verticalPosts" :key="post._id">
          <c-card type="vertical" :post="post"></c-card>
        </div>
      </div>
    </div>

    <div class="container d-flex justify-content-center pb-5" v-else>
      <div class="row">
        <div class="col">
          <h1>Nenhum conteúdo foi encontrado!</h1>
          <p class="text-center">Busque por uma nova categoria para ficar por dentro das novidades.</p>

          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-link my-5" @click="$router.replace('/blog')">
            Voltar ao inicio
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import cMenu from './c-menu'
import cCard from './c-card'

export default {
  name: 'c-blog',
  props: {
    posts: {
      type: Array,
      default () {
        return []
      }
    },
    categories: {
      type: Array
    },
    category: {
      type: Object
    }
  },

  components: {
    cMenu,
    cCard
  },

  computed: {
    mainPost () {
      return this.posts.find(post => post.fields.type === 'main')
    },

    verticalPosts () {
      return this.posts.filter(post => post.fields.type === 'vertical')
    },

    horizontalPosts () {
      return this.posts.filter(post => post.fields.type === 'horizontal' || !post.fields.type)
    }
  }
}
</script>
