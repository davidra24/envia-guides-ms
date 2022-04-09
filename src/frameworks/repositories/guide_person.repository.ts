import { GuidePersonEntity } from '../../entities';
import { guidePersonModelDB } from '../db';

export const guidePersonRepository = {
  createGuidePersonDB: async (guidePerson: GuidePersonEntity) =>
    await guidePersonModelDB.create({ ...guidePerson }),
  getAllGuidePersonsDB: async () => await guidePersonModelDB.findAll(),
  getOneGuidePersonDB: async (id_guide: string) =>
    await guidePersonModelDB.findOne({
      where: {
        id_guide
      }
    }),
  updateGuidePersonDB: async (
    guidePerson: GuidePersonEntity,
    id_guide: string
  ) =>
    await guidePersonModelDB.update(
      { ...guidePerson },
      {
        where: {
          id_guide
        }
      }
    ),
  removeGuidePersonDB: async (id_guide: string) =>
    await guidePersonModelDB.destroy({
      where: {
        id_guide
      }
    })
};
