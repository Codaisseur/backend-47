const loggingMiddleware = (request, response, next) => {
  const time = new Date();
  request.logged = true;

  console.log(` ${request.method} - ${request.originalUrl} @ ${time}`);
  response.setHeader("Matias-Special-Header", `hellooo ${time}`);
  next();
};

const failRandomly = (req, res, next) => {
  const failed = Math.random() * 10 > 2;
  if (failed) {
    return res.status(401).send("Not lucky enough to enter");
  } else {
    next();
  }
};

module.exports = { loggingMiddleware, failRandomly };
