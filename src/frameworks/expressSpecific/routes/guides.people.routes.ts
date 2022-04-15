import { Router, Response, Request } from 'express';
import { GuidePersonController } from '../../../controllers';
import { errorResponseCommon, successResponseCommon } from '../../common';

const guidePersonController = new GuidePersonController();

const router = Router();

/**
 * @swagger
 * /guides_people/create:
 *  post:
 *    summary: Crea una guia y retorna el PDF
 *    tags: ['GuidesPeople']
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/GuidePersonEntity'
 *    responses:
 *      200:
 *        description: Evento eliminado
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
    const guidePerson = await guidePersonController.createGuidePerson(data);
    successResponseCommon(response, guidePerson);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /guides_people:
 *  get:
 *    summary: Retorna la información de la relacion guias/personas
 *    tags: ['GuidesPeople']
 *    responses:
 *      200:
 *        description: Guias personas
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GuidePersonEntity'
 *      500:
 *        description: Server error
 */
router.get('/', async (request: Request, response: Response) => {
  try {
    const guidesPerson = await guidePersonController.getAllGuidePersons();
    successResponseCommon(response, guidesPerson);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

/**
 * @swagger
 * /guides_people/{id_guide}:
 *  get:
 *    summary: Retorna la información de la relacion guias/personas
 *    tags: ['GuidesPeople']
 *    parameters:
 *      - in: path
 *        name: id_guide
 *        schema:
 *          type: uuid
 *        description: id de la guia
 *        example: '76cbd269-055b-40d5-9fff-b8627cd2447b'
 *    responses:
 *      200:
 *        description: Guias personas
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GuidePersonEntity'
 *      500:
 *        description: Server error
 */
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

/**
 * @swagger
 * /guides_people/{id_guide}:
 *  delete:
 *    summary: Retorna la información de la relacion guias/personas
 *    tags: ['GuidesPeople']
 *    parameters:
 *      - in: path
 *        name: id_guide
 *        schema:
 *          type: uuid
 *        description: id de la guia
 *        example: '76cbd269-055b-40d5-9fff-b8627cd2447b'
 *    responses:
 *      200:
 *        description: Guia persona eliminada
 *        content:
 *          boolean:
 *            example: true
 *      500:
 *        description: Server error
 */
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

/**
 * @swagger
 * /guides_people/{id_guide}:
 *  put:
 *    summary: Retorna la información de la relacion guias/personas
 *    tags: ['GuidesPeople']
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
 *            $ref: '#/components/schemas/GuidePersonEntity'
 *    responses:
 *      200:
 *        description: Guia persona eliminada
 *        content:
 *          boolean:
 *            example: true
 *      500:
 *        description: Server error
 */
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
