const axios = require('axios')
const env = require('../../env')

module.exports = function (app) {
  app.get('/categorias', async (req, res) => {
    try {
      const headers = {
        'APIKey': env.admin.apiKey
      }
      const { data = [] } = await axios.get(`${env.admin.host}/fetch/pt-br/list/categories`, { headers })

      res.json(data.items)
    } catch (erro) {
      res.status(erro.response.status).json({ message: erro.response.data })
    }
  })

  app.get('/categorias/:id', async (req, res) => {
    try {
      const headers = {
        'APIKey': env.admin.apiKey
      }
      const { data = [] } = await axios.get(`${env.admin.host}/fetch/pt-br/item/${req.params.id}`, { headers })

      res.json(data)
    } catch (erro) {
      res.status(erro.response.status).json({ message: erro.response.data })
    }
  })
}
