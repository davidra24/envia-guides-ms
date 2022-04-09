import { Express } from 'express';
import { demoRoutes } from './demo.routes';
import { eventRoutes } from './events.routes';
import { guidesPeopleRoutes } from './guides.people.routes';
import { guidesRoutes } from './guides.routes';
import { guidesViewRoutes } from './guides.view.routes';
import { peopleRoutes } from './people.routes';

export const routes = (server: Express) => {
  server.use('/guides', guidesRoutes);
  server.use('/demo', demoRoutes);
  server.use('/guides_view', guidesViewRoutes);
  server.use('/people', peopleRoutes);
  server.use('/events', eventRoutes);
  server.use('/guides_people', guidesPeopleRoutes);
};
