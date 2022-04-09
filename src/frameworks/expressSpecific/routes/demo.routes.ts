import { Router, Response, Request } from 'express';
import { encode } from 'uint8-to-base64';
import { GuideTransactionController } from '../../../controllers';
import { DATA_TYPE_PDF } from '../../../utilities';
import { MockGuia } from '../../../__mocks__';
import { errorResponseCommon, successResponseCommon } from '../../common';

const guideController = new GuideTransactionController();
/** Test - Generate Mocked guide */
const router = Router();

router.get('/', async (request: Request, response: Response) => {
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

export const demoRoutes = router;
