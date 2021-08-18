const axios = require('axios')

module.exports = function (app) {
  app.get('/repositorios', async (req, res) => {
    try {
      const { data = [] } = await axios.get('https://api.github.com/users/thiagoN13/repos')

      res.json(data)
    } catch (erro) {
      res.status(erro.response.status).json({ message: erro.message })
    }
  })
}
