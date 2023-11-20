import dayjs from 'dayjs';

export const getToday = (format?: string) => {
  return dayjs().format(format);
};

export const getTomarrow = (format?: string) => {
  return dayjs().add(1, 'day').format(format);
};

export const formatDateToCheckInCheckoutFormat = (date: string) => {
  return dayjs(date).format('ddd, MMM DD');
};

export const formatDate = (
  date: string | number | dayjs.Dayjs | Date,
  format?: string,
) => {
  return dayjs(date).format(format);
};
