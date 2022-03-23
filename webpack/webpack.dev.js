/**
 * This file is part of [Nainik Base Project]
 *
 * (c) 2021 [Nainik Mehta] <[nainikmehta25@gmail.com]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.baseProject
 * @description Webpack Development Configuration
 * @author [Nainik Mehta] <[nainikmehta25@gmail.com]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('PROJECT_NAME'),
    }),
    new ReactRefreshWebpackPlugin(), // To maintain the state of the app when it refreshes
  ],
}
