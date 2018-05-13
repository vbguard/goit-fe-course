// Basic Var
const path = require('path')
const webpack = require('webpack')

// additions plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//module settings
module.exports = {
  // basic path in project
  context: path.resolve(__dirname, 'src'),
  // dots entry JS
  entry: {
    // Main file APP
    app: [
      './js/app.js',
      './scss/styles.scss'
    ],
  },

  // path for building file
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '../'
  },
  // config devServer
  devServer: {
    contentBase: './app',
    // compress: true,
    port: 9000
  },
  // css
  module: {
    rules: [
      //scss
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ],
          fallback: 'style-loader',
        })
      }
    ],
  },

  plugins: [
    new ExtractTextPlugin(
      './css/[name].css'
    ),
  ],
}

// let conf = {
//   entry: './src/js/app.js',
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'main.js',
//     publicPath: 'dist/'
//   },
//   devServer: {
//     overlay: true
//   },
//   module: {
//     rules: [{
//       test: /\.js$/,
//       loader: 'babel-loader',
//       // exclude: '/node_modules/', // щоб ще раз не переганявся конвертований код з нод-модуля
//     }]
//   }
// };

// module.exports = (env, options) => {
//   let production = options.mode === 'production';
//   conf.devtool = production ? 'source-map' : 'eval-sourcemap';
//   return conf;
// };
