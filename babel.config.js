module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          themes: './src/themes',
          utils: './src/utils',
          routes: './src/routes',
          types: './src/types',
          pages: './src/pages',
          assets: './src/assets',
          layouts: './src/layouts',
          translation: './src/translation',
          hooks: './src/hooks',
        },
      },
    ],
  ],
};
