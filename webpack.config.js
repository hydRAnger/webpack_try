var path = require('path');

var config = {
  entry: path.resolve(__dirname, 'app/script/main.js'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(eot|woff|woff2|)/,
      loader: 'file'
    }],
  }
};

module.exports = config;
