import Modal from 'react-native-modal';
import React, {PropsWithChildren} from 'react';
import {VModalProps} from 'types/components/uiElements/modal';
import {Wrapper, modalStyle} from './style';

const VModal = (props: PropsWithChildren<VModalProps>) => {
  const {children, isVisible, onClose} = props;
  return (
    <Modal
      animationIn="slideInUp"
      animationOut={'slideOutDown'}
      style={modalStyle}
      hasBackdrop={true}
      onBackButtonPress={onClose}
      onBackdropPress={() => onClose()}
      isVisible={isVisible}>
      <Wrapper>{children}</Wrapper>
    </Modal>
  );
};
export default VModal;
