const express = require('express');
const app = express();
const logger = require('./config/winston.js');
// import logger from './config/winston.js';

app.get('/', function (req, res) {
  res.send('Hello 12 Factor App Demo!');
});

app.listen(3000, function () {
  // Classic way of logging
  console.log('12FactorDemoApp listening on port 3000!');
});

// Logging with Winston
logger.info('Rosslyn best office');
logger.warn('This demo is not going well');
logger.info('It is a mild day');
logger.error('Fake error message');