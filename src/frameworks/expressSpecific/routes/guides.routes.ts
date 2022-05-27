import { Router, Response, Request } from 'express';
import { HTTP_201_CREATED } from '../../../utilities';
import { errorResponseCommon, successResponseCommon } from '../../common';
import {
  GuideController,
  GuideTransactionController
} from '../../../controllers';
import { Message } from 'kafkajs';
import { kafkaProducer } from '../../mq';
import { LogHandler } from '../../common/seq/logHandler.seq';

const router = Router();

const guideTransactionController = new GuideTransactionController();
const guideController = new GuideController();

/**
 * @swagger
 * /guides/create:
 *  post:
 *    summary: Crea una guia y retorna el PDF
 *    tags: ['Guides']
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/GuideGenerationEntity'
 *    responses:
 *      200:
 *        description:  Base64 y creacion de guia
 *        content:
 *          text/plain:
 *           $ref: '#/components/schemas/Base64'
 *      500:
 *        description: Server error
 */
router.post('/create', async (request: Request, response: Response) => {
  const {
    body: { data }
  } = request;
  try {
    const guide = await guideTransactionController.createGuide(data);
    LogHandler(201, request);
    successResponseCommon<string>(response, guide, HTTP_201_CREATED);
  } catch (error) {
    LogHandler(500, request, error.message);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /guides:
 *  get:
 *    summary: Retorna la información de una guia de la DB
 *    tags: ['Guides']
 *    responses:
 *      200:
 *        description: Guias en DB
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GuideEntity'
 *      500:
 *        description: Server error
 */
router.get('/', async (request: Request, response: Response) => {
  try {
    const guides = await guideController.getAllGuides();
    LogHandler(200, request);
    successResponseCommon(response, guides);
  } catch (error) {
    LogHandler(500, request, error.message);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /guides/{id_guide}:
 *  get:
 *    summary: Actualiza la información de una guia de la DB
 *    tags: ['Guides']
 *    parameters:
 *      - in: path
 *        name: id_guide
 *        schema:
 *          type: uuid
 *        description: id de la guia
 *        example: '76cbd269-055b-40d5-9fff-b8627cd2447b'
 *    responses:
 *      200:
 *        description: Guias en DB
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/GuideGenerationEntity'
 *                - $ref: '#/components/schemas/Base64'
 *      500:
 *        description: Server error
 */
router.get('/:id_guide', async (request: Request, response: Response) => {
  const {
    params: { id_guide }
  } = request;
  try {
    const guides = await guideController.getOneGuide(id_guide);
    LogHandler(200, request);
    successResponseCommon(response, guides);
  } catch (error) {
    LogHandler(500, request, error.message);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /guides/pdf/{id_guide}:
 *  put:
 *    summary: Retorna la información de las guia de la DB
 *    tags: ['Guides']
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
 *        description: Si retorna PDF o JSON
 *        example: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/GuideGenerationEntity'
 *    responses:
 *      200:
 *        description: Guias en DB
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GuideEntity'
 *      500:
 *        description: Server error
 */
router.put('/pdf/:id_guide', async (request: Request, response: Response) => {
  const {
    params: { id_guide },
    query: { pdf },
    body: { data }
  } = request;
  try {
    const guide = await guideTransactionController.updateGuide({
      id_guide,
      data,
      pdf: pdf === 'true'
    });
    LogHandler(200, request);
    successResponseCommon(response, guide);
  } catch (error) {
    LogHandler(500, request, error.message);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /guides/{id_guide}:
 *  put:
 *    summary: Retorna la información de las guia de la DB
 *    tags: ['Guides']
 *    parameters:
 *      - in: path
 *        name: id_guide
 *        schema:
 *          type: uuid
 *        description: id de la guia
 *        example: '76cbd269-055b-40d5-9fff-b8627cd2447b'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/GuideEntity'
 *    responses:
 *      200:
 *        description: Guias en DB
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/GuideEntity'
 *                - $ref: '#/components/schemas/Base64'
 *      500:
 *        description: Server error
 */
router.put('/:id_guide', async (request: Request, response: Response) => {
  const {
    params: { id_guide },
    body: { data }
  } = request;
  try {
    const guides = await guideController.updateGuide(data, id_guide);
    const message: Array<Message> = [
      {
        value: JSON.stringify({
          id: id_guide,
          status: data.status_guide
        })
      }
    ];
    await kafkaProducer('guide-updated', message);
    LogHandler(200, request);
    successResponseCommon(response, guides);
  } catch (error) {
    LogHandler(500, request, error.message);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /guides/{id_guide}:
 *  delete:
 *    summary: Eliminar una guia
 *    tags: ['Guides']
 *    parameters:
 *      - in: path
 *        name: id_guide
 *        schema:
 *          type: uuid
 *        description: id de la guia
 *        example: '76cbd269-055b-40d5-9fff-b8627cd2447b'
 *    responses:
 *      200:
 *        description: Guias en DB
 *        content:
 *          boolean:
 *            example: true
 *      500:
 *        description: Server error
 */
router.delete(
  '/pdf/:id_guide',
  async (request: Request, response: Response) => {
    const {
      params: { id_guide }
    } = request;
    try {
      const guides = await guideController.removeGuide(id_guide);
      LogHandler(200, request);
      successResponseCommon(response, guides);
    } catch (error) {
      LogHandler(500, request, error.message);
      errorResponseCommon(response, error.message);
    }
  }
);

export const guidesRoutes = router;
