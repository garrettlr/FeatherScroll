const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: [
    './src/index.js',
  ],
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new BundleAnalyzerPlugin()
  ],
  output: {
    path: path.join(__dirname, '/lib/'),
    filename: 'feather-scroll.js'
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        include: __dirname,
      },
    ]
  }
};
