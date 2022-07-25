const path = require('path');

const directories = {
  translationsDir: path.resolve(__dirname, '../src/.vuepress/public/translations'),
};

/**
 * @param {Array} arr - Array to transpose.
 *
 * @returns {Array}
 */
const transpose = (arr) => arr[0].map((_, index) => arr.map((item) => item[index]));

module.exports = {
  directories,
  transpose,
};
