const express = require('express')
const axios = require('axios')
const env = require('./env/index.json')

const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/contato', async (req, res) => {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.smtp.user,
        pass: env.smtp.pass
      }
    })

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${req.body.nome}" <${req.body.email}>`, // sender address
      to: 'thiago.nogueira187@gmail.com', // list of receivers
      subject: 'Contato do site ✔', // Subject line
      html: `${req.body.mensagem} </br> Enviado por: ${req.body.email}` // html body
    })

    res.json(info)
  } catch (error) {
    res.status(500)
  }
})

app.get('/repositorios', async (req, res) => {
  try {
    const { data = [] } = await axios.get('https://api.github.com/users/thiagoN13/repos')

    res.json(data)
  } catch (erro) {
    res.status(500)
  }
})

module.exports = {
   path: '/api',
   handler: app
}