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
/**
 * @swagger
 * components:
 *   schemas:
 *     GuideEntity:
 *       additionalProperties: false
 *       properties:
 *         content_guide:
 *           type: string
 *         date_admission:
 *           format: date-time
 *           type: string
 *         declared_value_guide:
 *           type: number
 *         freight_guide:
 *           type: number
 *         id_guide:
 *           type: string
 *         notes_guide:
 *           type: string
 *         other_cost_guide:
 *           type: number
 *         service_value_guide:
 *           type: number
 *         status_guide:
 *           $ref: '#/components/schemas/status_guides'
 *         units_in_guide:
 *           type: number
 *         volume_in_guide:
 *           type: number
 *         weight_in_guide:
 *           type: number
 *         weight_payment_guide:
 *           type: number
 *       required:
 *         - id_guide
 *         - status_guide
 *         - date_admission
 *         - notes_guide
 *         - content_guide
 *         - units_in_guide
 *         - weight_in_guide
 *         - volume_in_guide
 *         - weight_payment_guide
 *         - declared_value_guide
 *         - service_value_guide
 *         - freight_guide
 *         - other_cost_guide
 *       type: object
 *     status_guides:
 *       enum:
 *         - 0
 *         - 1
 *         - 2
 *         - 3
 *         - 4
 *         - 5
 *         - 6
 *         - 7
 *       type: number
 */
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

/**
 * @swagger
 * components:
 *   schemas:
 *     GuideEntity:
 *       additionalProperties: false
 *       properties:
 *         content_guide:
 *           type: string
 *         date_admission:
 *           format: date-time
 *           type: string
 *         declared_value_guide:
 *           type: number
 *         freight_guide:
 *           type: number
 *         id_guide:
 *           type: string
 *         notes_guide:
 *           type: string
 *         other_cost_guide:
 *           type: number
 *         service_value_guide:
 *           type: number
 *         status_guide:
 *           $ref: '#/components/schemas/status_guides'
 *         units_in_guide:
 *           type: number
 *         volume_in_guide:
 *           type: number
 *         weight_in_guide:
 *           type: number
 *         weight_payment_guide:
 *           type: number
 *       required:
 *         - id_guide
 *         - status_guide
 *         - date_admission
 *         - notes_guide
 *         - content_guide
 *         - units_in_guide
 *         - weight_in_guide
 *         - volume_in_guide
 *         - weight_payment_guide
 *         - declared_value_guide
 *         - service_value_guide
 *         - freight_guide
 *         - other_cost_guide
 *       type: object
 *     GuideGenerationEntity:
 *       additionalProperties: false
 *       properties:
 *         addressee:
 *           $ref: '#/components/schemas/PersonEntity'
 *         guide:
 *           $ref: '#/components/schemas/GuideEntity'
 *         guide_person:
 *           $ref: '#/components/schemas/GuidePersonEntity'
 *         id:
 *           type: string
 *         sender:
 *           $ref: '#/components/schemas/PersonEntity'
 *       required:
 *         - guide
 *         - sender
 *         - addressee
 *         - guide_person
 *       type: object
 *     GuidePersonEntity:
 *       additionalProperties: false
 *       properties:
 *         address_addressee:
 *           type: string
 *         assigned_route:
 *           type: string
 *         destination_city:
 *           type: string
 *         destination_regional:
 *           type: string
 *         document_addressee:
 *           type: string
 *         document_sender:
 *           type: string
 *         id_guide:
 *           type: string
 *         origin_city:
 *           type: string
 *         origin_regional:
 *           type: string
 *       required:
 *         - document_sender
 *         - document_addressee
 *         - origin_regional
 *         - origin_city
 *         - destination_city
 *         - destination_regional
 *         - address_addressee
 *         - assigned_route
 *       type: object
 *     PersonEntity:
 *       additionalProperties: false
 *       properties:
 *         address_person:
 *           type: string
 *         document_person:
 *           type: string
 *         first_name_person:
 *           type: string
 *         last_name_person:
 *           type: string
 *         phone_person:
 *           type: string
 *         postal_code_person:
 *           type: number
 *       required:
 *         - document_person
 *         - first_name_person
 *         - last_name_person
 *         - phone_person
 *         - postal_code_person
 *       type: object
 *     status_guides:
 *       enum:
 *         - 0
 *         - 1
 *         - 2
 *         - 3
 *         - 4
 *         - 5
 *         - 6
 *         - 7
 *       type: number
 */
export interface GuideGenerationEntity {
  id?: string;
  guide: GuideEntity;
  sender: PersonEntity;
  addressee: PersonEntity;
  guide_person: GuidePersonEntity;
}
/**
 * @swagger
 * components:
 *   schemas:
 *     GuideViewEntity:
 *       additionalProperties: false
 *       properties:
 *         address_addressee:
 *           type: string
 *         address_addressee_in_guide:
 *           type: string
 *         address_sender:
 *           type: string
 *         assigned_route:
 *           type: string
 *         content_guide:
 *           type: string
 *         date_admission:
 *           format: date-time
 *           type: string
 *         declared_value_guide:
 *           type: number
 *         destination_city:
 *           type: string
 *         destination_regional:
 *           type: string
 *         document_addressee:
 *           type: string
 *         document_sender:
 *           type: string
 *         first_name_addressee:
 *           type: string
 *         first_name_sender:
 *           type: string
 *         freight_guide:
 *           type: number
 *         id_guide:
 *           type: string
 *         last_name_addressee:
 *           type: string
 *         last_name_sender:
 *           type: string
 *         notes_guide:
 *           type: string
 *         origin_city:
 *           type: string
 *         origin_regional:
 *           type: string
 *         other_cost_guide:
 *           type: number
 *         phone_addressee:
 *           type: string
 *         phone_sender:
 *           type: string
 *         postal_code_addressee:
 *           type: number
 *         postal_code_sender:
 *           type: number
 *         service_value_guide:
 *           type: number
 *         status_guide:
 *           $ref: '#/components/schemas/status_guides'
 *         units_in_guide:
 *           type: number
 *         volume_in_guide:
 *           type: number
 *         weight_in_guide:
 *           type: number
 *         weight_payment_guide:
 *           type: number
 *       required:
 *         - id_guide
 *         - status_guide
 *         - date_admission
 *         - notes_guide
 *         - content_guide
 *         - origin_regional
 *         - units_in_guide
 *         - weight_in_guide
 *         - volume_in_guide
 *         - weight_payment_guide
 *         - declared_value_guide
 *         - service_value_guide
 *         - freight_guide
 *         - other_cost_guide
 *         - origin_city
 *         - destination_city
 *         - destination_regional
 *         - address_addressee_in_guide
 *         - document_sender
 *         - first_name_sender
 *         - last_name_sender
 *         - address_sender
 *         - phone_sender
 *         - postal_code_sender
 *         - document_addressee
 *         - first_name_addressee
 *         - last_name_addressee
 *         - address_addressee
 *         - phone_addressee
 *         - postal_code_addressee
 *         - assigned_route
 *       type: object
 *     status_guides:
 *       enum:
 *         - 0
 *         - 1
 *         - 2
 *         - 3
 *         - 4
 *         - 5
 *         - 6
 *         - 7
 *       type: number
 */
export interface GuideViewEntity {
  id_guide: string;
  status_guide: status_guides;
  date_admission: Date;
  notes_guide: string;
  content_guide: string;
  origin_regional: string;
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
  postal_code_sender: number;
  document_addressee: string;
  first_name_addressee: string;
  last_name_addressee: string;
  address_addressee: string;
  phone_addressee: string;
  postal_code_addressee: number;
  assigned_route: string;
}
