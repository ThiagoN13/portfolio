<template>
  <div>
    <c-navbar></c-navbar>
    <Nuxt />
    <c-footer></c-footer>
  </div>
</template>

<script>
import cNavbar from '../shared/components/utils/c-navbar'
import cFooter from '../shared/components/utils/c-footer'

export default {
  components: {
    cNavbar,
    cFooter
  }
}
</script>

<style>
  @import url('../static/css/style.css');
</style>
