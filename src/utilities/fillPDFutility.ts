import { PDFDocument, PDFForm } from 'pdf-lib';
import fs from 'fs';
import { documentPath } from '.';
import 'jspdf-autotable';
import qrCode from 'qrcode';
import { encode } from 'uint8-to-base64';
import { DATA_TYPE_JPG } from './constants';

export class FillPDFUtility {
  protected source: string;
  protected destination: string;
  protected pdfDoc: PDFDocument;
  protected form: PDFForm;
  protected documentSaved: Uint8Array;

  constructor(source: string) {
    this.source = documentPath(source);
    this.destination = '';
  }
  initializeFill = async () => {
    const fileToUpload = fs.readFileSync(this.source);
    this.pdfDoc = await PDFDocument.load(fileToUpload);
    this.form = this.pdfDoc.getForm();
  };
  setField = async (fieldName: string, fieldText: string | number) => {
    const field = this.form.getTextField(fieldName);
    field.setText(
      typeof fieldText !== 'number' ? fieldText : fieldText.toString()
    );
  };
  setQR = async (qrText: string) => {
    const code = await qrCode.toBuffer(qrText);

    const encoded = encode(code);
    const b64 = DATA_TYPE_JPG + encoded;
    const image = await this.pdfDoc.embedPng(b64);
    const page = this.pdfDoc.getPage(0);
    this.pdfDoc.embedPng(b64);

    page.drawImage(image, {
      x: 140,
      y: 728,
      width: 65,
      height: 65
    });

    page.drawImage(image, {
      x: 140,
      y: 480,
      width: 65,
      height: 65
    });

    page.drawImage(image, {
      x: 140,
      y: 220,
      width: 65,
      height: 65
    });
  };
  saveDocument = async () => {
    this.documentSaved = await this.pdfDoc.save();
    return this.documentSaved;
  };
  getDocumentSaved = () => this.documentSaved;
}
