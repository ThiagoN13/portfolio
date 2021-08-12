<template>
  <div id="sobre">
    <div class="container">
      <div class="section-title center text-center">
        <h2>
          <strong>Sobre mim</strong>
        </h2>
        <div class="line"></div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <p>
            Olá, sou
            <strong>Thiago Nogueira</strong>.
          </p>
          <p>
            Estudante em Ciência da Computação com excelentes habilidades em programação.
            Trabalho como freelancer localmente na minha cidade natal Salvador - Bahia.
          </p>
          <p>
            Amo meu trabalho e gosto de cada novo projeto conforme o obtenho.
            Sinta-se à vontade para dar uma olhada em meu portfólio e não hesite em entrar em contato comigo se achar que posso ajudá-lo.
          </p>
          <p>
            <strong>Obrigado</strong> por aparecer aqui!
          </p>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <c-progress-bar>
                Javascript
              </c-progress-bar>
              <c-progress-bar>
                PHP
              </c-progress-bar>
              <c-progress-bar>
                UI / UX
              </c-progress-bar>
              <c-progress-bar>
                C#
              </c-progress-bar>
              <c-progress-bar>
                VueJS
              </c-progress-bar>
              <c-progress-bar>
                Angular / AngularJS
              </c-progress-bar>
            </div>
            <div class="col-md-6">
              <c-progress-bar>
                MySQL
              </c-progress-bar>
              <c-progress-bar>
                CockroachDB
              </c-progress-bar>
              <c-progress-bar>
                PL / SQL
              </c-progress-bar>
              <c-progress-bar>
                PostgreSQL
              </c-progress-bar>
              <c-progress-bar>
                Redis
              </c-progress-bar>
              <c-progress-bar>
                MongoDB
              </c-progress-bar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cProgressBar from '../utils/c-progress-bar.vue'

export default {
  components: {
    cProgressBar
  }
}
</script>

<style scoped>
/* About Section
==============================*/
#sobre {
  padding: 50px 0;
}
.sobre {
  padding-top: 1%;
  padding-bottom: 4%;
}

#sobre p {
  margin-top: 0;
  margin-bottom: 1.6em;
}
</style>
