const port = process.argv[2];
const express = require('express')();
const routes = require('./src/routes');
const bodyParser = require('body-parser');

express.use(bodyParser.json())
  .use(routes)
  .listen(port); // give port in parameter
