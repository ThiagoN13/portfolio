<template>
  <div id="home" class="text-center">
    <div class="layer">
      <div class="content">
        <h1>
          Eu sou
          <strong>
            <span>Thiago Nogueira</span>
          </strong>
        </h1>

        <p class="lead">Full stack Developer</p>
        <a href="#about" class="fa fa-angle-down scroll-nav"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#home {
  background: url(/img/estrelas.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: #cfcfcf;
}

.content {
  position: relative;
  padding: 50vh 0 0;
}

#home .layer {
  height: 100vh;
  background-attachment: fixed;
  background: rgba(7, 2, 4, 0.77);
}

#home p.lead {
  color: #fff;
}
</style>