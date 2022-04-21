import { Kafka, Message } from 'kafkajs';
import { EventController, GuideController } from '../../../controllers';
import { generateEvent } from '../../../utilities/event.manager.utility';
import { guideRepository } from '../../repositories';

export const kafka = new Kafka({
  clientId: 'envia-microservices',
  brokers: ['10.43.102.56:9093']
});

export const kafkaProducer = async (topic: string, messages: Message[]) => {
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({ topic, messages });
  await producer.disconnect();
};

export const kafkaConsumer = async (groupId: string, topic: string) => {
  const consumer = kafka.consumer({ groupId });

  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  return await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        value: message.value.toString()
      });
    }
  });
};

export const kafkaGuide = async (groupId: string, topic: string) => {
  const consumer = kafka.consumer({ groupId });

  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  const eventController = new EventController();
  const guideController = new GuideController();

  return await consumer.run({
    eachMessage: async ({ message }) => {
      const guideList: Array<string> = JSON.parse(message.value.toString());
      guideList.forEach(async (id_guide) => {
        const events = await eventController.getManyEventsByIdGuide(id_guide);
        let last_status = 0;
        if (events.length !== 0) {
          events.forEach((evt) => {
            last_status =
              /** @ts-ignore */
              last_status < evt.new_status ? evt.new_status : last_status;
          });
        }
        const event = generateEvent(id_guide, last_status, 3);
        const guide = await guideController.getOneGuide(id_guide);
        /** @ts-ignore */
        await guideController.updateGuide(guide, id_guide);
        await eventController.createEvent({ ...event });
      });
    }
  });
};
