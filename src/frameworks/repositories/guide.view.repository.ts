import { guideViewModelDB } from '../db';

export const guideViewRepository = {
  getAllGuideViewsDB: async (limit: number) =>
    await guideViewModelDB.findAll({ limit: limit || null }),
  getOneGuideViewDB: async (id_guide: string) =>
    await guideViewModelDB.findOne({
      where: {
        id_guide
      }
    }),
  getAllGuidesByStatusDB: async (status_guide: number, limit: number) =>
    await guideViewModelDB.findAll({
      where: {
        status_guide
      },
      limit: limit || null
    })
};
