import { GuideGenerationEntity, status_guides } from '../entities';

export const MockGuia: GuideGenerationEntity = {
  guide: {
    id_guide: '0a49b63c-c9bd-4403-8f5a-4e87b160df7f',
    status_guide: status_guides.CREATED,
    date_admission: new Date(),
    notes_guide: 'Pago en sucursal',
    content_guide: 'Pantalla de computo',
    units_in_guide: 1,
    weight_in_guide: 5,
    volume_in_guide: 0,
    weight_payment_guide: 0,
    declared_value_guide: 200000,
    service_value_guide: 0,
    freight_guide: 0,
    other_cost_guide: 0
  },
  sender: {
    first_name_person: 'Juan',
    last_name_person: 'Pérez',
    phone_person: '3215748526',
    document_person: 125987463,
    postal_code_person: 255874
  },
  addressee: {
    first_name_person: 'David',
    last_name_person: 'Pardo',
    address_person: 'Calle falsa 123',
    phone_person: '3214447896',
    document_person: 8854713,
    postal_code_person: 998566
  },
  guide_person: {
    origin_city: 'Bogotá',
    destination_city: 'Medellin',
    destination_regional: 'Medellin',
    document_sender: 125987463,
    document_addressee: 8854713
  }
};
