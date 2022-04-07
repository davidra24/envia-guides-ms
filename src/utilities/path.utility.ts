import path from 'path';

export const documentPath = (fileName: string) =>
  path.join(__dirname, '..', '..', 'documents', `${fileName}.pdf`);

export const imagePath = (fileName: string) =>
  path.join(__dirname, '..', 'img', `${fileName}.png`);
