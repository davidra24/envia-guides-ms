import { GuideEntity } from '../../entities';
import { guideRepository } from '../../frameworks';

export class GuideController {
  constructor() {}
  createGuide = (guideEntity: GuideEntity) => {
    try {
      const { createGuideDB } = guideRepository;
      return createGuideDB({ ...guideEntity });
    } catch (error) {
      console.log(error);
    }
  };
  getAllGuides = async () => {
    try {
      const { getAllGuidesDB } = guideRepository;
      return await getAllGuidesDB();
    } catch (error) {
      console.log(error);
    }
  };
  getOneGuide = async (id_guide: string) => {
    try {
      const { getOneGuideDB } = guideRepository;
      return await getOneGuideDB(id_guide);
    } catch (error) {
      console.log(error);
    }
  };
  updateGuide = async (guide: GuideEntity, id_guide: string) => {
    try {
      const { updateGuideDB } = guideRepository;
      return await updateGuideDB(guide, id_guide);
    } catch (error) {
      console.log(error);
    }
  };
  removeGuide = async (id_guide: string) => {
    try {
      const { removeGuideDB } = guideRepository;
      return await removeGuideDB(id_guide);
    } catch (error) {
      console.log(error);
    }
  };
}
