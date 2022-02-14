const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/assets/template.html",
      favicon: "./src/assets/favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  },
};
