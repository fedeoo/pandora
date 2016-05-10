var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-eavl-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8086',
    'webpack/hot/dev-server',
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
    }, {
      test: /\.scss$/,
      loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass?sourceMap'],
      include: [
        path.resolve(__dirname, 'src/components'),
        path.resolve(__dirname, 'src/skeleton')
      ]
    }, {
      test: /\.scss$/,
      loaders: ['style?sourceMap', 'css', 'sass?sourceMap'],
      include: [
        path.resolve(__dirname, 'src/app.scss')
      ]
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&minetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&minetype=application/octet-stream"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&minetype=image/svg+xml"
    }, {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: ['url?limit=8192'],
      exclude: /node_modules/
    }]
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8086
  }
};
