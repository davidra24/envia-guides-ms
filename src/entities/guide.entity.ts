import { GuidePersonEntity } from './guidePerson.entity';
import { PersonEntity } from './people.entity';

export enum status_guides {
  CREATED = 0,
  IN_REGIONAL = 1,
  CLASIFICATION = 2,
  ON_REPART = 3,
  CANCELED = 4,
  REJECTED_BY_DOCUMENTATION_ERROR = 5,
  REJECTED_BY_CUSTOMER_DOES_NOT_FOUND = 6
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
  guide: GuideEntity;
  sender: PersonEntity;
  addressee: PersonEntity;
  guide_person: GuidePersonEntity;
}
