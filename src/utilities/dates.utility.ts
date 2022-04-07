import { format, parseISO } from 'date-fns';

export const toRedableDate = (date: string) =>
  format(parseISO(date), 'dd/MM/yyyy');

export const redableNow = () => toRedableDate(new Date().toISOString());

export const dateToRedableString = (date: Date | string): string =>
  typeof date === 'string'
    ? format(parseISO(date), 'dd/MM/yyyy')
    : format(date, 'dd/MM/yyyy');
