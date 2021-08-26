<template>
  <div id="contact" class="text-center">
    <div class="container">
      <div class="section-title center">
        <h2>Contato</h2>
        <div class="line"></div>
      </div>

      <p class="address">Quer entrar em contato comigo? sinta-se à vontade para me escrever a qualquer hora.</p>

      <div id="contact-form">
        <div id="message"></div>

        <form name="contactform" id="contactform">
          <input name="nome" type="text" id="nome" class="inputForm2" placeholder="Nome" v-model="contact.nome" />
          <input name="email" type="text" id="email" placeholder="Email" v-model="contact.email"/>
          <textarea name="mensagem" id="mensagem" placeholder="Mensagem" v-model="contact.mensagem"></textarea>
          <input type="button" class="send_message transition" id="button" value="Enviar mensagem" @click="submit"/>
        </form>
      </div>

      <c-alert
        v-if="success"
        type="success"
        title="Sucesso!"
        message="Sua mensagem foi enviada com sucesso, em breve estaremos entrando em contato!"
        @close="clear" />

      <c-alert
        v-if="error"
        type="danger"
        title="Ocorreu um erro!"
        message="Infelizmente ocorreu um erro ao entrar em contato conosco!"
        @close="clear" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CAlert from '../utils/c-alert'

export default {
  components: {
    CAlert
  },

  data () {
    return {
      contact: {},
      success: false,
      error: false
    }
  },

  methods: {
    async submit () {
      try {
        await axios.post('/api/contato', this.contact)
        this.success = true

        this.contact = {}
      } catch (error) {
        this.error = true
      }
    },

    clear () {
      this.success = false
      this.error = false
    }
  }
};
</script>

<style scoped>
/* Contact Section
==============================*/
#contact ::selection {
  color: #7f8289;
  border: 1px solid #26292e;
}
#contact ::-moz-selection {
  color: #7f8289;
  border: 1px solid #26292e;
}
#contact #contact-form {
  max-width: 650px;
  margin: 0 auto;
  float: none;
}
#contact #contact-form input[type="text"],
#contact #contact-form textarea {
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
#contact #contact-form input[type="button"] {
  float: none;
  outline: none;
  margin: 20px auto;
}
#contact .error_message {
  color: red;
}
#contact-form {
  text-align: center !important;
  max-width: 600px;
  float: left;
}
#contact-form input[type="text"],
#contact-form textarea {
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
#contact-form input[type="text"]:focus,
#contact-form textarea:focus,
input[type="email"]:focus {
  color: #fff;
  outline: none;
}
#contact-form textarea {
  height: 170px;
  resize: none;
}
.address {
  display: block;
  color: #7f8289;
}
#contact-form input[type="button"],
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
#contact-form input[type="button"]:hover,
.controls button {
  background: #EB5F22;
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
#contact p,
#contact #success_page p {
  color: #666;
  text-align: center;
}
#contact #message fieldset {
  color: #fff;
}
</style>
