import { Router, Response, Request, query } from 'express';
import { errorResponseCommon, successResponseCommon } from '../../common';
import { GuideViewController } from '../../../controllers/guides/guideView.controller';

const router = Router();

const guideViewController = new GuideViewController();

/**
 * @swagger
 * /guides_view:
 *  get:
 *    summary: Retorna la información de una guia de la DB
 *    tags: ['GuidesView']
 *    parameters:
 *      - in: query
 *        name: status
 *        schema:
 *          type: number
 *        description: Retorna segun el estado
 *        example: 0
 *    responses:
 *      200:
 *        description: Vista de guias
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GuideViewEntity'
 *      500:
 *        description: Server error
 */
router.get('/', async (request: Request, response: Response) => {
  try {
    const { status } = request.query;
    let guides = null;
    if (status) {
      guides = await guideViewController.getAllGuidesByStatus(Number(status));
    } else {
      guides = await guideViewController.getAllGuides();
    }
    successResponseCommon(response, guides);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /guides_view/{id_guide}:
 *  get:
 *    summary: Retorna la información de una guia de la DB
 *    tags: ['GuidesView']
 *    parameters:
 *      - in: path
 *        name: id_guide
 *        schema:
 *          type: uuid
 *        description: id de la guia
 *        example: '76cbd269-055b-40d5-9fff-b8627cd2447b'
 *      - in: query
 *        name: pdf
 *        schema:
 *          type: boolean
 *        description: Retorna PDF o Json
 *        example: true
 *    responses:
 *      200:
 *        description: Vista de guias
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/GuideEntity'
 *                - $ref: '#/components/schemas/Base64'
 *      500:
 *        description: Server error
 */
router.get('/:id_guide', async (request: Request, response: Response) => {
  try {
    const {
      params: { id_guide },
      query: { pdf }
    } = request;
    let guide = null;
    if (pdf === 'true') {
      guide = await guideViewController.getOneGuidePDF(id_guide);
    } else {
      guide = await guideViewController.getOneGuide(id_guide);
    }
    successResponseCommon(response, guide);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

export const guidesViewRoutes = router;
