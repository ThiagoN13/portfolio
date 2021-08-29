<template>
  <div class="carousel">
    <div class="row mb-2">
      <div class="col col-right">
        <button class="btn btn-sm button" @click="previousPage" :disabled="isInitialPage">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="btn btn-sm button" :disabled="isLastPage" @click="nextPage">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 col-lg-3" v-for="(repo, $index) in repoPaginated" :key="$index">
        <slot v-bind:repo="repo"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    }
  },

  data () {
    return {
      page: 0,
      itemsPerPage: 8
    }
  },

  computed: {
    repoPaginated () {
      const initial = this.page * this.itemsPerPage

      return this.data.slice(initial, initial + this.itemsPerPage)
    },

    isLastPage () {
       const nextPage = this.page + 1

      return nextPage > this.data.length / this.itemsPerPage
    },

    isInitialPage () {
      return this.page === 0
    }
  },

  methods: {
    nextPage () {
      if (this.isLastPage) {
        return
      }

      this.page++
    },

    previousPage () {
      if (this.isInitialPage) {
        return
      }

      this.page--
    }
  }
}
</script>

<style scoped>
.carousel {
  margin-bottom: 5px;
}

.col-right {
  text-align: right;
}

.button {
  outline: none;
  background-color: unset;
  border: 1px solid #EB5F22;
  color: #EB5F22;
}

/* .button.next {

} */
</style>
