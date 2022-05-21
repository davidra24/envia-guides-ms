import { Message } from 'kafkajs';
import { v4 } from 'uuid';
import { GuideGenerationEntity, status_guides } from '../../entities';
import { kafkaProducer } from '../../frameworks';
import { U2B64 } from '../../utilities';
import { generateEvent } from '../../utilities/event.manager.utility';
import { EventController } from '../events/events.controller';
import { GuidePersonController } from '../guidePerson/guide_person.controller';
import { PeopleController } from '../people/people.controller';
import { GuideController } from './guide.controller';
import { createPDFGuideController } from './guidePDFController';

export const GUIA_NAME = 'guia_editable';

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
      const id_guide = data.id ? data.id : v4();
      let generatedPDF: Uint8Array | string = await createPDFGuideController({
        sourceGuide: GUIA_NAME,
        guideCreation: { ...data, id: id_guide }
      });
      generatedPDF = U2B64(generatedPDF);

      const { guide, sender, addressee, guide_person } = data;

      await this.guideController.createGuide({ ...guide, id_guide });

      const event = generateEvent(
        id_guide,
        status_guides.CREATED,
        status_guides.CREATED
      );

      await this.eventController.createEvent(event);

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
  updateGuide = async ({
    id_guide,
    data,
    pdf
  }: {
    id_guide: string;
    data: GuideGenerationEntity;
    pdf: boolean;
  }) => {
    try {
      let generatedPDF: Uint8Array | string = null;
      if (pdf) {
        generatedPDF = await createPDFGuideController({
          sourceGuide: GUIA_NAME,
          guideCreation: { ...data, id: id_guide }
        });
        generatedPDF = U2B64(generatedPDF);
      }

      const { guide, guide_person } = data;

      const events = await this.eventController.getManyEventsByIdGuide(
        id_guide
      );
      let last_status = 0;

      if (events.length !== 0) {
        events.forEach((evt) => {
          last_status =
            /** @ts-ignore */
            last_status < evt.new_status ? evt.new_status : last_status;
        });
      }

      const event = generateEvent(id_guide, last_status, guide.status_guide);

      const updatedGuide = await this.guideController.updateGuide(
        guide,
        id_guide
      );

      await this.eventController.createEvent({ ...event });

      await this.guidePersonController.updateGuidePerson(
        { ...guide_person },
        id_guide
      );

      const message: Array<Message> = [
        {
          value: JSON.stringify({
            id: id_guide,
            status: guide.status_guide,
            assigned_route: guide_person.assigned_route
          })
        }
      ];

      await kafkaProducer('assigned-route', message);

      if (pdf) return generatedPDF;
      else return updatedGuide;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  getAllGuides = async () => await this.guideController.getAllGuides();
}
