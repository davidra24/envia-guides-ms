import { PersonEntity } from '../../entities';
import {
  createPersonDB,
  getAllPersonsDB,
  getOnePersonDB,
  updatePersonDB,
  removePersonDB,
  addFindingExistentDB
} from '../../frameworks';

export class PeopleController {
  constructor() {}
  createPerson = (personEntity: PersonEntity) => {
    try {
      return createPersonDB({ ...personEntity });
    } catch (error) {
      throw error;
    }
  };
  getAllPersons = async () => {
    try {
      return await getAllPersonsDB();
    } catch (error) {
      throw error;
    }
  };
  getOnePerson = async (document_person: string) => {
    try {
      return await getOnePersonDB(document_person);
    } catch (error) {
      throw error;
    }
  };
  updatePerson = async (person: PersonEntity, document_person: string) => {
    try {
      return await updatePersonDB(person, document_person);
    } catch (error) {
      throw error;
    }
  };
  removePerson = async (document_person: string) => {
    try {
      return await removePersonDB(document_person);
    } catch (error) {
      throw error;
    }
  };
  addFindingExistent = async (
    person: PersonEntity,
    document_person: string
  ) => {
    try {
      return await addFindingExistentDB(person, document_person);
    } catch (error) {
      throw error;
    }
  };
}
