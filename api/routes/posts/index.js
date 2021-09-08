const axios = require('axios')
const env = require('../../env')

module.exports = function (app) {
  app.get('/posts', async (req, res) => {
    try {
      let url = `${env.admin.host}/fetch/pt-br/list/posts`
      const headers = {
        'APIKey': env.admin.apiKey
      }

      if (req.query.category) {
        url += `?filter=fields.category_ValueField[eq]${req.query.category}`
      }

      const { data = [] } = await axios.get(url, { headers })

      res.json(data.items)
    } catch (erro) {
      res.status(erro.response.status).json({ message: erro.response.data })
    }
  })

  app.get('/posts/:slug', async (req, res) => {
    try {
      const headers = {
        'APIKey': env.admin.apiKey
      }

      const { data = [] } = await axios.get(`${env.admin.host}/fetch/pt-br/list/posts?filter=fields.slug[eq]"${req.params.slug}"`, { headers })
      const [ item = {} ] = data.items

      res.json(item)
    } catch (erro) {
      res.status(erro.response.status).json({ message: erro.response.data })
    }
  })
}
