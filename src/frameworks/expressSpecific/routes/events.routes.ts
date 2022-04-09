import { Router, Response, Request } from 'express';
import { EventController } from '../../../controllers';
import { errorResponseCommon, successResponseCommon } from '../../common';

const eventController = new EventController();
/** Test - Generate Mocked guide */
const router = Router();

router.post('/create', async (request: Request, response: Response) => {
  const {
    body: { data }
  } = request;
  try {
    const eventeCreated = await eventController.createEvent(data);
    successResponseCommon(response, eventeCreated);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

router.get('/', async (request: Request, response: Response) => {
  try {
    const people = await eventController.getAllEvents();
    successResponseCommon(response, people);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

router.get('/:id_event', async (request: Request, response: Response) => {
  const {
    params: { id_event }
  } = request;
  try {
    const event = await eventController.getOneEvent(id_event);
    successResponseCommon(response, event);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

router.delete('/:id_event', async (request: Request, response: Response) => {
  const {
    params: { id_event }
  } = request;
  try {
    const guides = await eventController.removeEvent(id_event);
    successResponseCommon(response, guides);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

router.put('/:id_event', async (request: Request, response: Response) => {
  const {
    params: { id_event },
    body: { data }
  } = request;
  try {
    const event = await eventController.updateEvent(data, id_event);
    successResponseCommon(response, event);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

export const eventRoutes = router;
