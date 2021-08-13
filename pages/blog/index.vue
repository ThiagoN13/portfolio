<template>
  <div class="page">
    <c-menu class="mb-5"></c-menu>

    <div class="container pb-5">
      <div class="row mb-3 mb-md-5">
        <div class="col-12 col-md-6 mb-5 mb-md-0">
          <c-card id="12" type="main" ></c-card>
        </div>

        <div class="col-12 col-md-6">
          <div class="row">
            <div class="col-12 mb-3">
              <c-card id="12" type="horizontal"></c-card>
            </div>

            <div class="col-12 mb-3">
              <c-card id="12" type="horizontal"></c-card>
            </div>

            <div class="col-12 mb-3">
              <c-card id="12" type="horizontal"></c-card>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-12 col-md-3 mb-3 mb-md-0">
          <c-card id="12" type="vertical"></c-card>
        </div>

        <div class="col-12 col-md-3 mb-3 mb-md-0">
          <c-card id="12" type="vertical"></c-card>
        </div>

        <div class="col-12 col-md-3 mb-3 mb-md-0">
          <c-card id="12" type="vertical"></c-card>
        </div>

        <div class="col-12 col-md-3 mb-3 mb-md-0">
          <c-card id="12" type="vertical"></c-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cMenu from '../../shared/components/blog/c-menu'
import cCard from '../../shared/components/blog/c-card'

export default {
  components: {
    cMenu,
    cCard
  }
}
</script>
