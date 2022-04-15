import { encode } from 'uint8-to-base64';
import { DATA_TYPE_PDF } from './constants';

export const U2B64 = (file: Uint8Array) => {
  const encoded = encode(file);
  return DATA_TYPE_PDF + encoded;
};
