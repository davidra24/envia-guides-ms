import { guide2PDF } from '../../utilities';
import { MockGuia } from '../../__mocks__';
import { MockPDFGuide } from '../../__mocks__/MockPDFGuide';

describe('guide2PDF Utility', () => {
  it('guide2PDFFunction', () => {
    const guideResult = guide2PDF(MockPDFGuide);
    expect(guideResult.id).toBe(guideResult.id);
  });
});
