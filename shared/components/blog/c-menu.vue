<template>
  <div class="menu-blog">
    <ul class="menu-list">
      <li
        :class="{'active': active === category.fields.slug }"
        @click="setActive(category.fields.slug)"
        v-for="category in allCategories"
        :key="category.contentID">
        <a :href="category.fields.slug ? `/blog/${category.fields.slug}`: '/blog'">
          {{ category.fields.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default () {
        return []
      }
    }
  },

  computed: {
    allCategories () {
      return [{ fields: { title: 'Todos' } }, ...this.categories]
    }
  },

  data () {
    return {
      active: ''
    }
  },

  created () {
    let category;

    if (!this.$route.params.category) {
      [ category ] = this.allCategories
    } else {
      category = this.categories.find(c => c.fields.slug === this.$route.params.category)
    }

    if (category) {
      this.setActive(category.fields.slug)
    }
  },

  methods: {
    setActive (name) {
      this.active = name
    }
  }
}
</script>

<style scoped>
.menu-blog {
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}

.menu-blog .menu-list {
  list-style: none;
  text-align: center;
  margin: 0;
}

.menu-blog .menu-list li {
  cursor: pointer;
  display: inline-block;
  margin-right: 20px;
  padding: 20px 0 20px 0;
}

.menu-blog .menu-list li a {
  color: #7b7b88;
}

.menu-blog .menu-list li.active {
  border-bottom: 2px solid #EB5F22;
}

.menu-blog .menu-list li.active a {
  color: #EB5F22;
}
</style>
