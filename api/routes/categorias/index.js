const axios = require('axios')
const env = require('../../env')

module.exports = function (app) {
  app.get('/categorias', async (req, res) => {
    try {
      const { data = [] } = await axios.get(`${env.admin.host}/categories`)

      res.json(data)
    } catch (erro) {
      res.status(500).json({ message: erro.message })
    }
  })

  app.get('/categorias/:slug', async (req, res) => {
    try {
      const { data = [] } = await axios.get(`${env.admin.host}/categories/${req.params.slug}`)

      res.json(data)
    } catch (erro) {
      res.status(erro.response.status).json({ message: erro.message })
    }
  })
}
