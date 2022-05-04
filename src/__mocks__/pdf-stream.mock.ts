interface PDFStream {
  text: Function;
}

const pdfStream: PDFStream = jest.createMockFromModule('pdf-stream');

pdfStream.text = jest.fn();

export const text = pdfStream.text;
