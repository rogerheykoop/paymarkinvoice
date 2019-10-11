//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
      // minimizer: [new UglifyJsPlugin({
    //   sourceMap: true,
    //   uglifyOptions: {
    //     compress: false,
    //     mangle: false,
    //     toplevel: true
      //warnings: false,
      // compress: {
      //   all: true
      // },
      // beautify: true,
      // keep_fnames: true,
      // mangle: true, // Note `mangle.properties` is `false` by default.
//    }})],
  },
};
