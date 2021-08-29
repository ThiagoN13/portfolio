<template>
  <div id="error-page" class="container">
    <div class="row justify-content-center text-center h-100 align-items-center">
      <div class="col-24 col-md-20 col-lg-14">
        <div class="error-banner">
          <div class="content">
            <h1>{{ handleErrorMsg.statusCode }}</h1>
            <hr>
            <p>{{ handleErrorMsg.message || 'Ocorreu um erro inesperado.' }}</p>

            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-link my-5" @click="$router.replace('/')">
                Voltar ao inicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: [Object, Array, String],
      default: null
    }
  },

  computed: {
    handleErrorMsg () {
      return { message: this.error.message, statusCode: this.error.statusCode }
    }
  }
}
</script>

<style scoped>
#error-page {
  height: calc(100vh - 83px - 216px);
}
</style>
