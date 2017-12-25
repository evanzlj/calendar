const path = require('path');
const webpack = require('webpack');

const APP_PATH = path.resolve(__dirname, './src/main.js');
const BUILD_PATH = path.resolve(__dirname, './dist');

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
      }]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    // port: 8080,
    inline: true,
    hot: true
  }
}
