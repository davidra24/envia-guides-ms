import { parseISO } from 'date-fns';
import {
  dateForLog,
  dateToFormat,
  dateToRedableString,
  redableNow,
  toRedableDate
} from '../../utilities';

describe('dates utility', () => {
  it('toRedableDateFunction', () => {
    const redable = toRedableDate(new Date('04-27-2022').toISOString());
    expect(redable).toBe('27/04/2022');
  });
  it('redableNowFunction', () => {
    const date = new Date();
    const strDate = toRedableDate(date.toISOString());
    const now = redableNow();
    expect(now).toEqual(strDate);
  });
  it('dateToFormatFunctionDate', () => {
    const date = new Date('04-27-2022');
    const result = dateToFormat(date, 'dd/MM/yyyy');
    expect(result).toBe('27/04/2022');
  });
  it('dateToFormatFunctionString', () => {
    const date = new Date('04-27-2022').toISOString();
    const result = dateToFormat(date, 'dd/MM/yyyy');
    expect(result).toBe('27/04/2022');
  });
  it('dateForLogFunction', () => {
    const date = new Date('04-27-2022');
    const log = dateForLog(date);
    expect(log).toBe('2022Apr27');
  });
  it('dateToRedableStringFunction', () => {
    const date = new Date('04-27-2022');
    const result = dateToRedableString(date);
    expect(result).toBe('27/04/2022');
  });
});
