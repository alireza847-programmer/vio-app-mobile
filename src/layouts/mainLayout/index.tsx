import React, {PropsWithChildren} from 'react';
import {ChildrenWrapper, Container, Header} from './style';
import VText from 'components/uiElements/text';
import {MainLayoutProps} from 'types/layouts/mainLayout';
import VRow from 'components/uiElements/row';
import {CloseSvg, LogoSvg} from 'assets/svgs';
import {theme} from 'themes/emotion';

const MainLayout = (props: PropsWithChildren<MainLayoutProps>) => {
  const {
    children,
    title = '',
    withClose = true,
    rightIcon,
    withHeader,
    withLogo,
  } = props;
  const renderHeaderTitle = () => {
    if (withLogo) {
      return <LogoSvg />;
    }
    return title;
  };
  return (
    <Container>
      {withHeader && (
        <Header
          paddingHorizontalRatio={3}
          alignItems="center"
          justifyContent="space-between">
          <VRow fullWidth={false}>
            {withClose && <CloseSvg fill={theme.colors.button.primary} />}
          </VRow>
          <VText typography="semiBold16">{renderHeaderTitle()}</VText>
          <VRow fullWidth={false}>{rightIcon}</VRow>
        </Header>
      )}
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};
export default MainLayout;
