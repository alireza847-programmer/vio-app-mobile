export interface ParsedLinkItem {
  adults: number;
  childAges: number[];
  id: number;
}

export const parseDeepLink = (link: string): ParsedLinkItem[] => {
  const parsedLinkArray: ParsedLinkItem[] = [];
  try {
    if (link.trim() === '') {
      return parsedLinkArray; // Return an empty array for an empty string.
    }
    const rooms = link.split('|');
    let id = 0;
    for (const item of rooms) {
      id = +1;
      const childKeyIndex = item.indexOf(':');
      const roomItem: ParsedLinkItem = {
        id: id,
        adults: 0,
        childAges: [],
      };
      if (childKeyIndex >= 0) {
        const adults = item.substring(0, childKeyIndex);
        const childsString = item.substring(childKeyIndex + 1);
        const childs = childsString.split(',').map(child => Number(child));
        roomItem.adults = Number(adults);
        roomItem.childAges = childs;
      } else {
        roomItem.adults = Number(item);
      }
      parsedLinkArray.push(roomItem);
    }
  } catch (error) {}
  return parsedLinkArray;
};

export const parseArrayToDeepLink = (data: ParsedLinkItem[]): string => {
  return data
    .map(item => {
      const {adults, childAges} = item;
      const childrenString =
        childAges.length > 0 ? `:${childAges.join(',')}` : '';
      return `${adults}${childrenString}`;
    })
    .join('|');
};

export const getTotalGuests = (rooms: ParsedLinkItem[]) => {
  const total = rooms.reduce((sum, room) => {
    // Add adults
    sum += room.adults;

    // Add children
    sum += room.childAges.length;

    return sum;
  }, 0);
  return total;
};

export const getTotalGuestsOfRoom = (room: ParsedLinkItem) => {
  return room.adults + room.childAges.length;
};

export const ifChildWithNanExists = (rooms: ParsedLinkItem[]) => {
  let nanExists = false;
  rooms.forEach(item => {
    if (item.childAges.includes(NaN)) {
      nanExists = true;
      return;
    }
  });
  return nanExists;
};
