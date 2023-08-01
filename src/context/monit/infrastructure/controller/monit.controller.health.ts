import { RequestHandler } from 'express';

export const monitHealthController: RequestHandler = async (req, res) => {
  res.send('OK');
};
