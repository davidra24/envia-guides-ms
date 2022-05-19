import { SeqTransport } from '@datalust/winston-seq';

export const SeqService = new SeqTransport({
  serverUrl: 'http://10.43.102.56:5341',
  apiKey: 'tXITai739rmD7A816blI',
  onError: (e) => {
    console.error(e);
  }
});
