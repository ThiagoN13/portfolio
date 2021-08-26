const express = require('express')
const routes = require('./routes')

const app = express()

// parse application/json
app.use(express.json())

// register routes
routes(app)

module.exports = {
  path: '/api',
  handler: app
}
