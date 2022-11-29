/*
 * @Descripttion:
 * @Date: 2022-05-27 15:52:29
 * @LastEditTime: 2022-11-23 16:04:49
 */
'use strict';
const webpack = require('webpack');
const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}
require('events').EventEmitter.defaultMaxListeners = 0;
const addOptions = {
  preserveWhitespace: true,
};
require('events').EventEmitter.defaultMaxListeners = 0;

module.exports = {
  productionSourceMap: false,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  css: {
    sourceMap: false,
  },
  devServer: {
    open: true,
    // host: "chain-walletv.solarfs.io",
    // port: 1024,
    // https: true,
    // hotOnly: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    plugins: [
      new NodePolyfillPlugin(),
      new webpack.ProvidePlugin({}),
    ],
    devtool: undefined,
    performance: {
      hints: false,
    },
  },
  chainWebpack(config) {
    config.plugins.delete('preload'); // TODO: need test
    config.plugins.delete('prefetch'); // TODO: need test
    config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js');
    // set svg-sprite-loader
    config.module.rules.delete('svg'); //重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });

    // config.resolve.alias.set(
    //   "./dist/ag-grid-enterprise.cjs.js",
    //   path.resolve(__dirname, "src/assets/dist/ag-grid-enterprise.cjs.js")
    // );

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions = addOptions;
        // options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development', (config) =>
        config.devtool('cheap-source-map')
      );

    config.when(process.env.NODE_ENV !== 'development', (config) => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [{
          // `runtime` must same as runtimeChunk name. default is `runtime`
          inline: /runtime\..*\.js$/,
        }, ])
        .end();
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          // libs: {
          //   name: "chunk-libs",
          //   test: /[\\/]node_modules[\\/]/,
          //   priority: 10,
          //   chunks: "initial" // only package third parties that are initially dependent
          // },
          // elementPlus: {
          //   name: 'chunk-elementPlus',
          //   priority: 20,
          //   test: /[\\/]node_modules[\\/]_?element-plus(.*)/,
          // },
          // elementIcon: {
          //   name: 'chunk-elementIcon',
          //   priority: 20,
          //   test: /[\\/]node_modules[\\/]_?@element-plus(.*)/,
          // },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk('single');
    });
  },
};