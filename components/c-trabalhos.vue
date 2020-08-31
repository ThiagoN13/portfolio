<template>
  <div id="trabalhos">
    <div class="container">
      <div class="section-title center text-center">
        <h2>
          <strong>Empresas</strong>
        </h2>
        <div class="line"></div>
      </div>

      <div class="row text-center">
        <div class="col-6">
          <img src="/img/tag.png" class="job-image tag">
        </div>
        <div class="col-6">
          <img src="/img/montreal.png" class="job-image montreal">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#trabalhos {
  margin-bottom: 40px;
}

#trabalhos .job-image {
  width: 160px;
  height: 80px;
}

#trabalhos .job-image.tag {
  width: 160px;
  height: 100px;
}
</style>