<template>
  <div>
    <c-navbar></c-navbar>
    <Nuxt />
    <c-footer></c-footer>
  </div>
</template>

<script>
import cNavbar from '../components/c-navbar'
import cFooter from '../components/c-footer'

export default {
  components: {
    cNavbar,
    cFooter
  }
}
</script>

<style>

</style>
