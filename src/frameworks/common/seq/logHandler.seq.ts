import { Request } from 'express';
import { logger } from './winston.seq';

export const LogHandler = (
  status: number,
  request: Request,
  message?: string
) => {
  switch (status) {
    case 200:
    case 201: {
      return logger.info(
        `${status} - ${request.baseUrl}${request.url} - ${request.method} :: Ok`
      );
    }
    case 500: {
      return logger.error(
        `${status} - ${request.baseUrl}${request.url} - ${request.method} :: ${message}`
      );
    }
    default: {
      return logger.warning(
        `${status} - ${request.baseUrl}${request.url} - ${request.method} :: ${message}`
      );
    }
  }
};
