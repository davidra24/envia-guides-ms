import { Router, Response, Request } from 'express';
import { EventController } from '../../../controllers';
import { errorResponseCommon, successResponseCommon } from '../../common';
import { LogHandler } from '../../common/seq/logHandler.seq';
import { logger } from '../../common/seq/winston.seq';

const eventController = new EventController();

const router = Router();

/**
 * @swagger
 * /events/create:
 *  post:
 *    summary: Crea un evento
 *    tags: ['Events']
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/EventEntity'
 *    responses:
 *      200:
 *        description:  evento creado
 *        content:
 *          boolean:
 *            example: true
 *      500:
 *        description: Server error
 */
router.post('/create', async (request: Request, response: Response) => {
  const {
    body: { data }
  } = request;
  try {
    const eventeCreated = await eventController.createEvent(data);
    successResponseCommon(response, eventeCreated);
    LogHandler(201, request);
  } catch (error) {
    errorResponseCommon(response, error.message);
    LogHandler(500, request, error.message);
  }
});

/**
 * @swagger
 * /events:
 *  get:
 *    summary: Retorna la información de los eventos
 *    tags: ['Events']
 *    responses:
 *      200:
 *        description: Eventos en DB
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EventEntity'
 *      500:
 *        description: Server error
 */
router.get('/', async (request: Request, response: Response) => {
  try {
    const people = await eventController.getAllEvents();
    LogHandler(200, request);
    successResponseCommon(response, people);
  } catch (error) {
    LogHandler(500, request, error.message);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /events/{id_event}:
 *  get:
 *    summary: Retorna la información de los eventos
 *    tags: ['Events']
 *    parameters:
 *      - in: path
 *        name: id_event
 *        schema:
 *          type: uuid
 *        description: id del evento
 *        example: '76cbd269-055b-40d5-9fff-b8627cd2447b'
 *    responses:
 *      200:
 *        description: Eventos en DB
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EventEntity'
 *      500:
 *        description: Server error
 */
router.get('/:id_event', async (request: Request, response: Response) => {
  const {
    params: { id_event }
  } = request;
  try {
    const event = await eventController.getOneEvent(id_event);
    LogHandler(200, request);
    successResponseCommon(response, event);
  } catch (error) {
    LogHandler(500, request, error.message);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /events/{id_event}:
 *  put:
 *    summary: Retorna la información de los eventos
 *    tags: ['Events']
 *    parameters:
 *      - in: path
 *        name: id_event
 *        schema:
 *          type: uuid
 *        description: id del evento
 *        example: '76cbd269-055b-40d5-9fff-b8627cd2447b'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/EventEntity'
 *    responses:
 *      200:
 *        description: Evemto eliminado
 *        content:
 *          boolean:
 *            example: true
 *      500:
 *        description: Server error
 */
router.put('/:id_event', async (request: Request, response: Response) => {
  const {
    params: { id_event },
    body: { data }
  } = request;
  try {
    const event = await eventController.updateEvent(data, id_event);
    LogHandler(200, request);
    successResponseCommon(response, event);
  } catch (error) {
    LogHandler(500, request, error.message);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /events/{id_event}:
 *  delete:
 *    summary: Retorna la información de los eventos
 *    tags: ['Events']
 *    parameters:
 *      - in: path
 *        name: id_event
 *        schema:
 *          type: uuid
 *        description: id del evento
 *        example: '76cbd269-055b-40d5-9fff-b8627cd2447b'
 *    responses:
 *      200:
 *        description: Evento eliminado
 *        content:
 *          boolean:
 *            example: true
 *      500:
 *        description: Server error
 */
router.delete('/:id_event', async (request: Request, response: Response) => {
  const {
    params: { id_event }
  } = request;
  try {
    const guides = await eventController.removeEvent(id_event);
    LogHandler(200, request);
    successResponseCommon(response, guides);
  } catch (error) {
    LogHandler(500, request, error.message);
    errorResponseCommon(response, error.message);
  }
});

export const eventRoutes = router;
