const Router = require('express').Router;
const router = new Router();

const request  = require('./model/request/router');
const user  = require('./model/user/router');

// Routes for the the api endpoints required here
router.use('/api/user' , user)

// Use request to catch all other requests & log them or return them to the client
router.use('*', request);

module.exports = router;
