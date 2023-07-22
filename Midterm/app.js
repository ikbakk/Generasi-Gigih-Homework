const express = require('express');
const bodyParser = require('body-parser');

const {
  requestLogger,
  unknownEndpoint,
  errorLogger
} = require('./utils/middleware');

const commentRouter = require('./routes/comments');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(requestLogger);
app.use(errorLogger);

app.use('/api/comments', commentRouter);

app.use(unknownEndpoint);
