var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback : true
  },
  entry: [
    'webpack-hot-middleware/client',
    './client/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin() removed in Webpack 4 (behavior enabled by default)
  ],
  module: { // rewritten for Webpack 4
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        //include: path.join(__dirname, 'client'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.styl$/, 
        include: path.join(__dirname, 'client'),
        use: ['style-loader', 'css-loader', 'stylus-loader' ]
      }
    ]
  }
};
