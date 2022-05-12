import { EventEntity } from '../../entities';
import { eventModelDB } from '../db';

export const eventRepository = {
  createEventDB: async (eventEntity: EventEntity) =>
    await eventModelDB.create({ ...eventEntity }),
  getAllEventsDB: async () => await eventModelDB.findAll(),
  getOneEventDB: async (id_event: string) =>
    await eventModelDB.findOne({
      where: {
        id_event
      }
    }),
  getManyEventsByIdGuideDB: async (id_guide: string) =>
    await eventModelDB.findAll({
      where: {
        id_guide
      }
    }),
  updateEventDB: async (eventEntity: EventEntity, id_event: string) =>
    await eventModelDB.update(
      { ...eventEntity },
      {
        where: {
          id_event
        }
      }
    ),
  removeEventDB: async (id_event: string) =>
    await eventModelDB.destroy({
      where: {
        id_event
      }
    })
};
