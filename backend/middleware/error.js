const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  console.log("Error, ", err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "interval Server Error.";

  //CastType error:
  if (err.name === "CastError") {
    const message = `Resource not found, invalid: ${err.path}`;
    err = new ErrorHandler(message, 404);
  }

  res.status(err.statusCode).json({ success: false, message: err.message });
};
