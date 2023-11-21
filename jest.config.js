module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  setupFilesAfterEnv: ['./setup-jest.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native-calendar-range-picker|react-native|@react-native|react-native-dropdown-picker|react-native-modal|react-native-animatable)/)',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
};
