const express = require('express');
const app = express();
const {logger, serverLogger} = require('./config/winston.js');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello Insight Studio Team!');
});

const server = app.listen(3000, function () {
  // Classic way of logging
  console.log('12FactorDemoApp listening on port 3000!');
});

// Logging with Winston
logger.info('Rosslyn best office');
logger.warn('This demo is not going well');
logger.info('It is a mild day');
logger.error('Fake error message');

process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received.');
  server.close(() => {
    serverLogger.info('docker closed');
  });
});
