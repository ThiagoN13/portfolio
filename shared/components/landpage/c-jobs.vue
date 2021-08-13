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
        <div class="col-md-4 mb-4 mb-md-0">
          <a target="_blank" href="https://tag.mx">
            <img src="/img/tag.png" class="job-image tag">
          </a>
        </div>
        <div class="col-md-4 mb-4 mb-md-0">
          <a target="_blank" href="https://www.montreal.com.br/">
            <img src="/img/montreal.png" class="job-image montreal">
          </a>
        </div>
        <div class="col-md-4 mb-4 mb-md-0">
          <a target="_blank" href="https://cubos.io/">
            <img src="/img/cubos.svg" class="job-image cubos">
          </a>
        </div>
      </div>

      <div class="row text-center mt-4">
        <div class="col-md-4 mb-4 mb-md-0 offset-md-4">
          <a target="_blank" href="https://aarin.com.br/">
            <img src="/img/aarin.png" class="job-image aarin">
          </a>
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

#trabalhos .job-image.aarin {
  width: 180px;
  height: 70px;
}
</style>
