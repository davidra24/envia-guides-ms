import { status_guides } from './guide.entity';

/**
 * @swagger
 * components:
 *   schemas:
 *     EventEntity:
 *       additionalProperties: false
 *       properties:
 *         additional_notes:
 *           type: string
 *         date_event:
 *           format: date-time
 *           type: string
 *         id_event:
 *           type: string
 *         id_guide:
 *           type: string
 *         new_status:
 *           $ref: '#/components/schemas/status_guides'
 *         previous_status:
 *           $ref: '#/components/schemas/status_guides'
 *       required:
 *         - id_event
 *         - id_guide
 *         - date_event
 *         - previous_status
 *         - new_status
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
export interface EventEntity {
  id_event: string;
  id_guide: string;
  date_event: Date;
  previous_status: status_guides;
  new_status: status_guides;
  additional_notes?: string;
}
