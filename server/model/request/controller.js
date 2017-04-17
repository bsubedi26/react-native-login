const Controller = require('../../lib/Controller');
const requestModel  = require('./model');

class RequestController extends Controller {

  logRequest(req, res, next) {
    this.model.create({
      type: req.method,
      path: req.originalUrl,
      headers: req.headers,
      body: req.body
    })
      .then(doc => res.status(201).json(doc))
      .catch(err => next(err));
  }
}

module.exports = new RequestController(requestModel);
