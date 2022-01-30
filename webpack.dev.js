const fs = require("fs");
const { merge } = require("webpack-merge");
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    static: "./dist",
    hot: true,
    port: 5002,
    http2: true,
    https: {
      key: fs.readFileSync("./certs/key.pem"),
      cert: fs.readFileSync("./certs/cert.pem"),
    },
  },
});
