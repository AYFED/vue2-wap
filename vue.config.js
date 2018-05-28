const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config
        .devtool('source-map')
        .output
        .filename('static/js/[name].js')
        .chunkFilename('static/js/[id].js');
      config
        .plugin('extract-css')
        .use(ExtractTextPlugin, [Object.assign({
          filename: 'static/css/[name].css',
        })]);
    }
  },
  productionSourceMap: false,
  devServer: {
    port: 9595,
    disableHostCheck: true,
  },
  lintOnSave: false,
};
