const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "./lib/index.ts"),
  output: {
    filename: "./dist/gensen.js",
    library: ['gensen'],
    libraryTarget: 'umd',
    libraryExport: "default"
  },
  externals: {
    'bignumber.js' : {
      commonjs: "bignumber.js",
      commonjs2: "bignumber.js",
      amd: "bignumber.js",
      root: 'BigNumber'
    }
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  }
}
