// Declaring dependency
const winston = require('winston');

// Setting the transport method for our logger
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
        // new transports.File({ filename: 'quick-start-error.log', level: 'error' }),
        // new transports.File({ filename: 'quick-start-combined.log' })
    ]
});

// Setting the properties for logger.log
logger.log('info', 'Pass a message and this works', {
    additional: 'properties',
    are: 'passed along'
  });

module.exports = logger;