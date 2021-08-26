<template>
<div class="alert" :class="[`alert-${type}`]" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="close">
    <span aria-hidden="true">&times;</span>
  </button>
  <h4 class="alert-heading">{{ title }}</h4>
  <span>{{ message }}</span>
</div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
    title: {
      type: String
    },
    message: {
      type: String,
    }
  },

  methods: {
    close () {
      window.$(this.$el).alert('close')
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
