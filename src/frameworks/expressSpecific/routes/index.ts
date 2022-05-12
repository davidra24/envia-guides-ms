import { Router } from 'express';
import { demoRoutes } from './demo.routes';
import { eventRoutes } from './events.routes';
import { guidesPeopleRoutes } from './guides.people.routes';
import { guidesRoutes } from './guides.routes';
import { guidesViewRoutes } from './guides.view.routes';
import { peopleRoutes } from './people.routes';

const router = Router();

router.use('/guides', guidesRoutes);
router.use('/demo', demoRoutes);
router.use('/guides_view', guidesViewRoutes);
router.use('/people', peopleRoutes);
router.use('/events', eventRoutes);
router.use('/guides_people', guidesPeopleRoutes);

export default router;
