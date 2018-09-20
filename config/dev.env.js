'use strict'
const merge = require('webpack-merge')//merge合并二个配置文件并生成一个新的配置文件
//引入刚才打开的prod.env.js
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  //开发环境
  NODE_ENV: '"development"',

  API_ROOT: '"api"'

})
