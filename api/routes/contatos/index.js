const nodemailer = require('nodemailer')
const env = require('../../env')

module.exports = function (app) {
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
      res.status(500).json({ message: erro.message })
    }
  })
}
