import path from 'path';
import { documentPath, imagePath, logsPath } from '../../utilities';

describe('pathUtility', () => {
  it('documentPath', () => {
    const documento = documentPath('documento');
    const expectedPath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'documents',
      'documento.pdf'
    );
    expect(documento).toEqual(expectedPath);
  });
  it('imagePath', () => {
    const documento = imagePath('image');
    const expectedPath = path.join(__dirname, '..', '..', 'img', 'image.png');
    expect(documento).toEqual(expectedPath);
  });
  it('logsPath', () => {
    const documento = logsPath('logs');
    const expectedPath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'logs',
      'logs.log'
    );
    expect(documento).toEqual(expectedPath);
  });
});
