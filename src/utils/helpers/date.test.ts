import dayjs from 'dayjs';
import {getToday, getTomarrow, formatDateToCheckInCheckoutFormat} from './date';
import {it, describe, expect} from '@jest/globals';

describe('Date Utils', () => {
  describe('getToday', () => {
    it("should return today's date in default format", () => {
      const today = getToday();
      expect(today).toBe(dayjs().format());
    });

    it("should return today's date in the specified format", () => {
      const format = 'YYYY-MM-DD';
      const today = getToday(format);
      expect(today).toBe(dayjs().format(format));
    });
  });

  describe('getTomarrow', () => {
    it("should return tomorrow's date in default format", () => {
      const tomorrow = getTomarrow();
      expect(tomorrow).toBe(dayjs().add(1, 'day').format());
    });

    it("should return tomorrow's date in the specified format", () => {
      const format = 'YYYY-MM-DD';
      const tomorrow = getTomarrow(format);
      expect(tomorrow).toBe(dayjs().add(1, 'day').format(format));
    });
  });

  describe('formatDateToCheckInCheckoutFormat', () => {
    it('should format date to "ddd, MMM DD"', () => {
      const inputDate = '2023-01-01';
      const formattedDate = formatDateToCheckInCheckoutFormat(inputDate);
      expect(formattedDate).toBe(dayjs(inputDate).format('ddd, MMM DD'));
    });
  });
});
