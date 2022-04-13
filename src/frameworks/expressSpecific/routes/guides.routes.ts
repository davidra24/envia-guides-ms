import { Router, Response, Request } from 'express';
import { encode } from 'uint8-to-base64';
import { DATA_TYPE_PDF, HTTP_201_CREATED } from '../../../utilities';
import { errorResponseCommon, successResponseCommon } from '../../common';
import {
  GuideController,
  GuideTransactionController
} from '../../../controllers';

const router = Router();

const guideTransactionController = new GuideTransactionController();
const guideController = new GuideController();

router.post('/create', async (request: Request, response: Response) => {
  const {
    body: { data }
  } = request;
  try {
    const guide = await guideTransactionController.createGuide(data);
    const encoded = encode(guide);
    const b64 = DATA_TYPE_PDF + encoded;
    successResponseCommon<string>(response, b64, HTTP_201_CREATED);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

router.get('/', async (request: Request, response: Response) => {
  try {
    const guides = await guideController.getAllGuides();
    successResponseCommon(response, guides);
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
    const guides = await guideController.getOneGuide(id_guide);
    successResponseCommon(response, guides);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

router.put(
  '/pdf-update/:id_guide',
  async (request: Request, response: Response) => {
    const {
      params: { id_guide },
      body: { data }
    } = request;
    try {
      const guides = await guideTransactionController.updateGuide({
        id_guide,
        data
      });
      successResponseCommon(response, guides);
    } catch (error) {
      console.log(error);
      errorResponseCommon(response, error.message);
    }
  }
);

router.put('/:id_guide', async (request: Request, response: Response) => {
  const {
    params: { id_guide },
    body: { data }
  } = request;
  try {
    const guides = await guideController.updateGuide(data, id_guide);
    successResponseCommon(response, guides);
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
    const guides = await guideController.removeGuide(id_guide);
    successResponseCommon(response, guides);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

export const guidesRoutes = router;
