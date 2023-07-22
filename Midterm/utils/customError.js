const customError = (msg, statusCode) => {
  let error = new Error(msg);
  error.status = statusCode;
  return error;
};

module.exports = customError;
