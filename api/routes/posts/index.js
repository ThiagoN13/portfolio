const axios = require('axios')
const env = require('../../env')

module.exports = function (app) {
  app.get('/posts', async (req, res) => {
    try {
      const { data = [] } = await axios.get(`${env.admin.host}/articles?${serializerQueryString(req.query)}`)

      res.json(data)
    } catch (erro) {
      res.status(500).json({ message: erro.message })
    }
  })

  app.get('/posts/:slug', async (req, res) => {
    try {
      const { data = [] } = await axios.get(`${env.admin.host}/articles/${req.params.slug}`)
      res.json(data)
    } catch (erro) {
      res.status(erro.response.status).json({ message: erro.message })
    }
  })
}


function serializerQueryString (obj) {
  let str = []
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  return str.join('&')
}
