const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const bluebird   = require('bluebird');

const config = require('./config');
const routes = require('./routes');
const app  = express();

// DB CONFIG
mongoose.Promise = bluebird;
mongoose.connect(config.mongo.url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, '# Mongo DB: connection error:'));
db.once('open', () => console.log("Mongoose connected!"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/', routes);

app.listen(config.server.port, () => {
  console.log(`Server runs on port ${config.server.port}`);
});

module.exports = app;
