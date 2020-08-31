<template>
  <div id="contato" class="text-center">
    <div class="container">
      <div class="section-title center">
        <h2>Contato</h2>
        <div class="line"></div>
      </div>

      <div class="address">Quer entrar em contato comigo? sinta-se à vontade para me escrever a qualquer hora.</div>
      <div id="contato-form">
        <div id="message"></div>

        <form name="contactform" id="contatoform">
          <input name="nome" type="text" id="nome" class="inputForm2" placeholder="Nome" v-model="contato.nome" />
          <input name="email" type="text" id="email" placeholder="Email" v-model="contato.email"/>
          <textarea name="mensagem" id="mensagem" placeholder="Mensagem" v-model="contato.mensagem"></textarea>
          <input type="button" class="send_message transition" id="button" value="Enviar mensagem" @click="submit"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      contato: {}
    }
  },

  methods: {
    async submit () {
      await axios.post('/api/contato', this.contato)

      this.contato = {}
    }
  }
};
</script>

<style scoped>
/* Contact Section
==============================*/
#contato ::selection {
  color: #7f8289;
  border: 1px solid #26292e;
}
#contato ::-moz-selection {
  color: #7f8289;
  border: 1px solid #26292e;
}
#contato #contato-form {
  max-width: 650px;
  margin: 70px auto;
  float: none;
}
#contato #contato-form input[type="text"],
#contato #contato-form textarea {
  color: #7f8289;
  font-size: 12px;
  padding: 15px 0;
  width: 100%;
  padding-left: 10px;
  background: #26292e;
  margin-bottom: 20px;
  border: 0;
  border: 1px solid #26292e;
  position: relative;
}
#contato #contato-form input[type="button"] {
  float: none;
  outline: none;
  margin: 20px auto;
}
#contato .error_message {
  color: red;
}
#contato-form {
  text-align: center !important;
  max-width: 600px;
  float: left;
}
#contato-form input[type="text"],
#contato-form textarea {
  color: #7f8289;
  font-size: 12px;
  padding: 15px 0;
  width: 100%;
  padding-left: 10px;
  background: none;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
  position: relative;
  border: 1px solid #26292e;
}
#contato-form input[type="text"]:focus,
#contato-form textarea:focus,
input[type="email"]:focus {
  color: #fff;
  outline: none;
}
#contato-form textarea {
  height: 170px;
  resize: none;
}
.address {
  display: block;
  color: #7f8289;
}
#contato-form input[type="button"],
.controls button {
  background: none;
  border: none;
  border-radius: 0;
  padding: 14px 20px;
  line-height: 14px;
  cursor: pointer;
  font-size: 13px;
  color: #fff;
  float: right;
  background: #26292e;
}
#contato-form input[type="button"]:hover,
.controls button {
  background: #de5e60;
}
.error_message {
  text-align: center;
  margin-bottom: 30px;
  font-size: 15px;
  color: #fff;
}
#success_page h3 {
  text-align: center;
  font-size: 18px;
}
#success_page p {
  color: #fff;
  margin-top: 20px;
  text-align: center;
}
#message fieldset {
  border: none;
  color: #fff;
}
#contato p,
#contato #success_page p {
  color: #666;
  text-align: center;
}
#contato #message fieldset {
  color: #fff;
}
</style>