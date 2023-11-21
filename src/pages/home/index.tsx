import VText from 'components/uiElements/text';
import MainLayout from 'layouts/mainLayout';
import React from 'react';
import {texts} from 'locales/index';
import VInput from 'components/uiElements/input';
import SelectCheckDate from 'components/selectCheckDate';
import VRow from 'components/uiElements/row';
import {RoomInput} from './style';
import VButton from 'components/uiElements/button';
import {PencilEditButton} from 'assets/svgs';
import {getTotalGuests, parseDeepLink} from 'utils/helpers/deepLink';
import {GUEST_PAGE} from 'routes/const';
import {useAppNavigation} from 'hooks/navigation';
import {useRoomsStore} from 'stores/rooms';

const HomePage = () => {
  const navigation = useAppNavigation();
  const rooms = useRoomsStore(state => state.rooms);

  return (
    <MainLayout withClose={false} withHeader withLogo>
      <VText marginTopRatio={5} typography="bold21">
        {texts.homePage.title}
      </VText>
      <VInput marginTopRatio={11} placeholder={texts.homePage.input} />
      <VRow marginTopRatio={4}>
        <SelectCheckDate onConfirm={params => {}} />
      </VRow>
      <RoomInput
        marginTopRatio={4}
        paddingVerticalRatio={2}
        paddingLeftRatio={4}
        justifyContent="space-between"
        paddingRightRatio={2}>
        <VText>
          {`${getTotalGuests(rooms)} Guests, ${rooms.length || 1} Rooms`}
        </VText>
        <VButton
          icon={fill => (
            <VRow justifyContent="center" fullWidth width={24} height={24}>
              <PencilEditButton fill={fill} />
            </VRow>
          )}
          styled="CONTENT_SIZE"
          mode="secondary"
          onPress={() => navigation.navigate(GUEST_PAGE)}
        />
      </RoomInput>
      <VRow marginTopRatio={4}>
        <VButton title="Search" onPress={() => {}} />
      </VRow>
    </MainLayout>
  );
};

export default HomePage;
