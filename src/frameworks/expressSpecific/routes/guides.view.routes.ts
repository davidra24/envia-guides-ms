import { Router, Response, Request, query } from 'express';
import { errorResponseCommon, successResponseCommon } from '../../common';
import { GuideViewController } from '../../../controllers/guides/guideView.controller';
import { LogHandler } from '../../common/seq/logHandler.seq';

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
    const { status, limit } = request.query;
    let guides = null;
    if (status) {
      guides = await guideViewController.getAllGuidesByStatus(
        Number(status),
        Number(limit)
      );
      LogHandler(200, request);
    } else {
      guides = await guideViewController.getAllGuides(Number(limit));
      LogHandler(200, request);
    }
    successResponseCommon(response, guides);
  } catch (error) {
    LogHandler(500, request, error.message);
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
      LogHandler(200, request);
    } else {
      guide = await guideViewController.getOneGuide(id_guide);
      LogHandler(200, request);
    }
    successResponseCommon(response, guide);
  } catch (error) {
    LogHandler(500, request, error.message);
    errorResponseCommon(response, error.message);
  }
});

export const guidesViewRoutes = router;
