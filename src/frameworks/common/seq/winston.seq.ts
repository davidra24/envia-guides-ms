import winston from 'winston';
import { SeqService } from './seqService.seq';

const options = {
  console: {
    level: 'info',
    handleExceptions: true,
    json: true,
    colorize: true
  }
};

const loggerWinston = winston.createLogger({
  transports: [new winston.transports.Console(options.console), SeqService],
  exitOnError: false // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
// use the 'info' log level so the output will be picked up by both transports (file and console)
loggerWinston.stream = {
  /** @ts-ignore */
  write: (message: string) => {
    loggerWinston.info(message);
  }
};

export const logger = loggerWinston;
