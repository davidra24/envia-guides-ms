import { v4 } from 'uuid';
import { GuideGenerationEntity } from '../../entities';
import { EventController } from '../events/events.controller';
import { GuidePersonController } from '../guidePerson/guide_person.controller';
import { PeopleController } from '../people/people.controller';
import { GuideController } from './guide.controller';
import { createPDFGuideController } from './guidePDFController';

const GUIA_NAME = 'guia_editable';

export class GuideTransactionController {
  guideController: GuideController;
  eventController: EventController;
  peopleController: PeopleController;
  guidePersonController: GuidePersonController;
  constructor() {
    this.guideController = new GuideController();
    this.eventController = new EventController();
    this.peopleController = new PeopleController();
    this.guidePersonController = new GuidePersonController();
  }
  createGuide = async (data: GuideGenerationEntity) => {
    try {
      const id_guide = v4();

      const generatedPDF = await createPDFGuideController({
        sourceGuide: GUIA_NAME,
        guideCreation: { ...data, id: id_guide }
      });

      const { guide, sender, addressee, guide_person } = data;
      await this.guideController.createGuide({ ...guide, id_guide });
      await this.peopleController.addFindingExistent(
        sender,
        sender.document_person
      );
      await this.peopleController.addFindingExistent(
        addressee,
        addressee.document_person
      );
      await this.guidePersonController.createGuidePerson({
        ...guide_person,
        id_guide
      });

      return generatedPDF;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  getAllGuides = async () => await this.guideController.getAllGuides();
}
