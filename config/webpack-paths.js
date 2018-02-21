const path = require('path');

module.exports = {
  src: path.join(__dirname, '../src'),
  app: path.join(__dirname, '../src/app.js'),
  build: path.join(__dirname, '../build'),
  css: path.join(__dirname, '../build/css'),
  template: path.join(__dirname, '../src/index.html'),
  components: path.join(__dirname, '../src/components'),
  containers: path.join(__dirname, '../src/containers/'),
  selectors: path.join(__dirname, '../src/store/selectors'),
  actions: path.join(__dirname, '../src/store/actions')
};
