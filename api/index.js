const express = require('express')
const routes = require('./routes')

const app = express()

// parse application/json
app.use(express.json())

// register routes
routes(app)

app.use(function(err, req, res, next) {
  console.error(err.stack);
  next(err);
});

module.exports = {
  path: '/api',
  handler: app
}
