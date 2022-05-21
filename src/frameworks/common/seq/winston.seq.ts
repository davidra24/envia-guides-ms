import appRoot from 'app-root-path';
import winston from 'winston';
import { SeqService } from './seqService.seq';

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
    SeqService
  ],
  exitOnError: false // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
// use the 'info' log level so the output will be picked up by both transports (file and console)
logger.stream = {
  /** @ts-ignore */
  write: (message: string) => {
    logger.info(message);
  }
};

export default logger;
