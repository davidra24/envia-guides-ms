import { status_guides } from './guide.entity';

export interface EventsEntity {
  id_event: string;
  id_guide: string;
  date_event: Date;
  previous_status: status_guides;
  new_status: status_guides;
  additional_notes: string;
}
