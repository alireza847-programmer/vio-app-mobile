import GuestPicker from 'components/guestPicker';
import MainLayout from 'layouts/mainLayout';
import {texts} from 'locales/index';
import React from 'react';
import {useRoomsStore} from 'stores/rooms';

const GuestPage = () => {
  const rooms = useRoomsStore(state => state.rooms);
  return (
    <MainLayout withHeader title={texts.guestPage.title}>
      <GuestPicker initialData={rooms} />
    </MainLayout>
  );
};
export default GuestPage;
