// Declaring dependency
const winston = require('winston');

// Setting the transport method for our logger
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

// Setting the properties for logger.log
logger.log('info', 'Pass a message and this works', {
    additional: 'properties',
    are: 'passed along'
  });

module.exports = logger;