import { Router, Response, Request } from 'express';
import { PeopleController } from '../../../controllers';
import { errorResponseCommon, successResponseCommon } from '../../common';
import { LogHandler } from '../../common/seq/logHandler.seq';

const peopleController = new PeopleController();

const router = Router();

/**
 * @swagger
 * /people/create:
 *  post:
 *    summary: Crea una persona
 *    tags: ['People']
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/PersonEntity'
 *    responses:
 *      200:
 *        description:  persona creada
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
    const personCreated = await peopleController.createPerson(data);
    LogHandler(201, request);
    successResponseCommon(response, personCreated);
  } catch (error) {
    LogHandler(500, request, error.message);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /people:
 *  get:
 *    summary: Retorna la información de las personas
 *    tags: ['People']
 *    responses:
 *      200:
 *        description: Personas en DB
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/PersonEntity'
 *      500:
 *        description: Server error
 */
router.get('/', async (request: Request, response: Response) => {
  try {
    const people = await peopleController.getAllPersons();
    LogHandler(200, request);
    successResponseCommon(response, people);
  } catch (error) {
    LogHandler(500, request, error.message);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /people/{document_person}:
 *  get:
 *    summary: Retorna la información de las personas
 *    tags: ['People']
 *    parameters:
 *      - in: path
 *        name: document_person
 *        schema:
 *          type: string
 *        description: documento de la persona
 *        example: '12345'
 *    responses:
 *      200:
 *        description: Personas en DB
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/PersonEntity'
 *      500:
 *        description: Server error
 */
router.get(
  '/:document_person',
  async (request: Request, response: Response) => {
    const {
      params: { document_person }
    } = request;
    try {
      const person = await peopleController.getOnePerson(document_person);
      LogHandler(200, request);
      successResponseCommon(response, person);
    } catch (error) {
      LogHandler(500, request, error.message);
      errorResponseCommon(response, error.message);
    }
  }
);

/**
 * @swagger
 * /people/{document_person}:
 *  put:
 *    summary: Retorna la información de las personas
 *    tags: ['People']
 *    parameters:
 *      - in: path
 *        name: document_person
 *        schema:
 *          type: string
 *        description: documento de la persona
 *        example: '12345'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/PersonEntity'
 *    responses:
 *      200:
 *        description: Actualiza Personas en DB
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/PersonEntity'
 *      500:
 *        description: Server error
 */
router.put(
  '/:document_person',
  async (request: Request, response: Response) => {
    const {
      params: { document_person },
      body: { data }
    } = request;
    try {
      const person = await peopleController.updatePerson(data, document_person);
      LogHandler(200, request);
      successResponseCommon(response, person);
    } catch (error) {
      LogHandler(500, request, error.message);
      errorResponseCommon(response, error.message);
    }
  }
);

/**
 * @swagger
 * /people/{document_person}:
 *  delete:
 *    summary: Retorna la información de las personas
 *    tags: ['People']
 *    parameters:
 *      - in: path
 *        name: document_person
 *        schema:
 *          type: string
 *        description: documento de la persona
 *        example: '12345'
 *    responses:
 *      200:
 *        description: Persona eliminada
 *        content:
 *          boolean:
 *            example: true
 *      500:
 *        description: Server error
 */
router.delete(
  '/:document_person',
  async (request: Request, response: Response) => {
    const {
      params: { document_person }
    } = request;
    try {
      const guides = await peopleController.removePerson(document_person);
      LogHandler(200, request);
      successResponseCommon(response, guides);
    } catch (error) {
      LogHandler(500, request, error.message);
      errorResponseCommon(response, error.message);
    }
  }
);

export const peopleRoutes = router;
