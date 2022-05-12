import { GuideEntity } from '../../entities';
import { guideModelDB } from '../db/models/guide.model.db';

export const guideRepository = {
  createGuideDB: async (guide: GuideEntity) =>
    await guideModelDB.create({ ...guide }),
  getAllGuidesDB: async () => await guideModelDB.findAll(),
  getOneGuideDB: async (id_guide: string) =>
    await guideModelDB.findOne({
      where: {
        id_guide
      }
    }),
  updateGuideDB: async (guide: GuideEntity, id_guide: string) =>
    await guideModelDB.update(
      { ...guide },
      {
        where: {
          id_guide
        }
      }
    ),
  removeGuideDB: async (id_guide: string) =>
    await guideModelDB.destroy({
      where: {
        id_guide
      }
    })
};
