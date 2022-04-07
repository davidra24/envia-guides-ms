import { Express } from 'express';
import { guidesRoutes } from './documents.routes';

export const routes = (server: Express) => {
  server.use('/guides', guidesRoutes);
};
