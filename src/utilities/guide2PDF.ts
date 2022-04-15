import { GuideGenerationEntity, GuideViewEntity } from '../entities';

export const guide2PDF = (guide: GuideViewEntity): GuideGenerationEntity => {
  const {
    id_guide,
    status_guide,
    date_admission,
    notes_guide,
    content_guide,
    units_in_guide,
    declared_value_guide,
    freight_guide,
    other_cost_guide,
    service_value_guide,
    volume_in_guide,
    weight_in_guide,
    weight_payment_guide,
    origin_regional,
    origin_city,
    destination_city,
    destination_regional,
    address_addressee_in_guide,
    document_sender,
    first_name_sender,
    last_name_sender,
    address_sender,
    phone_sender,
    postal_code_sender,
    document_addressee,
    first_name_addressee,
    last_name_addressee,
    address_addressee,
    phone_addressee,
    postal_code_addressee,
    assigned_route
  } = guide;
  return {
    id: id_guide,
    guide: {
      id_guide,
      status_guide,
      date_admission,
      notes_guide,
      units_in_guide,
      content_guide,
      declared_value_guide,
      freight_guide,
      other_cost_guide,
      service_value_guide,
      volume_in_guide,
      weight_in_guide,
      weight_payment_guide
    },
    sender: {
      document_person: document_sender,
      first_name_person: first_name_sender,
      last_name_person: last_name_sender,
      phone_person: phone_sender,
      postal_code_person: postal_code_sender,
      address_person: address_sender
    },
    addressee: {
      document_person: document_addressee,
      first_name_person: first_name_addressee,
      last_name_person: last_name_addressee,
      phone_person: phone_addressee,
      postal_code_person: postal_code_addressee,
      address_person: address_addressee
    },
    guide_person: {
      id_guide,
      address_addressee: address_addressee_in_guide,
      assigned_route,
      destination_city,
      destination_regional,
      document_addressee,
      document_sender,
      origin_city,
      origin_regional
    }
  };
};
