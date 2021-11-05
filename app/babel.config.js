module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@infrastructure': './src/infrastructure',
          '@hooks': './src/hooks',
          '@types': './src/types',
          '@resources': './src/resources',
          '@modules': './src/modules',
        },
      },
    ],
  ],
};
