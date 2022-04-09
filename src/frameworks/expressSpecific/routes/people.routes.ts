import { Router, Response, Request } from 'express';
import { PeopleController } from '../../../controllers';
import { errorResponseCommon, successResponseCommon } from '../../common';

const peopleController = new PeopleController();
/** Test - Generate Mocked guide */
const router = Router();

router.post('/create', async (request: Request, response: Response) => {
  const {
    body: { data }
  } = request;
  try {
    const personCreated = await peopleController.createPerson(data);
    successResponseCommon(response, personCreated);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

router.get('/', async (request: Request, response: Response) => {
  try {
    const people = await peopleController.getAllPersons();
    successResponseCommon(response, people);
  } catch (error) {
    console.log(error);
    errorResponseCommon(response, error.message);
  }
});

router.get(
  '/:document_person',
  async (request: Request, response: Response) => {
    const {
      params: { document_person }
    } = request;
    try {
      const person = await peopleController.getOnePerson(document_person);
      successResponseCommon(response, person);
    } catch (error) {
      console.log(error);
      errorResponseCommon(response, error.message);
    }
  }
);

router.delete(
  '/:document_person',
  async (request: Request, response: Response) => {
    const {
      params: { document_person }
    } = request;
    try {
      const guides = await peopleController.removePerson(document_person);
      successResponseCommon(response, guides);
    } catch (error) {
      console.log(error);
      errorResponseCommon(response, error.message);
    }
  }
);

router.put(
  '/:document_person',
  async (request: Request, response: Response) => {
    const {
      params: { document_person },
      body: { data }
    } = request;
    try {
      const person = await peopleController.updatePerson(data, document_person);
      successResponseCommon(response, person);
    } catch (error) {
      console.log(error);
      errorResponseCommon(response, error.message);
    }
  }
);

export const peopleRoutes = router;
