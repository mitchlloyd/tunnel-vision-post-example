const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            [
              "env",
              {
                "targets": {
                  "browsers": ["last 2 versions"]
                }
              }
            ],
            ['react'],
          ],
          plugins: [
            'transform-class-properties',
            'transform-async-to-generator',
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  },
};
