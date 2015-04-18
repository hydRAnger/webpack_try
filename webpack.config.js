var path = require('path');
//var node_modules = path.resolve(__dirname, 'node_modules');
//var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  //resolve: {
  //  alias: {
  //    'react': pathToReact
  //  }
  //},

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
    }],

    //noParse: [pathToReact]
  }
};

module.exports = config;
