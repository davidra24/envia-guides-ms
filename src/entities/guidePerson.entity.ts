/**
 * @swagger
 * components:
 *   schemas:
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
 */
export interface GuidePersonEntity {
  id_guide?: string;
  document_sender: string;
  document_addressee: string;
  origin_regional: string;
  origin_city: string;
  destination_city: string;
  destination_regional: string;
  address_addressee: string;
  assigned_route: string;
}
