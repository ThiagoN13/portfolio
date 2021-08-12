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
        <div class="col-4">
          <img src="/img/tag.png" class="job-image tag">
        </div>
        <div class="col-4">
          <img src="/img/montreal.png" class="job-image montreal">
        </div>
        <div class="col-4">
          <img src="/img/cubos.svg" class="job-image cubos">
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

#trabalhos .job-image.tag {
  width: 130px;
  height: 100px;
}

#trabalhos .job-image.montreal {
  width: 130px;
  height: 70px;
}

#trabalhos .job-image.cubos {
  width: 110px;
  height: 70px;
}
</style>
