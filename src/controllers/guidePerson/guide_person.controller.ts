import { GuidePersonEntity } from '../../entities';
import { guidePersonRepository } from '../../frameworks';

export class GuidePersonController {
  constructor() {}
  createGuidePerson = (guidePersonEntity: GuidePersonEntity) => {
    try {
      const { createGuidePersonDB } = guidePersonRepository;
      return createGuidePersonDB({ ...guidePersonEntity });
    } catch (error) {
      console.log(error);
    }
  };
  getAllGuidePersons = async () => {
    try {
      const { getAllGuidePersonsDB } = guidePersonRepository;
      return await getAllGuidePersonsDB();
    } catch (error) {
      console.log(error);
    }
  };
  getOneGuidePerson = async (id_guide: string) => {
    try {
      const { getOneGuidePersonDB } = guidePersonRepository;
      return await getOneGuidePersonDB(id_guide);
    } catch (error) {
      console.log(error);
    }
  };
  updateGuidePerson = async (
    guidePerson: GuidePersonEntity,
    id_guide: string
  ) => {
    try {
      const { updateGuidePersonDB } = guidePersonRepository;
      return await updateGuidePersonDB(guidePerson, id_guide);
    } catch (error) {
      console.log(error);
    }
  };
  removeGuidePerson = async (id_guide: string) => {
    try {
      const { removeGuidePersonDB } = guidePersonRepository;
      return await removeGuidePersonDB(id_guide);
    } catch (error) {
      console.log(error);
    }
  };
}
