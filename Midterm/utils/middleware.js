const requestLogger = (req, res, next) => {
  console.log('Method:', req.method);
  console.log('Path:  ', req.path);
  console.log('Body:  ', req.body);
  console.log('---');
  next();
};

const errorLogger = (err, req, res, next) => {
  console.log('message: ', err.message);
  console.log('stack: ', err.stack);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send(message || 'Something went wrong!');
};

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'Unknown endpoint' });
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorLogger,
  errorHandler
};
