import { guideViewRepository } from '../../frameworks';
import { guide2PDF, U2B64 } from '../../utilities';
import { GUIA_NAME } from './guide.transactions.controller';
import { createPDFGuideController } from './guidePDFController';

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
  getAllGuidesByStatus = async (status_guide: number) => {
    try {
      const { getAllGuidesByStatusDB } = guideViewRepository;
      const allguideview = await getAllGuidesByStatusDB(status_guide);
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
  getOneGuidePDF = async (id_guide: string) => {
    try {
      const { getOneGuideViewDB } = guideViewRepository;
      const guideView = await getOneGuideViewDB(id_guide);
      /** @ts-ignore */
      const data = guide2PDF(guideView);
      const generatedPDF: Uint8Array = await createPDFGuideController({
        sourceGuide: GUIA_NAME,
        guideCreation: { ...data }
      });
      return U2B64(generatedPDF);
    } catch (error) {
      console.log(error);
    }
  };
}
