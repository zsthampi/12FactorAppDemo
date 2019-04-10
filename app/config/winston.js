// Declaring dependency
const winston = require('winston');

// Setting the transport method for our logger
const logger = winston.createLogger({
    format: winston.format.combine(
        // Color coding logs by category
        winston.format.colorize(),
        // Simple output
		winston.format.simple()
	),
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