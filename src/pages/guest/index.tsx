import GuestPicker from 'components/guestPicker';
import MainLayout from 'layouts/mainLayout';
import {texts} from 'locales/index';
import React from 'react';
import {useRoomsStore} from 'stores/rooms';

const GuestPage = () => {
  const setParams = useRoomsStore(state => state.setParams);
  const link = useRoomsStore(state => state.link);
  return (
    <MainLayout
      onClosePress={() => setParams(link || '1')}
      withHeader
      title={texts.guestPage.title}>
      <GuestPicker />
    </MainLayout>
  );
};
export default GuestPage;
