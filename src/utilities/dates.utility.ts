import { format, parseISO } from 'date-fns';

export const toRedableDate = (date: string) =>
  format(parseISO(date), 'dd/MM/yyyy');

export const redableNow = () => toRedableDate(new Date().toISOString());

export const dateToFormat = (
  date: Date | string,
  stringFormat: string
): string =>
  typeof date === 'string'
    ? format(parseISO(date), stringFormat)
    : format(date, stringFormat);

export const dateForLog = (date: Date | string): string =>
  dateToFormat(date, 'yyyyMMMdd');

export const dateToRedableString = (date: Date | string): string =>
  dateToFormat(date, 'dd/MM/yyyy');
