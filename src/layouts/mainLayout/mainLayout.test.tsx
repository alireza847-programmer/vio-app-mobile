import React, {PropsWithChildren} from 'react';
import renderer from 'react-test-renderer';
import MainLayout from './index';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';
import {test, expect} from '@jest/globals';
import {MainLayoutProps} from 'types/layouts/mainLayout';

const YourIcon = () => <svg>Custom Icon</svg>;

const Component = (props: PropsWithChildren<MainLayoutProps>) => (
  <ThemeProvider theme={theme}>
    <MainLayout {...props} />
  </ThemeProvider>
);

test('MainLayout component snapshot', () => {
  const tree = renderer
    .create(<Component withHeader={true} title="Your Title" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('MainLayout component snapshot with close button and custom right icon', () => {
  const tree = renderer
    .create(
      <Component withHeader={true} withClose={true} rightIcon={<YourIcon />} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('MainLayout component snapshot with logo', () => {
  const tree = renderer
    .create(<Component withHeader={true} withLogo={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('MainLayout component snapshot without header', () => {
  const tree = renderer.create(<Component withHeader={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
