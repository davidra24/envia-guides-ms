import { EventEntity } from '../../entities';
import { eventRepository } from '../../frameworks';

export class EventController {
  constructor() {}
  createEvent = (eventEntity: EventEntity) => {
    try {
      const { createEventDB } = eventRepository;
      return createEventDB({ ...eventEntity });
    } catch (error) {
      throw error;
    }
  };
  getAllEvents = async () => {
    try {
      const { getAllEventsDB } = eventRepository;
      return await getAllEventsDB();
    } catch (error) {
      throw error;
    }
  };
  getOneEvent = async (id_event: string) => {
    try {
      const { getOneEventDB } = eventRepository;
      return await getOneEventDB(id_event);
    } catch (error) {
      throw error;
    }
  };
  getManyEventsByIdGuide = async (id_guide: string) => {
    try {
      const { getManyEventsByIdGuideDB } = eventRepository;
      return await getManyEventsByIdGuideDB(id_guide);
    } catch (error) {
      throw error;
    }
  };
  updateEvent = async (event: EventEntity, id_event: string) => {
    try {
      const { updateEventDB } = eventRepository;
      return await updateEventDB(event, id_event);
    } catch (error) {
      throw error;
    }
  };
  removeEvent = async (id_event: string) => {
    try {
      const { removeEventDB } = eventRepository;
      return await removeEventDB(id_event);
    } catch (error) {
      throw error;
    }
  };
}
