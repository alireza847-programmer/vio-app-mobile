import {
  parseDeepLink,
  parseArrayToDeepLink,
  getTotalGuests,
  getTotalGuestsOfRoom,
  ifChildWithNanExists,
  ParsedLinkItem,
} from './deepLink';
import {it, describe, expect} from '@jest/globals';

describe('parseDeepLink function', () => {
  it('should parse a link with only adults', () => {
    const result = parseDeepLink('3|2|1');
    const expected = [
      {adults: 3, childAges: [], id: 1},
      {adults: 2, childAges: [], id: 2},
      {adults: 1, childAges: [], id: 3},
    ];
    expect(result).toEqual(expected);
  });

  it('should parse a link with adults and child ages', () => {
    const result = parseDeepLink('2:4,6|3:1,2');
    const expected = [
      {adults: 2, childAges: [4, 6], id: 1},
      {adults: 3, childAges: [1, 2], id: 2},
    ];
    expect(result).toEqual(expected);
  });

  it('should handle a link with an empty string', () => {
    const result = parseDeepLink('');
    const expected: ParsedLinkItem[] = [];
    expect(result).toEqual(expected);
  });
});

describe('parseArrayToDeepLink function', () => {
  it('should parse an array to a deep link string', () => {
    const data = [
      {adults: 3, childAges: [], id: 1},
      {adults: 2, childAges: [], id: 2},
      {adults: 1, childAges: [], id: 3},
    ];
    const result = parseArrayToDeepLink(data);
    const expected = '3|2|1';
    expect(result).toEqual(expected);
  });
});

describe('getTotalGuests function', () => {
  it('should calculate the total number of guests', () => {
    const data = [
      {adults: 3, childAges: [4, 6], id: 1},
      {adults: 2, childAges: [1, 2], id: 2},
    ];
    const result = getTotalGuests(data);
    const expected = 9; // 3 adults + 2 children + 2 children + 2 children
    expect(result).toEqual(expected);
  });

  it('should handle an empty array', () => {
    const data: ParsedLinkItem[] = [];
    const result = getTotalGuests(data);
    const expected = 0;
    expect(result).toEqual(expected);
  });
});

describe('getTotalGuestsOfRoom function', () => {
  it('should calculate the total number of guests for a room', () => {
    const room = {adults: 2, childAges: [4, 6], id: 1};
    const result = getTotalGuestsOfRoom(room);
    const expected = 4; // 2 adults + 2 children
    expect(result).toEqual(expected);
  });
});

describe('ifChildWithNanExists function', () => {
  it('should return true if there is a child with NaN', () => {
    const data = [
      {adults: 2, childAges: [4, NaN], id: 1},
      {adults: 3, childAges: [1, 2], id: 2},
    ];
    const result = ifChildWithNanExists(data);
    const expected = true;
    expect(result).toEqual(expected);
  });

  it('should return false if there is no child with NaN', () => {
    const data = [
      {adults: 2, childAges: [4, 6], id: 1},
      {adults: 3, childAges: [1, 2], id: 2},
    ];
    const result = ifChildWithNanExists(data);
    const expected = false;
    expect(result).toEqual(expected);
  });
});
