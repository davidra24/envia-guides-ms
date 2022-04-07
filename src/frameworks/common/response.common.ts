import { Request, Response } from 'express';

export const successResponseCommon = <T>(
  response: Response,
  result: T,
  status?: number
) => {
  response.status(status || 200).send(result);
};

export const errorResponseCommon = <T>(
  response: Response,
  errorMessage: string,
  status?: number,
  details?: string
) => {
  details && console.error('[response error]', details);
  response.status(status || 500).send(errorMessage);
};
