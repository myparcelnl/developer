const {path} = require('@vuepress/utils');

module.exports = {
  content: [
    path.resolve(__dirname, 'components/**/*'),
    path.resolve(__dirname, 'config/**/*'),
    path.resolve(__dirname, 'public/**/*'),
  ],
  safelist: ['justify-between'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        DEFAULT:
          '0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 4px 6px 0 rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        display: ['Proxima Nova'],
        icon: ['myparcel'],
      },
    },
  },
};
