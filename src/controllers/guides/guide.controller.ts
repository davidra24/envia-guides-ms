import { GuideGenerationEntity } from '../../entities';
import { guideRepository } from '../../frameworks/repositories';
import { createGuideUseCase } from '../../useCases/guide/createGuia.useCase';

export class GuideController {
  source = '';
  fileName = '';
  constructor(source: string, fileName: string) {
    this.source = source;
    this, (fileName = fileName);
  }
  createGuide = async (data: GuideGenerationEntity) => {
    //TODO DATABASE
    const { createGuideDB } = guideRepository;
    const guidePDF = await createGuideUseCase({
      sourceGuide: this.source,
      guideCreation: data
    });
    return guidePDF;
  };
}
