/**
 * This file is part of [Nainik Base Project]
 *
 * (c) 2021 [Nainik Mehta] <[nainikmehta25@gmail.com]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.baseProject
 * @description Webpack Config to merge with environment files
 * @author [Nainik Mehta] <[nainikmehta25@gmail.com]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
