import { Message } from 'kafkajs';
import { GuideEntity } from '../../entities';
import { guideRepository } from '../../frameworks';
import { kafkaProducer } from '../../frameworks/mq';

export class GuideController {
  constructor() {}
  createGuide = async (guideEntity: GuideEntity) => {
    try {
      const { createGuideDB } = guideRepository;
      return await createGuideDB({ ...guideEntity });
    } catch (error) {
      throw error;
    }
  };
  getAllGuides = async () => {
    try {
      const { getAllGuidesDB } = guideRepository;
      return await getAllGuidesDB();
    } catch (error) {
      throw error;
    }
  };
  getOneGuide = async (id_guide: string) => {
    try {
      const { getOneGuideDB } = guideRepository;
      return await getOneGuideDB(id_guide);
    } catch (error) {
      throw error;
    }
  };
  updateGuide = async (guide: GuideEntity, id_guide: string) => {
    try {
      const { updateGuideDB } = guideRepository;
      const guideUpdated = await updateGuideDB(guide, id_guide);
      return guideUpdated;
    } catch (error) {
      throw error;
    }
  };
  removeGuide = async (id_guide: string) => {
    try {
      const { removeGuideDB } = guideRepository;
      return await removeGuideDB(id_guide);
    } catch (error) {
      throw error;
    }
  };
}
