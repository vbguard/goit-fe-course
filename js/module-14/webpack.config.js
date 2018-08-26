const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
      ],
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader'],
    },
    {
      test: /\.hbs$/,
      exclude: /node_modules/,
      use: ['handlebars-loader'],
    },
    ],
  },
  // optimization: {
  //   runtimeChunk: true,
  //   splitChunks: {
  //     chunks: 'all',
  //   }
  // },
  plugins: [
    new CleanWebpackPlugin('build'),
    new HtmlWebpackPlugin({
      hash: true,
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    quiet: false,
    stats: 'errors-only',
    clientLogLevel: 'warning',
    compress: true,
    port: 9001,
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     // Inline all files which names start with “runtime~” and end with “.js”.
  //     // That’s the default naming of runtime chunks
  //     inlineSource: 'runtime~.+\\.js',
  //   }),
  //   // This plugin enables the “inlineSource” option
  //   new InlineSourcePlugin(),
  //   new ManifestPlugin(),
  // ],
};
