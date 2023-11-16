import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppRegistry} from 'react-native';
import {getStorybookUI} from '@storybook/react-native';
import {name as appName} from '../app.json';
import './storybook.requires';

const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage,
  onDeviceUI: true,
});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
