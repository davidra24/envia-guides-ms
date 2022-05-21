import { SeqTransport } from '@datalust/winston-seq';

export const SeqService = new SeqTransport({
  serverUrl: process.env.SEQ_SERVICE,
  apiKey: process.env.SEQ_API_KEY,
  onError: (e) => {
    console.error(e);
  }
});
