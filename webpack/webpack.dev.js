const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("PROJECT_NAME"),
    }),
  ],
};
