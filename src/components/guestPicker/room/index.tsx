import React from 'react';
import {ChildContainer, Container} from './style';
import VText from 'components/uiElements/text';
import {RoomProps} from 'types/components/guestPicker/room';
import VRow from 'components/uiElements/row';
import VButton from 'components/uiElements/button';
import VCounter from 'components/counter';
import VDropDown from 'components/uiElements/dropDown';
import {CloseSvg} from 'assets/svgs';
import {theme} from 'themes/emotion';
import {useRoomsStore} from 'stores/rooms';
import {getTotalGuests, getTotalGuestsOfRoom} from 'utils/helpers/deepLink';

const Room = (props: RoomProps) => {
  const {index, item} = props;
  const {adults, childAges} = item;
  const setAdults = useRoomsStore(state => state.setAdults);
  const addNewChild = useRoomsStore(state => state.addNewChild);
  const changeChildAge = useRoomsStore(state => state.changeChildAge);
  const deleteRoom = useRoomsStore(state => state.deleteRoom);
  const deleteChild = useRoomsStore(state => state.deleteChild);
  const rooms = useRoomsStore(state => state.rooms);
  return (
    <Container index={index}>
      <VRow justifyContent="space-between">
        <VText typography="semiBold18">Room {index + 1}</VText>
        {index !== 0 && (
          <VButton
            styled="TEXT"
            mode="error"
            title="Remove room"
            onPress={() => deleteRoom(index)}
          />
        )}
      </VRow>
      {/* Adults */}
      <VRow marginTopRatio={5} justifyContent="space-between">
        <VText typography="semiBold16">Adults</VText>
        <VCounter
          onChange={value => setAdults(index, value)}
          initialNumber={adults}
          minusRule={adults > 1}
          sumRule={getTotalGuestsOfRoom(item) < 5}
        />
      </VRow>
      {/* Children */}
      <VRow marginTopRatio={5} justifyContent="space-between">
        <VText typography="semiBold16">Children</VText>
        <VCounter
          onChange={value => addNewChild(index, value)}
          initialNumber={childAges.length}
          minusRule={childAges.length > 0}
          sumRule={getTotalGuestsOfRoom(item) < 5 && childAges.length < 3}
        />
      </VRow>
      {/* Children Ages */}
      <ChildContainer>
        {childAges.map((item, childIndex) => {
          console.log(item);
          return (
            <VRow
              key={childIndex}
              fullWidth
              justifyContent="space-between"
              marginTopRatio={childIndex !== 0 ? 3 : 0}>
              <VText typography="semiBold16">Child {childIndex + 1} age</VText>
              <VRow fullWidth={false}>
                <VDropDown
                  placeHolder="Age"
                  data={Array.from({length: 18}, (_, index) =>
                    index.toString(),
                  )}
                  defaultValue={item > 0 ? item : undefined}
                  onChange={value =>
                    changeChildAge(index, childIndex, Number(value))
                  }
                  title={`Child ${childIndex + 1} age`}
                />
                <VRow fullWidth={false} marginLeftRatio={3}></VRow>
                <VButton
                  onPress={() => deleteChild(index, childIndex)}
                  mode="error"
                  styled="TEXT"
                  icon={fill => <CloseSvg fill={fill} />}
                />
              </VRow>
            </VRow>
          );
        })}
      </ChildContainer>
    </Container>
  );
};

export default Room;
