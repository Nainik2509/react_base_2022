const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { bundle: path.resolve(__dirname, "..", "./src/index.js") },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
    asyncChunks: true,
    chunkFilename: "[id].js",
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
      //   favicon: path.resolve(__dirname, "..", "./public/favicon.ico"),
    }),
    // new CopyPlugin({
    //   patterns: [{ from: 'source', to: 'dest' }],
    // }),
  ],
  stats: "errors-only",
};
