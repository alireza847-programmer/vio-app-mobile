import {parseDeepLink, ParsedLinkItem} from './deepLink'; // Replace 'yourFile' with the actual file path.
import {it, describe, expect} from '@jest/globals';

describe('parseDeepLink function', () => {
  it('should parse a link with only adults', () => {
    const result = parseDeepLink('3|2|1');
    const expected: ParsedLinkItem[] = [
      {adults: 3, childAges: [], id: 1},
      {adults: 2, childAges: [], id: 2},
      {adults: 1, childAges: [], id: 3},
    ];
    expect(result).toEqual(expected);
  });

  it('should parse a link with adults and child ages', () => {
    const result = parseDeepLink('2:4,6|3:1,2');
    const expected: ParsedLinkItem[] = [
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
