import { Router, Response, Request } from 'express';
import { errorResponseCommon, successResponseCommon } from '../../common';
import { GuideViewController } from '../../../controllers/guides/guideView.controller';

const router = Router();

const guideViewController = new GuideViewController();

router.get('/', async (request: Request, response: Response) => {
  try {
    const guides = await guideViewController.getAllGuides();
    successResponseCommon(response, guides);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});
router.get('/:id_guide', async (request: Request, response: Response) => {
  try {
    const { id_guide } = request.params;
    const guides = await guideViewController.getOneGuide(id_guide);
    successResponseCommon(response, guides);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

export const guidesViewRoutes = router;
