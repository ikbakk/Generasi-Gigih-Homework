require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectToDB = require('./utils/database');

const {
  requestLogger,
  unknownEndpoint,
  errorLogger,
  errorHandler
} = require('./utils/middleware');

const app = express();
const databaseUrl = process.env.DB_URL ?? '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(requestLogger);

app.use(errorLogger);
app.use(unknownEndpoint);
app.use(errorHandler);

connectToDB(databaseUrl);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
