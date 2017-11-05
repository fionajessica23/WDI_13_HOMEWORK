var logger = function(req, resp, next) {
  console.log('%s %s request %s', new Date(), req.method, req.path); // %s placeholders
  next(); // continue to the next middleware in the pipeline
};

module.exports = logger;
