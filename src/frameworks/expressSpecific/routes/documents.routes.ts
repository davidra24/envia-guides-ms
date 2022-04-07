import { Router, Response, Request } from 'express';
import { v4 } from 'uuid';
import { GuideController } from '../../../controllers/guides/guide.controller';
import { DATA_TYPE_PDF } from '../../../utilities';
import { HTTP_201_CREATED } from '../../../utilities/constants/httpStatus.constants';
import { MockGuia } from '../../../__mocks__/MockGuia';
import { errorResponseCommon, successResponseCommon } from '../../common';
import { encode } from 'uint8-to-base64';

const GUIA_NAME = 'guia_editable';

const router = Router();

const guideController = new GuideController(GUIA_NAME, v4());

/** Test - Generate Mocked guide */
router.get('/demo', async (request: Request, response: Response) => {
  try {
    const newGuide = await guideController.createGuide(MockGuia);
    const encoded = encode(newGuide);
    const b64 = DATA_TYPE_PDF + encoded;
    successResponseCommon(response, b64);
  } catch (error) {
    console.log(error);

    errorResponseCommon(response, error.message);
  }
});

router.post('/create', async (request: Request, response: Response) => {
  const {
    body: { data }
  } = request;
  try {
    const newGuide = await guideController.createGuide(data);
    const encoded = encode(newGuide);
    const b64 = DATA_TYPE_PDF + encoded;
    successResponseCommon<string>(response, b64, HTTP_201_CREATED);
  } catch (error) {
    console.log(error);

    errorResponseCommon(response, error.message);
  }
});

export const guidesRoutes = router;
