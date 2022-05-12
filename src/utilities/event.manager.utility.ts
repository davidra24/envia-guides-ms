import { v4 } from 'uuid';
import { EventEntity } from '../entities';

export const generateEvent = (
  id_guide: string,
  old: number,
  next: number
): EventEntity => ({
  date_event: new Date(),
  id_event: v4(),
  id_guide,
  new_status: next,
  previous_status: old
});
