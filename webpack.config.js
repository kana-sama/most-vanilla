const { resolve } = require("path");
const HtmlWebpackPlugin  = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "inbox.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
