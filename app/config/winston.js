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
    ]
});

// Setting the properties for logger.log
logger.log('info', 'Pass a message and this works', {
    additional: 'properties',
    are: 'passed along'
  });

const serverLogger = winston.createLogger({
    format: winston.format.combine(
		winston.format.simple()
	),
    transports: [
        new winston.transports.File({ filename: 'server-closed.log', level: 'info' })
    ]
});

module.exports = {logger, serverLogger};