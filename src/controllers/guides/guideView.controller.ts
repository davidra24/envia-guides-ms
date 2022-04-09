import { guideViewRepository } from '../../frameworks';

export class GuideViewController {
  constructor() {}
  getAllGuides = async () => {
    try {
      const { getAllGuideViewsDB } = guideViewRepository;
      const allguideview = await getAllGuideViewsDB();
      return allguideview;
    } catch (error) {
      console.log(error);
    }
  };
  getOneGuide = async (id_guide: string) => {
    try {
      const { getOneGuideViewDB } = guideViewRepository;
      return await getOneGuideViewDB(id_guide);
    } catch (error) {
      console.log(error);
    }
  };
}
