const controller = require('./controller');
const Router = require('express').Router;
const router = new Router();
const User = require('./schema');

// ...args is (req, res, next)
router.route('/')
  .get((...args) => controller.find(...args))
  .post((...args) => controller.create(...args));

router.route('/:id')
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args));

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  controller.login(req,res,next);
})

router.post('/register', (req,res,next) => {
  console.log('req.body', req.body)
  // controller.create(req,res,next);
  controller.register(req,res,next);
  
})

module.exports = router;
