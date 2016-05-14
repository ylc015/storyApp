var Resource = require('resourcejs');
module.exports = function(app, route) {

  // Setup the controller for REST;
  Resource(app, '', route, app.models.story).rest();

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};
