import React, {Fragment, useRef} from 'react';
import {ButtonsWrapper, Container, FlatListContainer} from './style';
import {GuestPickerProps} from 'types/components/guestPicker';
import Room from './room';
import VButton from 'components/uiElements/button';
import {PlusSvg, SearchSvg} from 'assets/svgs';
import VRow from 'components/uiElements/row';
import {useRoomsStore} from 'stores/rooms';
import {
  ParsedLinkItem,
  getTotalGuests,
  ifChildWithNanExists,
  parseArrayToDeepLink,
} from 'utils/helpers/deepLink';
import {FlatList, ListRenderItem, View} from 'react-native';
import VText from 'components/uiElements/text';

const GuestPicker = (props: GuestPickerProps) => {
  const {onSearch = link => link} = props;
  const flatListRef = useRef<FlatList>(null);
  const addRoom = useRoomsStore(state => state.addRoom);
  const rooms = useRoomsStore(state => state.rooms);
  const renderItem: ListRenderItem<ParsedLinkItem> = ({item, index}) => (
    <Room index={index} item={item} />
  );
  const onNewRoom = () => {
    addRoom();
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({animated: true});
    });
  };
  return (
    <Container>
      <FlatListContainer
        // @ts-ignore because of emotion js bug in changing types https://github.com/emotion-js/emotion/issues/2888
        renderItem={renderItem}
        // @ts-ignore
        keyExtractor={item => item.id}
        ref={flatListRef}
        data={rooms}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 24,
        }}
        ListFooterComponent={() => {
          if (rooms.length > 7) {
            return (
              <VText testID="maximum-room-text" marginTopRatio={4}>
                Maximum number of rooms reached
              </VText>
            );
          }
          return (
            <VRow marginTopRatio={5}>
              <VButton
                testID="add-room-button"
                title="Add Room"
                icon={fill => <PlusSvg fill={fill} />}
                mode="secondary"
                onPress={onNewRoom}
              />
            </VRow>
          );
        }}
      />
      <ButtonsWrapper>
        <VButton
          title="Search"
          icon={fill => <SearchSvg fill={fill} />}
          mode="primary"
          testID="search-button"
          onPress={() => onSearch(parseArrayToDeepLink(rooms))}
          disabled={ifChildWithNanExists(rooms)}
          subTitle={`${rooms.length} rooms • ${getTotalGuests(rooms)} guests`}
        />
      </ButtonsWrapper>
    </Container>
  );
};
export default GuestPicker;
