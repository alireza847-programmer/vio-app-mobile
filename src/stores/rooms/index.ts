import {ParsedLinkItem, parseDeepLink} from 'utils/helpers/deepLink';
import {create} from 'zustand';

interface RoomsStore {
  rooms: ParsedLinkItem[];
  link: string;
  setParams: (link: string) => void;
  addRoom: () => void;
  deleteRoom: (index: number) => void;
  setAdults: (index: number, value: number) => void;
  changeChildAge: (index: number, childIndex: number, value: number) => void;
  addNewChild: (index: number, value: number) => void;
  deleteChild: (index: number, childIndex: number) => void;
}

export const useRoomsStore = create<RoomsStore>((set, get) => ({
  rooms: [{adults: 1, childAges: [], id: 1}],
  link: '',
  setParams(link) {
    set({link: link, rooms: parseDeepLink(link)});
  },
  addRoom() {
    const rooms = [...get().rooms];
    const defaultRoomValue = {
      adults: 1,
      childAges: [],
      id: rooms[rooms.length - 1].id + 1,
    };
    rooms.push(defaultRoomValue);
    set(state => ({...state, rooms: rooms}));
  },
  deleteRoom(index) {
    const rooms = [...get().rooms];
    rooms.splice(index, 1);
    set(state => ({...state, rooms: rooms}));
  },
  setAdults(index, value) {
    const rooms = [...get().rooms];
    rooms[index].adults = value;
    set(state => ({...state, rooms: rooms}));
  },
  addNewChild(index, value) {
    const rooms = [...get().rooms];
    const currentRoom = rooms[index];
    const currentChildAges = currentRoom.childAges;
    if (value > currentChildAges.length) {
      currentChildAges.push(NaN);
    } else {
      currentChildAges.splice(currentChildAges.length - 1, 1);
    }
    set(state => ({...state, rooms: rooms}));
  },
  deleteChild(index, childIndex) {
    const rooms = [...get().rooms];
    const currentRoom = rooms[index];
    const currentChildAges = currentRoom.childAges;
    currentChildAges.splice(childIndex, 1);
    set(state => ({...state, rooms: rooms}));
  },
  changeChildAge(index, childIndex, value) {
    const rooms = [...get().rooms];
    const currentRoom = rooms[index];
    const currentChildAges = currentRoom.childAges;
    currentChildAges[childIndex] = value;
    set(state => ({...state, rooms: rooms}));
  },
}));
