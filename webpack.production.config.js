var path = require('path');

var outDirectory = (process.env.NODE_ENV === 'production') ?
  'public/javascripts/' :
  'build';

module.exports = {
  entry: [
    './app/assets/javascripts'
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions:        ['', '.js', '.jsx']
  },
  output: {
    path:     path.join(__dirname, outDirectory),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
};
