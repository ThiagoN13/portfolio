<template>
  <div id="home" class="text-center">
    <div class="layer">
      <div class="content">
        <h1 class="title">
          Eu sou
          <strong>
            <span>Thiago Nogueira</span>
          </strong>
        </h1>

        <p class="lead">Software Engineer</p>
        <a href="#about" @click="onClick" class="fa fa-angle-down scroll-nav"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick () {
      const targetOffset = $('#sobre').offset().top

      $('html, body').animate({
        scrollTop: targetOffset - 100
      }, 500)

      $('.navbar-collapse').collapse('hide')
    },
  }
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

#home .layer .title {
  animation-name: up;
  position: relative;
  animation-duration: 3s;
}

#home .layer .scroll-nav {
  position: relative;
  font-size: 28px;
  animation: up 5s,fa-blink 1.5s linear infinite;
}

#home p.lead {
  color: #fff;
  animation-name: up;
  position: relative;
  animation-duration: 5s;
}

 @keyframes fa-blink {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 0; }
 }

@keyframes up {
  0%   {left:0px; top:200px;}
  100% {left:0; top:0px;}
}
</style>
