import { U2B64 } from '../../utilities';

describe('uint2b64pdf.ts', () => {
  it('U2B64', () => {
    const stream = new Uint8Array();
    const b64 = U2B64(stream);
    expect(b64).toEqual('data:application/pdf;base64,');
  });
});
