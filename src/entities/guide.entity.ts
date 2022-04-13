import { GuidePersonEntity } from './guidePerson.entity';
import { PersonEntity } from './people.entity';

export enum status_guides {
  CREATED = 0,
  IN_REGIONAL = 1,
  CLASSIFICATION = 2,
  IN_DISTRIBUTION = 3,
  GUIDE_DELIVERED = 4,
  CANCELED = 5,
  USER_NOY_FOUND = 6,
  DOCUMENTATION_ERROR = 7
}

export interface GuideEntity {
  id_guide: string;
  status_guide: status_guides;
  date_admission: Date;
  notes_guide: string;
  content_guide: string;
  units_in_guide: number;
  weight_in_guide: number;
  volume_in_guide: number;
  weight_payment_guide: number;
  declared_value_guide: number;
  service_value_guide: number;
  freight_guide: number;
  other_cost_guide: number;
}

export interface GuideGenerationEntity {
  id?: string;
  guide: GuideEntity;
  sender: PersonEntity;
  addressee: PersonEntity;
  guide_person: GuidePersonEntity;
}

export interface GuideViewEntity {
  id_guide: string;
  status_guide: status_guides;
  date_admission: Date;
  notes_guide: string;
  content_guide: string;
  units_in_guide: number;
  weight_in_guide: number;
  volume_in_guide: number;
  weight_payment_guide: number;
  declared_value_guide: number;
  service_value_guide: number;
  freight_guide: number;
  other_cost_guide: number;
  origin_city: string;
  destination_city: string;
  destination_regional: string;
  address_addressee_in_guide: string;
  document_sender: string;
  first_name_sender: string;
  last_name_sender: string;
  address_sender: string;
  phone_sender: string;
  postal_code_sender: string;
  document_addressee: string;
  first_name_addressee: string;
  last_name_addressee: string;
  address_addressee: string;
  phone_addressee: string;
  postal_code_address: string;
}
