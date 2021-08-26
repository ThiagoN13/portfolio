const express = require('express')
const cors = require('cors')

const routes = require('./routes')

const app = express()

// parse application/json
app.use(express.json())
app.use(cors())

// register routes
routes(app)

module.exports = {
  path: '/api',
  handler: app
}
