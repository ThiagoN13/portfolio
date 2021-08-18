<template>
  <div class="c-card" :class="[post.type]" @click="onClick">
    <div class="row">
      <div class="col-md-6 mb-3" :class="{ 'col-12 col-md-12': isMain || isVertical }">
        <img
          class="c-image"
          src="https://apostrophecms.com/uploads/attachments/ckm3jvpvp07bkuzoc5y9i6v36-apos-docker-square.0.0.1200.1200.full.jpg"
          alt=""
        />
      </div>

      <div class="col-md-6" :class="{ 'col-12 col-md-12': isMain || isVertical }">
        <div class="row">
          <div class="col order-1" :class="{ 'col-6 order-1': isMain || isVertical, 'col-6 col-md-12': isVertical }">
            <span class="c-category">{{ (post.category || {}).name }}</span>
            <span class="c-date">Publicado em: {{ formatDate(post.published_at) }}</span>
          </div>

          <div class="col-12 my-2" :class="{ 'order-3 order-md-3': isMain || isVertical, 'order-3 order-md-2 mb-4': isHorizontal }">
            <a href="" class="c-title">
              {{ post.title }}
            </a>
            <p v-if="isMain" class="mt-2">{{ post.description }}</p>
          </div>

          <div class="col-6" :class="{ 'col-6 order-2 order-md-2 text-right': isMain, 'order-2 order-md-3 text-right text-md-left': isHorizontal || isVertical, 'col-6 col-md-12 text-right text-md-left': isVertical }">
            <span class="c-author">{{ (post.author || {}).name }}</span>
            <span class="c-profession">{{ (post.author || {}).profession }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default () {
        return {
          author: {},
          category: {}
        }
      }
    }
  },

  computed: {
    isMain () {
      return this.post.type === 'main';
    },

    isVertical () {
      return this.post.type === 'vertical';
    },

    isHorizontal () {
      return this.post.type === 'horizontal';
    }
  },

  methods: {
    formatDate (date) {
      if (!date) {
        return '-'
      }

      return new Date(date).toLocaleDateString()
    },

    onClick () {
      this.$router.replace(`/blog/article/${this.post.slug}`)
    }
  }
}
</script>

<style scoped>
.c-card {
  cursor: pointer;
}

.c-card:hover {
  transform: scale(1.02);
  transition: transform .3s ease;
  opacity: .9;
}

.c-card .c-image {
  width: 100%;
  height: 280px;
  border-radius: 10px;
}

.c-card.main .c-image {
  width: 100%;
  height: 360px;
}

.c-card .c-category {
  display: block;
  color: #EB5F22;
  font-size: 12px;
}

.c-card .c-title {
  color: #EB5F22;
  font-size: 22px;
}

.c-card.main .c-title {
  font-size: 32px;
}

.c-card .c-author {
  display: block;
  font-size: 14px;
}

.c-card .c-profession {
  display: block;
  font-size: 14px;
}

.c-card .c-date {
  font-size: 12px;
  display: block;
  color: #7b7b88;
}

/* desktop */
@media (min-width: 992px) {
  .c-card .c-image {
    height: 220px;
  }

  .c-card.main .c-image {
    height: 530px;
  }
}
</style>
