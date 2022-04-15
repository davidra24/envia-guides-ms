/**
 * @swagger
 * components:
 *   schemas:
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
 */
export interface PersonEntity {
  document_person: string;
  first_name_person: string;
  last_name_person: string;
  address_person?: string;
  phone_person: string;
  postal_code_person: number;
}
