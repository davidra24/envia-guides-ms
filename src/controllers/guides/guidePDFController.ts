import { GuideGenerationEntity } from '../../entities';
import {
  dateToRedableString,
  FillPDFUtility,
  NUMBER_FILLS_GUIDE
} from '../../utilities';
import { formatMoney, totalGuide } from '../../utilities';

export interface CreateGuideProps {
  sourceGuide: string;
  guideCreation: GuideGenerationEntity;
}

export const createPDFGuideController = async ({
  sourceGuide,
  guideCreation
}: CreateGuideProps) => {
  const fillPDF = new FillPDFUtility(sourceGuide);
  try {
    const {
      id,
      guide: {
        date_admission,
        notes_guide,
        content_guide,
        units_in_guide,
        weight_in_guide,
        volume_in_guide,
        weight_payment_guide,
        declared_value_guide,
        service_value_guide,
        freight_guide,
        other_cost_guide
      },
      guide_person: {
        origin_city,
        destination_city,
        destination_regional,
        address_addressee
      },
      sender: {
        first_name_person: first_name_sender,
        last_name_person: last_name_sender,
        phone_person: phone_sender,
        document_person: document_sender,
        postal_code_person: postal_code_sender
      },
      addressee: {
        first_name_person: first_name_addressee,
        last_name_person: last_name_addressee,
        phone_person: phone_addressee,
        document_person: document_addressee,
        postal_code_person: postal_code_addressee
      }
    } = guideCreation;

    await fillPDF.initializeFill();
    for (let i = 0; i < NUMBER_FILLS_GUIDE; i++) {
      // guide - person
      await fillPDF.setField(
        `fechaAdmision[${i}]`,
        dateToRedableString(date_admission)
      );
      await fillPDF.setField(`ciudadOrigen[${i}]`, origin_city);
      await fillPDF.setField(`ciudadDestino[${i}]`, destination_city);
      await fillPDF.setField(`regionalDestino[${i}]`, destination_regional);

      // guide sender
      await fillPDF.setField(
        `nombreRemitente[${i}]`,
        `${first_name_sender} ${last_name_sender}`
      );
      await fillPDF.setField(`telefonoRemitente[${i}]`, phone_sender);
      await fillPDF.setField(`documentoRemitente[${i}]`, document_sender);
      await fillPDF.setField(`codigoPostalRemitente[${i}]`, postal_code_sender);

      //guide addressee
      await fillPDF.setField(
        `nombreDestinatario[${i}]`,
        `${first_name_addressee} ${last_name_addressee}`
      );
      await fillPDF.setField(`direccionDestinatario[${i}]`, address_addressee);
      await fillPDF.setField(`telefonoDestinatario[${i}]`, phone_addressee);
      await fillPDF.setField(`documentoDestinatario[${i}]`, document_addressee);
      await fillPDF.setField(
        `codigoPostalDestinatario[${i}]`,
        postal_code_addressee
      );

      //Guide
      await fillPDF.setField(`notaGuia[${i}]`, notes_guide);
      await fillPDF.setField(`contenidoGuia[${i}]`, content_guide);

      await fillPDF.setField(`unidadesEnGuia[${i}]`, units_in_guide);
      await fillPDF.setField(`pesoEnGuia[${i}]`, weight_in_guide);
      await fillPDF.setField(`volumenEnGuia[${i}]`, volume_in_guide);
      await fillPDF.setField(`pesoCobroEnGuia[${i}]`, weight_payment_guide);
      await fillPDF.setField(
        `valorDeclaradoEnGuia[${i}]`,
        formatMoney(declared_value_guide)
      );
      await fillPDF.setField(
        `valorServicioEnGuia[${i}]`,
        formatMoney(service_value_guide)
      );
      await fillPDF.setField(`fleteVariableEnGuia[${i}]`, freight_guide);
      await fillPDF.setField(
        `otrosCostosEnGuia[${i}]`,
        formatMoney(other_cost_guide)
      );
      const total = totalGuide(
        weight_in_guide,
        volume_in_guide,
        weight_payment_guide,
        declared_value_guide,
        service_value_guide,
        freight_guide,
        other_cost_guide
      );
      await fillPDF.setField(`totalFleteEnGuia[${i}]`, total);

      await fillPDF.setQR(id);
    }
    return await fillPDF.saveDocument();
  } catch (error) {
    throw error;
  }
};
