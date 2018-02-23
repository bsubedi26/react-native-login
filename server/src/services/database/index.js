const user = require('./user');

module.exports = function (app) {
  app.configure(user);
};
