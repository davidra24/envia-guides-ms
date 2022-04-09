import { guideViewModelDB } from '../db';

export const guideViewRepository = {
  getAllGuideViewsDB: async () => await guideViewModelDB.findAll(),
  getOneGuideViewDB: async (id_guide: string) =>
    await guideViewModelDB.findOne({
      where: {
        id_guide
      }
    })
};
