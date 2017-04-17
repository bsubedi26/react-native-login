const controller = require('./controller');
const Router = require('express').Router;
const router = new Router();


router.use(function(req, res, next) {
  console.log('Serving: %s %s %s', req.method, req.url, req.path);
  if (req.method === 'GET' && req.originalUrl === '/request') {
    controller.find(req, res, next);
  } 
  else {
    controller.logRequest(req, res, next);
  }
});

module.exports = router;