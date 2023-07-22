const express = require('express');
const bodyParser = require('body-parser');

const {
  requestLogger,
  unknownEndpoint,
  errorLogger
} = require('./utils/middleware');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(requestLogger);
app.use(errorLogger);

app.use(unknownEndpoint);
