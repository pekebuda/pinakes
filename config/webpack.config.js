/*
 * The webpack config exports an object that has a valid webpack configuration
 * for each environment name.
 * By default, there are two Ionic environments: "dev" and "prod". As such, the
 * webpack.config.js exports a dictionary object with keys for "dev" and
 * "prod", where the value is a valid webpack configuration.
 * For details on configuring webpack, see their documentation here
 * https://webpack.js.org/configuration/
 * For details on ionic environment configuration, see the ionic-app-script docs
 * at https://github.com/ionic-team/ionic-app-scripts
 */
const devConfig = require('./webpack.config.dev.js');
const prodConfig = require('./webpack.config.prod.js');


module.exports = {
  dev: devConfig,
  prod: prodConfig
}
