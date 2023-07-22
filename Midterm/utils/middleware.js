const requestLogger = (req, res, next) => {
  console.log('Method:', req.method);
  console.log('Path:  ', req.path);
  console.log('Body:  ', req.body);
  console.log('---');
  next();
};

const errorHandler = (err, req, res, next) => {
  const { status = 500, message } = err;

  console.log('message: ', err.message);
  console.log('stack: ', err.stack);
  res.status(status).send(message || 'Something went wrong!');

  next(err);
};

const unknownEndpoint = (req, res) => {
  res.status(404).send('Unknown endpoint');
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
};
