import { GuidePersonEntity } from '../../entities';
import { guidePersonRepository } from '../../frameworks';

export class GuidePersonController {
  constructor() {}
  createGuidePerson = (guidePersonEntity: GuidePersonEntity) => {
    try {
      const { createGuidePersonDB } = guidePersonRepository;
      return createGuidePersonDB({ ...guidePersonEntity });
    } catch (error) {
      throw error;
    }
  };
  getAllGuidePersons = async () => {
    try {
      const { getAllGuidePersonsDB } = guidePersonRepository;
      return await getAllGuidePersonsDB();
    } catch (error) {
      throw error;
    }
  };
  getOneGuidePerson = async (id_guide: string) => {
    try {
      const { getOneGuidePersonDB } = guidePersonRepository;
      return await getOneGuidePersonDB(id_guide);
    } catch (error) {
      throw error;
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
      throw error;
    }
  };
  removeGuidePerson = async (id_guide: string) => {
    try {
      const { removeGuidePersonDB } = guidePersonRepository;
      return await removeGuidePersonDB(id_guide);
    } catch (error) {
      throw error;
    }
  };
}
