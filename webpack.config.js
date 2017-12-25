const path = require('path');
const webpack = require('webpack');

const APP_PATH = path.resolve(__dirname, './src/main.js');
const BUILD_PATH = path.resolve(__dirname, './dist');

// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const env = process.env.NODE_ENV === 'development'

// const extractLess = new ExtractTextPlugin({
//   filename: "[name].[contenthash].css",
//   disable: env
// });

module.exports = {
  entry: {
    index: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      APP_PATH
    ]
  },
  // devTools: 'source-map',
  output: {
    path: BUILD_PATH,
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /.js$/,
      exclude: path.resolve(__dirname, './node_modules'),
      include: path.resolve(__dirname, './src'),
      use: [
        // 'react-hot-loader',
        {
        loader:'babel-loader',
        options: {
          presets: ["react", "env", "stage-0"],
          plugins: ['transform-class-properties']
        }
      }]},
      {
        test: /.less$/,
        include: path.resolve(__dirname, './src'),
        use: [
          {
            loader: 'style-loader'
          },{
            loader: 'css-loader',
            options: {
              sourceMap: env
            }
          },{
            loader: 'less-loader',
            options: {
              sourceMap: env
            }
          }
        ]
      }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // extractLess
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    // port: 8080,
    inline: true,
    hot: true
  }
}
