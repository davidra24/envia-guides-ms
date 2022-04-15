import { Kafka, Message } from 'kafkajs';

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
        value: message.value.toString()
      });
    }
  });
};
