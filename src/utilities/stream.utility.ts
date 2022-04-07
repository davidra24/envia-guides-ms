import { text } from 'pdf-stream';

export const Uint8arrayToReadableStream = (data: Uint8Array) => {
  let writable: WritableStream;
  const stream = text(data).pipe(writable);
  return stream;
};
