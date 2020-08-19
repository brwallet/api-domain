const express = require('express')
const app = express();

app.disable('etag')
require('./middlewares')(app)
require('./routes')(app)

module.exports = app;
