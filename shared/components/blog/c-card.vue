<template>
  <div class="c-card" :class="[type]" @click="onClick">
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
            <span class="c-category">{{ category }}</span>
            <span class="c-date">Publicado em: {{ date.toLocaleDateString() }}</span>
          </div>

          <div class="col-12 my-2" :class="{ 'order-3 order-md-3': isMain || isVertical, 'order-3 order-md-2 mb-4': isHorizontal }">
            <a href="" class="c-title">
              {{ title }}
            </a>
            <p v-if="isMain" class="mt-2">{{ description }}</p>
          </div>

          <div class="col-6" :class="{ 'col-6 order-2 order-md-2 text-right': isMain, 'order-2 order-md-3 text-right text-md-left': isHorizontal || isVertical, 'col-6 col-md-12 text-right text-md-left': isVertical }">
            <span class="c-author">{{ author }}</span>
            <span class="c-profession">{{ profession }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    title: {
      type: String,
      default: 'Deploying Apostrophe on Docker'
    },
    type: {
      type: String,
    },
    author: {
      type: String,
      default: 'Apostrophe'
    },
    profession: {
      type: String,
      default: 'Developer'
    },
    date: {
      type: Date,
      default: () => new Date()
    },
    description: {
      type: String,
      default: 'In this tutorial, well deploy an Apostrophe 2 website with Portainer, Nginx Proxy Manager, and Watchtower for an easy-to-manage Docker experience.'
    },
    category: {
      type: String,
      default: 'Tech'
    },
  },

  computed: {
    isMain () {
      return this.type === 'main';
    },

    isVertical () {
      return this.type === 'vertical';
    },

    isHorizontal () {
      return this.type === 'horizontal';
    }
  },

  methods: {
    onClick () {
      this.$router.replace(`/blog/article/${this.id}`)
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
