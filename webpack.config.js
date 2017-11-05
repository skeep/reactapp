const path = require('path');

const paths = {
  BUILD: path.resolve(__dirname, 'build'),
  SRC: path.resolve(__dirname, 'src')
};

module.exports = {
  entry: path.join(paths.SRC, 'app.js'),
  output: {
    path: paths.BUILD,
    filename: 'app.bundle.js'
  }
};
