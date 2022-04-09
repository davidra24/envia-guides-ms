import { Model } from 'sequelize/types';
import { PersonEntity } from '../../entities';
import { personModelDB } from '../db';

// TODO DB CRUD

export const createPersonDB = async (person: PersonEntity) =>
  await personModelDB.create({ ...person });
export const getAllPersonsDB = async () => await personModelDB.findAll();
export const getOnePersonDB = async (document_person: string) =>
  await personModelDB.findOne({
    where: {
      document_person
    }
  });
export const updatePersonDB = async (
  person: PersonEntity,
  document_person: string
) => {
  delete person.document_person;
  return await personModelDB.update(
    { ...person },
    {
      where: {
        document_person
      }
    }
  );
};
export const removePersonDB = async (document_person: string) =>
  await personModelDB.destroy({
    where: {
      document_person
    }
  });
export const addFindingExistentDB = async (
  person: PersonEntity,
  document_person: string
) => {
  const people = await getOnePersonDB(document_person);
  if (people === null) {
    console.log('Not found!');
    await createPersonDB({ ...person });
  } else {
    console.log('found!');
  }
};
