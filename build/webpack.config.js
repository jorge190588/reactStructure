/*
    ./webpack.config.js
*/
const path = require('path'),
  webpack = require('webpack'),
  DashboardPlugin = require('webpack-dashboard/plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      },
      { 
        test: /\.(jpg|png|gif)$/,
        loaders: ['file'] 
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new DashboardPlugin({
      port: 3000

    }),
    new ExtractTextPlugin({
      filename: "[name].[contenthash].css",
      disable: process.env.NODE_ENV === "development"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: {
    alias: {
      Actions: path.resolve(__dirname, '../src/actions'),
      Scenes: path.resolve(__dirname, '../src/scenes'),
      Reducers: path.resolve(__dirname, '../src/reducers'),
      Components: path.resolve(__dirname, '../src/components'),
      Store: path.resolve(__dirname, '../src/store'),
      DevTools: path.resolve(__dirname, '../build/dev-tools'),
      Styles: path.resolve(__dirname, '../src/assets/styles'),
      Images: path.resolve(__dirname, '../src/assets/images')

    }
  },
  devServer: {
    inline:true,
    port: 3000
  }
}