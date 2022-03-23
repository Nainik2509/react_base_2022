const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("PROJECT_NAME"),
    }),
  ],
};
