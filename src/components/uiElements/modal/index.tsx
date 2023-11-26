import Modal from 'react-native-modal';
import React, {PropsWithChildren} from 'react';
import {VModalProps} from 'types/components/uiElements/modal';
import {HeaderContainer, Wrapper, modalStyle} from './style';
import {theme} from 'themes/emotion';
import {CloseSvg} from 'assets/svgs';
import VText from '../text';
import VButton from '../button';

const VModal = (props: PropsWithChildren<VModalProps>) => {
  const {children, isVisible, onClose, title, withClose, withHeader} = props;
  return (
    <Modal
      animationIn="slideInUp"
      animationOut={'slideOutDown'}
      style={modalStyle}
      testID="modal"
      hasBackdrop={true}
      onBackButtonPress={onClose}
      onBackdropPress={() => onClose()}
      isVisible={isVisible}>
      <Wrapper>
        {withHeader && (
          <HeaderContainer
            justifyContent="space-between"
            paddingHorizontalRatio={4}
            paddingVerticalRatio={6}>
            {withClose && (
              <VButton
                onPress={onClose}
                testID="close-button"
                styled="TEXT"
                icon={fill => <CloseSvg fill={theme.colors.button.primary} />}
              />
            )}
            <VText typography="semiBold16">{title}</VText>
            <CloseSvg fill={'transparent'} />
          </HeaderContainer>
        )}
        {children}
      </Wrapper>
    </Modal>
  );
};
export default VModal;
