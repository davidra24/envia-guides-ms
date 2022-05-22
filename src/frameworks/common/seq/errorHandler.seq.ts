import { Request, Response } from 'express';
import { logger } from './winston.seq';

export const ErrorHandler = (err: any, req: Request, res: Response) => {
  // add this line to include winston logging
  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );

  // render the error page
  // res.statusCode(err.status || 500);
  res.json({ error: err.message });
};
