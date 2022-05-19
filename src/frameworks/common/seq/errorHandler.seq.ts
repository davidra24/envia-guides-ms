import { Request, Response } from 'express';
import winston from './winston.seq';

export const ErrorHandler = (err: any, req: Request, res: Response) => {
  // set locals, only providing error in development
  req.app.locals.message = err.message;
  req.app.locals.error = req.app.get('env') === 'development' ? err : {};

  // add this line to include winston logging
  winston.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );

  // render the error page
  // res.statusCode(err.status || 500);
  res.json({ error: err.message });
};
