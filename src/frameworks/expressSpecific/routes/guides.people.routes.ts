import { Router, Response, Request } from 'express';
import { GuidePersonController } from '../../../controllers';
import { errorResponseCommon, successResponseCommon } from '../../common';

const guidePersonController = new GuidePersonController();
/** Test - Generate Mocked guide */
const router = Router();

router.post('/create', async (request: Request, response: Response) => {
  const {
    body: { data }
  } = request;
  try {
    const guidePerson = await guidePersonController.createGuidePerson(data);
    successResponseCommon(response, guidePerson);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

router.get('/', async (request: Request, response: Response) => {
  try {
    const guidesPerson = await guidePersonController.getAllGuidePersons();
    successResponseCommon(response, guidesPerson);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

router.get('/:id_guide', async (request: Request, response: Response) => {
  const {
    params: { id_guide }
  } = request;
  try {
    const guidesPerson = await guidePersonController.getOneGuidePerson(
      id_guide
    );
    successResponseCommon(response, guidesPerson);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

router.delete('/:id_guide', async (request: Request, response: Response) => {
  const {
    params: { id_guide }
  } = request;
  try {
    const guidesPerson = await guidePersonController.removeGuidePerson(
      id_guide
    );
    successResponseCommon(response, guidesPerson);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

router.put('/:id_guide', async (request: Request, response: Response) => {
  const {
    params: { id_guide },
    body: { data }
  } = request;
  try {
    const guidesPerson = await guidePersonController.updateGuidePerson(
      data,
      id_guide
    );
    successResponseCommon(response, guidesPerson);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

export const guidesPeopleRoutes = router;
